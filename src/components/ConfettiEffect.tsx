"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function ConfettiEffect() {
  useEffect(() => {
    const end = Date.now() + 3000;
    const colors = ["#a78bfa", "#e879f9", "#fbbf24"];

    const frame = () => {
      confetti({ particleCount: 2, angle: 60, spread: 40, origin: { x: 0, y: 0.7 }, colors });
      confetti({ particleCount: 2, angle: 120, spread: 40, origin: { x: 1, y: 0.7 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    };

    confetti({ particleCount: 60, spread: 80, origin: { x: 0.5, y: 0.5 }, colors });
    frame();
  }, []);

  return null;
}
