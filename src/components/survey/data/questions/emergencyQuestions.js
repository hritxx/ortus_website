/**
 * Section 3: Emergency Readiness — 2 questions, max 15 points
 */
export const emergencyQuestions = [
  {
    id: "emergency_fund",
    sectionId: "emergency",
    question: {
      en: "Do you have an emergency fund ready?",
      bn: "আপনার কি জরুরি তহবিল প্রস্তুত আছে?",
      as: "আপোনাৰ জৰুৰীকালীন তহবিল সাজু আছে নে?",
      mni: "নহাক্কী ইমার্জেন্সি ফান্ড লৈবা?",
      ne: "तपाईंसँग आपतकालीन कोष तयार छ?",
      lus: "Buaina hun atan sum i nei em?",
      kha: "Phi don ka pisa ban ka jingthoh emergency?",
      grt: "Nangni emergency fund donga?",
      nag: "Apne laga emergency fund ase?",
      trp: "Nwngni joruri tohobil ase?",
      brx: "नोंथांनि गोख्रों समनि बोसোন दं?",
    },
    options: [
      {
        label: {
          en: "Yes", bn: "হ্যাঁ", as: "হয়", mni: "হোই", ne: "छ",
          lus: "Aw", kha: "Hooid", grt: "On·a", nag: "Hoi", trp: "Hoi", brx: "गोजौ",
        },
        score: 7,
      },
      {
        label: {
          en: "No", bn: "না", as: "নহয়", mni: "নত্তে", ne: "छैन",
          lus: "Aih", kha: "Bam", grt: "An·cha", nag: "Nai", trp: "Dakha", brx: "নङা",
        },
        score: 0,
      },
    ],
  },
  {
    id: "emergency_prepared",
    sectionId: "emergency",
    question: {
      en: "If a sudden emergency happens tomorrow, are you financially prepared?",
      bn: "কাল যদি হঠাৎ কোনো জরুরি অবস্থা দেখা দেয়, আপনি কি আর্থিকভাবে প্রস্তুত?",
      as: "কাইলৈ যদি হঠাৎ কোনো জৰুৰীকালীন অৱস্থাৰ সৃষ্টি হয়, আপুনি আৰ্থিকভাৱে প্ৰস্তুত নে?",
      mni: "করিগুম্বা অদুং ফংদা ইমার্জেন্সি অমা লাক্লগদি, নহাক সেলগী মাইকৈদগী শেম-শাবা লৈব্রা?",
      ne: "भोलि अचानक कुनै आपतकालीन अवस्था आइपरेमा, के तपाईं आर्थिक रूपमा तयार हुनुहुन्छ?",
      lus: "Naktukah thawklehkatah buaina thleng thut sela, sum lamah i inpeih em?",
      kha: "Lada ka mih ka jingdon emergency kynsan lashai, phi long kiba la pynkhreh thik pisa?",
      grt: "Ambin salo rang·san emergency ong·ode, nang·ni takagen ready donga?",
      nag: "Kali kiba bisi emergency ahibi, apne poisa side te ready ase?",
      trp: "Khunang rang·san joruri tohobil nangkhe, nwng rangti-ni bagwi ready ase?",
      brx: "गाबोन गोख्रों सम फैयोब्ला, नोंथाङा बेसेन मोजाङै गोख্রों दं?",
    },
    options: [
      {
        label: {
          en: "Yes", bn: "হ্যাঁ", as: "হয়", mni: "হোই", ne: "छ",
          lus: "Aw", kha: "Hooid", grt: "On·a", nag: "Hoi", trp: "Hoi", brx: "गोजौ",
        },
        score: 8,
      },
      {
        label: {
          en: "No", bn: "না", as: "নহয়", mni: "নত্তে", ne: "छैन",
          lus: "Aih", kha: "Bam", grt: "An·cha", nag: "Nai", trp: "Dakha", brx: "নङা",
        },
        score: 0,
      },
      {
        label: {
          en: "Not Sure", bn: "নিশ্চিত নই", as: "নিশ্চিত নহয়", mni: "খংদে", ne: "थाहा छैन",
          lus: "Ka hre chiang lo", kha: "Ym tip", grt: "Anga ym tip", nag: "Thik te nai janena", trp: "Nischit noi", brx: "गोसा मोन नांगौ",
        },
        score: 3,
      },
    ],
  },
];
