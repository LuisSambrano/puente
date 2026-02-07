"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32 md:py-44"
    >
      {/* Background */}
      <div
        className="absolute inset-0 animate-gradient bg-gradient-to-t from-transparent via-slate-900/40 to-black"
        style={{ backgroundSize: "200% 200%" }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2ECC71]/[0.05] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <h2
            className="mb-6 text-balance font-bold text-white"
            style={{ fontSize: "clamp(40px, 7vw, 80px)" }}
          >
            {"Listo para ahorrar?"}
          </h2>
          <p
            className="mx-auto max-w-xl text-white/60"
            style={{ fontSize: "clamp(17px, 1.6vw, 24px)" }}
          >
            Tu proxima remesa puede costar $0.01 en vez de $15.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-20 flex flex-wrap justify-center gap-16 md:gap-24"
        >
          {[
            { value: "$150K+", label: "Enviados" },
            { value: "2,500+", label: "Usuarios" },
            { value: "5", label: "Paises" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-black tabular-nums text-[#2ECC71] text-5xl md:text-6xl lg:text-7xl">
                {stat.value}
              </div>
              <div className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-white/40">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="#"
            className="group flex items-center gap-2 rounded-full bg-[#2ECC71] px-9 py-4 text-sm font-bold text-black shadow-[0_0_40px_rgba(46,204,113,0.35)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(46,204,113,0.55)]"
          >
            Enviar Gratis Ahora
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
          <Link
            href="#"
            className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
          >
            Hablar con Soporte
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
