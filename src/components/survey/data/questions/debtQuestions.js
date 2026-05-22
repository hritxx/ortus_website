/**
 * Section 4: Debt Check — 2 questions, max 12 points
 */
export const debtQuestions = [
  {
    id: "debt_emi_pct",
    sectionId: "debt",
    question: {
      en: "Your monthly EMIs/loan payments are:",
      bn: "আপনার মাসিক EMI বা ঋণের কিস্তি কত:",
      as: "আপোনাৰ মাহিলী EMI বা ঋণৰ কিস্তি কিমান:",
      mni: "নহাক্কী থা খুদিংগী EMI লোন পেমেন্টশিং:",
      ne: "तपाईंको मासिक EMI वा ऋणको भुक्तानी कति छ:",
      lus: "Thla tin i EMI neih te hi:",
      kha: "Ka EMI bad pisa ram ba phi siew man ka bnai ka long:",
      grt: "Nangni maina maina EMI ba loan pema:",
      nag: "Apne laga mohina EMI ba loan payment khan:",
      trp: "Nwngni maashik EMI ba rin-er kisti koto:",
      brx: "नोंथांनि दाननि EMI एबा रिं होनायया:",
    },
    options: [
      {
        label: {
          en: "No EMIs / Less than 30% of income", bn: "কোনো EMI নেই / আয়ের ৩০% এর কম", as: "কোনো EMI নাই / আয়ৰ ৩০%তকৈ কম",
          mni: "EMI লৈতবা / ইনকমগী ৩০% দগী হন্থনা", ne: "कुनै EMI छैन / आम्दानीको ३०% भन्दा कम",
          lus: "Bat ka nei lo / Sum lakluh 30% aih hnuai", kha: "Ym don EMI / 30% bnai income",
          grt: "EMI dong·ja / Income ni 30% gimin kham", nag: "EMI nai / Income laga 30% kum te",
          trp: "Kono EMI khaila / Aay-er 30% theke kom", brx: "EMI गैया / जागायनायनि 30% निफ्राय गोजौ",
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
          trp: "Aay-er 50% theke besi", brx: "जागायনাयनि 50% निफ्राय गोबां",
        },
        score: 0,
      },
    ],
  },
  {
    id: "debt_creditcard",
    sectionId: "debt",
    question: {
      en: "Credit card usage:",
      bn: "ক্রেডিট কার্ড ব্যবহার:",
      as: "ক্ৰেডিট কাৰ্ড ব্যৱহাৰ:",
      mni: "ক্রেডিট কার্ড শিজিন্নবা:",
      ne: "क्रेडिट कार्ड प्रयोग:",
      lus: "Credit card hman dan:",
      kha: "Jingpyndonkam credit card:",
      grt: "Credit card use on·a:",
      nag: "Credit card use kora:",
      trp: "Credit card byabohar:",
      brx: "क्रेडिट कार्ड बाहायनाय:",
    },
    options: [
      {
        label: {
          en: "I don't use a credit card", bn: "আমি ক্রেডিট কার্ড ব্যবহার করি না",
          as: "মই ক্ৰেডিট কাৰ্ড ব্যৱহাৰ নকৰোঁ",
          mni: "ঐগী ক্রেডিট কার্ড শিজিন্নদে", ne: "म क्रेडिट कार्ड प्रयोग गर्दिन",
          lus: "Credit card ka hmang lo", kha: "Ngi ym pyndonkam credit card",
          grt: "Anga credit card use ong·ja", nag: "Mui credit card use nakore",
          trp: "Ang credit card byabohar koriya", brx: "आं क्रेडिट कार्ड बाहाया",
        },
        score: 6,
      },
      {
        label: {
          en: "Pay full bill every month", bn: "প্রতি মাসে পুরো বিল পরিশোধ করি",
          as: "প্ৰতি মাহে সম্পূৰ্ণ বিল পৰিশোধ কৰোঁ",
          mni: "থা খুদিংদা বিল পুম্নমক পায়", ne: "हरेक महिना पूरा बिल तिर्छु",
          lus: "Thla tin bill pum ka pek", kha: "Bnai bnai pisa full bill",
          grt: "Maina maina full bill pay on·a", nag: "Mohina mohina full bill pay kore",
          trp: "Maash maash purno bill porishodh kori", brx: "दाननि-দানनि गासै बिल होनाय खालामो",
        },
        score: 5,
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
        score: 2,
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
