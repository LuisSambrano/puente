# INGENIERÍA INVERSA COMPLETA: Pump.fun Hackathon
## Adaptación para Puente Fintech - Prompt para Antigravity

---

## 📋 RESUMEN EJECUTIVO

**URL Original:** https://hackathon.pump.fun/  
**Framework Detectado:** Framer (React-based)  
**Objetivo:** Replicar diseño exacto pero con copywriting de Puente Fintech  
**Stack Target:** Next.js 14 + TypeScript + Tailwind CSS + Framer Motion  
**Repo Destino:** `~/playground/repos/LuisSambrano/puente-fintech-dapp`

---

## 🔍 1. ANÁLISIS TÉCNICO DEL SITIO

### 1.1 Tech Stack Identificado

```
FRAMEWORK: Framer
├── Base: React (versión desconocida, probablemente 18+)
├── Routing: Cliente side (Framer Router)
├── Hosting: Framer hosting (CDN optimizado)
├── Assets: Framer CDN (framerusercontent.com)
└── Animations: Framer Motion (nativo)

ESTILOS:
├── Sistema: Framer Design System
├── Método: Inline styles + CSS-in-JS
├── Responsive: Breakpoints automáticos
└── Theming: Dark mode único

ASSETS:
├── Imágenes: PNG optimizadas desde Framer CDN
├── Iconos: SVG inline (no library externa)
├── Videos: MP4 desde Framer assets
├── Fonts: Sans-serif sistema (probablemente Inter)
└── Logo: SVG desde Framer CDN
```

### 1.2 DOM Structure Analysis

```html
<!-- Estructura simplificada extraída -->
<body>
  <!-- Header Sticky -->
  <header class="sticky">
    <nav>
      <a href="/" class="logo">
        <img src="logo.svg" alt="Pump.fun" />
      </a>
      <ul class="nav-links">
        <li><a href="#header">About</a></li>
        <li><a href="/launch">Launch</a></li>
        <li><a href="/advisors">Advisors</a></li>
        <li><a href="/apply">Apply</a></li>
        <li><a href="/advisors#contact">Contact us</a></li>
      </ul>
      <button class="cta-primary">Apply now</button>
    </nav>
  </header>

  <!-- Marquee Banner -->
  <div class="marquee-container">
    <div class="marquee-content">
      <span>Applications open now</span>
      <span>Applications open now</span>
      <!-- Repetido para loop infinito -->
    </div>
  </div>

  <!-- Hero Section -->
  <section id="hero">
    <div class="hero-content">
      <h1>Build In Public Global Hackathon</h1>
      <p>$3 million in total funding, distributed across 12 winners...</p>
      <div class="cta-group">
        <button>Apply now</button>
        <button>Contact us</button>
      </div>
    </div>
    <div class="hero-media">
      <a href="video.mp4">
        <img src="thumbnail.png" />
      </a>
    </div>
  </section>

  <!-- Value Prop Section -->
  <section id="value-prop">
    <h2>$3M for builders</h2>
    <h3>We back founders who launch on Pump.fun...</h3>
    <p class="long-copy">Many strong ideas never get a chance...</p>
  </section>

  <!-- Three Stages Section -->
  <section id="categories">
    <div class="section-header">
      <h4>Funding and categories</h4>
      <p>A $3M program funding 12 builders...</p>
    </div>
    <div class="cards-grid">
      <!-- Card 1: Idea -->
      <div class="stage-card">
        <svg class="icon"><!-- Lightning SVG --></svg>
        <h3>Idea</h3>
        <p class="target">This stage is for builders...</p>
        <span class="stage-label">0 → 1 Stage</span>
        <div class="expectations">
          <h5>Expectations:</h5>
          <ul>
            <li>Launch a token...</li>
            <li>Ship a working prototype...</li>
            <li>Rapid iteration...</li>
          </ul>
        </div>
        <button>Apply now</button>
      </div>
      <!-- Card 2: MVP (similar) -->
      <!-- Card 3: Product (similar) -->
    </div>
  </section>

  <!-- Advisors Carousel -->
  <section id="advisors-logos">
    <p>Hackathon advisors from</p>
    <div class="logo-carousel">
      <!-- Logos en scroll infinito -->
    </div>
  </section>

  <!-- Process Steps -->
  <section id="process">
    <h2>Build in public and earn support</h2>
    
    <!-- Step 1 -->
    <div class="process-step left">
      <div class="step-content">
        <span class="step-label">Have an idea?</span>
        <h3>Create a coin</h3>
        <p>Launch a coin and let real market...</p>
        <button>Apply now</button>
      </div>
      <div class="step-media">
        <img src="mockup1.png" />
      </div>
    </div>

    <!-- Step 2 (imagen derecha) -->
    <!-- Step 3 (imagen izquierda) -->
  </section>

  <!-- Testimonial -->
  <section id="testimonial">
    <blockquote>
      "This framework creates a new path..."
    </blockquote>
    <div class="author">
      <img src="alon.jpg" />
      <div>
        <p class="name">Alon</p>
        <p class="title">Co-founder of Pump.fun</p>
      </div>
    </div>
  </section>

  <!-- Timeline -->
  <section id="timeline">
    <h2>Hackathon timeline</h2>
    <div class="timeline-items">
      <div class="timeline-item">
        <span class="date">Jan 19, 2026</span>
        <h4>Applications open</h4>
        <p>Teams launch their tokens...</p>
      </div>
      <!-- Countdown -->
      <div class="countdown">
        <span>21 Days</span>
        <span>07 Hours</span>
        <span>42 Minutes</span>
        <span>47 Seconds</span>
      </div>
      <!-- Más items -->
    </div>
  </section>

  <!-- Final CTA -->
  <section id="final-cta">
    <h2>Ready to build?</h2>
    <p>The first winning project...</p>
    <div class="cta-group">
      <button>Apply now</button>
      <button>Contact us</button>
    </div>
    <video autoplay loop muted>
      <source src="outro-video.mp4" />
    </video>
  </section>

  <!-- Footer -->
  <footer>
    <div class="footer-content">
      <img src="logo.svg" class="footer-logo" />
      <p>Over the next four weeks...</p>
      <nav class="footer-nav">
        <!-- Links repetidos -->
      </nav>
      <div class="footer-social">
        <a href="twitter">Twitter / X</a>
        <a href="telegram">Telegram</a>
        <a href="email">Email</a>
      </div>
      <p class="copyright">© 2024 Pump.fun</p>
      <a href="/terms">Terms of Service</a>
    </div>
  </footer>
</body>
```

