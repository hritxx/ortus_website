import { SocialMediaProfiles } from "@/components/SocialMedia";

// import Customer1 from "@/public/images/customers/Aayush.png";
import Customer2 from "@/images/customers/Dikshyanta.png";
import Customer3 from "@/images/customers/Sulav.png";

import Customer1 from "@/images/customers/Aayush.png";

export const teamMembers = [
  {
    id: 1,
    name: "Prantik Deb",
    position: "Founder & CEO",
    image: "/images/team/prantik.jpg", // Path to local image
    bio: "I'm a B.Tech CSE graduate and now the CMO at Ortus Finance.in, where I craft marketing strategies that bring people, technology, and growth together. I'm passionate about innovation, emerging tech, and making finance feel simple and accessible to everyone.",
    email: "admin@ortusfinance.in",
    linkedin: "https://www.linkedin.com/in/prantik-deb-53485925a/",
    twitter: "https://www.instagram.com/0rtusfinance/",
  },
  {
    id: 2,
    name: "Nabanil Debbarma",
    position: "Chief Financial Officer (CFO)",
    key: "MBA-Finance & Data Analytics | BBA-Finance (Gold Medalist) | Ex-Intern at Tripura Gramin Bank",
    image: "/images/team/nabanil.jpg", // Path to local image
    bio: "MBA-Finance & Data Analytics | BBA-Finance (Gold Medalist) | Ex-Intern at Tripura Gramin Bank",
    email: "finance@ortusfinance.in",
    linkedin: "https://www.linkedin.com/in/nabanil-debbarma-692152279/",
    twitter: "https://www.instagram.com/0rtusfinance/",
  },
  {
    id: 3,
    name: "Rahul Mog",
    position: "Chief Operating Officer (COO)",
    key: "(COO) ",
    image: "/images/team/rahul.jpg", // Path to local image
    bio: "Attended National Institute of Technology Agartala (NITA) | B.Tech in Mechanical Engineering |",
    email: "ortusfinance.invest@gmail.com",
    linkedin: "https://www.facebook.com/profile.php?id=61566181745108",
    twitter: "https://www.instagram.com/0rtusfinance/",
  },
  {
    id: 4,
    name: "Om Prakash Badal",
    position: "HR Manager (MD)",
    key: "(HR) ",
    image: "/images/team/om.png", // Path to local image
    bio: "Intern at SBI|MBA(Finance & Business intelligence and analytics)|Ex-intern(LIC)|Ex-intern(Royal enfield)|BBA(Finance)",
    email: "support@ortusfinance.in",
    linkedin: "https://www.linkedin.com/in/om-prakash-badal-75a445267/",
    twitter: "https://www.instagram.com/0rtusfinance/",
  },
  {
    id: 5,
    name: "Samrat Dasgupta",
    position: "Managing Director (MD)",
    key: "(MD) ",
    image: "/images/team/samrat.jpeg", // Path to local image
    bio: "I am a BBA graduate with a specialization in Finance and Marketing. I have a keen interest in the financial markets and am dedicated to helping clients achieve their financial goals through strategic investment planning.",
    email: "manager@ortusfinance.in",
    linkedin: "",
    twitter: "",
  },
  {
    id: 6,
    name: "Ravinder Kumar",
    position: "Lead Research Analyst",
    key: "(Research Analyst) ",
    image: "/images/team/ravinder.png", // Path to local image
    bio: "As an MBA student at Chandigarh University specializing in Finance & Marketing, I bring a unique fusion of analytical and creative talents to the table. My education in the arts at PDUSU has instilled in me a deep understanding of diverse cultural and media landscapes, which I leverage to add depth to our financial strategies and marketing initiatives.",
    email: "research@ortusfinance.in",
    linkedin: "https://www.linkedin.com/in/ravinderkc/",
    twitter: "https://twitter.com/sarahlee",
  },
  {
    id: 7,
    name: "Sajib Debbarma",
    position: "Technical Analyst",
    key: "(Trader)",
    image: "/images/team/sajib.jpg", // Path to local image
    bio: "I have successfully completed my BBA in finance and gained valuable work experience | Ex-Tripura State Co-operative Bank Intern | Ex- TalkEng Intern.",
    email: "analyst@ortusfinance.in",
    linkedin: "https://www.linkedin.com/in/sajib-debbarma-114ab7159/",
    twitter: "https://twitter.com/sarahlee",
  },
  // {
  //   id: 6,
  //   name: "Ishak Debbarma",
  //   position: "Jr. Equity Research Analyst",
  //   key: "(Trader/Investor) ",
  //   image: "/images/team/ishak.jpg", // Path to local image
  //   bio: "",
  //   email: "ortusfinance.invest@gmail.com",
  //   linkedin: "https://www.facebook.com/profile.php?id=61566181745108",
  //   twitter: "https://www.instagram.com/0rtusfinance/",
  // },
  {
    id: 8,
    name: "Bikramjit Nath",
    position: "Chief Marketing Officer (CMO)",
    key: "(CMO) ",
    image: "/images/team/bikram.jpg", // Path to local image
    bio: "UG Student @ The ICFAI University, Tripura || Python || SQL|| Machine learning || Data Science || Digital Marketing",
    email: "marketing@ortusfinance.in",
    linkedin: "https://www.linkedin.com/in/bikramjit03/",
    twitter: "https://www.instagram.com/0rtusfinance/",
  },
  {
    id: 9,
    name: "Hriteek Roy",
    position: "Software Developer",
    key: "(Developer)",
    image: "/images/team/hriteek.jpeg", // Path to local image
    bio: "Software Engineer | Machine Learning & Full-Stack Development Enthusiast | Passionate Problem Solver | CSE Student at ICFAI University Tripura",
    email: "digital@ortusfinance.in",
    linkedin:
      "https://www.linkedin.com/in/hriteek-roy-4215091a4/?trk=opento_sprofile_details",
    twitter: "https://www.instagram.com/0rtusfinance/",
  },
];

