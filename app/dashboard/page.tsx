import { createServerClient } from '@/lib/supabase/server'

interface Lead {
  id: string
  created_at: string
  client_name: string
  phone: string
  email: string
  service_address: string
  service_requested: string
  internal_notes: string | null
}

export default async function DashboardPage() {
  const supabase = createServerClient()
  const { data: leads, error } = await supabase
    .from('leads')
    .select('id, created_at, client_name, phone, email, service_address, service_requested, internal_notes')
    .order('created_at', { ascending: false })

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Pineywoods ProWash — Dashboard</h1>

      {error && (
        <p className="text-red-600 mb-4">Failed to load leads: {error.message}</p>
      )}

      {leads && leads.length === 0 && (
        <p className="text-gray-500">No leads yet.</p>
      )}

      {leads && leads.length > 0 && (
        <ul className="space-y-4">
          {leads.map((lead: Lead) => (
            <li key={lead.id} className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                <div>
                  <dt className="font-semibold text-gray-500">When it came in</dt>
                  <dd className="text-gray-900">
                    {new Date(lead.created_at).toLocaleString('en-US', {
                      dateStyle: 'medium',
                      timeStyle: 'short',
                    })}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-500">Name</dt>
                  <dd className="text-gray-900">{lead.client_name}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-500">Phone</dt>
                  <dd className="text-gray-900">{lead.phone}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-500">Email</dt>
                  <dd className="text-gray-900">{lead.email}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-500">Address</dt>
                  <dd className="text-gray-900">{lead.service_address}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-500">Service</dt>
                  <dd className="text-gray-900">{lead.service_requested}</dd>
                </div>
                {lead.internal_notes && (
                  <div className="sm:col-span-2">
                    <dt className="font-semibold text-gray-500">Notes &amp; estimate</dt>
                    <dd className="text-gray-900 whitespace-pre-wrap font-mono text-xs mt-1">
                      {lead.internal_notes}
                    </dd>
                  </div>
                )}
              </dl>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
