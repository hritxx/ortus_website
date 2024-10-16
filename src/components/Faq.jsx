"use client";

import React from "react";
import { Element } from "react-scroll";
import Container from "./Container";
import FadeIn from "./FadeIn";
import SectionIntro from "./SectionIntro";
import { faq } from "@/constants";
import FaqItem from "./FaqItem";

const Faq = () => {
  return (
    <section>
      {/* <SectionIntro
        eyebrow="Services"
        title=""
        className="mt-24 sm:mt-32 lg:mt-40"
      ></SectionIntro> */}
      <Element name="faq" className="relative">
        <Container>
          <FadeIn>
            <div className="container relative z-2 py-28 ">
              <div>
                <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-2xl font-semibold">
                  Curiosity didn&apos;t kill the cat, it it gave it answers.
                </h3>
                <p className="body-1 max-lg:max-w-sm">
                  You&apos;ve got Questions, we&apos;ve got answers.
                </p>
              </div>
            </div>
            {/* <div className="h-px flex-auto bg-neutral-800" /> */}
            <div className="faq-glow_before relative z-2 border-2 border-s-2 bg-blue-900 ">
              <div className="container flex gap-10 max-lg:block">
                <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-gray-200 border-s-2 bg-slate-500">
                  <img src="/images/logo.png" alt="logo" />
                </div>
                <div className="relative flex-1 pt-24">
                  {faq.map((item, index) => (
                    <FaqItem key={item.id} item={item} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Element>
    </section>
  );
};

export default Faq;
