"use client";

import { motion } from "framer-motion";
import { Zap, Globe, Gem } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Product {
  icon: LucideIcon;
  title: string;
  badge: string;
  badgeClass: string;
  description: string;
  details: string[];
  cta: string;
  enabled: boolean;
}

const products: Product[] = [
  {
    icon: Zap,
    title: "REMESAS",
    badge: "Disponible Ahora",
    badgeClass: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    description: "Envia dinero a Venezuela en 5 segundos",
    details: [
      "Costo: <$0.01 por transaccion",
      "Velocidad: Confirmacion en 5 segundos",
      "Transparencia: Verificable en blockchain",
    ],
    cta: "Enviar Ahora",
    enabled: true,
  },
  {
    icon: Globe,
    title: "CROWDFUNDING",
    badge: "En Construccion",
    badgeClass: "bg-amber-500/20 text-amber-400 border-amber-500/40",
    description: "Emergencias medicas sin fees de GoFundMe",
    details: [
      "Costo: 2% (vs GoFundMe 10%)",
      "Directo a wallet",
      "100% transparente",
    ],
    cta: "Notificame",
    enabled: false,
  },
  {
    icon: Gem,
    title: "DONACIONES",
    badge: "Proximamente",
    badgeClass: "bg-slate-500/20 text-slate-400 border-slate-500/40",
    description: "Apoya a creadores venezolanos",
    details: [
      "Costo: 1% (vs Patreon 10%)",
      "Sin restricciones geograficas",
      "Pagos instantaneos",
    ],
    cta: "Notificame",
    enabled: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export function CategoriesSection() {
  return (
    <section id="products" className="px-6 py-32 md:py-44">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Nuestros Productos
          </p>
          <h2
            className="mb-6 font-black text-white"
            style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
          >
            3 Fases. 1 Plataforma.
          </h2>
          <p
            className="mx-auto max-w-2xl text-white/60"
            style={{ fontSize: "clamp(16px, 1.5vw, 22px)" }}
          >
            De remesas a crowdfunding y donaciones. El super-app financiero para
            la diaspora.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_8px_40px_rgba(255,255,255,0.06)] md:p-10"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2ECC71]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex flex-1 flex-col">
                {/* Icon */}
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-[#2ECC71]/30 group-hover:bg-[#2ECC71]/10">
                  <product.icon
                    className="h-7 w-7 text-white transition-colors duration-300 group-hover:text-[#2ECC71]"
                    strokeWidth={2}
                  />
                </div>

                <h3 className="mb-3 text-2xl font-black tracking-tight">
                  {product.title}
                </h3>

                <span
                  className={`mb-5 inline-block w-fit rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider ${product.badgeClass}`}
                >
                  {product.badge}
                </span>

                <p className="mb-7 leading-relaxed text-white/60">
                  {product.description}
                </p>

                <ul className="mb-8 flex-1 space-y-3">
                  {product.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 text-[#2ECC71]">{"\u2022"}</span>
                      <span className="text-white/50">{detail}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  disabled={!product.enabled}
                  className={`w-full rounded-xl py-3.5 text-sm font-bold transition-all ${
                    product.enabled
                      ? "bg-[#2ECC71] text-black shadow-[0_0_20px_rgba(46,204,113,0.3)] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(46,204,113,0.5)]"
                      : "cursor-not-allowed border border-white/[0.06] bg-white/[0.03] text-white/30"
                  }`}
                >
                  {product.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
