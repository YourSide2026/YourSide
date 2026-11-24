// Business details used across the site.
// Anything set to null is hidden on the site until you fill it in.
export const site = {
  name: 'YourSide',
  url: 'https://yourside.co.nz',
  tagline: 'Mortgage advice in your corner.',
  description:
    'YourSide is a Wellington mortgage adviser. We compare lenders and work alongside you to find home, investment and business lending that fits.',
  location: 'Wellington, New Zealand',
  phone: null as string | null, // e.g. '04 123 4567'
  email: null as string | null, // e.g. 'hello@yourside.co.nz'
  fspNumber: null as string | null, // Financial Service Providers Register number
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    linkedin: null as string | null,
  },
};

export const nav = [
  { label: 'Home loans', href: '/#services' },
  { label: 'Calculators', href: '/calculators/' },
  { label: 'Interest rates', href: '/interest-rates/' },
  { label: 'Our team', href: '/team/' },
  { label: 'Guides', href: '/guides/' },
];
