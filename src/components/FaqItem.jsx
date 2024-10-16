// import clsx from "clsx";
// import React, { useState } from "react";
// import { SlideDown } from "react-slidedown";
// import "react-slidedown/lib/slidedown.css";

// const FaqItem = ({ item, index }) => {
//   const [activeId, setActiveId] = useState(null);
//   const active = activeId === item.id;
//   return (
//     <div className="relative z-2 mb-16">
//       <div
//         className="group relative flex cursor-pointer justify-between gap-10 px-7"
//         onClick={() => {
//           setActiveId(activeId === item.id ? null : item.id);
//         }}
//       >
//         <div className="flex-1">
//           <div className="small-compact mb-1.5 text-3xl max-lg:hidden text-slate-500">
//             {index < 10 ? "0" : ""}
//             {index}
//           </div>
//           <div
//             className={clsx(
//               "h-6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center ",
//               active && "max-lg:text-pink-100"
//             )}
//           >
//             {item.question}
//           </div>
//         </div>
//         <div
//           className={clsx(
//             "faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-red-400 transition-all duration-500 group-hover:bg-slate-500",
//             active && "bg-p1 after:rotate-0 after:bg-p1"
//           )}
//         >
//           <div className=" size-11/12 rounded-full bg-gradient-red-blue shadow-gray-300" />
//         </div>
//       </div>
//       <SlideDown>
//         {activeId === item.id && (
//           <div className="text-slate-200 font-semibold body-3 px-7 py-3.5">
//             {item.answer}
//           </div>
//         )}
//       </SlideDown>
//     </div>
//   );
// };

// export default FaqItem;

import React, { useState } from "react";

const FaqItem = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="mt-10 py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="text-slate-50 flex justify-between w-full"
      >
        <span>{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="mt-4 text-base font-semibold text-white overflow-hidden">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
