// Assumptions behind the borrowing calculator.
// These give a rough guide only. Ask your advisers to check them, and update
// them whenever lending rules or bank test rates change.
export const calculator = {
  // Debt-to-income limits (RBNZ): total lending as a multiple of gross income
  dti: { ownerOccupier: 6, investor: 7 },

  // Minimum deposit for standard lending (RBNZ loan-to-value rules)
  minDeposit: { ownerOccupier: 0.2, investor: 0.3 },

  // Banks check you could still afford repayments at a higher "test" rate
  testRate: 0.07,
  // Share of gross income that can go on mortgage repayments at the test rate
  maxRepaymentShare: 0.38,

  // Example interest rate for the repayment estimate (people can change it on the page)
  exampleRate: 0.05,
  loanTermYears: 30,
};
