/**
 * Section 2: Money Habits — 2 questions, max 10 points
 */
export const spendingQuestions = [
  {
    id: "spending_endmonth",
    sectionId: "spending",
    question: {
      en: "At the end of every month, you usually:",
      bn: "মাসের শেষে আপনি সাধারণত:",
      as: "মাহৰ শেষত আপুনি সাধাৰণতে:",
      mni: "থা লোইবদা নহাক্না চপ মান্নদনা:",
      ne: "महिनाको अन्त्यमा तपाईं सामान्यतया:",
      lus: "Thla tawp ah i ṭawng ṭawng in:",
      kha: "Ha ka jingbuh ka bnai, phi thoh:",
      grt: "Maina soter nangni usually:",
      nag: "Mohina te ses te apne usually:",
      trp: "Maash-er sese nwngni saadharonoto:",
      brx: "दाननि जोबथाआव नोंथां सरासनजों:",
    },
    options: [
      {
        label: {
          en: "Save", bn: "টাকা সঞ্চয় করি", as: "টকা সঞ্চয় কৰোঁ",
          mni: "শেল সেভ তৌই", ne: "बचत गर्छु",
          lus: "Sum ka khawl", kha: "Save pisa",
          grt: "Takagen save on·a", nag: "Paisa save kore",
          trp: "Taka sonchoy kori", brx: "बोसোন दानथिनाय खालाমো",
        },
        score: 5,
      },
      {
        label: {
          en: "Just manage", bn: "সমান সমান", as: "সমান সমান",
          mni: "ব্রেক ইভেন", ne: "बराबर हुन्छ",
          lus: "A inrem", kha: "Ka jingsngewsuid",
          grt: "Brobor aro", nag: "Barabar hoi",
          trp: "Soman soman", brx: "बरायजों-बरायजों",
        },
        score: 3,
      },
      {
        label: {
          en: "Run out", bn: "বেশি খরচ করি", as: "বেছি খৰচ কৰোঁ",
          mni: "হেন্না খরচ তৌই", ne: "बढी खर्च गर्छु",
          lus: "Sum tam ka hmang", kha: "Pynbna biang",
          grt: "Bisi kharcha on·a", nag: "Bisi khoroch kore",
          trp: "Besi khoroch kori", brx: "गोबां बायनाय खालाমো",
        },
        score: 0,
      },
    ],
  },
  {
    id: "spending_track",
    sectionId: "spending",
    question: {
      en: "Do you track where your money goes?",
      bn: "আপনি কি আপনার মাসিক খরচ ট্র্যাক করেন?",
      as: "আপুনি আপোনাৰ মাহিলী খৰচ ট্ৰেক কৰে নে?",
      mni: "নহাক্কী থা খুদিংগী খরচ ট্র্যাক তৌবা?",
      ne: "तपाईं मासिक खर्चको हिसाब राख्नुहुन्छ?",
      lus: "Thla tin i sum hmang zat i chhiar em?",
      kha: "Phi tip ka pisa pynbna ka bnai?",
      grt: "Nangni maina maina kharcha track on·anga?",
      nag: "Apne mahina mahina khoroch track kore?",
      trp: "Nwngni maashik khoroch track korong?",
      brx: "नोंथां दाननि-दाननि बायनाय ट्रेक खालामो?",
    },
    options: [
      {
        label: {
          en: "Yes", bn: "হ্যাঁ", as: "হয়", mni: "হোই", ne: "गर्छु",
          lus: "Aw", kha: "Hooid", grt: "On·a", nag: "Hoi", trp: "Hoi", brx: "गोजौ",
        },
        score: 5,
      },
      {
        label: {
          en: "No", bn: "না", as: "নহয়", mni: "গর্দিন", ne: "गर्दिन",
          lus: "Aih", kha: "Bam", grt: "An·cha", nag: "Nai", trp: "Dakha", brx: "নङা",
        },
        score: 0,
      },
    ],
  },
];
