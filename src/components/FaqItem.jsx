import clsx from "clsx";
import React, { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const FaqItem = ({ item, index }) => {
  const [activeId, setActiveId] = useState(null);
  const active = activeId === item.id;
  return (
    <div className="relative z-2 mb-16">
      <div
        className="group relative flex cursor-pointer justify-between gap-10 px-7"
        onClick={() => {
          setActiveId(activeId === item.id ? null : item.id);
        }}
      >
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-3xl max-lg:hidden text-slate-500">
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div
            className={clsx(
              "h-6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center ",
              active && "max-lg:text-pink-100"
            )}
          >
            {item.question}
          </div>
        </div>
        <div
          className={clsx(
            "faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-red-400 transition-all duration-500 group-hover:bg-slate-500",
            active && "bg-p1 after:rotate-0 after:bg-p1"
          )}
        >
          <div className=" size-11/12 rounded-full bg-gradient-red-blue shadow-gray-300" />
        </div>
      </div>
      <SlideDown>
        {activeId === item.id && (
          <div className="text-slate-200 font-semibold body-3 px-7 py-3.5">
            {item.answer}
          </div>
        )}
      </SlideDown>
    </div>
  );
};

export default FaqItem;
