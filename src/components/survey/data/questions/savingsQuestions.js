/**
 * Section 5: Wealth Building — 2 questions, max 10 points
 */
export const savingsQuestions = [
  {
    id: "savings_where",
    sectionId: "savings",
    question: {
      en: "Where does most of your money stay?",
      bn: "আপনার টাকা বেশিরভাগ কোথায় থাকে?",
      as: "আপোনাৰ টকা বেছিভাগ ক'ত থাকে?",
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
          en: "Fixed deposits / Gold", bn: "ফিক্সড ডিপোজিট / সোনা", as: "ফিক্সড ডিপজিট / সোণ",
          mni: "ফিক্সড ডিপোজিট / সোনা", ne: "स्थिर निक्षेप / सुन",
          lus: "Fixed deposit / Rangkachak", kha: "Fixed deposit / Gold",
          grt: "Fixed deposit / Gold", nag: "Fixed deposit / Gold",
          trp: "Fixed deposit / Sona", brx: "फिक्सड डिपजिट / सना",
        },
        score: 3,
      },
      {
        label: {
          en: "Stocks / Mutual funds", bn: "শেয়ার বাজার / মিউচুয়াল ফান্ড",
          as: "শ্বেয়াৰ বজাৰ / মিউচুৱেল ফাণ্ড",
          mni: "স্টক মার্কেট / মিউচুয়াল ফান্ড", ne: "शेयर बजार / म्युचुअल फन्ड",
          lus: "Stock market / Mutual funds", kha: "Stock market / Mutual funds",
          grt: "Stock market / Mutual funds", nag: "Stock market / Mutual funds",
          trp: "Stock market / Mutual funds", brx: "स्टक मार्केट / म्युचुअल फन्ड",
        },
        score: 5,
      },
      {
        label: {
          en: "I don't invest yet", bn: "আমি এখনো বিনিয়োগ করি না", as: "মই এতিয়াও বিনিয়োগ নকৰোঁ",
          mni: "ঐ হৌজিক ফাওবা ইনভেস্ট তৌদে", ne: "म अझै लगानी गर्दिन",
          lus: "Ka la hmang hrih lo", kha: "Ngi ym pat invest mynta",
          grt: "Anga matni invest ong·ja", nag: "Mui etu invest nakore",
          trp: "Ang biniyog koriya", brx: "आं दासिम बिनियोग खालामो",
        },
        score: 0,
      },
    ],
  },
  {
    id: "savings_inflation",
    sectionId: "savings",
    question: {
      en: "Do you invest regularly to beat inflation?",
      bn: "মুদ্রাস্ফীতিকে হারাতে আপনি কি নিয়মিত বিনিয়োগ করেন?",
      as: "মুদ্ৰাস্ফীতিক হৰুৱাবলৈ আপুনি নিয়মীয়াকৈ বিনিয়োগ কৰে নে?",
      mni: "ইনফ্লেশন হনবা ফংনবা নহাক্না রেগুলর ইনভেস্ট তৌবা?",
      ne: "मुद्रास्फीतिलाई जित्न के तपाईं नियमित लगानी गर्नुहुन्छ?",
      lus: "Inflation hne turin sum dahna i nei ṭhin em?",
      kha: "Phi invest regular ban beat inflation?",
      grt: "Inflation beat on·na nangni regular invest on·anga?",
      nag: "Inflation beat koribole apne regular invest kore?",
      trp: "Inflation ke haranor jonne nwngni niyomito biniyog koro?",
      brx: "मुद्रास्फीतिखौ सेबायनो नोंथां रेगुलार बिनियोग खालामो?",
    },
    options: [
      {
        label: {
          en: "Yes", bn: "হ্যাঁ", as: "হয়", mni: "হোই", ne: "गर्छु",
          lus: "Aw", kha: "Hooid", grt: "On·a", nag: "Hoi", trp: "Hoi", brx: "गोजৌ",
        },
        score: 5,
      },
      {
        label: {
          en: "No", bn: "না", as: "নহয়", mni: "নত্তে", ne: "गर्दिन",
          lus: "Aih", kha: "Bam", grt: "An·cha", nag: "Nai", trp: "Dakha", brx: "नङা",
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
