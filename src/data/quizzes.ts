// Quiz landing pages for paid social ads, at /check/<slug>/.
// Each answer has points (higher = more ready / more to gain) and an optional
// "flag": a short note shown in the result when that answer needs attention.

export type Answer = { label: string; points: number; flag?: string };
export type Question = { id: string; text: string; help?: string; answers: Answer[] };
export type Band = { min: number; title: string; text: string; button: string };

export type Quiz = {
  slug: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  headline: string;
  subhead: string;
  questions: Question[];
  bands: Band[]; // highest `min` first
  resultIntro: string;
};

export const quizzes: Quiz[] = [
  {
    slug: 'ready-to-buy',
    metaTitle: 'Are you ready to buy your first home? 60-second check',
    description: 'Answer six quick questions to see how ready you are to buy your first home, and what might be standing in the way. Free, from Wellington mortgage advisers.',
    eyebrow: 'First home check',
    headline: 'Are you ready to buy your first home?',
    subhead: 'Six quick questions. Find out where you stand, and what might be standing in the way.',
    resultIntro: 'What we’d look at with you',
    questions: [
      {
        id: 'deposit',
        text: 'How much deposit have you saved, including KiwiSaver?',
        help: 'As a share of the price you’d like to pay.',
        answers: [
          { label: 'Less than 5%', points: 0, flag: 'Building your deposit: KiwiSaver, family help and a realistic savings plan.' },
          { label: '5% to 10%', points: 2, flag: 'Low-deposit options, including schemes for eligible first home buyers.' },
          { label: '10% to 20%', points: 3, flag: 'Which lenders will lend with under 20%, and what it would cost.' },
          { label: '20% or more', points: 4 },
        ],
      },
      {
        id: 'kiwisaver',
        text: 'Have you been in KiwiSaver for three years or more?',
        answers: [
          { label: 'Yes', points: 2 },
          { label: 'Not yet', points: 1, flag: 'When your KiwiSaver can go towards your deposit.' },
          { label: 'I’m not in KiwiSaver', points: 0, flag: 'Other ways to build your deposit without KiwiSaver.' },
        ],
      },
      {
        id: 'income',
        text: 'How would you describe your income?',
        answers: [
          { label: 'Salary or wages, same job 6+ months', points: 2 },
          { label: 'Self-employed or contracting', points: 1, flag: 'Lenders that assess self-employed and contract income fairly.' },
          { label: 'New job or on probation', points: 1, flag: 'Lenders that will consider a recent job change.' },
          { label: 'Casual or variable hours', points: 0, flag: 'How lenders treat variable income, and how to present yours.' },
        ],
      },
      {
        id: 'debts',
        text: 'Do you have any other debts?',
        help: 'Credit cards, car loans, student loans, buy now pay later.',
        answers: [
          { label: 'No other debts', points: 2 },
          { label: 'Student loan only', points: 2 },
          { label: 'A car loan or credit card', points: 1, flag: 'How your existing debts and card limits affect what you can borrow.' },
          { label: 'A few different debts', points: 0, flag: 'Tidying up debts before you apply, to boost what you can borrow.' },
        ],
      },
      {
        id: 'buying-with',
        text: 'Who are you buying with?',
        answers: [
          { label: 'Just me', points: 1 },
          { label: 'My partner', points: 1 },
          { label: 'Family or friends', points: 1, flag: 'Structuring a purchase with family or friends so everyone’s protected.' },
        ],
      },
      {
        id: 'timing',
        text: 'When would you like to buy?',
        answers: [
          { label: 'In the next 3 months', points: 1, flag: 'Getting pre-approved quickly so you can make offers.' },
          { label: 'In 3 to 6 months', points: 1 },
          { label: 'In 6 to 12 months', points: 0 },
          { label: 'Just exploring for now', points: 0 },
        ],
      },
    ],
    bands: [
      { min: 10, title: 'You look ready to start.', text: 'You’re in a strong position. The next step is pre-approval, so you know your budget and can move fast when you find the right place.', button: 'Get me pre-approval ready' },
      { min: 6, title: 'You’re closer than you might think.', text: 'There are a couple of things to sort, but many first home buyers in your position get there sooner with the right lender and a clear plan.', button: 'Show me my options' },
      { min: 0, title: 'You’re on your way. Let’s build your plan.', text: 'It’s early days, and that’s the best time to get advice. We’ll show you what you need and the quickest realistic path to your first home.', button: 'Help me make a plan' },
    ],
  },
  {
    slug: 'refinance',
    metaTitle: 'Could you be paying less on your mortgage? 60-second check',
    description: 'Answer five quick questions to see whether reviewing or refinancing your mortgage could save you money. Free, from Wellington mortgage advisers.',
    eyebrow: 'Mortgage health check',
    headline: 'Could you be paying less on your mortgage?',
    subhead: 'Five quick questions to see if a review or a switch could save you money.',
    resultIntro: 'What we’d look at with you',
    questions: [
      {
        id: 'fixed-end',
        text: 'When does your current fixed rate end?',
        answers: [
          { label: 'In the next 3 months', points: 3, flag: 'Your refix options now, before your lender’s offer arrives.' },
          { label: 'In 3 to 12 months', points: 2, flag: 'Planning the best time to refix or switch.' },
          { label: 'More than a year away', points: 1, flag: 'Whether breaking your fixed rate could still pay off.' },
          { label: 'I’m on a floating rate', points: 3, flag: 'Whether fixing some or all of your loan would save you money.' },
        ],
      },
      {
        id: 'last-review',
        text: 'When did someone other than your bank last review your mortgage?',
        answers: [
          { label: 'Never', points: 3, flag: 'A full comparison of what other lenders would offer you.' },
          { label: 'More than 2 years ago', points: 2, flag: 'How the market has moved since your last review.' },
          { label: 'In the last 2 years', points: 1 },
        ],
      },
      {
        id: 'loan-size',
        text: 'Roughly how much do you owe?',
        answers: [
          { label: 'Under $300,000', points: 1 },
          { label: '$300,000 to $600,000', points: 2 },
          { label: 'Over $600,000', points: 3, flag: 'On a loan this size, even small rate differences add up quickly.' },
        ],
      },
      {
        id: 'plans',
        text: 'Are you planning to renovate, consolidate debts or invest?',
        answers: [
          { label: 'Yes', points: 2, flag: 'Using your equity for renovations, debt consolidation or investing.' },
          { label: 'Maybe', points: 1, flag: 'What your equity could make possible.' },
          { label: 'No', points: 0 },
        ],
      },
      {
        id: 'lender',
        text: 'How do you feel about your current lender?',
        answers: [
          { label: 'Happy', points: 0 },
          { label: 'It’s fine', points: 1 },
          { label: 'Frustrated', points: 2, flag: 'Lenders that are a better fit for you, and handling the switch for you.' },
        ],
      },
    ],
    bands: [
      { min: 8, title: 'There’s a good chance you could save.', text: 'Your answers suggest a review could make a real difference, through a better rate, a cash contribution, a smarter structure, or all three.', button: 'Get my free review' },
      { min: 4, title: 'A review could be worth it.', text: 'You may not need to switch, but it’s worth checking what’s out there. Even if you stay put, we can help you negotiate a sharper rate.', button: 'Get my free review' },
      { min: 0, title: 'You’re in good shape, but it never hurts to check.', text: 'Your mortgage sounds well looked after. A quick review before your next refix keeps it that way.', button: 'Book a quick review' },
    ],
  },
];
