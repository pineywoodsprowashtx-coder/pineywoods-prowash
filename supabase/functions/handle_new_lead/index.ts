import "jsr:@supabase/functions-js/edge-runtime.d.ts"

Deno.serve(async (req) => {
  try {
    // --- 1. Load secrets ---
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")
    const TWILIO_ACCOUNT_SID = Deno.env.get("TWILIO_ACCOUNT_SID")
    const TWILIO_AUTH_TOKEN = Deno.env.get("TWILIO_AUTH_TOKEN")
    const TWILIO_FROM_NUMBER = Deno.env.get("TWILIO_FROM_NUMBER")
    const OWNER_PHONE_NUMBER = Deno.env.get("OWNER_PHONE_NUMBER")

    if (!RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY")
      return new Response(JSON.stringify({ error: "Server not configured: RESEND_API_KEY" }), {
        status: 500, headers: { "Content-Type": "application/json" },
      })
    }

    // --- 2. Parse the webhook payload ---
    let payload
    try {
      payload = await req.json()
    } catch (e) {
      console.error("Could not parse request body as JSON:", e)
      return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
        status: 400, headers: { "Content-Type": "application/json" },
      })
    }

    const lead = payload.record
    if (!lead) {
      console.error("No 'record' field in payload. Full payload:", JSON.stringify(payload))
      return new Response(JSON.stringify({ error: "No lead record found in payload" }), {
        status: 400, headers: { "Content-Type": "application/json" },
      })
    }

    // NOTE: confirm these two names match your real table columns.
    const clientName = lead.client_name ?? "Unknown"
    const clientPhone = lead.phone ?? "No phone provided"
    console.log(`Processing new lead: ${clientName} / ${clientPhone}`)

    const results = { email: "not attempted", sms: "not attempted" }

    // --- 3. Send the email via Resend ---
    try {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "onboarding@resend.dev",
          to: "pineywoodsprowash.tx@gmail.com",
          subject: "New Pineywoods Lead!",
          html: `
            <h2>New Quote Request Received</h2>
            <p><strong>Name:</strong> ${lead.client_name ?? "Not provided"}</p>
            <p><strong>Phone:</strong> ${lead.phone ?? "Not provided"}</p>
            <p><strong>Email:</strong> ${lead.email ?? "Not provided"}</p>
            <p><strong>Service Address:</strong> ${lead.service_address ?? "Not provided"}</p>
            <p><strong>Service Requested:</strong> ${lead.service_requested ?? "Not provided"}</p>
            <p><strong>Additional Info:</strong> ${lead.internal_notes ?? "None provided"}</p>
            <p>Time to get out there and wash!</p>
          `,
        }),
      })

      const resendBody = await resendResponse.text()
      if (resendResponse.ok) {
        results.email = "sent"
        console.log("Resend accepted the email.")
      } else {
        results.email = `failed (${resendResponse.status})`
        console.error(`Resend rejected the email. Status ${resendResponse.status}: ${resendBody}`)
      }
    } catch (e) {
      results.email = "failed (exception)"
      console.error("Exception while calling Resend:", e)
    }

    // --- 4. Send the SMS via Twilio ---
    if (TWILIO_ACCOUNT_SID && TWILIO_AUTH_TOKEN && TWILIO_FROM_NUMBER && OWNER_PHONE_NUMBER) {
      try {
        const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`
        const form = new URLSearchParams({
          To: OWNER_PHONE_NUMBER,
          From: TWILIO_FROM_NUMBER,
          Body: `New Pineywoods lead: ${clientName}, ${clientPhone}. Time to wash!`,
        })

        const twilioResponse = await fetch(twilioUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " + btoa(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`),
          },
          body: form.toString(),
        })

        const twilioBody = await twilioResponse.text()
        if (twilioResponse.ok) {
          results.sms = "sent"
          console.log("Twilio accepted the SMS.")
        } else {
          results.sms = `failed (${twilioResponse.status})`
          console.error(`Twilio rejected the SMS. Status ${twilioResponse.status}: ${twilioBody}`)
        }
      } catch (e) {
        results.sms = "failed (exception)"
        console.error("Exception while calling Twilio:", e)
      }
    } else {
      console.log("Twilio secrets not all set — skipping SMS for now.")
    }

    // --- 5. Honest response back to Supabase ---
    return new Response(JSON.stringify({ message: "Lead processed", results }), {
      status: 200, headers: { "Content-Type": "application/json" },
    })

  } catch (e) {
    console.error("Unexpected top-level error:", e)
    return new Response(JSON.stringify({ error: "Unexpected server error" }), {
      status: 500, headers: { "Content-Type": "application/json" },
    })
  }
})