### 1.3 CSS/Styling Breakdown

```css
/* PALETA DE COLORES EXACTA */
:root {
  /* Backgrounds */
  --bg-primary: #000000;
  --bg-secondary: rgba(255, 255, 255, 0.03);
  --bg-glass: rgba(255, 255, 255, 0.05);
  
  /* Text */
  --text-primary: #FFFFFF;
  --text-secondary: rgba(255, 255, 255, 0.8);
  --text-tertiary: rgba(255, 255, 255, 0.6);
  
  /* Borders */
  --border-subtle: rgba(255, 255, 255, 0.1);
  --border-medium: rgba(255, 255, 255, 0.2);
  
  /* Accents (ninguno - solo blanco) */
  --accent-primary: #FFFFFF;
  
  /* Effects */
  --glow-subtle: 0 8px 32px rgba(255, 255, 255, 0.05);
  --glow-medium: 0 8px 32px rgba(255, 255, 255, 0.1);
  --blur-glass: blur(10px);
}

/* TIPOGRAFÍA */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
}

/* Headers */
h1 {
  font-size: clamp(48px, 8vw, 120px);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.03em;
}

h2 {
  font-size: clamp(36px, 6vw, 80px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

h3 {
  font-size: clamp(24px, 4vw, 48px);
  font-weight: 600;
  line-height: 1.2;
}

h4 {
  font-size: clamp(18px, 2.5vw, 32px);
  font-weight: 600;
}

/* Body text */
p {
  font-size: clamp(16px, 1.5vw, 20px);
  font-weight: 400;
  color: var(--text-secondary);
}

/* SPACING SYSTEM (8px base) */
.spacing-xs { padding: 8px; }
.spacing-sm { padding: 16px; }
.spacing-md { padding: 24px; }
.spacing-lg { padding: 32px; }
.spacing-xl { padding: 48px; }
.spacing-2xl { padding: 64px; }
.spacing-3xl { padding: 96px; }
.spacing-4xl { padding: 128px; }

/* COMPONENTES ESPECÍFICOS */

/* Sticky Header */
header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-subtle);
  padding: 20px 40px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
}

.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
}

.nav-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--text-primary);
}

/* Marquee Banner */
.marquee-container {
  overflow: hidden;
  background: var(--bg-glass);
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
  padding: 12px 0;
}

.marquee-content {
  display: flex;
  gap: 80px;
  animation: marquee 20s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

.marquee-content span {
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Hero Section */
#hero {
  padding: 120px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  max-width: 1400px;
  margin: 0 auto;
  align-items: center;
}

#hero h1 {
  margin-bottom: 24px;
}

#hero p {
  margin-bottom: 32px;
  max-width: 600px;
}

.cta-group {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

/* Buttons */
button, .btn {
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary, button:not(.btn-secondary) {
  background: transparent;
  border: 2px solid var(--text-primary);
  color: var(--text-primary);
}

.btn-primary:hover {
  background: var(--text-primary);
  color: var(--bg-primary);
  transform: scale(1.02);
}

.btn-secondary {
  background: transparent;
  border: 2px solid var(--border-medium);
  color: var(--text-secondary);
}

.btn-secondary:hover {
  border-color: var(--text-primary);
  color: var(--text-primary);
}

/* Stage Cards */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 48px;
}

.stage-card {
  background: var(--bg-glass);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  padding: 40px;
  transition: all 0.3s ease;
}

.stage-card:hover {
  border-color: var(--border-medium);
  transform: translateY(-4px);
  box-shadow: var(--glow-medium);
}

.stage-card .icon {
  width: 48px;
  height: 48px;
  margin-bottom: 24px;
  color: var(--text-primary);
}

.stage-card h3 {
  margin-bottom: 16px;
}

.stage-label {
  display: inline-block;
  padding: 8px 16px;
  background: var(--bg-glass);
  border: 1px solid var(--border-subtle);
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
}

.stage-card ul {
  list-style: none;
  padding: 0;
  margin: 16px 0;
}

.stage-card li {
  padding-left: 24px;
  position: relative;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.6;
}

.stage-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--text-primary);
}

/* Process Steps */
.process-step {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  padding: 80px 40px;
  max-width: 1400px;
  margin: 0 auto;
  align-items: center;
}

.process-step.right .step-media {
  order: -1;
}

.step-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 16px;
  color: var(--text-tertiary);
}

.step-media img {
  width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: var(--glow-medium);
}

/* Logo Carousel */
.logo-carousel {
  display: flex;
  gap: 48px;
  overflow: hidden;
  padding: 32px 0;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
}

.logo-carousel img {
  height: 32px;
  width: auto;
  opacity: 0.7;
  filter: grayscale(100%) brightness(2);
  transition: opacity 0.3s ease;
}

.logo-carousel img:hover {
  opacity: 1;
}

/* Testimonial */
#testimonial {
  text-align: center;
  padding: 80px 40px;
  max-width: 800px;
  margin: 0 auto;
}

#testimonial blockquote {
  font-size: clamp(20px, 3vw, 32px);
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 32px;
  font-style: italic;
}

.author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.author img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.author .name {
  font-weight: 600;
  margin: 0;
}

.author .title {
  font-size: 14px;
  color: var(--text-tertiary);
  margin: 0;
}

/* Timeline */
.timeline-items {
  display: flex;
  flex-direction: column;
  gap: 48px;
  max-width: 800px;
  margin: 48px auto;
  padding: 0 40px;
}

.timeline-item {
  border-left: 2px solid var(--border-subtle);
  padding-left: 32px;
  position: relative;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -6px;
  top: 0;
  width: 10px;
  height: 10px;
  background: var(--text-primary);
  border-radius: 50%;
}

.timeline-item .date {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-tertiary);
}

.countdown {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 32px;
  background: var(--bg-glass);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
}

.countdown span {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

/* Footer */
footer {
  border-top: 1px solid var(--border-subtle);
  padding: 80px 40px 40px;
  margin-top: 120px;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  gap: 32px;
}

.footer-nav {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.footer-nav a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 14px;
}

.footer-social {
  display: flex;
  gap: 24px;
}

.footer-social a {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
}

.copyright {
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 32px;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  #hero,
  .process-step {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .process-step.right .step-media {
    order: 0;
  }
  
  .cards-grid {
    grid-template-columns: 1fr;
  }
  
  header {
    padding: 16px 20px;
  }
  
  .nav-links {
    display: none; /* Mobile menu needed */
  }
  
  .countdown {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### 1.4 Animations Breakdown

```javascript
// FRAMER MOTION VARIANTS DETECTADOS

