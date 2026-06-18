"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const LABELS = ["Accueil", "Œuvres", "À propos", "Contact"];

const slideVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    y: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const transition = {
  y: {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 1.0,
  },
  opacity: {
    duration: 0.3,
    ease: "easeInOut",
  },
};

interface ScrollContainerProps {
  sections: React.ReactNode[];
}

export function ScrollContainer({ sections }: ScrollContainerProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartY = useRef<number | null>(null);
  const lastWheelTime = useRef(0);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index === current) return;
      if (index < 0 || index >= sections.length) return;
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
      setIsAnimating(true);
    },
    [current, isAnimating, sections.length]
  );

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Wheel
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheelTime.current < 600) return;
      lastWheelTime.current = now;
      if (e.deltaY > 30) goNext();
      else if (e.deltaY < -30) goPrev();
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [goNext, goPrev]);

  // Touch
  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current === null) return;
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) < 50) return;
      if (delta > 0) goNext();
      else goPrev();
      touchStartY.current = null;
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [goNext, goPrev]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") goNext();
      if (e.key === "ArrowUp" || e.key === "PageUp") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  return (
    <>
      {/* Navigation dots */}
      <nav className="scroll-dots" aria-label="Navigation sections">
        {LABELS.map((label, i) => (
          <button
            key={label}
            onClick={() => goTo(i)}
            aria-label={label}
            title={label}
            className={cn("scroll-dot", current === i && "active")}
          />
        ))}
      </nav>

      {/* Section index indicator */}
      <div className="fixed bottom-8 left-10 z-50 flex items-center gap-3">
        <span className="font-serif italic text-gold-500 text-sm">
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="w-8 h-px bg-border" />
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          {LABELS[current]}
        </span>
      </div>

      {/* Animated container */}
      <div
        className="fixed top-16 left-0 right-0 bottom-0 overflow-hidden"
        style={{ isolation: "isolate" }}
      >
        <AnimatePresence
          initial={false}
          custom={direction}
          mode="wait"
          onExitComplete={() => setIsAnimating(false)}
        >
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className="absolute inset-0 will-change-transform"
          >
            {sections[current]}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}