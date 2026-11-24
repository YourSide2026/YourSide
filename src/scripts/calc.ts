// Shared helpers for every calculator page (runs in the browser).

export const nzd = new Intl.NumberFormat('en-NZ', { style: 'currency', currency: 'NZD', maximumFractionDigits: 0 });
export const money = (n: number) => nzd.format(Math.round(n));
export const parse = (v: string) => Number(String(v).replace(/[^0-9.]/g, '')) || 0;
export const roundTo = (n: number, step: number) => Math.round(n / step) * step;
export const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel)!;

/** Repayment per period on a principal-and-interest (table) loan. */
export function repayment(loan: number, annualRate: number, years: number, perYear = 12) {
  const n = years * perYear;
  const r = annualRate / perYear;
  if (n <= 0) return 0;
  return r === 0 ? loan / n : (loan * r) / (1 - Math.pow(1 + r, -n));
}

/** Largest loan a repayment per period can support. */
export function maxLoanFor(payment: number, annualRate: number, years: number, perYear = 12) {
  const n = years * perYear;
  const r = annualRate / perYear;
  return r === 0 ? payment * n : (payment * (1 - Math.pow(1 + r, -n))) / r;
}

/** Interest paid over the first `months` of a table loan. */
export function interestOver(loan: number, annualRate: number, yearsLeft: number, months: number) {
  const pay = repayment(loan, annualRate, yearsLeft);
  const r = annualRate / 12;
  let bal = loan;
  let interest = 0;
  for (let i = 0; i < months && bal > 0; i++) {
    const int = bal * r;
    interest += int;
    bal -= pay - int;
  }
  return interest;
}

/** Add thousands separators to money fields as people type. */
export function formatMoneyInputs(root: ParentNode) {
  root.querySelectorAll<HTMLInputElement>('.money input').forEach((input) => {
    input.addEventListener('input', () => {
      const n = parse(input.value);
      input.value = n ? n.toLocaleString('en-NZ') : '';
    });
  });
}

/* ---------- Numbers shared between calculators ----------
   Stored only in the visitor's own browser, so a price or income typed into one
   calculator is already filled in on the next. */
const KEY = 'yourside-calculators';
type Shared = Partial<Record<'price' | 'deposit' | 'income' | 'loan' | 'rate' | 'kiwisaver' | 'savings', number>>;

export function loadShared(): Shared {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '{}');
  } catch {
    return {};
  }
}
export function saveShared(values: Shared) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...loadShared(), ...values }));
  } catch {
    /* private browsing: ignore */
  }
}
/** Fill inputs marked data-shared="price" etc. from earlier calculators. */
export function prefill(root: ParentNode) {
  const s = loadShared();
  root.querySelectorAll<HTMLInputElement>('[data-shared]').forEach((input) => {
    const v = s[input.dataset.shared as keyof Shared];
    if (v === undefined || v === null) return;
    input.value = input.type === 'number' ? String(v) : Number(v).toLocaleString('en-NZ');
  });
}

/* ---------- Lead capture ---------- */

/** Put the calculator's results into every hidden summary field on the page. */
export function setSummary(text: string) {
  document.querySelectorAll<HTMLInputElement>('[data-calc-summary]').forEach((el) => (el.value = text));
}

export type Nudge = { title: string; text: string; button?: string };
/** Update the message next to the quick enquiry form so it speaks to this person's result. */
export function setNudge(n: Nudge) {
  const box = document.querySelector('[data-nudge]');
  if (!box) return;
  $('[data-nudge-title]', box).textContent = n.title;
  $('[data-nudge-text]', box).textContent = n.text;
  if (n.button) document.querySelectorAll('[data-nudge-button]').forEach((b) => (b.textContent = n.button!));
}

/* ---------- Measuring ----------
   Sends events to whichever analytics tool is added later (Plausible, Google Analytics / Tag Manager).
   Does nothing until one is installed. */
declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Record<string, string | number> }) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
export function track(event: string, props: Record<string, string | number> = {}) {
  window.plausible?.(event, { props });
  window.gtag?.('event', event, props);
  window.dataLayer?.push({ event, ...props });
}

/** Track the first time someone changes a calculator, and the first real result. */
export function trackUsage(form: HTMLElement, calculator: string) {
  let started = false;
  form.addEventListener('input', () => {
    if (!started) track('calculator_start', { calculator });
    started = true;
  }, { once: false });
  let resulted = false;
  return () => {
    if (started && !resulted) track('calculator_result', { calculator });
    if (started) resulted = true;
  };
}
