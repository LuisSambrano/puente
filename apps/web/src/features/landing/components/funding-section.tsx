"use client";

import { motion } from "framer-motion";

export function FundingSection() {
  return (
    <section id="value" className="relative px-6 py-32 md:py-44">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0.15 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-balance font-bold leading-none tracking-[-0.02em] text-white"
          style={{ fontSize: "clamp(36px, 7vw, 88px)" }}
        >
          Menos de <span className="text-[#2ECC71]">$0.01</span> por
          transferencia
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 text-balance font-semibold text-white/80"
          style={{ fontSize: "clamp(20px, 3vw, 36px)" }}
        >
          Devolvemos el control financiero a las familias
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-10 max-w-2xl leading-relaxed text-white/60"
          style={{ fontSize: "clamp(16px, 1.5vw, 20px)" }}
        >
          Millones de familias pierden acceso a dinero que legitimamente
          enviaron sus seres queridos. Puente ofrece un camino alternativo donde
          las familias pueden enviar, recibir y verificar fondos
          transparentemente, sin esperar aprobacion de bancos tradicionales.
        </motion.p>
      </div>
    </section>
  );
}
