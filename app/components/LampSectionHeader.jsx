"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "./ui/lamp";

export default function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.3, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 1,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-b from-purple-700 via-pink-500 to-rose-600 py-4 bg-clip-text text-center text-3xl md:text-6xl font-semibold tracking-tight text-transparent leading-relaxed"
      >
        اسفند آرام آمد
        <br />
        بوی سبزه، عطر خاطره، صدای برگ‌های خیس...
        <br />و رفت؛ بی‌صدا، ولی ماندگار
      </motion.h1>
    </LampContainer>
  );
}
