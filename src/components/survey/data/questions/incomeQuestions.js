/**
 * Section 1: Income Security — 2 questions, max 10 points
 */
export const incomeQuestions = [
  {
    id: "income_multiple",
    sectionId: "income",
    question: {
      en: "Do you have more than one source of income?",
      bn: "আপনার কি একাধিক আয়ের উৎস আছে?",
      as: "আপোনাৰ একাধিক আয়ৰ উৎস আছে নে?",
      mni: "নহাক্কী ইনকম সোর্স মশিং লৈবা?",
      ne: "तपाईंसँग बहु आम्दानीका स्रोतहरू छन्?",
      lus: "Sum lakluh hrang hrang i nei em?",
      kha: "Phi don katto katto ka jinglah pisa?",
      grt: "Nangni gittik income source donga?",
      nag: "Apne laga olop olop income source ase?",
      trp: "Nwngni onek aay-er uthso ase?",
      brx: "नोंथांनि गोबां गोबां जागाয়नायनि मुवा दं?",
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
          lus: "Aih", kha: "Bam", grt: "An·cha", nag: "Nai", trp: "Dakha", brx: "নङা",
        },
        score: 0,
      },
    ],
  },
  {
    id: "income_survival",
    sectionId: "income",
    question: {
      en: "If your income stops today, how long can you survive comfortably?",
      bn: "আজ যদি আপনার আয় বন্ধ হয়ে যায়, আপনি কতদিন স্বাচ্ছন্দ্যে চলতে পারবেন?",
      as: "আজি যদি আপোনাৰ আয় বন্ধ হয়, কিমান দিন আৰামত চলিব পাৰিব?",
      mni: "ঙসি নহাক্কী ইনকম লেপ্পোনিং, নহাক্না নুংঙাইনা করিগুম্বা চৎলি হায়না য়াগনি?",
      ne: "आज तपाईंको आम्दानी बन्द भए कति समयसम्म सजिलै बाँच्न सक्नुहुन्छ?",
      lus: "Vawiin aṭanga i sum lakluh a tawp a nih chuan eng chen nge nuam taka i dam khawchhuah thei ang?",
      kha: "Lada ka jingkamiai jong phi ka jah stop mynta, phi lah ban im suk kumno ba slem?",
      grt: "Matni nangni income band japa gita, namgipa gita kuri din chal·bo?",
      nag: "Aji apne income bond hoi gele, kiman din aram te cholibo paribo?",
      trp: "Aaj nwngni aay bondho hoye gele, koto din shukhe cholte parba?",
      brx: "दिनै नोंथांनि जागायनाय बन्द जाबाय, नोंथाङा बेसेन मोजाङै थानो हागौ?",
    },
    options: [
      {
        label: {
          en: "Less than 1 month", bn: "১ মাসের কম", as: "১ মাহতকৈ কম",
          mni: "থা ১দগী হন্থনা", ne: "१ महिनाभन्दा कम",
          lus: "Thla 1 aih hnuai", kha: "Hajar 1 bnai ka snem",
          grt: "1 maina gimin kham", nag: "1 month kum te",
          trp: "1 maash theke kom", brx: "1 दान सोलोंनिफ्रায় গোজौ",
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
          trp: "6 maash theke besi", brx: "6 दान सोलोंনিफ्रায় গোবাं",
        },
        score: 5,
      },
    ],
  },
];
