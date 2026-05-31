// "use client";
// import { useRef } from "react";
// import CenterAligner from "./CenterAligner";

// //related to the slider
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { reviews } from "@/constants";
// import Image from "next/image";
// import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
// import {
//   MdOutlineArrowBackIos,
//   MdOutlineArrowForwardIos,
// } from "react-icons/md";
// import Container from "./Container";

// const Testimonial = () => {
//   const sliderRef = useRef();
//   //settings for the slider
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//   };
//   return (
//     <Container>
//       <CenterAligner className="mt-12  bg-blue-900  rounded-4xl">
//         <h1 className="text-slate-200 text-center text-2xl font-bold sm:text-3xl pb-8">
//           Customers 🤍{" "}
//           <strong className="font-semibold bg-gradient-to-r from-red-500 via-green-400 to-yellow-500 bg-clip-text text-transparent">
//             ORTUS FINANCE
//           </strong>
//         </h1>
//         {/* Container for the slider */}
//         <section className="max-w-[1100px] mx-auto rounded-xl relative overflow-hidden  ">
//           {/* Main Section */}
//           <Slider {...settings} ref={sliderRef}>
//             {reviews.map((single, index) => {
//               return (
//                 <div key={index}>
//                   <section className="mx-auto bg-white sm:p-12 grid grid-cols-1 sm:grid-cols-[1fr_3fr] md:grid-cols-[1fr_4fr] items-center gap-5 rounded-xl overflow-hidden pt-4 pb-4">
//                     {/* left section */}
//                     <div className="space-y-5 text-center">
//                       <div className="border-8 inline-block rounded-full border-purple-200 p-2.5">
//                         <div className="mx-auto w-[100px] h-[100px] rounded-full bg-gray-200 overflow-hidden">
//                           <Image
//                             src={single.image}
//                             alt="user"
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                       </div>
//                       {/*others */}
//                       <div>
//                         <h2 className="text-xl font-medium ">{single.name}</h2>
//                       </div>
//                     </div>
//                     {/* Right Section */}
//                     <div className="text-[16px] sm:text-[18px] space-y-3">
//                       {/* Testimonial */}
//                       <div className="text-orange-500 text-[40px]">
//                         <FaQuoteLeft />
//                       </div>
//                       <p className="mr-4 ml-4 leading-[30px] font-bold">
//                         {single.quote}
//                       </p>
//                       <div className="text-orange-500 text-[40px]">
//                         <FaQuoteRight className="ml-auto" />
//                       </div>
//                     </div>
//                   </section>
//                 </div>
//               );
//             })}
//           </Slider>
//           {/* creating the buttons */}
//           <button
//             className="absolute top-[50%] left-[10px] z-10 text-2xl text-gray-600  "
//             onClick={() => sliderRef?.current?.slickPrev()}
//           >
//             <MdOutlineArrowBackIos />
//           </button>
//           <button
//             className="absolute top-[50%] right-[10px] z-10 text-2xl text-gray-600  "
//             onClick={() => sliderRef?.current?.slickNext()}
//           >
//             <MdOutlineArrowForwardIos />
//           </button>
//         </section>
//       </CenterAligner>
//     </Container>
//   );
// };

// export default Testimonial;

"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Testimonial() {
  return (
    <div className="mt-12 h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 dark:text-white mb-2">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Real words from real people who trusted{" "}
          <span className="font-semibold text-blue-700 dark:text-blue-300">
            ORTUS FINANCE
          </span>{" "}
          with their financial journey.
        </p>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "অর্থুস ফাইন্যান্স-এর সাথে আমার অভিজ্ঞতা অসাধারণ। ওদের টিম খুবই পেশাদার এবং সাহায্যকারী। আমি এখন আমার বিনিয়োগ নিয়ে অনেক বেশি আত্মবিশ্বাসী।",
    name: "Rakhi Deb",
    title: "Purbasha, Dhaleshwar Agartala",
  },
  {
    quote:
      "অর্থুস ফাইন্যান্স-এর মাধ্যমে আমি প্রথমবার SIP শুরু করি। ওদের গাইডেন্স খুব পরিষ্কার এবং পেশাদার ছিল। এখন আমি আমার ভবিষ্যৎ নিয়ে অনেক বেশি আত্মবিশ্বাসী।",
    name: "Smriti Deb",
    title: "Halhali, Dhalai Tripura",
  },
  {
    quote:
      "ORTUS FINANCE stands out with its integrity and commitment to clients. I feel confident knowing my investments are in safe hands with certified professionals.",
    name: "Dr. Rupak Deb",
    title: "Kulai, Ambassa",
  },
  {
    quote:
      "I was initially cautious about investing, but ORTUS FINANCE earned my trust with their professional guidance and hassle-free process. Highly recommended!",
    name: "Manik Lal Das",
    title: "Badharghat, Agartala Tripura",
  },
];
