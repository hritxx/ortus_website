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
    bio: "Visionary leader who founded Ortus Finance to democratize investment opportunities in Northeast India. Under his leadership, the company has grown to serve thousands of clients with innovative financial solutions and consistent returns.",
    email: "admin@ortusfinance.in",
    linkedin: "https://www.linkedin.com/in/prantik-deb-53485925a/",
    twitter: "https://www.instagram.com/0rtusfinance/",
  },
  {
    id: 2,
    name: "Nabanil Debbarma",
    position: "Chief Financial Officer (CFO)",
    key: "MBA-Finance & Data Analytics | BBA-Finance (Gold Medalist) | Ex-Intern at Tripura Gramin Bank",
    image: "/images/nabanil.jpg", // Path to local image
    bio: "Brings exceptional financial expertise to Ortus Finance with his MBA in Finance & Data Analytics and Gold Medal BBA. His banking experience at Tripura Gramin Bank enables strategic financial planning and risk management that drives our consistent 12-15% returns.",
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
    bio: "Engineering graduate from NIT Agartala who streamlines Ortus Finance's operations with systematic efficiency. His technical background ensures seamless client onboarding, portfolio management, and investment execution processes.",
    email: "ortusfinance.invest@gmail.com",
    linkedin: "https://www.facebook.com/profile.php?id=61566181745108",
    twitter: "https://www.instagram.com/0rtusfinance/",
  },
  {
    id: 4,
    name: "Om Prakash Badal",
    position: "Chief Financial Officer (CFO) & HR Manager (MD)",
    key: "(HR) ",
    image: "/images/team/om.png", // Path to local image
    bio: "Experienced HR professional with internships at SBI, LIC, and Royal Enfield. At Ortus Finance, he builds our talent acquisition strategy and maintains our client-first culture that has earned us a 95% client satisfaction rate.",
    email: "support@ortusfinance.in",
    linkedin: "https://www.linkedin.com/in/om-prakash-badal-75a445267/",
    twitter: "https://www.instagram.com/0rtusfinance/",
  },
  // {
  //   id: 5,
  //   name: "Samrat Dasgupta",
  //   position: "Managing Director (MD)",
  //   key: "(MD) ",
  //   image: "/images/team/samrat.jpeg", // Path to local image
  //   bio: "Strategic leader with BBA in Finance & Marketing who drives Ortus Finance's client relationship management. His market insights and investment planning expertise have helped clients achieve their financial goals across diverse investment portfolios.",
  //   email: "manager@ortusfinance.in",
  //   linkedin: "",
  //   twitter: "",
  // },
  {
    id: 5,
    name: "Ravinder Kumar",
    position: "Lead Research Analyst",
    key: "(Research Analyst) ",
    image: "/images/team/ravinder.png", // Path to local image
    bio: "MBA candidate at Chandigarh University specializing in Finance & Marketing. At Ortus Finance, he leads our research division, conducting in-depth market analysis and identifying high-potential investment opportunities that form the backbone of our investment strategies.",
    email: "research@ortusfinance.in",
    linkedin: "https://www.linkedin.com/in/ravinderkc/",
    twitter: "https://twitter.com/sarahlee",
  },
  {
    id: 6,
    name: "Sajib Debbarma",
    position: "Technical Analyst",
    key: "(Trader)",
    image: "/images/team/sajib.jpg", // Path to local image
    bio: "BBA Finance graduate with banking experience at Tripura State Co-operative Bank. At Ortus Finance, he specializes in technical analysis and trading strategies, helping optimize entry and exit points for our investment portfolios.",
    email: "analyst@ortusfinance.in",
    linkedin: "https://www.linkedin.com/in/sajib-debbarma-114ab7159/",
    twitter: "https://twitter.com/sarahlee",
  },
  {
    id: 7,
    name: "Bikramjit Nath",
    position: "Chief Technical Officer (CTO)",
    key: "(CTO) ",
    image: "/images/team/bikram.png", // Path to local image
    bio: "He oversees the company's tech team, ensuring seamless digital operations and platform development. Alongside, he manages ground operations, client onboarding, relationship management, and daily process execution.",
    email: "marketing@ortusfinance.in",
    linkedin: "https://www.linkedin.com/in/bikramjit03/",
    twitter: "https://www.instagram.com/0rtusfinance/",
  },
  {
    id: 8,
    name: "Hriteek Roy",
    position: "Software Developer",
    key: "(Developer)",
    image: "/images/team/hriteek.jpeg", // Path to local image
    bio: "He is the Tech Lead at Ortus Finance, a Full-stack developer and Machine Learning enthusiast. At Ortus Finance, he develops and maintains our digital infrastructure, including client portals, investment tracking systems, and automated reporting tools that enhance our service delivery.",
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
