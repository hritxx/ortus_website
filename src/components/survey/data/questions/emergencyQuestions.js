/**
 * Section 3: Emergency Preparedness — 2 questions, max 15 points
 */
export const emergencyQuestions = [
  {
    id: "emergency_fund",
    sectionId: "emergency",
    question: {
      en: "Do you have an emergency fund?",
      bn: "আপনার কি জরুরি তহবিল আছে?",
      as: "আপোনাৰ জৰুৰীকালীন তহবিল আছে নে?",
      mni: "নহাক্কী ইমার্জেন্সি ফান্ড লৈবা?",
      ne: "तपाईंसँग आपतकालीन कोष छ?",
      lus: "Buaina hun atan sum i nei em?",
      kha: "Phi don ka pisa ban ka jingthoh emergency?",
      grt: "Nangni emergency fund donga?",
      nag: "Apne laga emergency fund ase?",
      trp: "Nwngni joruri tohobil ase?",
      brx: "नोंथांनि गोख्रों समनि बोसोन दं?",
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
          lus: "Aih", kha: "Bam", grt: "An·cha", nag: "Nai", trp: "Dakha", brx: "नङा",
        },
        score: 0,
      },
    ],
  },
  {
    id: "emergency_months",
    sectionId: "emergency",
    question: {
      en: "Is your emergency fund enough for:",
      bn: "আপনার জরুরি তহবিল কতদিনের জন্য যথেষ্ট:",
      as: "আপোনাৰ জৰুৰীকালীন তহবিল কিমান দিনৰ বাবে যথেষ্ট:",
      mni: "নহাক্কী ইমার্জেন্সি ফান্ড করিগুম্বা চৎনবা:",
      ne: "तपाईंको आपतकालीन कोष कति समयको लागि पर्याप्त छ:",
      lus: "I buaina hun sum hi eng chen nge a tling:",
      kha: "Ka pisa emergency phi ka jah noh ban:",
      grt: "Nangni emergency fund kuri din nangbo:",
      nag: "Apne emergency fund kiman din te cholibo:",
      trp: "Nwngni joruri tohobil koto din-er jonne jogesto:",
      brx: "नोंथांनि गोख्रों बोसोन बेसेन सानसिम जाथागौ:",
    },
    options: [
      {
        label: {
          en: "0–1 month", bn: "০–১ মাস", as: "০–১ মাহ", mni: "থা ০–১",
          ne: "०–१ महिना", lus: "Thla 0–1", kha: "0–1 bnai",
          grt: "0–1 maina", nag: "0–1 month", trp: "0–1 maash", brx: "0–1 दान",
        },
        score: 2,
      },
      {
        label: {
          en: "1–3 months", bn: "১–৩ মাস", as: "১–৩ মাহ", mni: "থা ১–৩",
          ne: "१–३ महिना", lus: "Thla 1–3", kha: "1–3 bnai",
          grt: "1–3 maina", nag: "1–3 month", trp: "1–3 maash", brx: "1–3 दान",
        },
        score: 4,
      },
      {
        label: {
          en: "3–6 months", bn: "৩–৬ মাস", as: "৩–৬ মাহ", mni: "থা ৩–৬",
          ne: "३–६ महिना", lus: "Thla 3–6", kha: "3–6 bnai",
          grt: "3–6 maina", nag: "3–6 month", trp: "3–6 maash", brx: "3–6 दान",
        },
        score: 6,
      },
      {
        label: {
          en: "6+ months", bn: "৬+ মাস", as: "৬+ মাহ", mni: "থা ৬+",
          ne: "६+ महिना", lus: "Thla 6+", kha: "6+ bnai",
          grt: "6+ maina", nag: "6+ month", trp: "6+ maash", brx: "6+ दान",
        },
        score: 8,
      },
    ],
  },
];
