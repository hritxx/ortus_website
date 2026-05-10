/**
 * National Savings Certificate (NSC) Calculator — config & logic.
 * Fixed 5-year tenure, compound interest reinvested annually.
 */

/** NSC uses annual compounding, interest reinvested */
function calculateNSC(principal, rate, years) {
  return principal * Math.pow(1 + rate / 100, years);
}

function buildChartData(principal, rate, years) {
  const points = [];
  for (let y = 0; y <= years; y++) {
    const maturity = calculateNSC(principal, rate, y);
    points.push({
      year: y,
      investment: principal,
      interest: Math.round(maturity - principal),
    });
  }
  return points;
}

export const nscCalculatorConfig = {
  slug: 'nsc-calculator',
  title: 'NSC Calculator',
  subtitle:
    'Calculate the maturity value of your National Savings Certificate investment.',
  metaTitle: 'NSC Calculator – National Savings Certificate | Ortus Finance',
  metaDescription:
    'Calculate your NSC maturity value with our free calculator. Know your returns on National Savings Certificate investments.',

  inputs: [
    {
      key: 'principal',
      label: 'Total Investment',
      type: 'currency',
      defaultValue: 30000,
      min: 1000,
      max: 10000000,
      step: 1000,
    },
    {
      key: 'compounding',
      label: 'Compounding Frequency',
      type: 'select',
      options: ['Yearly'],
      defaultValue: 'Yearly',
    },
    {
      key: 'rate',
      label: 'Current Interest Rate',
      type: 'percentage',
      defaultValue: 7.7,
      min: 5,
      max: 10,
      step: 0.1,
      tooltip: 'Current govt rate is 7.7% (as of 2024)',
    },
    {
      key: 'years',
      label: 'Duration',
      type: 'slider',
      defaultValue: 5,
      min: 5,
      max: 5,
      step: 1,
      unit: 'Yrs',
    },
  ],

  calculate(inputs) {
    const { principal, rate, years } = inputs;
    const maturity = calculateNSC(principal, rate, years);
    const interest = maturity - principal;

    return {
      summary: [
        { key: 'totalInvestment', label: 'Total Investment', value: principal },
        { key: 'totalInterest', label: 'Total Interest', value: interest },
        { key: 'maturityValue', label: 'Maturity Value', value: maturity },
      ],
      chartData: buildChartData(principal, rate, years),
    };
  },

  chart: {
    type: 'bar-stacked',
    xKey: 'year',
    xLabel: 'Years',
    bars: [
      { dataKey: 'investment', label: 'Total Investment', color: '#8b5cf6' },
      { dataKey: 'interest', label: 'Total Interest', color: '#a5f3fc' },
    ],
  },

  explanation: [
    {
      heading: null,
      text: 'The National Savings Certificate (NSC) is a safe and government-backed savings scheme in India, encouraging people to save money. The scheme is open only for individual Indian residents and offers nomination facility as well.',
    },
    {
      heading: null,
      text: 'It offers a fixed interest rate of 7.7% per year currently, with a minimum investment requirement of Rs.1,000. The lock-in period is 5 years for the NSC scheme, and investors can get tax benefits up to Rs.1.5 lakh under Section 80C of the Income Tax Act.',
    },
    {
      heading: null,
      text: 'HUFs, trusts, NRIs, and companies are not eligible for NSC — it is for individuals only.',
    },
    {
      heading: null,
      text: 'NSC can be used as collateral for loans. While it offers a fixed income, it may not beat inflation. Tax benefits apply to the invested amount (up to Rs.1.5 lakh under Section 80C) and there is no TDS on interest.',
    },
    {
      heading: 'Formula',
      text: 'A = P × (1 + r)^n, where P = Principal, r = Annual interest rate, n = Number of years.',
    },
  ],

  faqs: [
    {
      q: 'What is the current NSC interest rate?',
      a: 'The current NSC interest rate is 7.7% per annum (as of Q1 2024), compounded annually but payable at maturity.',
    },
    {
      q: 'What is the lock-in period for NSC?',
      a: 'NSC has a fixed lock-in period of 5 years. Premature withdrawal is generally not allowed except in cases of death or court order.',
    },
    {
      q: 'Is NSC tax-free?',
      a: 'Investment up to ₹1.5 lakh qualifies for Section 80C deduction. Interest earned in the first 4 years is deemed reinvested and qualifies for 80C. Interest in the 5th year is taxable.',
    },
    {
      q: 'Where can I buy NSC?',
      a: 'NSC can be purchased at any India Post office or through authorized banks. You need identity and address proof documents.',
    },
  ],
};
