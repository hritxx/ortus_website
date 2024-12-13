"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const Certificate = ({ link, heading, subHeading, size }) => {
  const isBig = size === "big";

  return (
    <CardContainer className="inter-var">
      <CardBody
        className={`bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto ${
          isBig ? "sm:w-[40rem] p-8" : "sm:w-[30rem] p-6"
        } h-auto rounded-xl border`}
      >
        <CardItem
          translateZ="50"
          className={`font-bold text-neutral-600 dark:text-white ${
            isBig ? "text-2xl" : "text-xl"
          }`}
        >
          {heading}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className={`text-neutral-500 dark:text-neutral-300 ${
            isBig ? "text-lg max-w-lg mt-4" : "text-sm max-w-sm mt-2"
          }`}
        >
          {subHeading}
        </CardItem>
        <CardItem
          translateZ="100"
          className={`w-full ${isBig ? "mt-6" : "mt-4"}`}
        >
          <Image
            src={link}
            height={isBig ? 300 : 200}
            width={isBig ? 450 : 300}
            className={`object-contain rounded-xl group-hover/card:shadow-xl ${
              isBig ? "h-80 w-full" : "h-60 w-full"
            }`}
            alt="thumbnail"
          />
        </CardItem>
        <div
          className={`flex justify-between items-center ${
            isBig ? "mt-24" : "mt-20"
          }`}
        >
          {/* Additional content can go here */}
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Certificate;

// const Certificate = ({ link, heading, subHeading }) => {
//   return (
//     <CardContainer className="inter-var">
//       <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//         <CardItem
//           translateZ="50"
//           className="text-xl font-bold text-neutral-600 dark:text-white"
//         >
//           {heading}
//         </CardItem>
//         <CardItem
//           as="p"
//           translateZ="60"
//           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//         >
//           {subHeading}
//         </CardItem>
//         <CardItem translateZ="100" className="w-full mt-4">
//           <Image
//             src={link}
//             height="2000"
//             width="1500"
//             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//             alt="thumbnail"
//           />
//         </CardItem>
//         <div className="flex justify-between items-center mt-20">
//           {/* <CardItem
//             translateZ={20}
//             as={Link}
//             href="https://twitter.com/mannupaaji"
//             target="__blank"
//             className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
//           >
//             Try now →
//           </CardItem> */}
//           {/* <CardItem
//             translateZ={20}
//             as="button"
//             className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
//           >
//             Sign up
//           </CardItem> */}
//         </div>
//       </CardBody>
//     </CardContainer>
//   );
// };

// export default Certificate;
