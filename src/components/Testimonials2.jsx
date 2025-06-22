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
      "“অর্থুস ফাইন্যান্স”-এর সাথে আমার অভিজ্ঞতা অসাধারণ। ওদের টিম খুবই পেশাদার এবং সাহায্যকারী। আমি এখন আমার বিনিয়োগ নিয়ে অনেক বেশি আত্মবিশ্বাসী।",
    name: "Rakhi Deb",
    title: "Purbasha, Dhaleshwar Agartala",
  },
  {
    quote:
      "“অর্থুস ফাইন্যান্স”-এর মাধ্যমে আমি প্রথমবার SIP শুরু করি। ওদের গাইডেন্স খুব পরিষ্কার এবং পেশাদার ছিল। এখন আমি আমার ভবিষ্যৎ নিয়ে অনেক বেশি আত্মবিশ্বাসী।",
    name: "Smriti Deb",
    title: "Halhali, Dhalai Tripura",
  },
  {
    quote:
      "ব্যাংকের থেকে অনেক ভালো রিটার্ন আমি এখানে পাচ্ছি। খুব সহজে আমি আমার পোর্টফোলিও ট্র্যাক করতে পারি। ধন্যবাদ অর্থুস টিমকে!",
    name: "Hena Biswas",
    title: "Santibazar, Dhalai Tripura",
  },
  {
    quote:
      "অর্থুস ফাইন্যান্স”-এর সাথে আমার অভিজ্ঞতা অসাধারণ। ওদের টিম খুবই পেশাদার এবং সাহায্যকারী। আমি এখন আমার বিনিয়োগ নিয়ে অনেক বেশি আত্মবিশ্বাসী।",
    name: "Rajib Das",
    title: "Bordowali, Agartala Tripura",
  },
  {
    quote:
      "অর্থুস ফাইন্যান্স”-এর মাধ্যমে আমি প্রথমবার SIP শুরু করি। ওদের গাইডেন্স খুব পরিষ্কার এবং পেশাদার ছিল। এখন আমি আমার ভবিষ্যৎ নিয়ে অনেক বেশি আত্মবিশ্বাসী।",
    name: "Mani Saha",
    title: "Jogendranagar, Agartala Tripura",
  },
  {
    quote:
      "অর্থুস ফাইন্যান্স”-এর সাথে আমার অভিজ্ঞতা অসাধারণ। ওদের টিম খুবই পেশাদার এবং সাহায্যকারী। আমি এখন আমার বিনিয়োগ নিয়ে অনেক বেশি আত্মবিশ্বাসী।",
    name: "Raju Saha",
    title: "Chandrapur, Agartala Tripura",
  },
  {
    quote:
      "অর্থুস ফাইন্যান্স”-এর মাধ্যমে আমি প্রথমবার SIP শুরু করি। ওদের গাইডেন্স খুব পরিষ্কার এবং পেশাদার ছিল। এখন আমি আমার ভবিষ্যৎ নিয়ে অনেক বেশি আত্মবিশ্বাসী।",
    name: "Laxmi Pal",
    title: "Durgachowmuhani, Agartala Tripura",
  },
  {
    quote:
      "I’ve tried different investment options, but none compare to the consistent and impressive returns I’ve received from ORTUS FINANCE. Truly a game-changer!",
    name: "Bikas Deb",
    title: "Halhali, Dhalai Tripura",
  },
  {
    quote:
      "ORTUS FINANCE stands out with its integrity and commitment to clients. I feel confident knowing my investments are in safe hands with experienced professionals.",
    name: "Dr. Rupak Deb",
    title: "Kulai, Ambassa ",
  },
  {
    quote:
      "I was initially cautious about investing, but ORTUS FINANCE earned my trust with their impressive returns and hassle-free process. Highly recommended!",
    name: "Manik Lal Das (SP Post Office Tripura)",
    title: "Badharghat, Agartala Tripura",
  },
  {
    quote:
      "“অর্থুস ফাইন্যান্স”-এর সাথে আমার অভিজ্ঞতা অসাধারণ। ওদের টিম খুবই পেশাদার এবং সাহায্যকারী। আমি এখন আমার বিনিয়োগ নিয়ে অনেক বেশি আত্মবিশ্বাসী।",
    name: "Sounak Sur",
    title: "Siddhiashram, Agartala Tripura",
  },
  {
    quote:
      "“অর্থুস ফাইন্যান্স”-এর সাথে আমার অভিজ্ঞতা অসাধারণ। ওদের টিম খুবই পেশাদার এবং সাহায্যকারী। আমি এখন আমার বিনিয়োগ নিয়ে অনেক বেশি আত্মবিশ্বাসী।",
    name: "Kanika Deb",
    title: "Aparaskar, Dhalai Tripura",
  },
];
