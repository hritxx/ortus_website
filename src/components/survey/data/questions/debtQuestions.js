/**
 * Section 4: Debt & Liabilities — 3 questions, max 20 points
 */
export const debtQuestions = [
  {
    id: "debt_loans",
    sectionId: "debt",
    question: {
      en: "Do you currently have any loans or EMIs?",
      bn: "আপনার কি বর্তমানে কোনো ঋণ বা EMI আছে?",
      as: "আপোনাৰ বৰ্তমানে কোনো ঋণ বা EMI আছে নে?",
      mni: "নহাক্কী হৌজিক মতমদা লোন নত্রগা EMI অমহেক্তা লৈবা?",
      ne: "तपाईंसँग अहिले कुनै ऋण वा EMI छ?",
      lus: "Naktuk ah bat emaw EMI emaw i nei em?",
      kha: "Phi don katto katto ka bat ne EMI mynta?",
      grt: "Nangni matni kuno loan ba EMI donga?",
      nag: "Apne laga etu kono loan ba EMI ase?",
      trp: "Nwngni bortomane kono rin ba EMI ase?",
      brx: "नोंथांनि दानैजों गोनो रिं एबा EMI दं?",
    },
    options: [
      {
        label: {
          en: "Yes", bn: "হ্যাঁ", as: "হয়", mni: "হোই", ne: "छ",
          lus: "Aw", kha: "Hooid", grt: "On·a", nag: "Hoi", trp: "Hoi", brx: "गोजौ",
        },
        score: 0,
      },
      {
        label: {
          en: "No", bn: "না", as: "নহয়", mni: "নত্তে", ne: "छैन",
          lus: "Aih", kha: "Bam", grt: "An·cha", nag: "Nai", trp: "Dakha", brx: "नङा",
        },
        score: 8,
      },
    ],
  },
  {
    id: "debt_emi_pct",
    sectionId: "debt",
    question: {
      en: "Are your EMIs:",
      bn: "আপনার EMI গুলি:",
      as: "আপোনাৰ EMI সমূহ:",
      mni: "নহাক্কী EMI শিং:",
      ne: "तपाईंको EMI हरू:",
      lus: "I EMI te hi:",
      kha: "Ka EMI phi:",
      grt: "Nangni EMI gula:",
      nag: "Apne EMI khan:",
      trp: "Nwngni EMI guli:",
      brx: "नोंथांनि EMI आव:",
    },
    options: [
      {
        label: {
          en: "Less than 30% of income", bn: "আয়ের ৩০% এর কম", as: "আয়ৰ ৩০%তকৈ কম",
          mni: "ইনকমগী ৩০% দগী হন্থনা", ne: "आम्दानीको ३०% भन्दा कम",
          lus: "Sum lakluh 30% aih hnuai", kha: "30% bnai income",
          grt: "Income ni 30% gimin kham", nag: "Income laga 30% kum te",
          trp: "Aay-er 30% theke kom", brx: "जागायनायनि 30% निफ्राय गोजौ",
        },
        score: 6,
      },
      {
        label: {
          en: "30–50% of income", bn: "আয়ের ৩০–৫০%", as: "আয়ৰ ৩০–৫০%",
          mni: "ইনকমগী ৩০–৫০%", ne: "आम्दानीको ३०–५०%",
          lus: "Sum lakluh 30–50%", kha: "30–50% income",
          grt: "Income ni 30–50%", nag: "Income laga 30–50%",
          trp: "Aay-er 30–50%", brx: "जागायनायनि 30–50%",
        },
        score: 3,
      },
      {
        label: {
          en: "More than 50% of income", bn: "আয়ের ৫০% এর বেশি", as: "আয়ৰ ৫০%তকৈ বেছি",
          mni: "ইনকমগী ৫০% দগী হেনবা", ne: "आम्दानीको ५०% भन्दा बढी",
          lus: "Sum lakluh 50% aia", kha: "50% bah income",
          grt: "Income ni 50% gimin bisi", nag: "Income laga 50% te bisi",
          trp: "Aay-er 50% theke besi", brx: "जागायनायनि 50% निफ्राय गोबां",
        },
        score: 0,
      },
    ],
  },
  {
    id: "debt_creditcard",
    sectionId: "debt",
    question: {
      en: "Do you use credit cards and:",
      bn: "আপনি কি ক্রেডিট কার্ড ব্যবহার করেন এবং:",
      as: "আপুনি ক্ৰেডিট কাৰ্ড ব্যৱহাৰ কৰে আৰু:",
      mni: "নহাক্না ক্রেডিট কার্ড শিজিন্নবা অমসুং:",
      ne: "तपाईं क्रेडिट कार्ड प्रयोग गर्नुहुन्छ र:",
      lus: "Credit card i hmang a, leh:",
      kha: "Phi pyndonkam credit card aro:",
      grt: "Nangni credit card use on·anga aro:",
      nag: "Apne credit card use kore aru:",
      trp: "Nwngni credit card byabohar koro aar:",
      brx: "नोंथां क्रेडिट कार्ड बाहायो आरो:",
    },
    options: [
      {
        label: {
          en: "Pay full bill every month", bn: "প্রতি মাসে পুরো বিল পরিশোধ করি",
          as: "প্ৰতি মাহে সম্পূৰ্ণ বিল পৰিশোধ কৰোঁ",
          mni: "থা খুদিংদা বিল পুম্নমক পায়", ne: "हरेक महिना पूरा बिल तिर्छु",
          lus: "Thla tin bill pum ka pek", kha: "Bnai bnai pisa full bill",
          grt: "Maina maina full bill pay on·a", nag: "Mohina mohina full bill pay kore",
          trp: "Maash maash purno bill porishodh kori", brx: "दाननि-दाननि गासै बिल होनाय खालामो",
        },
        score: 6,
      },
      {
        label: {
          en: "Pay minimum due", bn: "ন্যূনতম বকেয়া পরিশোধ করি",
          as: "নূন্যতম বকেয়া পৰিশোধ কৰোঁ",
          mni: "মিনিমম দিউ পায়", ne: "न्यूनतम बक्यौता तिर्छु",
          lus: "A tlem ber ka pek", kha: "Minimum due pay",
          grt: "Minimum due pay on·a", nag: "Minimum due pay kore",
          trp: "Minimum due porishodh kori", brx: "गोजौआव गोजौ होनाय खालामो",
        },
        score: 3,
      },
      {
        label: {
          en: "Often miss payments", bn: "প্রায়ই পেমেন্ট মিস করি",
          as: "প্ৰায়ে পেমেণ্ট মিছ কৰোঁ",
          mni: "অরুবদা পেমেন্ট মিস তৌই", ne: "प्रायः भुक्तानी छुटाउँछु",
          lus: "Pek tur ka theihnghilh fo", kha: "Bynta bynta ym pay",
          grt: "Bynta bynta payment miss on·a", nag: "Bishi bar payment miss kore",
          trp: "Proktibaar payment miss kori", brx: "रोखायैनो होनाय थामो",
        },
        score: 0,
      },
    ],
  },
];
