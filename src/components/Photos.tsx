"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const photos = [
  "/photos/photo1.jpg",
  "/photos/photo2.jpg",
  "/photos/photo3.jpg",
  "/photos/photo4.jpg",
  "/photos/photo5.jpg",
  "/photos/photo6.jpg",
];

export default function Photos() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 relative" style={{ zIndex: 2 }}>
      {/* Section header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-label mb-3">архів</p>
        <h2
          className="text-3xl font-bold"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          моменти які були
        </h2>
      </motion.div>

      {/* Photos grid */}
      <div className="max-w-lg mx-auto grid grid-cols-2 gap-3">
        {photos.map((src, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden cursor-pointer"
            style={{
              borderRadius: 16,
              aspectRatio: i % 3 === 0 ? "1/1.2" : "1/1",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 150 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setActive(active === i ? null : i)}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover transition-all duration-500"
              style={{
                filter: active === i ? "brightness(1.1) saturate(1.2)" : "brightness(0.9) saturate(0.9)",
                transform: active === i ? "scale(1.08)" : "scale(1)",
              }}
              sizes="(max-width: 768px) 50vw, 250px"
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(8,8,17,0.5) 0%, transparent 50%)",
              }}
            />
            {/* Photo number */}
            <div
              className="absolute bottom-2 right-3 text-[10px] font-mono"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Caption */}
      <motion.p
        className="text-center text-xs mt-8"
        style={{ color: "rgba(255,255,255,0.2)", letterSpacing: "0.15em" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        тисни на фото
      </motion.p>
    </section>
  );
}
