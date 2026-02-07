"use client";

import { motion } from "framer-motion";

export function TestimonialSection() {
  return (
    <section className="relative px-6 py-32 md:py-44">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-4xl text-center"
      >
        {/* Decorative quote mark */}
        <div
          className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 select-none font-serif text-[#2ECC71]/[0.08] md:top-8"
          style={{ fontSize: "clamp(100px, 15vw, 200px)", lineHeight: 1 }}
        >
          {"\u201C"}
        </div>

        <blockquote
          className="relative z-10 text-balance font-medium italic leading-snug text-white/90"
          style={{ fontSize: "clamp(20px, 3vw, 36px)" }}
        >
          {
            "\u201C15% de $3.8 mil millones = $570 millones perdidos anualmente en fees de remesas. Puente existe para devolver ese dinero a las familias que lo ganaron.\u201D"
          }
        </blockquote>

        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2ECC71]/30 bg-[#2ECC71]/10">
            <span className="text-sm font-bold text-[#2ECC71]">LS</span>
          </div>
          <div className="text-left">
            <p className="font-semibold text-white">Luis Sambrano</p>
            <p className="text-sm text-white/40">
              UX/UI Designer & Researcher | AI Enthusiast
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
