// Shared contract between the cost estimator and the quote form.
// Both sides import from here so the two can never drift apart.

export type EstimateServiceKey =
  | 'houseWashing'
  | 'concreteCleaning'
  | 'roofCleaning'
  | 'windowCleaning'

export type QuoteType = 'priced' | 'waitlist'

export interface EstimateLineItem {
  key: EstimateServiceKey
  label: string
  quantity: number
  unit: string
  quoteType: QuoteType
  low: number
  high: number
}

export interface EstimateHandoff {
  lineItems: EstimateLineItem[]
  totalLow: number
  totalHigh: number
  createdAt: string
}

// Maps an estimator service onto the matching <option value> in the quote form.
export const SERVICE_FORM_VALUE: Record<EstimateServiceKey, string> = {
  houseWashing: 'housewash',
  concreteCleaning: 'concrete',
  roofCleaning: 'roof-waitlist',
  windowCleaning: 'windows',
}

export const ESTIMATE_STORAGE_KEY = 'ppw:estimate-handoff'
export const ESTIMATE_APPLIED_EVENT = 'ppw:estimate-applied'

export function saveEstimate(estimate: EstimateHandoff) {
  if (typeof window === 'undefined') return
  try {
    window.sessionStorage.setItem(ESTIMATE_STORAGE_KEY, JSON.stringify(estimate))
    window.dispatchEvent(new CustomEvent(ESTIMATE_APPLIED_EVENT))
  } catch {
    // sessionStorage throws in private mode — the form just won't prefill.
  }
}

export function loadEstimate(): EstimateHandoff | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.sessionStorage.getItem(ESTIMATE_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as EstimateHandoff
    if (!parsed?.lineItems?.length) return null
    return parsed
  } catch {
    return null
  }
}

export function clearEstimate() {
  if (typeof window === 'undefined') return
  try {
    window.sessionStorage.removeItem(ESTIMATE_STORAGE_KEY)
    window.dispatchEvent(new CustomEvent(ESTIMATE_APPLIED_EVENT))
  } catch {
    // Nothing to do — a stale estimate is harmless.
  }
}

// The single-choice dropdown goes to the highest-dollar service. Waitlist items
// only win when nothing priced was selected.
export function pickPrimaryService(estimate: EstimateHandoff): string {
  const priced = estimate.lineItems.filter((item) => item.quoteType === 'priced')
  const pool = priced.length > 0 ? priced : estimate.lineItems
  if (pool.length === 0) return ''
  const winner = pool.reduce((best, item) => (item.high > best.high ? item : best), pool[0])
  return SERVICE_FORM_VALUE[winner.key] ?? 'other'
}

const money = (amount: number) => `$${amount.toLocaleString()}`

// The itemized block appended to internal_notes, which the handle_new_lead
// edge function already forwards into the owner notification email.
export function formatEstimateNotes(estimate: EstimateHandoff): string {
  const lines = estimate.lineItems.map((item) => {
    const qty = `${item.quantity.toLocaleString()} ${item.unit}`
    return item.quoteType === 'waitlist'
      ? `- ${item.label} (${qty}): WAITLIST / CUSTOM QUOTE REQUESTED`
      : `- ${item.label} (${qty}): ${money(item.low)} - ${money(item.high)}`
  })

  if (estimate.lineItems.some((item) => item.quoteType === 'priced')) {
    lines.push(`Estimated total: ${money(estimate.totalLow)} - ${money(estimate.totalHigh)}`)
  }

  return ['--- WEBSITE ESTIMATE ---', ...lines, '--- END ESTIMATE ---'].join('\n')
}
