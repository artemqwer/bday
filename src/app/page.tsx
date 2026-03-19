"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "@/components/Hero";
import Memes from "@/components/Memes";
import Photos from "@/components/Photos";
import Wishes from "@/components/Wishes";
import Player from "@/components/Player";
import ConfettiEffect from "@/components/ConfettiEffect";
import Enter from "@/components/Enter";

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if (entered) {
      setConfetti(true);
      const t = setTimeout(() => setConfetti(false), 5000);
      return () => clearTimeout(t);
    }
  }, [entered]);

  return (
    <>
      <AnimatePresence>
        {!entered && <Enter onEnter={() => setEntered(true)} />}
      </AnimatePresence>

      <AnimatePresence>
        {entered && (
          <motion.main
            className="relative min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {confetti && <ConfettiEffect />}
            <Player />
            <Hero />
            <Memes />
            <Photos />
            <Wishes />
            <footer className="py-16 text-center">
              <div
                className="inline-flex items-center gap-2 text-xs"
                style={{ color: "rgba(255,255,255,0.15)", letterSpacing: "0.2em" }}
              >
                <span>made with</span>
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  💜
                </motion.span>
                <span>та мемами</span>
              </div>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
