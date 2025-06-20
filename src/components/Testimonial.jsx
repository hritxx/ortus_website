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
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
