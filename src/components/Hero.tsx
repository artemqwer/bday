"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
      style={{ zIndex: 2 }}
    >
      {/* Glowing ring decoration */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(167,139,250,0.07)", background: "transparent" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(244,114,182,0.05)", background: "transparent" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Cake emoji with glow */}
      <motion.div
        className="text-[90px] mb-10 select-none"
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
      >
        <motion.span
          style={{ display: "inline-block" }}
          animate={{
            filter: [
              "drop-shadow(0 0 20px rgba(167,139,250,0.5)) drop-shadow(0 0 60px rgba(167,139,250,0.2))",
              "drop-shadow(0 0 40px rgba(244,114,182,0.6)) drop-shadow(0 0 80px rgba(244,114,182,0.2))",
              "drop-shadow(0 0 20px rgba(167,139,250,0.5)) drop-shadow(0 0 60px rgba(167,139,250,0.2))",
            ],
            y: [0, -8, 0],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          🎂
        </motion.span>
      </motion.div>

      {/* Main Heading — все в одному блоці */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
      >
        <h1
          className="font-black leading-none tracking-tight"
          style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)" }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.6) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "block",
            }}
          >
            З Днюхою,
          </span>
          <span style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.2em", marginTop: "0.1em" }}>
            <span className="shimmer-text">племіннику</span>
            <span style={{ WebkitTextFillColor: "initial" }}>🔥</span>
          </span>
        </h1>
      </motion.div>

      {/* Divider with subtitle */}
      <motion.div
        className="flex items-center gap-4 mb-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <div style={{ width: 48, height: 1, background: "linear-gradient(to right, transparent, rgba(167,139,250,0.35))" }} />
        <p style={{ color: "rgba(167,139,250,0.65)", fontSize: "0.75rem", letterSpacing: "0.18em", fontWeight: 500 }}>
          дядько молодший але мудріший
        </p>
        <div style={{ width: 48, height: 1, background: "linear-gradient(to left, transparent, rgba(167,139,250,0.35))" }} />
      </motion.div>

      {/* Quick facts */}
      <motion.div
        className="flex gap-10"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
      >
        {[
          { label: "рівень", value: "топ" },
          { label: "настрій", value: "🔥" },
          { label: "статус", value: "мемлорд" },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <p className="font-bold text-xl" style={{ color: "rgba(255,255,255,0.8)" }}>{stat.value}</p>
            <p style={{ color: "rgba(255,255,255,0.18)", fontSize: "0.6rem", letterSpacing: "0.25em", marginTop: 4, textTransform: "uppercase" }}>
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ opacity: [0.3, 0.8, 0.3], y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <div style={{ width: 1, height: 32, background: "linear-gradient(to bottom, rgba(167,139,250,0.5), transparent)" }} />
        <p style={{ color: "rgba(167,139,250,0.4)", fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>
          scroll
        </p>
      </motion.div>
    </section>
  );
}
