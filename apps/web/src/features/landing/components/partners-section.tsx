"use client";

import { motion } from "framer-motion";

const partners = ["CELO", "PRIVY", "SUPABASE", "VERCEL", "NEXT.JS"];

export function PartnersSection() {
  return (
    <section className="border-y border-white/[0.06] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/40"
        >
          Construido con tecnologia de clase mundial
        </motion.p>

        {/* Spotlight carousel */}
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex animate-marquee items-center gap-20">
            {[...partners, ...partners, ...partners, ...partners].map(
              (partner, i) => (
                <span
                  key={`${partner}-${i}`}
                  className="shrink-0 select-none text-lg font-bold tracking-[0.15em] text-white/20 transition-all duration-500 hover:text-white/70"
                >
                  {partner}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
