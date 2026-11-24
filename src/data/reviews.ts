// Google reviews shown on adviser profile pages (not on the main pages).
//
// HOW TO ADD A REVIEW
// 1. Open the Google profile (profiles below → `url`) and find a review you like.
// 2. Copy it into the `reviews` list at the bottom, like the example.
// 3. `advisers` decides which profile pages it shows on: 'dan', 'bridie', 'jorja', 'callan'.
// Use the reviewer's first name and last initial (e.g. "Megan D.") to respect their privacy,
// and copy the text exactly as written.

export type GoogleProfile = {
  id: string;
  name: string; // shown as "Reviews for …"
  // Adviser slugs this profile belongs to. Leave empty ([]) for a company-wide profile:
  // a company profile's rating is shown in the homepage header automatically.
  advisers: string[];
  rating: number; // overall star rating shown on Google
  count: number; // number of reviews on Google
  checked: string; // when rating and count were last updated (YYYY-MM-DD)
  url: string; // link to read all reviews
  reviewUrl: string; // link for clients to leave a review
};

export type Review = {
  profile: string; // GoogleProfile id
  advisers: string[];
  name: string;
  rating: number;
  when?: string; // e.g. "May 2026"
  text: string;
};

export const profiles: GoogleProfile[] = [
  {
    id: 'dan-bridie',
    name: 'Dan & Bridie',
    advisers: ['dan', 'bridie'],
    rating: 5.0,
    count: 89,
    checked: '2026-11-25',
    url: 'https://share.google/2VqVNS1p4p37E9awc',
    reviewUrl: 'https://g.page/r/CXA7RPAPAeAyEAE/review',
  },
];

export const reviews: Review[] = [
  // Example (remove the // at the start of each line to switch it on):
  // {
  //   profile: 'dan-bridie',
  //   advisers: ['dan', 'bridie'],
  //   name: 'First L.',
  //   rating: 5,
  //   when: 'May 2026',
  //   text: 'Paste the review text here, exactly as written.',
  // },
];

/** The company-wide Google profile, once one is added (shown in the homepage header). */
export const companyProfile = profiles.find((p) => p.advisers.length === 0);
