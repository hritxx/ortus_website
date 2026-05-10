/**
 * Fixed Deposit Calculator — configuration & logic.
 * Supports Yearly, Half-Yearly, Quarterly, Monthly compounding.
 */

const COMPOUNDING_MAP = {
  Yearly: 1,
  'Half-Yearly': 2,
  Quarterly: 4,
  Monthly: 12,
};

/** Pure FD calculation with configurable compounding */
function calculateFD(principal, rate, years, frequency) {
  const n = COMPOUNDING_MAP[frequency] || 1;
  const r = rate / 100;
  return principal * Math.pow(1 + r / n, n * years);
}

/** Build year-by-year chart data */
function buildChartData(principal, rate, years, frequency) {
  const points = [];
  for (let y = 0; y <= years; y++) {
    const maturity = calculateFD(principal, rate, y, frequency);
    points.push({
      year: y,
      maturityValue: Math.round(maturity),
      investment: principal,
    });
  }
  return points;
}

export const fdCalculatorConfig = {
  slug: 'fd-calculator',
  title: 'FD Calculator',
  subtitle: 'Calculate the maturity value of your Fixed Deposit investment.',
  metaTitle: 'FD Calculator – Fixed Deposit Maturity Value | Ortus Finance',
  metaDescription:
    'Use our free FD Calculator to compute your Fixed Deposit maturity amount with flexible compounding options. Plan your savings today.',

  inputs: [
    {
      key: 'principal',
      label: 'Amount Invested',
      type: 'currency',
      defaultValue: 500000,
      min: 1000,
      max: 10000000,
      step: 1000,
    },
    {
      key: 'rate',
      label: 'Annual Interest Rate',
      type: 'percentage',
      defaultValue: 5,
      min: 1,
      max: 15,
      step: 0.1,
    },
    {
      key: 'compounding',
      label: 'FD Interest Structure',
      type: 'select',
      options: ['Yearly', 'Half-Yearly', 'Quarterly', 'Monthly'],
      defaultValue: 'Yearly',
    },
    {
      key: 'years',
      label: 'Time Period',
      type: 'slider',
      defaultValue: 5,
      min: 1,
      max: 25,
      step: 1,
      unit: 'Years',
    },
  ],

  calculate(inputs) {
    const { principal, rate, years, compounding } = inputs;
    const maturity = calculateFD(principal, rate, years, compounding);
    const interest = maturity - principal;

    return {
      summary: [
        { key: 'totalInvestment', label: 'Total Investment', value: principal },
        { key: 'totalInterest', label: 'Total Interest', value: interest },
        { key: 'maturityValue', label: 'Maturity Value', value: maturity },
      ],
      chartData: buildChartData(principal, rate, years, compounding),
    };
  },

  chart: {
    type: 'line',
    xKey: 'year',
    xLabel: 'Years',
    lines: [{ dataKey: 'maturityValue', label: 'Maturity Value', color: '#22c55e' }],
  },

  explanation: [
    {
      heading: null,
      text: 'Fixed Deposits (FDs) are stable and predictable investment instruments offering a safe haven of consistent returns in a volatile financial market. They are perfect for those who prefer a smooth financial journey and cannot digest even small market volatility. Use our online Fixed Deposit (FD) Calculator for easy returns calculations.',
    },
    {
      heading: null,
      text: 'Simplicity is the key with FDs. Choose a tenure that suits your dreams, whether it is a short-term goal like buying a car or saving for tax purposes. FDs offer a stable option tailored to your financial journey.',
    },
    {
      heading: null,
      text: 'While FD returns may not match riskier options, they shine as a shield of protection for your hard-earned money. In times of financial uncertainty, FDs offer a reliable income stream for those seeking stability with low risk.',
    },
    {
      heading: null,
      text: 'The Reserve Bank of India (RBI) ensures scheduled bank deposits up to Rs.5 lakh per bank through DICGC. Your financial fortress remains strong even if a bank faces challenges. Consider FDs as your financial guardians, ensuring stability and peace of mind in the ever-changing financial landscape. They will, however, often fail to beat inflation.',
    },
    {
      heading: 'FD interest calculation formula',
      text: 'A = P × (1 + r/n)^(n×t), where P = Principal, r = Annual interest rate, n = Compounding frequency, t = Time in years.',
    },
  ],

  faqs: [
    {
      q: 'What is a Fixed Deposit?',
      a: 'A Fixed Deposit (FD) is a financial instrument provided by banks or NBFCs which provides investors a higher rate of interest than a regular savings account, until the given date of maturity.',
    },
    {
      q: 'How is FD interest calculated?',
      a: 'FD interest is calculated using the compound interest formula: A = P × (1 + r/n)^(n×t). The compounding frequency can be yearly, half-yearly, quarterly, or monthly.',
    },
    {
      q: 'Is FD interest taxable?',
      a: 'Yes, interest earned on Fixed Deposits is fully taxable. TDS is deducted at 10% if the interest exceeds ₹40,000 (₹50,000 for senior citizens) in a financial year.',
    },
    {
      q: 'Can I withdraw my FD before maturity?',
      a: 'Yes, premature withdrawal is allowed but may attract a penalty of 0.5% to 1% reduction in the applicable interest rate.',
    },
    {
      q: 'What is the maximum FD tenure?',
      a: 'Most banks offer FDs with tenures ranging from 7 days to 10 years. Some banks may offer longer tenures up to 20 years.',
    },
  ],
};
