/**
 * HRA (House Rent Allowance) Calculator — config & logic.
 * Computes HRA exemption based on Indian tax rules.
 */

/**
 * HRA exemption = minimum of:
 * 1. Actual HRA received
 * 2. Rent paid − 10% of (Basic + DA)
 * 3. 50% of (Basic + DA) for metro, 40% for non-metro
 */
function calculateHRA(basic, hraReceived, rentPaid, isMetro) {
  const rentMinusBasic = rentPaid - 0.1 * basic;
  const percentage = isMetro ? 0.5 : 0.4;
  const basicPercentage = percentage * basic;

  const exemption = Math.max(
    0,
    Math.min(hraReceived, rentMinusBasic, basicPercentage)
  );
  const taxable = hraReceived - exemption;

  return { hraReceived, exemption, taxable };
}

function buildChartData(basic, hraReceived, rentPaid, isMetro) {
  const rentMinusBasic = Math.max(0, rentPaid - 0.1 * basic);
  const pct = isMetro ? 0.5 : 0.4;
  const basicPct = pct * basic;

  return [
    { label: 'HRA Received', value: hraReceived },
    { label: 'Rent - 10% Basic', value: rentMinusBasic },
    { label: `${pct * 100}% of Basic+DA`, value: basicPct },
  ];
}

export const hraCalculatorConfig = {
  slug: 'hra-calculator',
  title: 'HRA Calculator',
  subtitle: 'Calculate your House Rent Allowance tax exemption.',
  metaTitle: 'HRA Calculator – House Rent Allowance Exemption | Ortus Finance',
  metaDescription:
    'Calculate your HRA tax exemption with our free calculator. Know how much of your House Rent Allowance is tax-free.',

  inputs: [
    {
      key: 'basic',
      label: 'Basic Salary + DA (Annual)',
      type: 'currency',
      defaultValue: 468000,
      min: 10000,
      max: 50000000,
      step: 1000,
    },
    {
      key: 'hraReceived',
      label: 'HRA Received (Annual)',
      type: 'currency',
      defaultValue: 108000,
      min: 0,
      max: 25000000,
      step: 1000,
    },
    {
      key: 'rentPaid',
      label: 'Total Rent Paid (Annual)',
      type: 'currency',
      defaultValue: 240000,
      min: 0,
      max: 25000000,
      step: 1000,
    },
    {
      key: 'isMetro',
      label: 'Do you live in Delhi, Mumbai, Kolkata or Chennai?',
      type: 'radio',
      options: [
        { label: 'Yes', value: true },
        { label: 'No', value: false },
      ],
      defaultValue: false,
      tooltip: 'Metro cities get 50% of Basic+DA; non-metro gets 40%',
    },
  ],

  calculate(inputs) {
    const { basic, hraReceived, rentPaid, isMetro } = inputs;
    const result = calculateHRA(basic, hraReceived, rentPaid, isMetro);

    return {
      summary: [
        { key: 'hraReceived', label: 'HRA Received', value: result.hraReceived },
        { key: 'exemptedHRA', label: 'Exempted HRA', value: result.exemption },
        { key: 'taxableHRA', label: 'Taxable HRA', value: result.taxable },
      ],
      chartData: buildChartData(basic, hraReceived, rentPaid, isMetro),
    };
  },

  chart: {
    type: 'bar',
    xKey: 'label',
    xLabel: 'HRA Components',
    bars: [{ dataKey: 'value', label: 'Amount', color: '#8b5cf6' }],
  },

  explanation: [
    {
      heading: null,
      text: 'HRA, or House Rent Allowance, is the salary component given by your employer to cover your housing needs.',
    },
    {
      heading: 'How to calculate HRA',
      text: 'To calculate the HRA deduction you need to consider 4 things: Your Salary (Basic + DA), HRA received, Actual rent paid, and the city you live in.',
    },
    {
      heading: 'The final HRA exemption is the smallest of:',
      text: '1. HRA received from your employer\n2. Actual rent paid − 10% of (Basic + DA)\n3. 50% of (Basic + DA) in metro cities / 40% if you\'re in a non-metro city',
    },
    {
      heading: 'Formula',
      text: 'MIN(HRA received, Rent paid − 10% of (Basic + DA), IF(Metro, 50% of Basic+DA, 40% of Basic+DA))',
    },
  ],

  faqs: [
    {
      q: 'Which cities are considered metro for HRA?',
      a: 'Mumbai, Delhi, Chennai, and Kolkata are the four metro cities for HRA calculation purposes.',
    },
    {
      q: 'Can I claim HRA if I own a house?',
      a: 'Yes, you can claim HRA even if you own a house, provided you are living in a rented accommodation and paying rent.',
    },
    {
      q: 'Is HRA fully tax-exempt?',
      a: 'No, only the exempted portion (minimum of the three components) is tax-free. The remaining HRA is added to your taxable income.',
    },
    {
      q: 'Do I need rent receipts to claim HRA?',
      a: 'Rent receipts are required if annual rent exceeds ₹1,00,000. For amounts above this, landlord PAN is also mandatory.',
    },
  ],
};
