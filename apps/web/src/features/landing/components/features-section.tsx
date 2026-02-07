"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    step: "Paso 1",
    title: "Conecta tu Wallet",
    description:
      "Email o wallet. Sin papeleos. Privy maneja la seguridad para que tu solo te preocupes por enviar.",
    cta: "Probar Demo",
    image: "/images/wallet-connect.jpg",
    imageAlt: "Interfaz de login con email y wallet",
    reverse: false,
  },
  {
    step: "Paso 2",
    title: "Envia en 5 Segundos",
    description:
      "Escribe el numero del destinatario. Elige el monto. Confirma. Listo. Asi de simple.",
    cta: "Ver Video",
    image: "/images/send-money.jpg",
    imageAlt: "Formulario de envio de remesa",
    reverse: true,
  },
  {
    step: "Paso 3",
    title: "Verifica en Blockchain",
    description:
      "Transparencia total. Cada transaccion queda registrada y es verificable on-chain por ambas partes.",
    cta: "Ver en Blockchain",
    image: "/images/blockchain-verify.jpg",
    imageAlt: "Confirmacion de transaccion en blockchain",
    reverse: false,
  },
];

export function FeaturesSection() {
  return (
    <section id="how" className="px-6 py-32 md:py-44">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0.15 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-28 text-center font-bold text-white md:mb-36"
          style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
        >
          Simple. Rapido. Transparente.
        </motion.h2>

        <div className="space-y-36 md:space-y-48">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col items-center gap-14 lg:flex-row lg:gap-24 ${
                item.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className="flex-1">
                <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.2em] text-[#2ECC71]/60">
                  {item.step}
                </span>
                <h3
                  className="mb-6 font-bold text-white"
                  style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="mb-10 max-w-lg leading-relaxed text-white/60"
                  style={{ fontSize: "clamp(16px, 1.4vw, 20px)" }}
                >
                  {item.description}
                </p>
                <button
                  type="button"
                  className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                >
                  {item.cta}
                </button>
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/40">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    priority
                    loading="eager"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