// Fade in from bottom
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

// Stagger children
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Scale on hover
const scaleOnHover = {
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 }
  }
}

// Slide in from left/right
const slideIn = {
  left: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 }
  },
  right: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 }
  }
}

// Marquee (CSS animation)
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

// Video play on viewport
// (IntersectionObserver para autoplay)
const videoRef = useRef(null)
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        videoRef.current?.play()
      }
    },
    { threshold: 0.5 }
  )
  if (videoRef.current) {
    observer.observe(videoRef.current)
  }
  return () => observer.disconnect()
}, [])
```

---

## 🎨 2. COPYWRITING MAPEADO

### Pump.fun → Puente Fintech

| Sección | Pump.fun Original | Puente Adaptado |
|---------|------------------|-----------------|
| **Marquee** | "Applications open now" | "Envíos disponibles 24/7 · Sin límites · Sin fronteras" |
| **Hero H1** | "Build In Public Global Hackathon" | "Remesas Sin Intermediarios" |
| **Hero Sub** | "$3 million in total funding..." | "$3.8 mil millones enviados anualmente. 15% perdido en fees. Ya no más." |
| **Hero CTA** | "Apply now" | "Enviar Ahora" |
| **Value H2** | "$3M for builders" | "Menos de $0.01 por transferencia" |
| **Value H3** | "We back founders who..." | "Devolvemos el control financiero a las familias" |
| **Value Body** | "Many strong ideas never get..." | "Millones de familias pierden acceso a dinero que legítimamente enviaron sus seres queridos. Puente ofrece un camino alternativo donde las familias pueden enviar, recibir y verificar fondos transparentemente, sin esperar aprobación de bancos tradicionales." |
| **Categories H** | "Funding and categories" | "Nuestros Productos" |
| **Stage 1** | "Idea (0→1)" | "REMESAS (Disponible Ahora)" |
| **Stage 2** | "MVP (1→10)" | "CROWDFUNDING (En Construcción)" |
| **Stage 3** | "Product (10→100)" | "DONACIONES (Próximamente)" |
| **Process H** | "Build in public and earn support" | "Simple. Rápido. Transparente." |
| **Step 1** | "Create a coin" | "Conecta tu Wallet" |
| **Step 2** | "Share updates" | "Envía en 5 Segundos" |
| **Step 3** | "Let the market decide" | "Verifica en Blockchain" |
| **Testimonial** | Quote de Alon | "15% de $3.8B = $570M perdidos anualmente en fees. Puente existe para devolver ese dinero a las familias que lo ganaron." |
| **Timeline** | "Hackathon timeline" | "Roadmap 2026" |
| **Final CTA** | "Ready to build?" | "¿Listo para ahorrar?" |

---

## 📦 3. ASSETS NECESARIOS

### 3.1 Imágenes Requeridas

```
CREAR/OBTENER:

1. Logo Puente
   - Formato: SVG
   - Colores: Verde #2ECC71 + Blanco
   - Tamaños: Logo completo + Isotipo
   - Path: /public/images/logo.svg

