/**
 * Survey section definitions with translated names and scoring metadata.
 */
export const SECTIONS = [
  {
    id: "income",
    icon: "Wallet",
    maxScore: 10,
    name: {
      en: "Income Security", bn: "আয়ের নিরাপত্তা", as: "আয়ৰ নিৰাপত্তা",
      mni: "লুপা চংবগী সেক্যুরিটি", ne: "आम्दानी सुरक्षा", lus: "Sum lakluh himna",
      kha: "Ka jingrada pisa", grt: "Takagen chanchi aro security",
      nag: "Income security", trp: "Aay-er nirapotta", brx: "जागायनायনি गोहो",
    },
  },
  {
    id: "spending",
    icon: "ShoppingCart",
    maxScore: 10,
    name: {
      en: "Money Habits", bn: "অর্থের অভ্যাস", as: "টকাৰ অভ্যাস",
      mni: "শেলগী লমচৎ", ne: "पैसाको बानी", lus: "Sum hman dan tawnhriat",
      kha: "Ka rukom pyndonkam pisa", grt: "Takagen chanchi aro habits",
      nag: "Poisa khoroch habits", trp: "Rangti-ni obhyas",
      brx: "राहा बायनाय आदत",
    },
  },
  {
    id: "emergency",
    icon: "Shield",
    maxScore: 15,
    name: {
      en: "Emergency Readiness", bn: "জরুরি প্রস্তুতি", as: "জৰুৰী প্ৰস্তুতি",
      mni: "জরুরি শেম-শাবা", ne: "आपतकालीन तयारी", lus: "Buaina hun atan inpeihna",
      kha: "Ka jinglong pynkhreh emergency", grt: "Emergency readiness",
      nag: "Emergency readiness", trp: "Joruri prostuti", brx: "गोख्रों समनि मोजां थाखानाय",
    },
  },
  {
    id: "debt",
    icon: "CreditCard",
    maxScore: 12,
    name: {
      en: "Debt Check", bn: "ঋণ যাচাই", as: "ঋণ নিৰীক্ষণ",
      mni: "ঋণ থীজিনবা", ne: "ऋण जाँच", lus: "Bat chhiar",
      kha: "Ka bat check", grt: "Rin ko check on·a",
      nag: "Rin check", trp: "Rin check", brx: "रिं नायनाय",
    },
  },
  {
    id: "savings",
    icon: "PiggyBank",
    maxScore: 10,
    name: {
      en: "Wealth Building", bn: "সম্পদ বৃদ্ধি", as: "সম্পদ গঠন",
      mni: "শেল পু থোকপা", ne: "सम्पत्ति निर्माण", lus: "Sum tam zawk neih",
      kha: "Ka pisa pynmih kamai", grt: "Takagen pynbih",
      nag: "Poisa pynbih", trp: "Rangti khaina", brx: "राहा थुनाय",
    },
  },
  {
    id: "goals",
    icon: "Target",
    maxScore: 22,
    name: {
      en: "Future Planning", bn: "ভবিষ্যত পরিকল্পনা", as: "ভৱিষ্যত পৰিকল্পনা",
      mni: "তুংগী থৌরাং", ne: "भविष्यको योजना", lus: "Lashai hmalam thlirpui",
      kha: "Ka lashai longplan", grt: "Future planning",
      nag: "Future planning", trp: "Future planning", brx: "इউননি मोजां साननाय",
    },
  },
];

export function getSectionById(id) {
  return SECTIONS.find((s) => s.id === id);
}
