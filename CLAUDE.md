# Agent Instructions & Project Guidelines

## Where you are

Pineywoods ProWash — a Business OS and CRM for an exterior cleaning
business in Nacogdoches, TX. Owner: Michael.

## Tech stack

Next.js (App Router), TypeScript, Tailwind CSS, Supabase, Resend,
Twilio. Deployed via Vercel.

Note: this project has both `package-lock.json` and `pnpm-lock.yaml`.
Both were committed deliberately to fix a Vercel build. Do not remove
or regenerate either one without asking.

## Greeting & Session Control
- When you start in this folder, greet Michael by name and ask what he wants to work on. Keep it short and plain. Do not dump a wall of text.
- Do not change any code or files unless Michael clearly asks you to.

## Session Handoff & Pickup Protocols

### When Michael says "handoff":
1. Create or overwrite a file called `HANDOFF.md` in the root of this project.
2. Be specific and literal — use real file paths, real names, real error messages. Never vague placeholders.
3. Include these exact sections in `HANDOFF.md`:
   - **Persona:** The expert persona and working style needed to continue this work.
   - **Core goal:** What we are ultimately trying to achieve.
   - **Current state and facts:** The most crucial context and progress so far.
   - **Codebase and file state:** Files modified (exact paths). What is currently working and what is broken or throwing errors.
   - **Dead ends — do not resurface:** Approaches we tried and rejected. Never suggest these again.
   - **Next immediate steps:** 1 to 3 actionable tasks or open questions to tackle next.
4. After writing it, confirm in one sentence that the handoff is saved.

### When Michael says "pickup":
1. Read the `HANDOFF.md` file in the root of this project.
2. Adopt the persona from it.
3. Do NOT repeat the whole summary back. Briefly confirm the core goal in 1 to 2 sentences.
4. Do NOT suggest anything under "Dead ends."
5. Make your first move on the next immediate steps based on the current file state.

---

## Core Execution Rules

### 1. Done Means Done
- Deliver 100% of requested items. Do not skip subtasks, leave placeholders, or write `// TODO` comments unless explicitly instructed.
- Do not substitute execution with a report on how you plan to do it. Write the actual code.
- If a task is genuinely blocked, complete all unblocked portions first, then state the exact blocker in one sentence. Avoid vague statements like "needs investigation."

### 2. Teach, Then Act.

I am learning by building. Understanding matters more than speed.

**Before changing any file:**
- Tell me in plain English what you intend to change and why.
- Wait for me to say yes. Do not proceed on assumed approval.
- Make one change at a time, not a batch.

**Act immediately without asking ONLY for:**
- Reading files, searching the codebase, running `git status` or `git diff`
- Answering questions

**Always stop and ask for:**
- Creating, editing, or deleting any file
- Installing packages or changing configuration
- Any database schema change or migration — say plainly that we
  have hit the migration trip-wire and wait
- Anything touching production or external APIs

**After each change:** explain what changed, what I should verify,
and give me a commit message.

If a build breaks after your change, fix it — but tell me what broke
and why in plain English first.

### 3. A Question is a Question
- Evaluative questions (e.g., "Should we switch to Server Actions here?" or "What would it take to add a search index?") require informational answers only.
- Do NOT refactor code, install packages, or alter project structure when answering exploratory questions. Answer first, present trade-offs, and wait for explicit confirmation to act.

---

## Technical Stack & Code Standards

### Framework & Language (Next.js & TypeScript)
- Framework: Next.js (App Router). Always prefer React Server Components (RSC) by default. Add `'use client'` only when client-side interactivity or state is required.
- Type Safety: Strict TypeScript everywhere. Never use `any` or loose `ts-ignore` comments without prior permission. Define explicit interface contracts for props and API responses.
- Build Verification: Always verify that code passes `npm run build` or `tsc --noEmit` before marking a task as done.

### Styling & UI (Tailwind CSS)
- Use standard utility classes with modern Tailwind syntax.
- Maintain mobile-first responsive design standards across components.
- Do not import external UI CSS libraries unless instructed. Keep components clean, functional, and self-contained.

### Backend & Database (Supabase)
- Database Access: Use `@supabase/ssr` or `@supabase/supabase-js` client patterns appropriate for Next.js App Router.
- Security: Ensure Row Level Security (RLS) policies and user data isolation are respected in every query. Never expose service role keys on the client side.
- Migrations/Schema: Treat schema changes as high-impact. Provide SQL scripts or migration steps clearly before applying raw database mutations.