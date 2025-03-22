"use client";
import { useEffect, useState, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../lib/utils";

export const TextGenerateEffect = ({ words, className, filter = true, duration = 0.5 }) => {
  const [scope, animate] = useAnimate();
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef(null);
  let wordsArray = words.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // وقتی ۵۰٪ از عنصر دیده شود، فعال می‌شود
    );

    if (scope.current) {
      observer.observe(scope.current);
    }

    return () => {
      if (scope.current) {
        observer.unobserve(scope.current);
      }
    };
  }, [scope]);

  useEffect(() => {
    if (isVisible) {
      animate(
        "span",
        { opacity: 1, filter: filter ? "blur(0px)" : "none" },
        { duration: duration || 1, delay: stagger(0.2) }
      );
    }
  }, [isVisible]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div
          className="dark:text-white text-black text-2xl leading-snug tracking-wide"
          ref={scope} // اینجا المنت را به رفرنس متصل می‌کنیم
        >
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{ filter: filter ? "blur(10px)" : "none" }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};
