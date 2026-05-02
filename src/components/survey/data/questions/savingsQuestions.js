/**
 * Section 5: Savings & Investments — 4 questions, max 20 points
 */
export const savingsQuestions = [
  {
    id: "savings_20pct",
    sectionId: "savings",
    question: {
      en: "Do you save at least 20% of your income?",
      bn: "আপনি কি আপনার আয়ের অন্তত ২০% সঞ্চয় করেন?",
      as: "আপুনি আপোনাৰ আয়ৰ অন্ততঃ ২০% সঞ্চয় কৰে নে?",
      mni: "নহাক্না নহাক্কী ইনকমগী ২০% ফাউবা সেভ তৌবা?",
      ne: "तपाईं आफ्नो आम्दानीको कम्तीमा २०% बचत गर्नुहुन्छ?",
      lus: "I sum lakluh 20% tal vel i khawl em?",
      kha: "Phi save 20% ka income?",
      grt: "Nangni income ni 20% save on·anga?",
      nag: "Apne income laga 20% save kore?",
      trp: "Nwngni aay-er 20% sonchoy koro?",
      brx: "नोंथां जागायनायनि 20% गोजौआव दानथिनाय खालामो?",
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
          en: "No", bn: "না", as: "নহয়", mni: "নত্তে", ne: "गर्दिन",
          lus: "Aih", kha: "Bam", grt: "An·cha", nag: "Nai", trp: "Dakha", brx: "नङा",
        },
        score: 0,
      },
    ],
  },
  {
    id: "savings_where",
    sectionId: "savings",
    question: {
      en: "Where do you mostly keep your money?",
      bn: "আপনি আপনার টাকা বেশিরভাগ কোথায় রাখেন?",
      as: "আপুনি আপোনাৰ টকা বেছিভাগ ক'ত ৰাখে?",
      mni: "নহাক্না শেল য়াম্না কদায়দা থম্বা?",
      ne: "तपाईं आफ्नो पैसा प्रायः कहाँ राख्नुहुन्छ?",
      lus: "Khawiah ah nge sum tam ber i dah?",
      kha: "Hangno phi thoh ka pisa?",
      grt: "Nangni takagen bisi kode thoa?",
      nag: "Apne paisa bisi kote rakhe?",
      trp: "Nwngni taka besir bhag kothay rakho?",
      brx: "नोंथां बोसोन बांसिन बेयाव थो?",
    },
    options: [
      {
        label: {
          en: "Savings account", bn: "সেভিংস অ্যাকাউন্ট", as: "সেভিংছ একাউণ্ট",
          mni: "সেভিংস একাউন্ট", ne: "बचत खाता",
          lus: "Savings account", kha: "Savings account",
          grt: "Savings account", nag: "Savings account",
          trp: "Savings account", brx: "दानथिनाय खाता",
        },
        score: 2,
      },
      {
        label: {
          en: "Fixed deposits", bn: "ফিক্সড ডিপোজিট", as: "ফিক্সড ডিপজিট",
          mni: "ফিক্সড ডিপোজিট", ne: "स्थिर निक्षेप",
          lus: "Fixed deposit", kha: "Fixed deposit",
          grt: "Fixed deposit", nag: "Fixed deposit",
          trp: "Fixed deposit", brx: "फिक्सड डिपजिट",
        },
        score: 3,
      },
      {
        label: {
          en: "Gold / Real estate", bn: "সোনা / রিয়েল এস্টেট", as: "সোণ / ৰিয়েল এষ্টেট",
          mni: "সোনা / রিয়েল এস্টেট", ne: "सुन / घरजग्गा",
          lus: "Gold / Ram leh in", kha: "Gold / Real estate",
          grt: "Gold / Real estate", nag: "Gold / Real estate",
          trp: "Sona / Real estate", brx: "सना / हा-गोदान",
        },
        score: 4,
      },
      {
        label: {
          en: "Stock market / Mutual funds", bn: "শেয়ার বাজার / মিউচুয়াল ফান্ড",
          as: "শ্বেয়াৰ বজাৰ / মিউচুৱেল ফাণ্ড",
          mni: "স্টক মার্কেট / মিউচুয়াল ফান্ড", ne: "शेयर बजार / म्युचुअल फन्ड",
          lus: "Stock market / Mutual funds", kha: "Stock market / Mutual funds",
          grt: "Stock market / Mutual funds", nag: "Stock market / Mutual funds",
          trp: "Stock market / Mutual funds", brx: "स्टक मार्केट / म्युचुअल फन्ड",
        },
        score: 5,
      },
    ],
  },
  {
    id: "savings_regular",
    sectionId: "savings",
    question: {
      en: "Do you invest regularly?",
      bn: "আপনি কি নিয়মিত বিনিয়োগ করেন?",
      as: "আপুনি নিয়মীয়াকৈ বিনিয়োগ কৰে নে?",
      mni: "নহাক্না রেগুলর ইনভেস্ট তৌবা?",
      ne: "तपाईं नियमित लगानी गर्नुहुन्छ?",
      lus: "Sum dahna i nei ṭhin em?",
      kha: "Phi invest regular?",
      grt: "Nangni regular invest on·anga?",
      nag: "Apne regular invest kore?",
      trp: "Nwngni niyomito biniyog koro?",
      brx: "नोंथां रेगुलार बिनियोग खालामो?",
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
          en: "No", bn: "না", as: "নহয়", mni: "নত্তে", ne: "गर्दिन",
          lus: "Aih", kha: "Bam", grt: "An·cha", nag: "Nai", trp: "Dakha", brx: "नङा",
        },
        score: 0,
      },
    ],
  },
  {
    id: "savings_inflation",
    sectionId: "savings",
    question: {
      en: "Are your investments beating inflation (≈6–7%)?",
      bn: "আপনার বিনিয়োগ কি মুদ্রাস্ফীতিকে হারাচ্ছে (≈৬–৭%)?",
      as: "আপোনাৰ বিনিয়োগে মুদ্ৰাস্ফীতিক হৰুৱাই আছে নে (≈৬–৭%)?",
      mni: "নহাক্কী ইনভেস্টমেন্টনা ইনফ্লেশন (≈৬–৭%) হনবা ফংলিবা?",
      ne: "तपाईंको लगानीले मुद्रास्फीति (≈६–७%) लाई जित्दैछ?",
      lus: "I sum dahna-in inflation (≈6–7%) a hne thei em?",
      kha: "Ka investment phi ka beat inflation (≈6–7%)?",
      grt: "Nangni investment inflation (≈6–7%) beat on·anga?",
      nag: "Apne investment inflation (≈6–7%) beat kori ase?",
      trp: "Nwngni biniyog inflation (≈6–7%) ke harachhe?",
      brx: "नोंथांनि बिनियोगआ मुद्रास्फीति (≈6–7%) खौसे सोलायो?",
    },
    options: [
      {
        label: {
          en: "Yes", bn: "হ্যাঁ", as: "হয়", mni: "হোই", ne: "गर्दैछ",
          lus: "Aw", kha: "Hooid", grt: "On·a", nag: "Hoi", trp: "Hoi", brx: "गोजौ",
        },
        score: 5,
      },
      {
        label: {
          en: "No", bn: "না", as: "নহয়", mni: "নত্তে", ne: "गर्दैन",
          lus: "Aih", kha: "Bam", grt: "An·cha", nag: "Nai", trp: "Dakha", brx: "नङा",
        },
        score: 0,
      },
      {
        label: {
          en: "Not sure", bn: "নিশ্চিত নই", as: "নিশ্চিত নহয়",
          mni: "খংদে", ne: "थाहा छैन",
          lus: "Ka hre chiang lo", kha: "Ym tip",
          grt: "Anga ym tip", nag: "Thik te nai janena",
          trp: "Nischit noi", brx: "गोसा मोन नांगौ",
        },
        score: 2,
      },
    ],
  },
];
