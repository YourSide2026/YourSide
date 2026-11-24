// Home loan interest rates shown on /interest-rates/.
// Enter rates as numbers, e.g. 4.99 means 4.99% p.a. Leave as null to show "TBC".
// Update `updated` every time you change the rates so visitors can see how fresh they are.
export const rates = {
  updated: null as string | null, // e.g. '24 November 2026'
  moneyhubUrl: 'https://www.moneyhub.co.nz/mortgage.html',
  terms: ['Floating', '6 months', '1 year', '18 months', '2 years', '3 years', '4 years', '5 years'],
  lenders: [
    { name: 'ANZ', rates: [null, null, null, null, null, null, null, null] },
    { name: 'ASB', rates: [null, null, null, null, null, null, null, null] },
    { name: 'BNZ', rates: [null, null, null, null, null, null, null, null] },
    { name: 'Westpac', rates: [null, null, null, null, null, null, null, null] },
    { name: 'Kiwibank', rates: [null, null, null, null, null, null, null, null] },
    { name: 'Co-operative Bank', rates: [null, null, null, null, null, null, null, null] },
    { name: 'SBS Bank', rates: [null, null, null, null, null, null, null, null] },
    { name: 'TSB', rates: [null, null, null, null, null, null, null, null] },
  ] as { name: string; rates: (number | null)[] }[],
};
