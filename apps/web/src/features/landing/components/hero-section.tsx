"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div
          className="absolute inset-0 animate-gradient bg-gradient-to-br from-slate-900 via-black to-slate-900"
          style={{ backgroundSize: "200% 200%" }}
        />
        {/* Top‑to‑bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        {/* Center glow orb */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2ECC71]/[0.07] blur-[160px]" />
        {/* Secondary orb */}
        <div className="absolute right-[15%] top-[20%] h-[400px] w-[400px] rounded-full bg-[#2ECC71]/[0.04] blur-[120px]" />
      </div>

      {/* ── Content (on top) ── */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center gap-8"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#2ECC71]/30 bg-[#2ECC71]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#2ECC71] backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2ECC71]" />
            Construido en Celo Blockchain
          </motion.span>

          {/* Heading */}
          <h1
            className="text-balance font-black leading-[0.9] tracking-[-0.04em] text-white"
            style={{ fontSize: "clamp(48px, 10vw, 120px)" }}
          >
            Remesas Sin
            <br />
            <span className="text-[#2ECC71]">Intermediarios</span>
          </h1>

          {/* Subtitle */}
          <p
            className="mx-auto max-w-2xl text-balance leading-relaxed text-white/60"
            style={{ fontSize: "clamp(17px, 1.8vw, 24px)" }}
          >
            $3.8 mil millones enviados anualmente. 15% perdido en fees.{" "}
            <span className="font-semibold text-white/90">Ya no mas.</span>
          </p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <Link
              href="/dashboard"
              className="group flex items-center gap-2 rounded-full bg-[#2ECC71] px-8 py-4 text-sm font-bold text-black shadow-[0_0_40px_rgba(46,204,113,0.35)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(46,204,113,0.55)]"
            >
              Enviar Ahora
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="#how"
              className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
            >
              <Play size={14} className="fill-white" />
              Ver Demo
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
