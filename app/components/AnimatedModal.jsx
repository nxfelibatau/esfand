"use client";
import React from "react";
import {
  Modal,
  ModalTrigger,
} from "./ui/animated-modal";

export default function AnimatedModalDemo() {
  return (
    <div className="py-40 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="relative bg-[#59667d] text-4xl text-white flex justify-center items-center group/modal-btn px-8 py-4 rounded-lg shadow-md">
          <span className="group-hover/modal-btn:translate-x-40 transition-transform duration-500">
            باران
          </span>
          <div className="absolute inset-0 flex items-center justify-center translate-x-[-10rem] group-hover/modal-btn:translate-x-0 transition-transform duration-500 z-20">
            <span role="img" aria-label="rain">🌧</span>
          </div>
        </ModalTrigger>
      </Modal>
    </div>
  );
}
