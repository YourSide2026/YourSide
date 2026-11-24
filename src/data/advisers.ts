// The YourSide advisers. Each one gets their own page at /team/<slug>/ and appears in
// the "choose an adviser" option on contact forms.
// To add a photo, put it in /public/team/ and set photo: '/team/dan.jpg'.
// Anything set to null is hidden on the live site until you fill it in.
export type Adviser = {
  slug: string;
  name: string; // first name, used in buttons like "Talk to Dan"
  fullName: string;
  role: string;
  fspNumber: string | null; // Financial Service Providers Register number, digits only
  phone: string | null;
  email: string | null;
  disclosureUrl: string | null; // link to the adviser's disclosure statement (e.g. a PDF in /public/disclosure/)
  bio: string[];
  specialties: string[];
  photo: string | null;
};

export const advisers: Adviser[] = [
  {
    slug: 'dan',
    name: 'Dan',
    fullName: 'Dan Bailey',
    role: 'Mortgage Adviser',
    fspNumber: '738551',
    phone: '027 534 8052',
    email: null,
    disclosureUrl: null,
    bio: [
      'My primary goal is to make financing your new home, business, commercial or investment property as easy as possible with the best deal and terms that are on offer in the market place. I’ll work with you and your other professionals to make this process work for you and be an enjoyable experience where you feel in control.',
      'My background has been 14 years with NZ banks and 6 years as a Mortgage Adviser with Loan Market. I am a Financial Adviser, so you can be assured the advice you will receive from me is in your best interests and suits your goals.',
      'I love seeing my clients succeed!',
    ],
    specialties: ['Home loans', 'Investment property', 'Business & commercial'],
    photo: null,
  },
  {
    slug: 'jorja',
    name: 'Jorja',
    fullName: 'Jorja',
    role: 'Mortgage Adviser',
    fspNumber: '526546',
    phone: '027 417 1748',
    email: null,
    disclosureUrl: null,
    bio: [
      'My big focus is you, my customer, and your home buying and residential investment needs. I want you to feel confident and supported throughout your home buying or residential investment journey, or when restructuring your existing lending to unlock future financial aspirations.',
      'With 20 years in the banking, real estate and mortgage broking industries, I can provide the advice, expertise and contacts to help you through every step of your journey. No questions will go unanswered, whether you’re a first home buyer, next home buyer or experienced investor.',
      'In this challenging housing and lending market, let me be your lending expert, helping you navigate your journey, the banks and the process.',
    ],
    specialties: ['First home buyers', 'Next home buyers', 'Residential investment', 'Restructuring'],
    photo: null,
  },
  {
    slug: 'callan',
    name: 'Callan',
    fullName: 'Callan',
    role: 'Mortgage Adviser',
    fspNumber: '1001511',
    phone: '027 507 5668',
    email: null,
    disclosureUrl: null,
    bio: [
      'With over 24 years’ experience in the banking and finance industry, I am well placed to advise you through the process of buying your first home, subsequent home, investment property, commercial property or establishing a property portfolio.',
      'Over the last 12 years I have worked for one of the main banks as a Relationship Manager across Business Banking, Commercial Banking and most recently Property Finance.',
    ],
    specialties: ['First & next homes', 'Investment property', 'Commercial property', 'Property portfolios'],
    photo: null,
  },
  {
    slug: 'bridie',
    name: 'Bridie',
    fullName: 'Bridie McKendry',
    role: 'Mortgage Adviser',
    fspNumber: '526546',
    phone: '027 304 4410',
    email: null,
    disclosureUrl: null,
    bio: [
      'Hi, I’m Bridie McKendry, a Mortgage Adviser with YourSide. I’ve been in the industry coming up to 20 years and love what I do: helping everyday Kiwis make smart, confident decisions about home ownership.',
      'I take a down-to-earth, practical approach and aim to make the process simple, stress-free, and maybe even a little exciting, especially for first home buyers. As a mum of two (and two lively dogs), I understand how important it is to find the right home for your family.',
      'Outside of work, you’ll usually find me at the beach, out on a bush walk over the weekend, or spending time with my girls. Whether you’re buying your first home, refinancing or investing, I’m here to guide you every step of the way.',
    ],
    specialties: ['First home buyers', 'Refinancing', 'Investment'],
    photo: null,
  },
];

// Other team members. Shown on the Our team page only (not on contact forms or adviser lists).
export type TeamMember = {
  name: string;
  role: string;
  phone: string | null;
  email: string | null;
  photo: string | null;
};

export const supportTeam: TeamMember[] = [
  {
    name: 'Chanell Reynolds',
    role: 'Client Services Manager Team Lead',
    phone: '027 330 0100',
    email: null,
    photo: null,
  },
];

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, '')}`;