2. Hero Video/Mockup
   - Contenido: Transferencia en acción (5 segundos)
   - Formato: MP4 o PNG mockup
   - Dimensiones: 1000x1000px o 16:9
   - Path: /public/videos/hero-demo.mp4

3. Process Step Screenshots
   - Step 1: Login screen (Privy)
   - Step 2: Transfer form
   - Step 3: Success + blockchain link
   - Formato: PNG con transparencia
   - Dimensiones: 1000x1000px
   - Path: /public/images/process-*.png

4. Partner Logos
   - Celo, Privy, Supabase, Vercel, Next.js
   - Formato: SVG o PNG transparente
   - Dimensiones: Variable (height: 32px)
   - Path: /public/images/partners/*.svg
   - Filtro: Grayscale + brightness(2)

5. Founder/Testimonial Photo (si aplica)
   - Tu foto o dejar placeholder
   - Formato: JPG
   - Dimensiones: 400x400px
   - Path: /public/images/founder.jpg
```

### 3.2 Iconos SVG (Crear inline)

```svg
<!-- Lightning (Remesas) -->
<svg viewBox="0 0 32 32" fill="none" stroke="currentColor">
  <path d="M 0 13.333 L 10 0 L 10 10.667 L 16 10.667 L 6 24 L 6 13.333 Z" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"/>
</svg>

<!-- Globe Network (Crowdfunding) -->
<svg viewBox="0 0 32 32" fill="none" stroke="currentColor">
  <circle cx="16" cy="16" r="10" stroke-width="2"/>
  <path d="M 4 16 h 24 M 16 6 v 20" stroke-width="2"/>
  <path d="M 7 10 Q 16 12, 25 10 M 7 22 Q 16 20, 25 22" stroke-width="2"/>
</svg>

<!-- Diamond (Donaciones) -->
<svg viewBox="0 0 32 32" fill="none" stroke="currentColor">
  <path d="M 16 4 L 26 12 L 16 28 L 6 12 Z" 
        stroke-width="2" 
        stroke-linejoin="round"/>
</svg>
```

---

## 💻 4. IMPLEMENTACIÓN EN NEXT.JS

### 4.1 Estructura de Carpetas

```
apps/web/
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx          ← LANDING PAGE PRINCIPAL
│   │   │   └── components/
│   │   │       ├── Header.tsx
│   │   │       ├── MarqueeBanner.tsx
│   │   │       ├── Hero.tsx
│   │   │       ├── ValueProp.tsx
│   │   │       ├── ThreeProducts.tsx
│   │   │       ├── PartnersCarousel.tsx
│   │   │       ├── ProcessSteps.tsx
│   │   │       ├── Testimonial.tsx
│   │   │       ├── Timeline.tsx
│   │   │       ├── FinalCTA.tsx
│   │   │       └── Footer.tsx
│   │   │
│   │   └── globals.css           ← Estilos globales
│   │
│   ├── components/
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Badge.tsx
│   │
│   └── lib/
│       ├── animations.ts         ← Framer Motion variants
│       └── constants.ts          ← Copy constants
│
└── public/
    ├── images/
    │   ├── logo.svg
    │   ├── process-1.png
    │   ├── process-2.png
    │   ├── process-3.png
    │   └── partners/
    │       ├── celo.svg
    │       ├── privy.svg
    │       └── ...
    └── videos/
        └── hero-demo.mp4
```

### 4.2 Código Completo de Componentes

#### `app/(marketing)/page.tsx`

```tsx
import Header from './components/Header'
import MarqueeBanner from './components/MarqueeBanner'
import Hero from './components/Hero'
import ValueProp from './components/ValueProp'
import ThreeProducts from './components/ThreeProducts'
import PartnersCarousel from './components/PartnersCarousel'
import ProcessSteps from './components/ProcessSteps'
import Testimonial from './components/Testimonial'
import Timeline from './components/Timeline'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function LandingPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Header />
      <MarqueeBanner />
      <Hero />
      <ValueProp />
      <ThreeProducts />
      <PartnersCarousel />
      <ProcessSteps />
      <Testimonial />
      <Timeline />
      <FinalCTA />
      <Footer />
    </main>
  )
}
```

#### `components/Header.tsx`

```tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/images/logo.svg" 
            alt="Puente" 
            width={32} 
            height={32} 
          />
          <span className="text-xl font-bold">Puente</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          <li><Link href="#about" className="text-white/70 hover:text-white transition">Acerca</Link></li>
          <li><Link href="#products" className="text-white/70 hover:text-white transition">Productos</Link></li>
          <li><Link href="#how-it-works" className="text-white/70 hover:text-white transition">Cómo Funciona</Link></li>
          <li><Link href="#roadmap" className="text-white/70 hover:text-white transition">Roadmap</Link></li>
          <li><Link href="#contact" className="text-white/70 hover:text-white transition">Contacto</Link></li>
        </ul>

        {/* CTA Button */}
        <button className="hidden md:block px-6 py-2.5 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all">
          Enviar Ahora
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-black border-t border-white/10 px-6 py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          <ul className="space-y-4">
            <li><Link href="#about" className="block py-2">Acerca</Link></li>
            <li><Link href="#products" className="block py-2">Productos</Link></li>
            <li><Link href="#how-it-works" className="block py-2">Cómo Funciona</Link></li>
            <li><Link href="#roadmap" className="block py-2">Roadmap</Link></li>
            <li><Link href="#contact" className="block py-2">Contacto</Link></li>
            <li>
              <button className="w-full px-6 py-3 border-2 border-white rounded-lg">
                Enviar Ahora
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
```

#### `components/MarqueeBanner.tsx`

```tsx
export default function MarqueeBanner() {
  const text = "Envíos disponibles 24/7 · Sin límites · Sin fronteras"
  
  return (
    <div className="overflow-hidden bg-white/5 border-y border-white/10 py-3">
      <div className="flex gap-20 animate-marquee whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-sm font-semibold uppercase tracking-wider">
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}

// Añadir a tailwind.config.js:
// animation: {
//   'marquee': 'marquee 20s linear infinite',
// },
// keyframes: {
//   marquee: {
//     '0%': { transform: 'translateX(0%)' },
//     '100%': { transform: 'translateX(-50%)' },
//   },
// }
```

#### `components/Hero.tsx`

```tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
      <motion.div 
        className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Content */}
        <div>
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6"
            variants={fadeInUp}
          >
            Remesas Sin<br />
            Intermediarios
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl"
            variants={fadeInUp}
          >
            $3.8 mil millones enviados anualmente. 15% perdido en fees.{' '}
            <span className="text-[#2ECC71] font-semibold">Ya no más.</span>
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            variants={fadeInUp}
          >
            <button className="px-8 py-4 bg-[#2ECC71] text-black font-semibold rounded-lg hover:bg-[#27AE60] transition text-lg">
              Enviar Ahora
            </button>
            <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:border-white/40 transition text-lg">
              Ver Demo
            </button>
          </motion.div>
        </div>

        {/* Media */}
        <motion.div 
          className="relative aspect-square"
          variants={fadeInUp}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/hero-mockup.png"
              alt="Puente App Demo"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
