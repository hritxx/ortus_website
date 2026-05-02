/**
 * Result tiers and per-section advice for the Financial Health Checkup.
 */

export const RESULT_TIERS = [
  { id: "critical", min: 0,  max: 25,  color: "#DC2626", bg: "bg-red-50",    border: "border-red-500",    text: "text-red-700" },
  { id: "building", min: 26, max: 50,  color: "#EA580C", bg: "bg-orange-50", border: "border-orange-500", text: "text-orange-700" },
  { id: "good",     min: 51, max: 75,  color: "#2563EB", bg: "bg-blue-50",   border: "border-blue-500",   text: "text-blue-700" },
  { id: "excellent", min: 76, max: 100, color: "#16A34A", bg: "bg-green-50",  border: "border-green-500",  text: "text-green-700" },
];

export const TIER_LABELS = {
  critical: {
    en: "Needs Urgent Attention", bn: "জরুরি মনোযোগ দরকার", as: "জৰুৰী মনোযোগ দৰকাৰ",
    mni: "খুদম চেৎনা দরকার", ne: "तुरुन्त ध्यान दिनुपर्छ", lus: "Ngaih tuah nghal a ngai",
    kha: "Ka jingialid burom", grt: "Urgent attention dorkar", nag: "Urgent dhyan dena lage",
    trp: "Joruri monojog dorkar", brx: "गोख्रों सावरायनाय गोनां",
  },
  building: {
    en: "Building Foundations", bn: "ভিত্তি তৈরি হচ্ছে", as: "ভিত্তি গঢ়ি আছে",
    mni: "ফাউন্ডেশন শেমগৎলি", ne: "जग बसालिँदै छ", lus: "Thut hmun siam mek",
    kha: "Ka jingsim thoh", grt: "Foundation building", nag: "Foundation bonaise",
    trp: "Bhitti toiri hoitase", brx: "गुदि दानाय जादों",
  },
  good: {
    en: "On the Right Track", bn: "সঠিক পথে", as: "সঠিক পথত",
    mni: "অচুম্বা লম্বীদা", ne: "सही बाटोमा", lus: "Kawng dik takah",
    kha: "Ha ka jingkynmaw ba bha", grt: "Thik rasta-o", nag: "Thik rasta te",
    trp: "Sothik pothe", brx: "गोरोन लामायाव",
  },
  excellent: {
    en: "Financially Fit!", bn: "আর্থিকভাবে সুস্থ!", as: "আৰ্থিকভাৱে সুস্থ!",
    mni: "ফাইনান্সিয়েললি ফিৎ!", ne: "आर्थिक रूपमा स्वस्थ!", lus: "Sum hman dik tak!",
    kha: "Financial fit!", grt: "Financially fit!", nag: "Financially fit!",
    trp: "Arthikbhabe sustho!", brx: "बोसोनजों गोहो!",
  },
};

export function getTier(score) {
  return RESULT_TIERS.find((t) => score >= t.min && score <= t.max) || RESULT_TIERS[0];
}

/**
 * Per-section advice based on performance level (low / mid / high).
 * Threshold: low = 0-35% of section max, mid = 36-70%, high = 71-100%
 */
