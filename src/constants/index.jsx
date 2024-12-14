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
    bio: "",
    email: "jortusfinance.invest@gmail.com",
    linkedin: "https://www.facebook.com/profile.php?id=61566181745108",
    twitter: "https://www.instagram.com/0rtusfinance/",
  },
  {
    id: 2,
    name: "Nabanil Debbarma",
    position: "Chief Financial Officer (CFO)",
    key: "",
    image: "/images/team/nabanil.jpg", // Path to local image
    bio: "",
    email: "ortusfinance.invest@gmail.com",
    linkedin: "https://www.facebook.com/profile.php?id=61566181745108",
    twitter: "https://www.instagram.com/0rtusfinance/",
  },
  {
    id: 3,
    name: "Rahul Mog",
    position: "Chief Operating Officer (COO)",
    key: "",
    image: "/images/team/rahul.jpg", // Path to local image
    bio: "",
    email: "ortusfinance.invest@gmail.com",
    linkedin: "https://www.facebook.com/profile.php?id=61566181745108",
    twitter: "https://www.instagram.com/0rtusfinance/",
  },
  {
    id: 4,
    name: "Saugat Debbarma",
    position: "Equity Research Analyst",
    key: "(Trader/Investor)",
    image: "/images/team/saugat.jpg", // Path to local image
    bio: "",
    email: "ortusfinance.invest@gmail.com",
    linkedin: "https://www.facebook.com/profile.php?id=61566181745108",
    twitter: "https://www.instagram.com/0rtusfinance/",
  },
  {
    id: 5,
    name: "Sajib Debbarma",
    position: "Technical Analyst",
    key: "(Trader)",
    image: "/images/team/sajib.jpg", // Path to local image
    bio: "",
    email: "ortusfinance.invest@gmail.com",
    linkedin: "https://www.facebook.com/profile.php?id=61566181745108",
    twitter: "https://twitter.com/sarahlee",
  },
  {
    id: 6,
    name: "Ishak Debbarma",
    position: "Jr. Equity Research Analyst",
    key: "(Trader/Investor) ",
    image: "/images/team/ishak.jpg", // Path to local image
    bio: "",
    email: "ortusfinance.invest@gmail.com",
    linkedin: "https://www.facebook.com/profile.php?id=61566181745108",
    twitter: "https://www.instagram.com/0rtusfinance/",
  },
  {
    id: 7,
    name: "Bikramjit Nath",
    position: "Chief Marketing Officer (CMO)",
    key: "(CMO) ",
    image: "/images/team/bikram.jpg", // Path to local image
    bio: "",
    email: "ortusfinance.invest@gmail.com",
    linkedin: "https://www.facebook.com/profile.php?id=61566181745108",
    twitter: "https://www.instagram.com/0rtusfinance/",
  },
  {
    id: 8,
    name: "Hriteek Roy",
    position: "Chief Technical Officer (CTO)",
    key: "(CTO) ",
    image: "/images/team/hriteek.jpeg", // Path to local image
    bio: "",
    email: "ortusfinance.invest@gmail.com",
    linkedin: "https://www.facebook.com/profile.php?id=61566181745108",
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
    question: "How do I invest with ORTUS FINANCE?",
    answer:
      "To invest, simply contact us to discuss your goals. We’ll create a tailored investment plan. Once you approve, we’ll handle the documentation and initiate your investment.",
  },
  {
    id: 2,
    question: "How does ORTUS FINANCE manage investment risks?",
    answer:
      "We employ structured asset allocation and thorough market analysis to minimize risks while maximizing growth. Our expert team continually monitors your portfolio to adjust strategies as needed.",
  },
  {
    id: 3,
    question: "What fees does ORTUS FINANCE charge?",
    answer:
      "We pride ourselves on minimal management fees, allowing you to keep more of your returns. Detailed fee structures will be provided during your consultation.",
  },
  {
    id: 4,
    question: "How can I withdraw my investments?",
    answer:
      "Withdrawal requests can be initiated at any time. We’ll guide you through the process, ensuring a smooth experience. Please note that withdrawal terms may vary based on your investment tier and agreement.",
  },
  {
    id: 5,
    question: "Are my investments safe with ORTUS FINANCE?",
    answer:
      "Yes, your investments are managed by experienced professionals, and we maintain transparency in all operations. Our risk management strategies are designed to protect your capital while seeking optimal returns.",
  },
  {
    id: 6,
    question: "Can I change my investment strategy later?",
    answer:
      "Absolutely! We encourage regular reviews of your investment strategy to ensure it aligns with your financial goals. Our team is here to assist you with any changes you wish to make.",
  },
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
    ortus: "10%✅",
    gov: "7%",
    nonGov: "7.75%",
    smallBanks: "8.5%",
  },
  {
    id: "5 Lakhs to 20 Lakhs",
    ortus: "12%✅",
    gov: "7%",
    nonGov: "7.75%",
    smallBanks: "8.5%",
  },
  {
    id: "21 Lakhs to 50 Lakhs",
    ortus: "15%✅",
    gov: "7%",
    nonGov: "7.75%",
    smallBanks: "8.5%",
  },
  {
    id: "51 Lakhs to 1 Crore",
    ortus: "20%✅",
    gov: "7%",
    nonGov: "7.75%",
    smallBanks: "8.5%",
  },
  {
    id: "1 Crore and above",
    ortus: "25%✅",
    gov: "7%",
    nonGov: "7.75%",
    smallBanks: "8.5%",
  },
];
