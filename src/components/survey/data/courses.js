/**
 * Course catalog and recommendation logic for the Financial Health Checkup.
 */

export const COURSES = [
  {
    id: "intro_financial_market",
    name: "Introduction to Financial Market",
    type: "Workshop",
    instructor: "Nabanil",
    duration: "1 Day",
    price: 0,
    priceLabel: "FREE",
    description: "Learn How Money Really Works — your first step to understanding the world of investing.",
    url: "https://courses.ortusfinance.in",
    relevantSections: ["income", "spending"],
  },
  {
    id: "mutual_fund_basics",
    name: "Basic Understanding of Mutual Fund",
    type: "Workshop",
    instructor: "Omprakash Badal",
    duration: "7 Days",
    price: 599,
    priceLabel: "₹599",
    description: "Covers the basics of mutual funds, types, risks, and diversification for informed investment decisions.",
    url: "https://courses.ortusfinance.in",
    relevantSections: ["spending", "debt"],
  },
  {
    id: "investment_bootcamp",
    name: "Investment Bootcamp",
    type: "Bootcamp",
    instructor: "Ravinder Kumar",
    duration: "60 Days",
    price: 2499,
    priceLabel: "₹2,499",
    description: "Empowering students and young professionals from Northeast India to take control of their financial future.",
    url: "https://courses.ortusfinance.in",
    relevantSections: ["emergency", "savings"],
  },
  {
    id: "options_trading",
    name: "Options Trading Workshop",
    type: "Workshop",
    instructor: "Prantik Deb",
    duration: "90 Days",
    price: 4999,
    priceLabel: "₹4,999",
    description: "Learn Options Trading + Get 90 Days of Live Trading Calls. Learn, apply, and earn with expert guidance.",
    url: "https://courses.ortusfinance.in",
    relevantSections: ["savings"],
  },
  {
    id: "technical_analysis",
    name: "Technical Analysis Pro",
    type: "Course",
    instructor: "Ravinder Kumar",
    duration: "45 Days",
    price: 14999,
    priceLabel: "₹14,999",
    description: "Smart Trading Skills for Northeast India — build income from anywhere with stock market skills.",
    url: "https://courses.ortusfinance.in",
    relevantSections: ["goals"],
  },
  {
    id: "stock_masterclass",
    name: "Stock Trading Masterclass",
    type: "Course",
    instructor: "Ravinder Kumar",
    duration: "60 Days",
    price: 9999,
    priceLabel: "₹9,999",
    description: "Turn Market Noise into Clear, Profitable Decisions with a structured, no-fluff trading system.",
    url: "https://courses.ortusfinance.in",
    relevantSections: ["goals"],
  },
];

/**
 * Returns up to 3 recommended courses based on weak sections.
 * @param {Object} sectionScores - { sectionId: { score, maxScore } }
 * @returns {Array} - Recommended courses
 */
export function getRecommendedCourses(sectionScores = {}) {
  if (!sectionScores) return [];
  // Find weak sections (score <= 35% of max)
  const weakSections = Object.entries(sectionScores)
    .filter(([, { score, maxScore }]) => (score / maxScore) * 100 <= 35)
    .map(([id]) => id);

  // If no weak sections, recommend advanced courses
  if (weakSections.length === 0) {
    return COURSES.filter((c) =>
      ["technical_analysis", "stock_masterclass", "options_trading"].includes(c.id)
    ).slice(0, 2);
  }

  // Score courses by relevance to weak sections
  const scored = COURSES.map((course) => {
    const relevance = course.relevantSections.filter((s) =>
      weakSections.includes(s)
    ).length;
    return { ...course, relevance };
  })
    .filter((c) => c.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance || a.price - b.price);

  // Return top 3 unique courses, prioritizing free/cheap ones for beginners
  const result = [];
  const seen = new Set();
  for (const course of scored) {
    if (!seen.has(course.id)) {
      result.push(course);
      seen.add(course.id);
    }
    if (result.length >= 3) break;
  }

  // If fewer than 2 recommendations, add the free workshop
  if (result.length < 2) {
    const free = COURSES.find((c) => c.id === "intro_financial_market");
    if (free && !seen.has(free.id)) result.push(free);
  }

  return result;
}
