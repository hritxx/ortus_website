/**
 * Mutual Fund Calculator — config & logic.
 * Supports both SIP and Lump Sum modes.
 */

function calculateSIP(monthly, rate, years) {
  const monthlyRate = rate / 100 / 12;
  const months = years * 12;
  if (monthlyRate === 0) return monthly * months;
  return monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
    (1 + monthlyRate);
}

function calculateLumpSum(principal, rate, years) {
  return principal * Math.pow(1 + rate / 100, years);
}

function buildChartData(inputs) {
  const { method, monthly, principal, rate, years } = inputs;
  const points = [];

  for (let y = 1; y <= years; y++) {
    if (method === 'SIP') {
      const invested = monthly * 12 * y;
      const total = calculateSIP(monthly, rate, y);
      points.push({
        year: y,
        invested: Math.round(invested),
        gains: Math.round(total - invested),
      });
    } else {
      const total = calculateLumpSum(principal, rate, y);
      points.push({
        year: y,
        invested: principal,
        gains: Math.round(total - principal),
      });
    }
  }
  return points;
}

export const mfCalculatorConfig = {
  slug: 'mf-calculator',
  title: 'Mutual Fund Calculator',
  subtitle: 'Calculate the future value of your mutual fund investment.',
  metaTitle: 'Mutual Fund Calculator – SIP & Lump Sum Returns | Ortus Finance',
  metaDescription:
    'Calculate mutual fund returns for both SIP and lump sum investments. Plan your wealth creation journey with our free calculator.',

  inputs: [
    {
      key: 'method',
      label: 'Method',
      type: 'select',
      options: ['SIP', 'Lump Sum'],
      defaultValue: 'SIP',
    },
    {
      key: 'monthly',
      label: 'Monthly Investment',
      type: 'currency',
      defaultValue: 5000,
      min: 500,
      max: 10000000,
      step: 500,
      showWhen: { key: 'method', value: 'SIP' },
    },
    {
      key: 'principal',
      label: 'Total Investment',
      type: 'currency',
      defaultValue: 100000,
      min: 1000,
      max: 100000000,
      step: 1000,
      showWhen: { key: 'method', value: 'Lump Sum' },
    },
    {
      key: 'rate',
      label: 'Expected Annual Returns',
      type: 'percentage',
      defaultValue: 12,
      min: 1,
      max: 30,
      step: 0.5,
    },
    {
      key: 'years',
      label: 'Time Period (Years)',
      type: 'slider',
      defaultValue: 4,
      min: 1,
      max: 30,
      step: 1,
      unit: 'Years',
    },
  ],

  calculate(inputs) {
    const { method, monthly, principal, rate, years } = inputs;
    let invested, total;

    if (method === 'SIP') {
      invested = monthly * 12 * years;
      total = calculateSIP(monthly, rate, years);
    } else {
      invested = principal;
      total = calculateLumpSum(principal, rate, years);
    }

    const returns = total - invested;
    return {
      summary: [
        { key: 'invested', label: 'Invested Amount', value: invested },
        { key: 'returns', label: 'Returns Generated', value: returns },
        { key: 'total', label: 'Total Amount', value: total },
      ],
      chartData: buildChartData(inputs),
    };
  },

  chart: {
    type: 'bar-stacked',
    xKey: 'year',
    xLabel: 'Years',
    bars: [
      { dataKey: 'invested', label: 'Amount Invested', color: '#8b5cf6' },
      { dataKey: 'gains', label: 'Total Gains', color: '#67e8f9' },
    ],
  },

  explanation: [
    {
      heading: null,
      text: 'A mutual fund is a collection of money that is professionally managed by a fund manager. It is a trust that collects money from a group of investors with similar financial goals and invests it in stocks, bonds, money market instruments, and/or other securities as per the mutual fund scheme\'s mandate.',
    },
    {
      heading: null,
      text: 'If you want to invest a lump sum in a mutual fund, you need to know your future accumulated amount based on the expected returns for the entire period.',
    },
    {
      heading: 'The formula to determine Mutual fund returns',
      text: 'For Lump Sum: A = P × (1+r)^n\nFor SIP: FV = P × [(1+r)^n - 1] / r × (1+r)\nwhere P = Investment, r = Rate per period, n = Number of periods.',
    },
  ],

  faqs: [
    {
      q: 'What is a mutual fund?',
      a: 'A mutual fund pools money from multiple investors to invest in diversified securities like stocks, bonds, and other assets, managed by professional fund managers.',
    },
    {
      q: 'What is the difference between SIP and Lump Sum?',
      a: 'SIP (Systematic Investment Plan) involves investing a fixed amount regularly (monthly), while Lump Sum is a one-time investment of a larger amount.',
    },
    {
      q: 'Are mutual fund returns guaranteed?',
      a: 'No, mutual fund returns are subject to market risks and are not guaranteed. However, historically, equity mutual funds have delivered 12-15% annualized returns over long periods.',
    },
    {
      q: 'What is the minimum SIP amount?',
      a: 'Most mutual funds allow SIP investments starting from ₹500 per month, though some funds may have a minimum of ₹100.',
    },
  ],
};
