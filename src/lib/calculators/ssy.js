/**
 * Sukanya Samriddhi Yojana (SSY) Calculator — config & logic.
 * 21-year maturity, deposits for first 15 years.
 */

/**
 * SSY: deposit for 15 years, interest accrues for 21 years.
 * Annual compounding.
 */
function calculateSSY(yearly, rate, childAge) {
  const r = rate / 100;
  const depositYears = 15;
  const totalYears = 21;
  let balance = 0;

  for (let y = 1; y <= totalYears; y++) {
    if (y <= depositYears) balance += yearly;
    balance *= 1 + r;
  }

  const invested = yearly * depositYears;
  const maturityYear = new Date().getFullYear() + (21 - childAge);

  return { invested, maturity: balance, maturityYear };
}

function buildChartData(yearly, rate) {
  const r = rate / 100;
  const points = [];
  let balance = 0;
  let totalDeposited = 0;

  for (let y = 1; y <= 21; y++) {
    if (y <= 15) {
      totalDeposited += yearly;
      balance += yearly;
    }
    balance *= 1 + r;
    points.push({
      year: y,
      invested: totalDeposited,
      interest: Math.round(balance - totalDeposited),
    });
  }
  return points;
}

export const ssyCalculatorConfig = {
  slug: 'ssy-calculator',
  title: 'SSY Calculator',
  subtitle:
    'Calculate maturity value of Sukanya Samriddhi Yojana investment.',
  metaTitle:
    'SSY Calculator – Sukanya Samriddhi Yojana Returns | Ortus Finance',
  metaDescription:
    'Calculate SSY maturity value and returns. Plan your daughter\'s future with Sukanya Samriddhi Yojana calculator.',

  inputs: [
    {
      key: 'yearly',
      label: 'Yearly Deposit',
      type: 'currency',
      defaultValue: 150000,
      min: 250,
      max: 150000,
      step: 1000,
    },
    {
      key: 'rate',
      label: 'Current Interest Rate',
      type: 'percentage',
      defaultValue: 8.2,
      min: 7,
      max: 10,
      step: 0.1,
      tooltip: 'Current govt rate is 8.2% (as of 2024)',
    },
    {
      key: 'childAge',
      label: "Girl Child's Age",
      type: 'slider',
      defaultValue: 1,
      min: 0,
      max: 10,
      step: 1,
      unit: 'Years',
    },
  ],

  calculate(inputs) {
    const { yearly, rate, childAge } = inputs;
    const result = calculateSSY(yearly, rate, childAge);
    const interest = result.maturity - result.invested;

    return {
      summary: [
        { key: 'invested', label: 'Total Deposited', value: result.invested },
        { key: 'interest', label: 'Total Interest', value: interest },
        { key: 'maturity', label: 'Maturity Value', value: result.maturity },
      ],
      maturityYear: result.maturityYear,
      chartData: buildChartData(yearly, rate),
    };
  },

  chart: {
    type: 'bar-stacked',
    xKey: 'year',
    xLabel: 'Years',
    bars: [
      { dataKey: 'invested', label: 'Total Deposited', color: '#8b5cf6' },
      { dataKey: 'interest', label: 'Interest Earned', color: '#a5f3fc' },
    ],
  },

  explanation: [
    {
      heading: null,
      text: 'Sukanya Samriddhi Yojana (SSY) is a government-backed savings scheme launched under the Beti Bachao Beti Padhao campaign, designed to encourage savings for the girl child\'s education and marriage expenses.',
    },
    {
      heading: 'Key Features',
      text: 'Minimum deposit: ₹250/year. Maximum: ₹1,50,000/year. Deposits are made for the first 15 years, while the account matures in 21 years from the date of opening. Partial withdrawal (up to 50%) is allowed after the girl turns 18.',
    },
    {
      heading: 'Tax Benefits',
      text: 'SSY enjoys EEE (Exempt-Exempt-Exempt) tax status — investments qualify for Section 80C deduction, interest earned is tax-free, and the maturity amount is also tax-free.',
    },
    {
      heading: 'Formula',
      text: 'The account earns annual compound interest. Deposits for years 1–15, with interest accruing for all 21 years.',
    },
  ],

  faqs: [
    {
      q: 'What is the age limit for SSY?',
      a: 'The account can be opened for a girl child below 10 years of age. A family can open a maximum of 2 SSY accounts (for 2 daughters).',
    },
    {
      q: 'What happens if I miss a yearly deposit?',
      a: 'A penalty of ₹50 per year is charged for default. The minimum deposit of ₹250 must be made each year for the first 15 years to keep the account active.',
    },
    {
      q: 'Can the girl child operate the account?',
      a: 'Yes, the girl child can operate the account after turning 18. Before that, the guardian operates it on her behalf.',
    },
    {
      q: 'When does the SSY account mature?',
      a: 'The account matures 21 years from the date of opening or upon marriage of the girl after she turns 18, whichever is earlier.',
    },
  ],
};
