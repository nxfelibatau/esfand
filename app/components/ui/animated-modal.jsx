"use client";

import React from "react";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
  useModal,
} from "./ui/animated-modal"; // مطمئن شو مسیر ایمپورت درست باشه

export default function EsfandModalDemo() {
  const { setOpen } = useModal();

  return (
    <Modal>
      <div className="h-screen flex items-center justify-center bg-gradient-to-b from-[#fdf6f0] to-[#e0f2f1]">
        <ModalTrigger className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg text-lg hover:scale-105 transition">
          حس اسفند...
        </ModalTrigger>

        <ModalBody>
          <ModalContent>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-neutral-800 dark:text-white">
              اسفند یعنی...
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed text-center">
              بوی اسپند، صدای بارون، بخار چای تازه‌دم روی پنجره‌ی بخارگرفته، و
              دلی که منتظر یه شروع جدیده...
              <br />
              وقتشه دلتو بتکونی، لبخند بزنی، و برای بهار آماده شی! 🌸
            </p>
          </ModalContent>

          <ModalFooter>
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-600 transition"
            >
              بستن
            </button>
          </ModalFooter>
        </ModalBody>
      </div>
    </Modal>
  );
}
