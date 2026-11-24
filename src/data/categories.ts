// Topics for the Guides section. Each one gets its own page at /guides/topic/<slug>/
// once it has at least one article. Add new topics here.
export const categories = [
  {
    slug: 'mortgage-basics',
    name: 'Mortgage basics',
    description: 'Plain-English explanations of how home loans and mortgage advice work in New Zealand.',
  },
  {
    slug: 'first-home-buyers',
    name: 'First home buyers',
    description: 'Deposits, KiwiSaver, pre-approval and everything else you need to buy your first home.',
  },
  {
    slug: 'housing-market',
    name: 'Housing market',
    description: 'What’s happening with interest rates and the Wellington and New Zealand property market.',
  },
  {
    slug: 'property-investing',
    name: 'Property investing',
    description: 'Lending, structuring and strategy for buying and growing a property portfolio.',
  },
  {
    slug: 'refinancing',
    name: 'Refinancing',
    description: 'Refixing, switching lenders and making your current mortgage work harder.',
  },
] as const;

export type CategorySlug = (typeof categories)[number]['slug'];

export const categorySlugs = categories.map((c) => c.slug) as [CategorySlug, ...CategorySlug[]];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug)!;
