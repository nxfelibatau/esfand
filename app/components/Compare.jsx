import React from "react";
import { Compare } from "./ui/compare";

export default function CompareDemo() {
  return (
    <div className="bg-gradient-to-b from-teal-100 to-lime-200 w-full h-[110vh] px-2 md:px-8 flex items-center justify-center">
      <div
        style={{
          transform: "rotateX(15deg) translateZ(80px)",
        }}
        className="p-2 md:p-4 border rounded-3xl dark:bg-neutral-900 bg-white border-neutral-200 dark:border-neutral-800 shadow-xl mx-auto w-11/12 md:w-3/4 h-2/3 md:h-3/4"
      >
        <Compare
          firstImage="/images/winter2.jpg"
          secondImage="/images/spring2.jpg"
          firstImageClassName="object-cover object-left-top w-full h-full"
          secondImageClassname="object-cover object-left-top w-full h-full"
          className="w-full h-full rounded-[22px] md:rounded-xl"
          slideMode="hover"
          autoplay={true}
        />
      </div>
    </div>
  );
}
