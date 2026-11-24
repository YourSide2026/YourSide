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
  email: null as string | null, // e.g. 'hello@yourside.co.nz' (also adds the email icon in the footer)
  fspNumber: null as string | null, // Financial Service Providers Register number
  // Social profiles. Paste the full link (e.g. 'https://www.facebook.com/yoursidenz') and the
  // icon appears in the footer automatically. Leave as null to hide it.
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