```

#### `components/ThreeProducts.tsx`

```tsx
'use client'

import { motion } from 'framer-motion'
import { Zap, Globe, Gem } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const products = [
  {
    icon: Zap,
    title: "REMESAS",
    stage: "Disponible Ahora",
    stageColor: "bg-green-500/20 text-green-400 border-green-500/30",
    description: "Envía dinero a Venezuela en 5 segundos",
    details: [
      "Costo: <$0.01 por transacción",
      "Velocidad: Confirmación en 5 segundos",
      "Transparencia: Verificable en blockchain"
    ],
    cta: "Enviar Ahora",
    enabled: true
  },
  {
    icon: Globe,
    title: "CROWDFUNDING",
    stage: "En Construcción",
    stageColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    description: "Emergencias médicas sin fees de GoFundMe",
    details: [
      "Costo: 2% (vs GoFundMe 10%)",
      "Directo a wallet",
      "100% transparente"
    ],
    cta: "Notifícame",
    enabled: false
  },
  {
    icon: Gem,
    title: "DONACIONES",
    stage: "Próximamente",
    stageColor: "bg-gray-500/20 text-gray-400 border-gray-500/30",
    description: "Apoya a creadores venezolanos",
    details: [
      "Costo: 1% (vs Patreon 10%)",
      "Sin restricciones geográficas",
      "Pagos instantáneos"
    ],
    cta: "Notifícame",
    enabled: false
  }
]

