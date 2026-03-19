"use client";

import { motion } from "framer-motion";

const memes = [
  {
    text: "Я твій дядько, але ти старший за мене. Генетика — дивна штука",
    emoji: "🧬",
  },
  {
    text: "Вітаю з черговим левел-апом. Нові скіли: біль у спині, любов до тиші",
    emoji: "🎮",
  },
  {
    text: "Ти на тому етапі де 'вечірка' — це коли ліг після 23:00",
    emoji: "🌙",
  },
  {
    text: "Бро, ти дизайнер — зроби собі молодість в фотошопі",
    emoji: "🖥️",
  },
  {
    text: "Подарунок? Мої меми безцінні. Mastercard не приймає",
    emoji: "💳",
  },
  {
    text: "Коли кажуть 'добре виглядаєш для свого віку' — це вже не комплімент",
    emoji: "🪞",
  },
  {
    text: "Раніше quality time — клуб до 5 ранку. Тепер — сон до 10",
    emoji: "😴",
  },
  {
    text: "Ти єдиний хто зробить кернінг ідеальним але не зберёт своє життя в купу",
    emoji: "✍️",
  },
];

// Random tilt for each card — natural feel
const tilts = [-2, 1.5, -1, 2.5, -2.5, 1, -1.5, 2];

export default function Memes() {
  return (
    <section className="py-32 px-6 relative" style={{ zIndex: 2 }}>
      {/* Section header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-label mb-3">факти про тебе</p>
        <h2
          className="text-3xl font-bold"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          незаперечні істини
        </h2>
      </motion.div>

      <div className="max-w-2xl mx-auto columns-1 sm:columns-2 gap-4 space-y-4">
        {memes.map((m, i) => (
          <motion.div
            key={i}
            className="break-inside-avoid"
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: tilts[i] }}
            whileHover={{ rotate: 0, scale: 1.03, y: -4 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 200 }}
          >
            <div
              className="glass gradient-border rounded-2xl p-5 cursor-default"
              style={{
                background: "rgba(255,255,255,0.025)",
              }}
            >
              <span className="text-2xl mb-3 block">{m.emoji}</span>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {m.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
