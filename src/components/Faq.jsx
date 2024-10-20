"use client";

import React from "react";
import FaqItem from "./FaqItem";
import Container from "./Container";
import { data } from "@/constants";
import FadeIn from "./FadeIn";

const Faq = () => {
  return (
    <Container>
      <FadeIn>
        <div className="mt-16 p-4 bg-blue-900  rounded-4xl">
          <h2 className="mt-10 text-slate-200 text-center text-2xl font-bold sm:text-3xl ">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 border-t text-xl border-white/10 pt-10 ml-5 mr-5 ">
            {data.map((item, index) => (
              <FaqItem key={index} title={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Faq;
