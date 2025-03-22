"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `بوی دود اسپند پیچیده توی هوا... 
انگار که دونه‌هاش دارن زمزمه می‌کنن: «بلا دور، شادی نزدیک!»
صدای قل‌قل سماور، چای تازه‌دم، و آخرین بارون‌های سال که کوچه‌ها رو می‌شوره...

اسفند اومده که بگه:
وقتشه دل‌تکونی کنی،
غصه‌هارو بریزیم دور،
و آماده شیم برای یه بهار نو،
یه شروع تازه! 🌱`;

export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