export const navigation = [
  {
    title: "Work",
    links: [
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Process", href: "/process" },
      { title: "Licenses", href: "/licenses" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];

export const data = [
  {
    id: 1,
    question: "What is the investment process at Ortus Finance?",
    answer:
      "Investing with us is simple. Contact our team to discuss your financial goals. Based on your inputs, we'll design a customized investment plan. Once approved, we'll handle the documentation and begin the investment process seamlessly.",
  },
  {
    id: 2,
    question: "How does Ortus Finance manage investment risks?",
    answer:
      "We use a structured asset allocation model backed by in-depth market research and analysis. Our expert team constantly monitors your portfolio and makes strategic adjustments to balance risk and growth.",
  },
  {
    id: 3,
    question: "What fees does Ortus Finance charge?",
    answer:
      "We follow a minimal fee structure to ensure you retain the maximum portion of your returns. A detailed fee breakdown will be shared during your consultation.",
  },
  {
    id: 4,
    question: "How can I withdraw my investments?",
    answer:
      "You can initiate a withdrawal anytime, and we’ll assist you throughout the process for a smooth exit. Do note, withdrawal terms may vary depending on your investment tier and the agreed terms.",
  },
  {
    id: 5,
    question: "Are my investments safe with Ortus Finance?",
    answer:
      "Yes, your investments are managed by professionals with over 10 years of experience. We ensure transparency, and our risk management framework is designed to protect your capital while aiming for consistent growth.",
  },
  {
    id: 6,
    question: "Can I change my investment strategy later?",
    answer:
      "Absolutely! We encourage regular reviews of your strategy to ensure it aligns with your evolving goals. Our team is always available to assist with modifications.",
  },
];

export const courseData = [
  {
    id: 1,
    q: "Do I need prior trading knowledge?",
    a: "No, our beginner courses are designed for absolute newcomers. Advanced courses specify prerequisites.",
  },
  {
    id: 2,
    q: "Are these courses live or recorded?",
    a: "Most courses are recorded for flexible learning. Some include live Q&A sessions.",
  },
  {
    id: 3,
    q: "Can I access the course after payment forever?",
    a: "Yes, you get lifetime access to all purchased courses and materials.",
  },
  {
    id: 4,
    q: "Do you provide certificates?",
    a: "Yes, a certificate is awarded upon successful completion of each course.",
  },
  {
    id: 5,
    q: "What payment methods do you accept?",
    a: "We accept various payment methods including credit/debit cards, UPI, and bank transfers for your convenience.",
  },
  {
    id: 6,
    q: "Is there a money-back guarantee?",
    a: "Yes, we offer a 7-day money-back guarantee if you're not satisfied with the course content.",
  }
];

export const reviews = [
  {
    image: Customer1,
    name: "Rajib Das",
    quote:
      "I’ve tried different investment options, but none compare to the consistent and impressive returns I’ve received from ORTUS FINANCE. Truly a game-changer!",
  },
  {
    image: Customer3,
    name: "Raju Saha",
    quote:
      "ORTUS FINANCE stands out with its integrity and commitment to clients. I feel confident knowing my investments are in safe hands with experienced professionals.",
  },
  {
    image: Customer2,
    name: "Haridhan Deb",
    quote:
      "I was initially cautious about investing, but ORTUS FINANCE earned my trust with their impressive returns and hassle-free process. Highly recommended!",
  },
  {
    image: Customer1,
    name: "Bijaya Deb",
    quote:
      "I've experienced exceptional growth with ORTUS FINANCE. Their low fees and expert guidance have made a significant difference in my financial planning.",
  },
];

export const tableData = [
  {
    id: "",
    ortus: "Guaranteed",
    gov: "Upto",
    nonGov: "Upto",
    smallBanks: "Upto",
  },
  {
    id: "1 Lakhs to 4.99 Lakhs",
    ortus: "12%✅",
    gov: "7%",
    nonGov: "7.75%",
    smallBanks: "8.5%",
  },
  {
    id: "5 Lakhs to 20 Lakhs",
    ortus: "13%✅",
    gov: "7%",
    nonGov: "7.75%",
    smallBanks: "8.5%",
  },
  {
    id: "21 Lakhs to 50 Lakhs",
    ortus: "14%✅",
    gov: "7%",
    nonGov: "7.75%",
    smallBanks: "8.5%",
  },
  {
    id: "51 Lakhs to 1 Crore",
    ortus: "15%✅",
    gov: "7%",
    nonGov: "7.75%",
    smallBanks: "8.5%",
  },
];
