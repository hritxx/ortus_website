/**
 * Section 1: Income Stability — 3 questions, max 15 points
 */
export const incomeQuestions = [
  {
    id: "income_regular",
    sectionId: "income",
    question: {
      en: "Do you have a regular and predictable source of income?",
      bn: "আপনার কি নিয়মিত এবং পূর্বানুমেয় আয়ের উৎস আছে?",
      as: "আপোনাৰ নিয়মীয়া আৰু পূৰ্বানুমেয় আয়ৰ উৎস আছে নে?",
      mni: "নহাক্কী রেগুলর অমসুং থীজিনবা য়াবা ইনকম সোর্স অমা লৈবা?",
      ne: "तपाईंसँग नियमित र अनुमानित आम्दानीको स्रोत छ?",
      lus: "Sum lakluh tur rinawm i nei em?",
      kha: "Phi don ka regular ka jingkamiai?",
      grt: "Nangni regular income source donga?",
      nag: "Apne laga regular income source ase?",
      trp: "Nwngni niyomito aar purbanumey aay-er uthso ase?",
      brx: "नोंथांनि रेगुलार आरो फोरमायनो हायो गोनां जागायनायनि मुवा दं?",
    },
    options: [
      {
        label: {
          en: "Yes", bn: "হ্যাঁ", as: "হয়", mni: "হোই", ne: "छ",
          lus: "Aw", kha: "Hooid", grt: "On·a", nag: "Hoi", trp: "Hoi", brx: "गोजौ",
        },
        score: 5,
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
    id: "income_survival",
    sectionId: "income",
    question: {
      en: "If your income stops today, how long can you survive?",
      bn: "আজ যদি আপনার আয় বন্ধ হয়ে যায়, আপনি কতদিন চলতে পারবেন?",
      as: "আজি যদি আপোনাৰ আয় বন্ধ হয়, কিমান দিন চলিব পাৰিব?",
      mni: "ঙসি নহাক্কী ইনকম লেপ্পোনিং, করিগুম্বা চৎলি হায়না য়াগনি?",
      ne: "आज तपाईंको आम्दानी बन्द भए कति समय बाँच्न सक्नुहुन्छ?",
      lus: "Naktuk aṭanga i sum lakluh a awm tawh lo a nih chuan eng chen nge i dam thei ang?",
      kha: "Mynta la ka jingkamiai ka jah stop, kumno ba snem phi im thei?",
      grt: "Matni nangni income band japa gita, kuri din chal·bo?",
      nag: "Aji apne income bond hoi gele, kiman din cholibo paribo?",
      trp: "Aaj nwngni aay bondho hoye gele, koto din cholte parba?",
      brx: "दिनै नोंथांनि जागायनाय लोगोसे बन्द जाबाय, बेसेन सान हारि थानो हागौ?",
    },
    options: [
      {
        label: {
          en: "Less than 1 month", bn: "১ মাসের কম", as: "১ মাহতকৈ কম",
          mni: "থা ১দগী হন্থনা", ne: "१ महिनाभन्दा कम",
          lus: "Thla 1 aih hnuai", kha: "Hajar 1 bnai ka snem",
          grt: "1 maina gimin kham", nag: "1 month kum te",
          trp: "1 maash theke kom", brx: "1 दान सोलोंनिफ्राय गोजौ",
        },
        score: 0,
      },
      {
        label: {
          en: "1–3 months", bn: "১–৩ মাস", as: "১–৩ মাহ", mni: "থা ১–৩",
          ne: "१–३ महिना", lus: "Thla 1–3", kha: "1–3 bnai",
          grt: "1–3 maina", nag: "1–3 month", trp: "1–3 maash", brx: "1–3 दान",
        },
        score: 2,
      },
      {
        label: {
          en: "3–6 months", bn: "৩–৬ মাস", as: "৩–৬ মাহ", mni: "থা ৩–৬",
          ne: "३–६ महिना", lus: "Thla 3–6", kha: "3–6 bnai",
          grt: "3–6 maina", nag: "3–6 month", trp: "3–6 maash", brx: "3–6 दान",
        },
        score: 4,
      },
      {
        label: {
          en: "More than 6 months", bn: "৬ মাসের বেশি", as: "৬ মাহতকৈ বেছি",
          mni: "থা ৬দগী হেনবা", ne: "६ महिनाभन्दा बढी",
          lus: "Thla 6 aia", kha: "6 bnai bah ka snem",
          grt: "6 maina gimin bisi", nag: "6 month te bisi",
          trp: "6 maash theke besi", brx: "6 दान सोलोंनिफ्राय गोबां",
        },
        score: 5,
      },
    ],
  },
  {
    id: "income_multiple",
    sectionId: "income",
    question: {
      en: "Do you have multiple income sources?",
      bn: "আপনার কি একাধিক আয়ের উৎস আছে?",
      as: "আপোনাৰ একাধিক আয়ৰ উৎস আছে নে?",
      mni: "নহাক্কী ইনকম সোর্স মশিং লৈবা?",
      ne: "तपाईंसँग बहु आम्दानीका स्रोतहरू छन्?",
      lus: "Sum lakluh hrang hrang i nei em?",
      kha: "Phi don katto katto ka jinglah pisa?",
      grt: "Nangni gittik income source donga?",
      nag: "Apne laga olop olop income source ase?",
      trp: "Nwngni onek aay-er uthso ase?",
      brx: "नोंथांनि गोबां गोबां जागायनायनि मुवा दं?",
    },
    options: [
      {
        label: {
          en: "Yes", bn: "হ্যাঁ", as: "হয়", mni: "হোই", ne: "छ",
          lus: "Aw", kha: "Hooid", grt: "On·a", nag: "Hoi", trp: "Hoi", brx: "गोजौ",
        },
        score: 5,
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
];
