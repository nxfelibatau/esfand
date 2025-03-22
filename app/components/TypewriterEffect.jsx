"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export default function TypewriterEffectSmoothDemo() {
  const words = [
    { text: "اگر" },
    {
      text: "اسفند",
      className: "text-pink-500 dark:text-pink-400",
    },
    { text: "یه" },
    { text: "سایت" },
    { text: "بود" },
    { text: "حس" },
    { text: "نرمی" },
    {
      text: "نسیم",
      className: "text-blue-500 dark:text-blue-400",
    },
    { text: "داشت..." },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem] px-4 text-center">
      <TypewriterEffectSmooth words={words} />
      <p className="mt-6 max-w-xl text-sm md:text-base text-neutral-700 dark:text-neutral-400">
        یه سایت با بوی اسپند، گرمای چای تازه‌دم و نوری که آروم روی دیوار
        می‌رقصه...
        <br />
        مثل خود اسفند، ساده و شاعرانه.
      </p>
    </div>
  );
}
