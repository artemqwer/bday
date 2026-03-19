"use client";

import { motion } from "framer-motion";

const wishes = [
  {
    emoji: "💸",
    text: "Щоб клієнти платили без 'а можна дешевше'",
  },
  {
    emoji: "💻",
    text: "Щоб макбук тримав більше 2 годин",
  },
  {
    emoji: "🍺",
    text: "Щоб похмілля тривало 2 години а не 2 дні як зараз",
  },
  {
    emoji: "🎨",
    text: "Щоб Figma не крашнулась перед дедлайном",
  },
  {
    emoji: "🍻",
    text: "Щоб в холодильнику завжди було пиво",
  },
];

export default function Wishes() {
  return (
    <section className="py-32 px-6 relative" style={{ zIndex: 2 }}>
      {/* Section header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-label mb-3">від дядька</p>
        <h2
          className="text-3xl font-bold"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          побажання
        </h2>
      </motion.div>

      {/* Wishes list */}
      <div className="max-w-sm mx-auto space-y-3 mb-20">
        {wishes.map((w, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4 p-4 rounded-2xl"
            style={{
              background: "rgba(167,139,250,0.04)",
              border: "1px solid rgba(167,139,250,0.08)",
            }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{
              background: "rgba(167,139,250,0.07)",
              borderColor: "rgba(167,139,250,0.2)",
              x: 4,
            }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ delay: i * 0.12, type: "spring", stiffness: 200 }}
          >
            <span className="text-xl shrink-0 mt-0.5">{w.emoji}</span>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {w.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Final message */}
      <motion.div
        className="max-w-sm mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div
          className="relative p-8 rounded-3xl text-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(219,39,119,0.08))",
            border: "1px solid rgba(167,139,250,0.15)",
          }}
        >
          {/* Glow bg */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 0%, rgba(167,139,250,0.1), transparent 70%)",
            }}
          />

          <motion.p
            className="text-4xl mb-5"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🤝
          </motion.p>

          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Племіннику, ти топ. Хоч я і молодший — дядько завжди правий. Нехай цей рік буде ще більш жорстким.
          </p>

          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
            style={{
              background: "rgba(167,139,250,0.1)",
              color: "rgba(167,139,250,0.8)",
              border: "1px solid rgba(167,139,250,0.2)",
              letterSpacing: "0.1em",
            }}
          >
            від дядька ✨
          </div>
        </div>
      </motion.div>
    </section>
  );
}
