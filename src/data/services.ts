// The lending services. Each one gets its own page at /services/<slug>/.
export type Service = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  body: string[];
  points: string[];
};

export const services: Service[] = [
  {
    slug: 'first-home-buyers',
    title: 'First home buyers',
    summary: 'Get into your first home with a clear plan and an expert in your corner.',
    intro: 'Buying your first home is a big step. We’ll show you what you can borrow, how much deposit you need and which lenders are the best fit for you.',
    body: [
      'We start by listening. Where are you now, what are you working towards and what might stand in the way? From there we build a plan, help you get pre-approval and stay with you right through to settlement.',
      'Low deposit? KiwiSaver withdrawal? Help from family? We know how each lender treats these, so you don’t have to guess.',
    ],
    points: ['Pre-approval so you can buy with confidence', 'Using your KiwiSaver towards a deposit', 'Low-deposit and First Home Loan options', 'Support right through to settlement'],
  },
  {
    slug: 'refinancing',
    title: 'Refinancing',
    summary: 'Make sure your mortgage is still working as hard as you are.',
    intro: 'Your home loan shouldn’t be set and forget. Refinancing could lower your costs, restructure your lending or free up equity for what’s next.',
    body: [
      'We review your current lending against what other lenders offer, including cash contributions, rates and structure, and tell you honestly whether moving makes sense.',
      'If it does, we handle the paperwork and the conversation with the new lender for you.',
    ],
    points: ['A full review of your current loan', 'Comparing rates, structure and cash contributions', 'Restructuring to pay your loan off faster', 'Releasing equity for renovations or other goals'],
  },
  {
    slug: 'upgrading',
    title: 'Upgrading',
    summary: 'Ready for your next home? We’ll help you make the move.',
    intro: 'Moving up, down or across town? Selling and buying at the same time takes careful planning. We help you get the timing and the finance right.',
    body: [
      'We look at your equity, your borrowing power and options like bridging finance, so you know exactly where you stand before you start house-hunting.',
    ],
    points: ['Working out how much equity you have', 'Bridging finance when timing doesn’t line up', 'Porting or restructuring your existing loan', 'Planning around building or renovating'],
  },
  {
    slug: 'investment',
    title: 'Investment property',
    summary: 'Grow your property portfolio with lending that’s set up the right way.',
    intro: 'Investment lending has its own rules, from higher deposit requirements to how lenders treat rental income. We help you structure it well from the start.',
    body: [
      'Whether it’s your first rental or your fifth, we find lenders who understand your strategy and present your application in the best possible light.',
    ],
    points: ['Using equity in your home as a deposit', 'Structuring loans across multiple properties', 'Understanding how lenders assess rental income', 'New builds and investment-specific lending'],
  },
  {
    slug: 'business-lending',
    title: 'Business lending',
    summary: 'Finance that helps your business move forward.',
    intro: 'Securing business finance can feel overwhelming. We help you understand your options and connect you with lenders who know your industry.',
    body: [
      'From commercial property to working capital, we help you prepare a strong application and find a solution that fits your circumstances.',
    ],
    points: ['Commercial property purchases', 'Business expansion and equipment', 'Self-employed home loans', 'Restructuring existing business debt'],
  },
];
