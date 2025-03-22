"use client";
import React from "react";
import ColourfulText from "./ui/colorful-text";

export default function ColourfulTextDemo() {
  return (
    <div className="h-screen flex flex-col gap-6 items-center justify-center relative overflow-hidden bg-transparent px-4">
      <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-[#020617] dark:text-white relative z-10 font-sans leading-tight">
        اگر <ColourfulText text="اسفند" /> <br />
        یه سایت بود، پر از عطر خاطره‌ها می‌شد 🍃
      </h1>
      <p className="text-center max-w-xl text-sm md:text-lg text-neutral-600 dark:text-neutral-400 z-10">
        رنگ‌های بنفش و صورتی، افکت نورهای آرام، و یه حس نو شدن توی هر اسکرول...
        مثل لحظه‌ای که بوی سبزه‌ی تازه بهت می‌رسه.
      </p>
    </div>
  );
}
