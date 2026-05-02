/**
 * Section 6: Financial Goals — 3 questions, max 15 points
 */
export const goalsQuestions = [
  {
    id: "goals_clear",
    sectionId: "goals",
    question: {
      en: "Do you have clear financial goals (house, car, retirement)?",
      bn: "আপনার কি স্পষ্ট আর্থিক লক্ষ্য আছে (বাড়ি, গাড়ি, অবসর)?",
      as: "আপোনাৰ স্পষ্ট আৰ্থিক লক্ষ্য আছে নে (ঘৰ, গাড়ী, অৱসৰ)?",
      mni: "নহাক্কী ক্লিয়র ফাইনান্সিয়েল গোল লৈবা (য়ুম, গাড়ী, রিটায়ার্মেন্ট)?",
      ne: "तपाईंसँग स्पष्ट आर्थिक लक्ष्यहरू छन् (घर, गाडी, सेवानिवृत्ति)?",
      lus: "Sum bik tumkau chiang tak i nei em (in, motor, pension)?",
      kha: "Phi don ka jingtip pisa (ïng, motor, pension)?",
      grt: "Nangni clear financial goals donga (ong, gari, retirement)?",
      nag: "Apne laga clear financial goals ase (ghor, gari, retirement)?",
      trp: "Nwngni sposto arthik lokkho ase (ghor, gari, obosor)?",
      brx: "नोंथांनि फोरमान बोसोन लक्ष दं (न, गारि, रिटायार्मेन्ट)?",
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
    id: "goals_calculated",
    sectionId: "goals",
    question: {
      en: "Have you calculated how much money you'll need?",
      bn: "আপনি কি হিসাব করেছেন কত টাকা লাগবে?",
      as: "আপুনি হিচাপ কৰিছে নে কিমান টকা লাগিব?",
      mni: "শেল অমুক থোকপা দরকার ওইগনি হায়না নহাক্না কেলকুলেট তৌরবা?",
      ne: "तपाईंले कति पैसा चाहिन्छ भनेर गणना गर्नुभएको छ?",
      lus: "Eng zat nge sum mamawh i ti a, i chhut ṭhat tawh em?",
      kha: "Phi la tip kumno ka pisa phi don ban?",
      grt: "Nangni calculate on·aha kuri takagen lagbo?",
      nag: "Apne calculate kori saha kiman paisa lagibo?",
      trp: "Nwngni hishab korechho koto taka lagbe?",
      brx: "नोंथां हिसाब खालामबाय बेसेन बोसोन गोनां जागौ?",
    },
    options: [
      {
        label: {
          en: "Yes", bn: "হ্যাঁ", as: "হয়", mni: "হোই", ne: "गरेको छु",
          lus: "Aw", kha: "Hooid", grt: "On·a", nag: "Hoi", trp: "Hoi", brx: "गोजौ",
        },
        score: 5,
      },
      {
        label: {
          en: "No", bn: "না", as: "নহয়", mni: "নত্তে", ne: "गरेको छैन",
          lus: "Aih", kha: "Bam", grt: "An·cha", nag: "Nai", trp: "Dakha", brx: "नङा",
        },
        score: 0,
      },
    ],
  },
  {
    id: "goals_investing",
    sectionId: "goals",
    question: {
      en: "Are you actively investing to achieve these goals?",
      bn: "আপনি কি এই লক্ষ্যগুলি অর্জনে সক্রিয়ভাবে বিনিয়োগ করছেন?",
      as: "আপুনি এই লক্ষ্যসমূহ অৰ্জন কৰিবলৈ সক্ৰিয়ভাৱে বিনিয়োগ কৰি আছে নে?",
      mni: "গোল অসিশিং ফংনবা নহাক্না এক্টিভলি ইনভেস্ট তৌরিবা?",
      ne: "तपाईं यी लक्ष्यहरू प्राप्त गर्न सक्रिय रूपमा लगानी गर्दै हुनुहुन्छ?",
      lus: "He tumkau te hlen nan sum i dah mek mek em?",
      kha: "Phi invest actively ban ka jingtip?",
      grt: "Nangni actively invest on·anga goals ni gimin?",
      nag: "Apne actively invest kori ase goals laka?",
      trp: "Nwngni sokkriyobhabe biniyog korchho lokkho guli-r jonne?",
      brx: "नोंथां बे लक्ष आव सोलिनो थाखाय गोहोजों बिनियोग खालामदों?",
    },
    options: [
      {
        label: {
          en: "Yes", bn: "হ্যাঁ", as: "হয়", mni: "হোই", ne: "गर्दैछु",
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
];
