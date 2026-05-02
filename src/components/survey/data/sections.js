/**
 * Survey section definitions with translated names and scoring metadata.
 */
export const SECTIONS = [
  {
    id: "income",
    icon: "Wallet",
    maxScore: 15,
    name: {
      en: "Income Stability", bn: "আয়ের স্থিতিশীলতা", as: "আয়ৰ স্থিতিশীলতা",
      mni: "লুপা চংবগী স্থিতি", ne: "आम्दानी स्थिरता", lus: "Sum lakluh rinawm",
      kha: "Ka jingialang pisa laih", grt: "Takagen chanchi aro stability",
      nag: "Income stability", trp: "Aay-er sthiti", brx: "जागायनायनि गोहो",
    },
  },
  {
    id: "spending",
    icon: "ShoppingCart",
    maxScore: 15,
    name: {
      en: "Spending & Lifestyle", bn: "ব্যয় ও জীবনযাত্রা", as: "ব্যয় আৰু জীৱনশৈলী",
      mni: "শেল শিজিন্নবা অমসুং পুন্সি", ne: "खर्च र जीवनशैली", lus: "Sum hmang dan",
      kha: "Ka jingpynbna pisa", grt: "Kharcha aro lifestyle",
      nag: "Khoroch aru lifestyle", trp: "Khoroch aro jibon jaatra",
      brx: "बायनाय आरो जिउनि राहा",
    },
  },
  {
    id: "emergency",
    icon: "Shield",
    maxScore: 15,
    name: {
      en: "Emergency Preparedness", bn: "জরুরি প্রস্তুতি", as: "জৰুৰী প্ৰস্তুতি",
      mni: "জরুরি থৌরাং", ne: "आपतकालीन तयारी", lus: "Buaina hun atan thawhlawm",
      kha: "Ka jingialid ban ka jingthoh burom", grt: "Emergency preparation",
      nag: "Emergency preparation", trp: "Joruri prostuti", brx: "गोख्रों समनि थाखानाय",
    },
  },
  {
    id: "debt",
    icon: "CreditCard",
    maxScore: 20,
    name: {
      en: "Debt & Liabilities", bn: "ঋণ ও দায়", as: "ঋণ আৰু দায়",
      mni: "ঋণ অমসুং দায়", ne: "ऋण र दायित्व", lus: "Bat leh hralh",
      kha: "Ka bat", grt: "Rin aro dari",
      nag: "Rin aru liability", trp: "Rin aro daay", brx: "रिं आरो देथिनाय",
    },
  },
  {
    id: "savings",
    icon: "PiggyBank",
    maxScore: 20,
    name: {
      en: "Savings & Investments", bn: "সঞ্চয় ও বিনিয়োগ", as: "সঞ্চয় আৰু বিনিয়োগ",
      mni: "সেভিংস অমসুং ইনভেস্টমেন্ট", ne: "बचत र लगानी", lus: "Sum khawl leh sum dahna",
      kha: "Ka pisa kamai bneng", grt: "Savings aro investment",
      nag: "Savings aru investment", trp: "Sonchoy aro biniyog",
      brx: "दानथिनाय आरो बिनियोग",
    },
  },
  {
    id: "goals",
    icon: "Target",
    maxScore: 15,
    name: {
      en: "Financial Goals", bn: "আর্থিক লক্ষ্য", as: "আৰ্থিক লক্ষ্য",
      mni: "ফাইনান্সিয়েল গোল", ne: "आर्थिक लक्ष्य", lus: "Sum bik tumkau",
      kha: "Ka jingialang ka jingtip pisa", grt: "Financial goals",
      nag: "Financial goals", trp: "Arthik lokkho", brx: "बोसोन लक्ष",
    },
  },
];

export function getSectionById(id) {
  return SECTIONS.find((s) => s.id === id);
}