export default function ThreeProducts() {
  return (
    <section id="products" className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p 
            className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4"
            variants={fadeInUp}
          >
            Nuestros Productos
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={fadeInUp}
          >
            3 Fases. 1 Plataforma.
          </motion.h2>
          <motion.p 
            className="text-xl text-white/70 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            De remesas a crowdfunding y donaciones. El super-app financiero para la diáspora.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon
            
            return (
              <motion.div
                key={product.title}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all hover:-translate-y-1"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                {/* Icon */}
                <Icon className="w-12 h-12 mb-6 text-white" strokeWidth={2} />
                
                {/* Title & Stage */}
                <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold border mb-4 ${product.stageColor}`}>
                  {product.stage}
                </span>
                
                {/* Description */}
                <p className="text-white/70 mb-6">{product.description}</p>
                
                {/* Details List */}
                <ul className="space-y-3 mb-8">
                  {product.details.map((detail, i) => (
                    <li key={i} className="text-sm text-white/60 flex items-start gap-2">
                      <span className="text-[#2ECC71] mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <button 
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    product.enabled 
                      ? 'bg-[#2ECC71] text-black hover:bg-[#27AE60]'
                      : 'bg-white/10 text-white/50 cursor-not-allowed'
                  }`}
                  disabled={!product.enabled}
                >
                  {product.cta}
                </button>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
```

---

## 🚀 5. PROMPT MAESTRO PARA ANTIGRAVITY

```markdown
# PROMPT PARA ANTIGRAVITY: Implementar Landing Page Puente Fintech

## CONTEXTO
Necesito que implementes una landing page para Puente Fintech basada en el diseño exacto de https://hackathon.pump.fun/ pero con el copywriting y contenido adaptado a nuestro proyecto de remesas blockchain.

## INFORMACIÓN DEL PROYECTO

**Repo:** ~/playground/repos/LuisSambrano/puente-fintech-dapp  
**Stack Actual:** Next.js 14, TypeScript, Tailwind CSS  
**Framework Target:** Mantener Next.js (no usar Framer)  
**Animaciones:** Framer Motion (ya instalado)

**Documentación de Referencia:**
1. Lee primero: `~/PUENTE_PUMP_FUN_STRATEGY.md` (estrategia completa)
2. Brand actual: `brandkit/style_guide.md`
3. Misión/Visión: `docs/07-mision-vision.md`

## ANÁLISIS TÉCNICO COMPLETO

He realizado ingeniería inversa completa del sitio Pump.fun. Encontrarás el análisis exhaustivo en el archivo que te compartiré, que incluye:

- DOM structure completo
- CSS/Tailwind classes exactas
- Componentes y su jerarquía
- Animaciones con Framer Motion
- Responsive breakpoints
- Assets necesarios

## TAREAS ESPECÍFICAS

### FASE 1: Setup y Estructura (Hacer PRIMERO)

1. **Crear estructura de carpetas:**
```
apps/web/src/app/(marketing)/
├── layout.tsx
├── page.tsx
└── components/
    ├── Header.tsx
    ├── MarqueeBanner.tsx
    ├── Hero.tsx
    ├── ValueProp.tsx
    ├── ThreeProducts.tsx
    ├── PartnersCarousel.tsx
    ├── ProcessSteps.tsx
    ├── Testimonial.tsx
    ├── Timeline.tsx
    ├── FinalCTA.tsx
    └── Footer.tsx
```

2. **Verificar dependencias:**
```bash
# Ya deberías tener:
- framer-motion
- lucide-react
- tailwindcss

# Si falta algo, instalar
```

3. **Configurar Tailwind:**
Añadir al `tailwind.config.js`:
```js
animation: {
  'marquee': 'marquee 20s linear infinite',
},
keyframes: {
  marquee: {
    '0%': { transform: 'translateX(0%)' },
    '100%': { transform: 'translateX(-50%)' },
  },
}
```

### FASE 2: Componentes Core (En Orden)

#### 1. Header (Sticky Navigation)
**Specs:**
- Sticky top con backdrop-blur
- Logo Puente (usar logo existente en brandkit/)
- Links: Acerca | Productos | Cómo Funciona | Roadmap | Contacto
- CTA: "Enviar Ahora" (verde #2ECC71)
- Mobile: Hamburger menu

**Code Skeleton:**
```tsx
'use client'
import { motion } from 'framer-motion'
// ... implementar según diseño Pump.fun
```

#### 2. MarqueeBanner (Animado)
**Specs:**
- Texto: "Envíos disponibles 24/7 · Sin límites · Sin fronteras"
- Animación: Scroll infinito horizontal
- Background: rgba(255,255,255,0.05)
- Border top/bottom: rgba(255,255,255,0.1)

#### 3. Hero Section
**Copy:**
- H1: "Remesas Sin Intermediarios"
- Subheadline: "$3.8 mil millones enviados anualmente. 15% perdido en fees. Ya no más."
- CTAs: "Enviar Ahora" (primario verde) + "Ver Demo" (secundario outline)
- Media: Imagen/video demo (usar placeholder por ahora)

**Layout:**
- Grid 2 columnas en desktop
- Stack vertical en mobile
- Animaciones: fadeInUp con stagger

#### 4. ValueProp Section
**Copy:**
- H2: "Menos de $0.01 por transferencia"
- H3: "Devolvemos el control financiero a las familias"
- Body: "Millones de familias pierden acceso a dinero que legítimamente enviaron sus seres queridos. Puente ofrece un camino alternativo donde las familias pueden enviar, recibir y verificar fondos transparentemente, sin esperar aprobación de bancos tradicionales."

**Design:**
- Centered text
- Max-width: 800px
- Spacing generoso

#### 5. ThreeProducts Cards
**Productos:**

**Card 1 - REMESAS:**
- Icon: ⚡ Zap (Lucide)
- Title: "REMESAS"
- Badge: "Disponible Ahora" (verde)
- Stage: Sin stage label
- Description: "Envía dinero a Venezuela en 5 segundos"
- Details:
  - Costo: <$0.01 por transacción
  - Velocidad: Confirmación en 5 segundos
  - Transparencia: Verificable en blockchain
- CTA: "Enviar Ahora" (enabled, verde)

**Card 2 - CROWDFUNDING:**
- Icon: 🌐 Globe (Lucide)
- Title: "CROWDFUNDING"
- Badge: "En Construcción" (amarillo)
- Description: "Emergencias médicas sin fees de GoFundMe"
- Details:
  - Costo: 2% (vs GoFundMe 10%)
  - Directo a wallet
  - 100% transparente
- CTA: "Notifícame" (disabled, gris)

**Card 3 - DONACIONES:**
- Icon: 💎 Gem (Lucide)
- Title: "DONACIONES"
- Badge: "Próximamente" (gris)
- Description: "Apoya a creadores venezolanos"
- Details:
  - Costo: 1% (vs Patreon 10%)
  - Sin restricciones geográficas
  - Pagos instantáneos
- CTA: "Notifícame" (disabled, gris)

**Design:**
- Grid 3 columnas desktop, 1 columna mobile
- Glassmorphism cards: bg-white/5, border-white/10
- Hover: translateY(-4px), border-white/20
- Icons: 48x48px, strokeWidth={2}

#### 6. PartnersCarousel
**Logos:**
- Celo, Privy, Supabase, Vercel, Next.js
- Height: 32px, grayscale + brightness(2)
- Scroll infinito horizontal con mask gradient

#### 7. ProcessSteps (3 Pasos)
**Layout:** Alternar imagen izquierda/derecha

**Step 1:**
- Label: "Paso 1"
- Headline: "Conecta tu Wallet"
- Body: "Email o wallet. Sin papeleos. Privy maneja la seguridad."
- CTA: "Probar Demo"
- Image: Screenshot login (usar placeholder)

**Step 2:**
- Label: "Paso 2"
- Headline: "Envía en 5 Segundos"
- Body: "Escribe el número. Elige monto. Confirma. Listo."
- CTA: "Ver Video"
- Image: Screenshot transfer form

**Step 3:**
- Label: "Paso 3"
- Headline: "Verifica en Blockchain"
- Body: "Transparencia total. Cada transacción verificable on-chain."
- CTA: "Ver en Blockchain"
- Image: Screenshot success

#### 8. Testimonial
**Content:**
- Quote: "15% de $3.8 mil millones = $570 millones perdidos anualmente en fees de remesas. Puente existe para devolver ese dinero a las familias que lo ganaron."
- Author: "Misión de Puente"
- Image: Logo Puente o tu foto

#### 9. Timeline (Roadmap 2026)
**Items:**
- Q1 2026: REMESAS en Mainnet (✅ Completado)
- Q2 2026: CROWDFUNDING (🏗️ En Desarrollo)
- Q3 2026: DONACIONES (💡 Planificado)
- 2027: SUPER-APP (🚀 Visión)

**Design:**
- Vertical timeline con border-left
- Dots en cada milestone
- Background glass para items activos

#### 10. FinalCTA
**Copy:**
- H2: "¿Listo para ahorrar?"
- Subheadline: "Tu próxima remesa puede costar $0.01 en vez de $15."
- CTAs: "Enviar Ahora" + "Hablar con Soporte"
- Optional: Video de cierre

#### 11. Footer
**Content:**
- Logo + descripción breve
- Links: Mismos que header
- Social: Twitter/X, Telegram, Email
- Copyright: © 2026 Puente
- Legal: Términos de Servicio

### FASE 3: Polish y Detalles

1. **Responsive Testing:**
   - Desktop: 1440px+
   - Tablet: 768px - 1024px
   - Mobile: 375px - 767px

2. **Animations:**
   - Fade in on scroll para cada sección
   - Hover states en todos los botones y cards
   - Smooth scroll en anchor links

3. **Performance:**
   - Lazy load de imágenes
   - Optimize video/assets
   - No layout shift (CLS)

4. **Accessibility:**
   - Alt text en imágenes
   - ARIA labels en iconos
   - Keyboard navigation
   - Focus states visibles

## ASSETS TEMPORALES

Por ahora usa placeholders para:
- Hero video/image: Genera un div con gradient + texto "Demo Preview"
- Process screenshots: Usa mockups con texto descriptivo
- Partner logos: Busca en brandkit/ o usa texto

Después los reemplazaremos con assets reales.

## ESTILO Y PALETA

**Colores (EXACTOS):**
```css
Background: #000000
Text Primary: #FFFFFF
Text Secondary: rgba(255,255,255,0.8)
Verde Brand: #2ECC71
Verde Dark: #27AE60
Border Subtle: rgba(255,255,255,0.1)
Border Medium: rgba(255,255,255,0.2)
Glass BG: rgba(255,255,255,0.05)
Glow: 0 8px 32px rgba(255,255,255,0.1)
```

**Typography:**
```css
Font Family: Inter (system fallback)
H1: 80-120px, font-weight: 900, line-height: 0.9
H2: 48-80px, font-weight: 700
H3: 32-48px, font-weight: 600
Body: 18-20px, font-weight: 400
```

## CRITERIOS DE ÉXITO

✅ Fidelidad visual >95% vs Pump.fun  
✅ Mobile responsive perfecto  
✅ Animaciones suaves (60fps)  
✅ Copy 100% adaptado a Puente  
✅ Código limpio, TypeScript, comentado  
✅ Componentes reutilizables  

## OUTPUT ESPERADO

1. **Código completo** de todos los componentes
2. **Landing page funcional** en `app/(marketing)/page.tsx`
3. **Tailwind config** actualizado
4. **README** de implementación con:
   - Assets faltantes (lista)
   - Next steps
   - Notas de implementación

## PREGUNTAS ANTES DE EMPEZAR

1. ¿Tienes acceso al repo? Confirma path
2. ¿Framer Motion está instalado?
3. ¿Hay alguna restricción de diseño que deba conocer?

---

**IMPORTANTE:** 
- Implementa paso a paso (Header → Hero → Products → etc.)
- Muéstrame cada componente antes de continuar al siguiente
- Si algo no está claro, pregunta
- Mantén el código DRY y bien organizado

¿Listo para comenzar con el Header?
```

---

## 📊 6. CHECKLIST DE VERIFICACIÓN

```markdown
### Pre-Implementation
- [ ] Repo clonado y accesible
- [ ] Dependencias instaladas (framer-motion, lucide-react)
- [ ] Tailwind config actualizado
- [ ] Estructura de carpetas creada

### Components (En Orden)
- [ ] Header.tsx (sticky nav)
- [ ] MarqueeBanner.tsx (scroll animation)
- [ ] Hero.tsx (grid 2 col, animated)
- [ ] ValueProp.tsx (centered text)
- [ ] ThreeProducts.tsx (3 cards grid)
- [ ] PartnersCarousel.tsx (logo scroll)
- [ ] ProcessSteps.tsx (3 steps, alternating)
- [ ] Testimonial.tsx (quote + author)
- [ ] Timeline.tsx (vertical timeline)
- [ ] FinalCTA.tsx (hero-like)
- [ ] Footer.tsx (links + social)

### Page Assembly
- [ ] app/(marketing)/page.tsx completo
- [ ] Todas las secciones importadas
- [ ] Orden correcto de renderizado

### Styling
- [ ] Dark mode (bg-black) aplicado
- [ ] Paleta de colores exacta
- [ ] Typography weights correctos
- [ ] Spacing consistente (8px base)
- [ ] Glassmorphism efectos

### Animations
- [ ] Framer Motion variants creados
- [ ] Fade in on scroll funciona
- [ ] Stagger effects en listas
- [ ] Hover states smooth
- [ ] Marquee infinito

### Responsive
- [ ] Desktop (1440px+) perfecto
- [ ] Tablet (768-1024px) ajustado
- [ ] Mobile (<768px) stack vertical
- [ ] Touch targets >44px
- [ ] No horizontal scroll

### Copy
- [ ] Todo el texto adaptado a Puente
- [ ] Números correctos ($3.8B, 15%, <$0.01)
- [ ] CTAs consistentes ("Enviar Ahora")
- [ ] Tono profesional pero accesible

### Assets
- [ ] Logo Puente en header/footer
- [ ] Hero mockup (placeholder OK)
- [ ] Process screenshots (placeholder OK)
- [ ] Partner logos (buscar o placeholder)
- [ ] Icons Lucide correctos

### Performance
- [ ] Images optimized (Next Image)
- [ ] Lazy loading enabled
- [ ] No layout shift (CLS < 0.1)
- [ ] Fast load time

### Accessibility
- [ ] Alt text en imágenes
- [ ] ARIA labels en iconos
- [ ] Keyboard navigation OK
- [ ] Focus states visibles
- [ ] Color contrast WCAG AA

### Testing
- [ ] Visual QA vs Pump.fun
- [ ] Cross-browser (Chrome, Safari, Firefox)
- [ ] Mobile devices (iOS, Android)
- [ ] Lighthouse score >90

### Documentation
- [ ] README de implementación
- [ ] Assets faltantes documentados
- [ ] Next steps claros
- [ ] Code commented
```

---

## 🎯 7. QUICK REFERENCE

### Copywriting Master Sheet

| Elemento | Copy Exacto |
|----------|-------------|
| Meta Title | "Puente - Remesas Sin Intermediarios" |
| Meta Description | "Envía dinero a Venezuela con <$0.01 en fees. 5 segundos. Blockchain transparente. No más bancos." |
| Hero H1 | "Remesas Sin Intermediarios" |
| Hero Sub | "$3.8 mil millones enviados anualmente. 15% perdido en fees. Ya no más." |
| Value H2 | "Menos de $0.01 por transferencia" |
| Products H | "3 Fases. 1 Plataforma." |
| Process H | "Simple. Rápido. Transparente." |
| Final CTA H | "¿Listo para ahorrar?" |

### Color Tokens

```js
const colors = {
  bg: {
    primary: '#000000',
    glass: 'rgba(255,255,255,0.05)',
    hover: 'rgba(255,255,255,0.08)',
  },
  text: {
    primary: '#FFFFFF',
    secondary: 'rgba(255,255,255,0.8)',
    tertiary: 'rgba(255,255,255,0.6)',
  },
  brand: {
    green: '#2ECC71',
    greenDark: '#27AE60',
  },
  border: {
    subtle: 'rgba(255,255,255,0.1)',
    medium: 'rgba(255,255,255,0.2)',
  },
}
```

### Component Props Quick Ref

```tsx
// Button
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost'
  size: 'sm' | 'md' | 'lg'
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
}

// Card
interface CardProps {
  glass?: boolean
  hover?: boolean
  className?: string
  children: ReactNode
}

// Badge
interface BadgeProps {
  variant: 'success' | 'warning' | 'neutral'
  children: ReactNode
}
```

---

## 📁 8. ARCHIVO DE REFERENCIA VISUAL

Este documento debe ir acompañado de:

1. **Screenshot completo** del sitio Pump.fun (ya lo tienes)
2. **Análisis de secciones** (incluido arriba)
3. **Mockups de Puente** (crear después)

---

## ✅ VALIDACIÓN FINAL

Antes de considerar completo, verificar:

✅ **Fidelidad Visual:**
- [ ] Layout idéntico a Pump.fun
- [ ] Spacing preciso
- [ ] Typography exacta
- [ ] Animaciones similares

✅ **Contenido:**
- [ ] Copy 100% Puente (no Pump.fun)
- [ ] Números correctos
- [ ] Links funcionales
- [ ] CTAs claros

✅ **Técnico:**
- [ ] TypeScript sin errores
- [ ] ESLint passing
- [ ] Build exitoso
- [ ] No console errors

✅ **UX:**
- [ ] Mobile usable
- [ ] Touch targets OK
- [ ] Loading fast
- [ ] Smooth animations

---

**ESTE DOCUMENTO CONTIENE TODO LO NECESARIO PARA REPLICAR PUMP.FUN PARA PUENTE.**

Úsalo como referencia máster durante toda la implementación.
