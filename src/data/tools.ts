// The calculators listed on /calculators/ and in "More calculators" strips.
// `for` controls which starting answer on the hub highlights each tool.
export type Audience = 'first' | 'moving' | 'refinance' | 'investing';

export const tools = [
  {
    slug: 'how-much-can-i-borrow',
    name: 'Borrowing calculator',
    title: 'How much can I borrow?',
    blurb: 'Estimate your borrowing power, deposit and repayments in under a minute.',
    for: ['first', 'moving', 'investing'] as Audience[],
    icon: 'M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z',
  },
  {
    slug: 'mortgage-repayments',
    name: 'Repayment calculator',
    title: 'What will my repayments be?',
    blurb: 'Weekly, fortnightly or monthly repayments, total interest, and what a rate rise would mean.',
    for: ['first', 'moving', 'refinance', 'investing'] as Audience[],
    icon: 'M4 4h16v16H4zM8 8h8M8 12h2M12 12h4M8 16h2M12 16h4',
  },
  {
    slug: 'deposit-kiwisaver',
    name: 'Deposit & KiwiSaver calculator',
    title: 'How close am I to a deposit?',
    blurb: 'Add your savings and KiwiSaver to see your deposit today and how long until you reach 5%, 10% or 20%.',
    for: ['first'] as Audience[],
    icon: 'M12 3v18M17 7.5C17 5.6 14.8 4.5 12 4.5S7 5.6 7 7.5s2.2 3 5 3.5 5 1.6 5 3.5-2.2 3-5 3-5-1.1-5-3',
  },
  {
    slug: 'upfront-costs',
    name: 'Buying costs calculator',
    title: 'How much cash do I need to buy?',
    blurb: 'Your deposit plus legal fees, inspections, valuation and moving: the real cash needed on the day.',
    for: ['first', 'moving', 'investing'] as Audience[],
    icon: 'M5 4h14v16l-3-2-2 2-2-2-2 2-2-2-3 2zM9 9h6M9 13h6',
  },
  {
    slug: 'refinance-savings',
    name: 'Refinance calculator',
    title: 'Should I switch lenders?',
    blurb: 'Compare your current rate with a new one, including cash contributions and break fees.',
    for: ['refinance', 'investing'] as Audience[],
    icon: 'M4 9h13l-3-3M20 15H7l3 3',
  },
] as const;

export const toolUrl = (slug: string) => `/calculators/${slug}/`;
