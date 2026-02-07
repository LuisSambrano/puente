"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Hammer, Lightbulb, Rocket } from "lucide-react";

function Countdown({ target }: { target: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    function calc() {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        setEnded(true);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    }
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [target]);

  if (ended) {
    return (
      <div className="mt-4 flex items-center gap-2 text-sm text-[#2ECC71]">
        <Check size={16} />
        <span className="font-semibold">
          Buildathon Finalizado - Esperando resultados el 6 de Marzo...
        </span>
      </div>
    );
  }

  const units = [
    { label: "Dias", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Seg", value: timeLeft.seconds },
  ];

  return (
    <div className="mt-5 grid grid-cols-4 gap-2">
      {units.map((u) => (
        <div
          key={u.label}
          className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-3 text-center backdrop-blur-sm"
        >
          <div className="text-2xl font-black tabular-nums text-white md:text-3xl">
            {String(u.value).padStart(2, "0")}
          </div>
          <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/40">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
}

const milestones = [
  {
    period: "Q1 2026",
    periodClass: "bg-white text-black",
    dotClass: "bg-[#2ECC71] shadow-[0_0_10px_rgba(46,204,113,0.5)]",
    lineClass: "border-[#2ECC71]/40",
    icon: Check,
    title: "REMESAS en Mainnet",
    description: "Completado - Envia dinero a Venezuela en 5 segundos",
    countdown: false,
  },
  {
    period: "Q2 2026",
    periodClass: "bg-[#2ECC71] text-black",
    dotClass: "bg-white/30",
    lineClass: "border-white/10",
    icon: Hammer,
    title: "CROWDFUNDING",
    description: "En Desarrollo - Emergencias medicas sin fees de GoFundMe",
    countdown: true,
  },
  {
    period: "Q3 2026",
    periodClass: "bg-white/10 text-white/50",
    dotClass: "bg-white/20",
    lineClass: "border-white/10",
    icon: Lightbulb,
    title: "DONACIONES",
    description: "Planificado - Apoya creadores sin Patreon fees",
    countdown: false,
  },
  {
    period: "2027",
    periodClass: "bg-white/10 text-white/50",
    dotClass: "bg-white/20",
    lineClass: "border-white/10",
    icon: Rocket,
    title: "SUPER-APP",
    description: "Vision - Neo-banco completo para la diaspora",
    countdown: false,
  },
];

const countdownTarget = new Date("2026-02-27T23:59:59");

export function TimelineSection() {
  return (
    <section id="roadmap" className="px-6 py-32 md:py-44">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0.2 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center font-bold text-white"
          style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
        >
          Roadmap 2026
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute bottom-0 left-[15px] top-3 w-px bg-gradient-to-b from-[#2ECC71]/40 via-white/10 to-transparent md:left-[17px]" />

          <div className="space-y-14">
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-7 pl-0"
              >
                {/* Dot */}
                <div className="relative z-10 mt-1 flex shrink-0">
                  <div
                    className={`h-[10px] w-[10px] rounded-full ${m.dotClass}`}
                    style={{ marginLeft: "11px", marginTop: "6px" }}
                  />
                </div>

                <div className="flex-1">
                  <span
                    className={`mb-3 inline-block rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider ${m.periodClass}`}
                  >
                    {m.period}
                  </span>
                  <h4 className="mb-1.5 text-xl font-bold text-white md:text-2xl">
                    {m.title}
                  </h4>
                  <p className="leading-relaxed text-white/60 text-sm md:text-base">
                    {m.description}
                  </p>
                  {m.countdown && <Countdown target={countdownTarget} />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