export const SECTION_ADVICE = {
  income: {
    low: {
      en: "Your income stability needs attention. Consider building a side income or upskilling to increase your earning potential.",
      bn: "আপনার আয়ের স্থিতিশীলতায় মনোযোগ দরকার। আয় বাড়াতে পার্শ্ব আয় বা দক্ষতা বাড়ানোর কথা ভাবুন।",
      as: "আপোনাৰ আয়ৰ স্থিতিশীলতাত মনোযোগ দৰকাৰ।",
      ne: "तपाईंको आम्दानी स्थिरतामा ध्यान दिनुपर्छ।",
    },
    mid: {
      en: "Good income base! Focus on diversifying your income sources for more security.",
      bn: "ভালো আয়ের ভিত্তি! আরও নিরাপত্তার জন্য আয়ের উৎস বৈচিত্র্যময় করুন।",
      as: "ভাল আয়ৰ ভিত্তি! আৰু নিৰাপত্তাৰ বাবে আয়ৰ উৎস বৈচিত্ৰ্যময় কৰক।",
      ne: "राम्रो आम्दानीको आधार! थप सुरक्षाको लागि विविधीकरण गर्नुहोस्।",
    },
    high: {
      en: "Excellent income stability! Your diverse income sources provide strong financial security.",
      bn: "চমৎকার আয়ের স্থিতিশীলতা! আপনার বৈচিত্র্যময় আয়ের উৎস শক্তিশালী আর্থিক নিরাপত্তা দেয়।",
      as: "চমৎকাৰ আয়ৰ স্থিতিশীলতা!",
      ne: "उत्कृष्ट आम्दानी स्थिरता!",
    },
  },
  spending: {
    low: {
      en: "Start tracking every rupee you spend. Use a simple app or notebook — awareness is the first step to control.",
      bn: "প্রতিটি টাকার খরচ ট্র্যাক করা শুরু করুন। সচেতনতাই নিয়ন্ত্রণের প্রথম পদক্ষেপ।",
      as: "প্ৰতিটো টকাৰ খৰচ ট্ৰেক কৰা আৰম্ভ কৰক।",
      ne: "हरेक रुपैयाँको खर्च ट्र्याक गर्न सुरु गर्नुहोस्।",
    },
    mid: {
      en: "You're aware of your spending. Now try the 50-30-20 rule: 50% needs, 30% wants, 20% savings.",
      bn: "আপনি আপনার খরচ সম্পর্কে সচেতন। এখন 50-30-20 নিয়ম ব্যবহার করুন।",
      as: "আপুনি আপোনাৰ খৰচ সম্পৰ্কে সচেতন।",
      ne: "तपाईं आफ्नो खर्चबारे सचेत हुनुहुन्छ।",
    },
    high: {
      en: "Great spending discipline! You're well on track to building long-term wealth.",
      bn: "চমৎকার ব্যয় শৃঙ্খলা! দীর্ঘমেয়াদী সম্পদ গড়ার পথে আপনি ভালো আছেন।",
      as: "চমৎকাৰ ব্যয় শৃংখলা!",
      ne: "उत्कृष्ट खर्च अनुशासन!",
    },
  },
  emergency: {
    low: {
      en: "Start a ₹1,000/month liquid fund SIP today — it's your financial safety net against unexpected events.",
      bn: "আজই ₹১,০০০/মাস লিকুইড ফান্ড SIP শুরু করুন — এটি আপনার আর্থিক নিরাপত্তা জাল।",
      as: "আজিয়েই ₹১,০০০/মাহ লিকুইড ফাণ্ড SIP আৰম্ভ কৰক।",
      ne: "आज नै ₹१,०००/महिना लिक्विड फन्ड SIP सुरु गर्नुहोस्।",
    },
    mid: {
      en: "You're building a safety net! Aim for 6 months of expenses in a liquid fund for full protection.",
      bn: "আপনি নিরাপত্তা জাল তৈরি করছেন! পূর্ণ সুরক্ষার জন্য ৬ মাসের খরচ লিকুইড ফান্ডে রাখুন।",
      as: "আপুনি সুৰক্ষা জাল তৈয়াৰ কৰি আছে!",
      ne: "तपाईंले सुरक्षा जाल बनाउँदै हुनुहुन्छ!",
    },
    high: {
      en: "Excellent safety net! You're well-protected against life's surprises.",
      bn: "চমৎকার নিরাপত্তা জাল! আপনি অপ্রত্যাশিত ঘটনা থেকে সুরক্ষিত।",
      as: "চমৎকাৰ সুৰক্ষা জাল!",
      ne: "उत्कृष्ट सुरक्षा जाल!",
    },
  },
  debt: {
    low: {
      en: "High debt burden! Focus on paying off high-interest debt first (credit cards, personal loans). Consider debt consolidation.",
      bn: "উচ্চ ঋণ বোঝা! প্রথমে উচ্চ সুদের ঋণ পরিশোধে মনোযোগ দিন।",
      as: "উচ্চ ঋণ বোজা! প্ৰথমে উচ্চ সুদৰ ঋণ পৰিশোধত মনোযোগ দিয়ক।",
      ne: "उच्च ऋण भार! पहिले उच्च ब्याजको ऋण तिर्नमा ध्यान दिनुहोस्।",
    },
    mid: {
      en: "Manageable debt levels. Avoid new loans and focus on early repayment to free up cash for investments.",
      bn: "সামলানো যায় এমন ঋণ। নতুন ঋণ এড়িয়ে চলুন।",
      as: "চম্ভালিব পৰা ঋণ। নতুন ঋণ এৰাই চলক।",
      ne: "व्यवस्थापनयोग्य ऋण स्तर।",
    },
    high: {
      en: "Low or no debt — excellent position! Channel freed-up cash into wealth-building investments.",
      bn: "কম বা শূন্য ঋণ — চমৎকার অবস্থান! মুক্ত টাকা বিনিয়োগে লাগান।",
      as: "কম বা শূন্য ঋণ — ভাল অৱস্থান!",
      ne: "कम वा शून्य ऋण — उत्कृष्ट स्थिति!",
    },
  },
  savings: {
    low: {
      en: "Start with just ₹500/month SIP — even small amounts compound into serious wealth over 10-20 years.",
      bn: "মাত্র ₹৫০০/মাস SIP দিয়ে শুরু করুন — ছোট পরিমাণও সময়ের সাথে বড় সম্পদ হয়।",
      as: "মাত্ৰ ₹৫০০/মাহ SIPৰে আৰম্ভ কৰক।",
      ne: "₹५००/महिना SIP बाट सुरु गर्नुहोस्।",
    },
    mid: {
      en: "Good saving habit! Consider diversifying into equity mutual funds for better long-term growth.",
      bn: "ভালো সঞ্চয় অভ্যাস! ভালো দীর্ঘমেয়াদী বৃদ্ধির জন্য ইক্যুইটি মিউচুয়াল ফান্ডে বৈচিত্র্য আনুন।",
      as: "ভাল সঞ্চয় অভ্যাস!",
      ne: "राम्रो बचत बानी!",
    },
    high: {
      en: "Active investor! Ensure quarterly portfolio reviews and goal alignment. Consider tax-efficient instruments.",
      bn: "সক্রিয় বিনিয়োগকারী! ত্রৈমাসিক পোর্টফোলিও পর্যালোচনা নিশ্চিত করুন।",
      as: "সক্ৰিয় বিনিয়োগকাৰী!",
      ne: "सक्रिय लगानीकर्ता!",
    },
  },
  goals: {
    low: {
      en: "Set at least 3 clear financial goals with target amounts and dates. Without a target, every shot misses.",
      bn: "অন্তত ৩টি স্পষ্ট আর্থিক লক্ষ্য নির্ধারণ করুন। লক্ষ্য ছাড়া প্রতিটি প্রচেষ্টা ব্যর্থ।",
      as: "অন্ততঃ ৩টা স্পষ্ট আৰ্থিক লক্ষ্য নিৰ্ধাৰণ কৰক।",
      ne: "कम्तीमा ३ स्पष्ट आर्थिक लक्ष्य निर्धारण गर्नुहोस्।",
    },
    mid: {
      en: "Good — you have goals! Now calculate exact amounts and start dedicated SIPs for each goal.",
      bn: "ভালো — আপনার লক্ষ্য আছে! এখন সঠিক পরিমাণ হিসাব করুন।",
      as: "ভাল — আপোনাৰ লক্ষ্য আছে!",
      ne: "राम्रो — तपाईंसँग लक्ष्यहरू छन्!",
    },
    high: {
      en: "Well-planned financial future! Review goals annually and adjust for inflation and life changes.",
      bn: "সুপরিকল্পিত আর্থিক ভবিষ্যৎ! বার্ষিক লক্ষ্য পর্যালোচনা করুন।",
      as: "সুপৰিকল্পিত আৰ্থিক ভৱিষ্যৎ!",
      ne: "सुनियोजित आर्थिक भविष्य!",
    },
  },
};

/**
 * Returns advice level based on section score percentage.
 */
export function getAdviceLevel(score, maxScore) {
  const pct = (score / maxScore) * 100;
  if (pct <= 35) return "low";
  if (pct <= 70) return "mid";
  return "high";
}

export function getSectionAdvice(sectionId, score, maxScore, lang) {
  const level = getAdviceLevel(score, maxScore);
  const advice = SECTION_ADVICE[sectionId]?.[level];
  if (!advice) return "";
  return advice[lang] || advice.en || "";
}
