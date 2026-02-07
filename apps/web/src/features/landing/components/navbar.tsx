"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { usePrivy } from "@privy-io/react-auth";

const navLinks = [
  { label: "Acerca", href: "#value" },
  { label: "Productos", href: "#products" },
  { label: "Como Funciona", href: "#how" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contacto", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { login, authenticated } = usePrivy();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCtaClick = () => {
    if (authenticated) {
      router.push("/dashboard");
    } else {
      login();
    }
  };

  return (
    <>
      {/* Marquee banner */}
      <div className="relative z-50 overflow-hidden border-b border-white/10 bg-white/[0.03]">
        <div className="flex animate-marquee whitespace-nowrap py-2.5">
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className="mx-8 text-xs font-semibold uppercase tracking-[0.15em] text-white/50"
            >
              {"Envios 24/7 \u00B7 Sin limites \u00B7 Sin fronteras"}
            </span>
          ))}
        </div>
      </div>

      {/* Sticky header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-black/80 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/puente-logo.png"
              alt="Puente"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-xl font-black tracking-tight text-white">
              Puente
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white/50 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleCtaClick}
              className="hidden rounded-full bg-[#2ECC71] px-6 py-2.5 text-sm font-bold text-black shadow-[0_0_20px_rgba(46,204,113,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(46,204,113,0.5)] md:inline-flex"
            >
              {authenticated ? "Ir al Dashboard" : "Conectar Wallet"}
            </button>
            <button
              type="button"
              className="text-white md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="border-t border-white/10 bg-black/95 backdrop-blur-2xl md:hidden">
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  handleCtaClick();
                }}
                className="mt-3 w-full rounded-full bg-[#2ECC71] px-6 py-3 text-center text-sm font-bold text-black"
              >
                {authenticated ? "Ir al Dashboard" : "Conectar Wallet"}
              </button>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
