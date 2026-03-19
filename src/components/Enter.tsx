"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  emoji: string;
}

const EMOJIS = ["🎂", "🎉", "✨", "🪩", "🔥", "💜", "🍺", "🎈"];

export default function Enter({ onEnter }: { onEnter: () => void }) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const p: Particle[] = Array.from({ length: 16 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 12 + Math.random() * 18,
      duration: 4 + Math.random() * 6,
      delay: Math.random() * 4,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
    }));
    setParticles(p);
  }, []);

  const handleEnter = () => {
    setClicked(true);
    setTimeout(onEnter, 700);
  };

  return (
    <AnimatePresence>
      {!clicked && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center overflow-hidden"
          style={{ background: "#080811" }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/* Gradient bg orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
              }}
              animate={{ scale: [1, 1.1, 1], rotate: [0, 20, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(244,114,182,0.12) 0%, transparent 70%)",
              }}
              animate={{ scale: [1, 1.15, 1], rotate: [0, -15, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </div>

          {/* Floating emoji particles */}
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute select-none pointer-events-none"
              style={{ left: `${p.x}%`, top: `${p.y}%`, fontSize: p.size }}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: [0, 0.6, 0.3, 0.6, 0],
                y: [-20, -60],
                rotate: [0, Math.random() > 0.5 ? 30 : -30],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeOut",
              }}
            >
              {p.emoji}
            </motion.div>
          ))}

          {/* Main content */}
          <motion.div
            className="relative z-10 text-center px-8 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Big glowing emoji */}
            <motion.div
              className="text-[80px] mb-8 select-none"
              animate={{
                y: [0, -10, 0],
                filter: [
                  "drop-shadow(0 0 20px rgba(167,139,250,0.4))",
                  "drop-shadow(0 0 40px rgba(167,139,250,0.7))",
                  "drop-shadow(0 0 20px rgba(167,139,250,0.4))",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              🎂
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-2xl font-bold tracking-tight mb-2"
              style={{ color: "rgba(255,255,255,0.9)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              є кое-що для тебе
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-sm mb-12"
              style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              врубай звук, племіннику 🔊
            </motion.p>

            {/* CTA Button */}
            <motion.button
              onClick={handleEnter}
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              className="relative overflow-hidden px-12 py-4 rounded-full cursor-pointer transition-all duration-300"
              style={{
                background: hovered
                  ? "linear-gradient(135deg, #7c3aed, #db2777)"
                  : "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(219,39,119,0.2))",
                border: "1px solid rgba(167,139,250,0.4)",
                boxShadow: hovered
                  ? "0 0 30px rgba(167,139,250,0.4), 0 0 60px rgba(167,139,250,0.15)"
                  : "0 0 15px rgba(167,139,250,0.15)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                  transform: "translateX(-100%)",
                }}
                animate={hovered ? { transform: ["translateX(-100%)", "translateX(100%)"] } : {}}
                transition={{ duration: 0.6 }}
              />
              <span
                className="relative text-sm font-semibold tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                відкрити
              </span>
            </motion.button>
          </motion.div>

          {/* Bottom hint */}
          <motion.p
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs"
            style={{ color: "rgba(255,255,255,0.15)", letterSpacing: "0.2em" }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            від дядька з любов'ю
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
