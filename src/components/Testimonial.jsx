"use client";
import { useRef } from "react";
import CenterAligner from "./CenterAligner";

//related to the slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviews } from "@/constants";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Container from "./Container";

const Testimonial = () => {
  const sliderRef = useRef();
  //settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Container>
      <CenterAligner className="mt-12  bg-blue-900  rounded-4xl">
        <h1 className="text-slate-200 text-center text-2xl font-bold sm:text-3xl pb-8">
          Customers love{" "}
          <strong className="font-semibold text-blue-200">ORTUS FINANCE</strong>{" "}
        </h1>
        {/* Container for the slider */}
        <section className="max-w-[1100px] mx-auto rounded-xl relative overflow-hidden  ">
          {/* Main Section */}
          <Slider {...settings} ref={sliderRef}>
            {reviews.map((single, index) => {
              return (
                <div key={index}>
                  <section className="mx-auto bg-white sm:p-12 grid grid-cols-1 sm:grid-cols-[1fr_3fr] md:grid-cols-[1fr_4fr] items-center gap-5 rounded-xl overflow-hidden pt-4 pb-4">
                    {/* left section */}
                    <div className="space-y-5 text-center">
                      <div className="border-8 inline-block rounded-full border-purple-200 p-2.5">
                        <div className="mx-auto w-[100px] h-[100px] rounded-full bg-gray-200 overflow-hidden">
                          <Image
                            src={single.image}
                            alt="user"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      {/*others */}
                      <div>
                        <h2 className="text-xl font-medium ">{single.name}</h2>
                      </div>
                    </div>
                    {/* Right Section */}
                    <div className="text-[16px] sm:text-[18px] space-y-3">
                      {/* Testimonial */}
                      <div className="text-orange-500 text-[40px]">
                        <FaQuoteLeft />
                      </div>
                      <p className="mr-4 ml-4 leading-[30px] font-bold">
                        {single.quote}
                      </p>
                      <div className="text-orange-500 text-[40px]">
                        <FaQuoteRight className="ml-auto" />
                      </div>
                    </div>
                  </section>
                </div>
              );
            })}
          </Slider>
          {/* creating the buttons */}
          <button
            className="absolute top-[50%] left-[10px] z-10 text-2xl text-gray-600  "
            onClick={() => sliderRef?.current?.slickPrev()}
          >
            <MdOutlineArrowBackIos />
          </button>
          <button
            className="absolute top-[50%] right-[10px] z-10 text-2xl text-gray-600  "
            onClick={() => sliderRef?.current?.slickNext()}
          >
            <MdOutlineArrowForwardIos />
          </button>
        </section>
      </CenterAligner>
    </Container>
  );
};

export default Testimonial;
