"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Player() {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = ref.current;
    if (!a) return;
    a.volume = 0.4;
    a.loop = true;
    a.play().then(() => setPlaying(true)).catch(() => {});
  }, []);

  const toggle = () => {
    const a = ref.current;
    if (!a) return;
    playing ? a.pause() : a.play();
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={ref} src="/music.mp3" />
      <motion.button
        onClick={toggle}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
        style={{
          background: playing
            ? "linear-gradient(135deg, rgba(124,58,237,0.5), rgba(219,39,119,0.4))"
            : "rgba(255,255,255,0.04)",
          border: playing
            ? "1px solid rgba(167,139,250,0.4)"
            : "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
          boxShadow: playing
            ? "0 0 20px rgba(167,139,250,0.3), 0 0 40px rgba(167,139,250,0.1)"
            : "none",
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        {/* Pulse ring when playing */}
        {playing && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ border: "1px solid rgba(167,139,250,0.4)" }}
            animate={{ scale: [1, 1.5, 1.8], opacity: [0.5, 0.2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}

        {playing ? (
          <div className="flex gap-[2.5px] items-end h-4">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="rounded-full"
                style={{
                  width: 2.5,
                  background: "linear-gradient(to top, rgba(167,139,250,0.8), rgba(244,114,182,0.8))",
                }}
                animate={{ height: ["30%", "100%", "50%", "100%", "30%"] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
              />
            ))}
          </div>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 2L11 7L3 12V2Z"
              fill="rgba(255,255,255,0.4)"
            />
          </svg>
        )}
      </motion.button>
    </>
  );
}
