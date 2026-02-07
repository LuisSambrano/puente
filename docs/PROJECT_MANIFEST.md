# PUENTE - NARRATIVA MAESTRA 2026

## Fuente de Verdad Única - Alineación Completa del Proyecto

> **Creado:** 6 Feb 2026  
> **Status:** DOCUMENTO CANÓNICO  
> **Purpose:** Consolidar TODA la narrativa del proyecto después de múltiples pivots  
> **Uso:** Este documento es la ÚNICA fuente de verdad. Si hay conflicto con otros docs, este prevalece.

---

## 📊 TABLA DE CONTENIDOS

1. [IDENTIDAD DEL PROYECTO](#1-identidad-del-proyecto)
2. [CONTEXTO Y PROBLEMA](#2-contexto-y-problema)
3. [SOLUCIÓN Y PRODUCTO](#3-solución-y-producto)
4. [TECNOLOGÍA Y ARQUITECTURA](#4-tecnología-y-arquitectura)
5. [INVESTIGACIÓN DE USUARIO](#5-investigación-de-usuario)
6. [GO-TO-MARKET](#6-go-to-market)
7. [COMPETIDORES Y DIFERENCIACIÓN](#7-competidores-y-diferenciación)
8. [ROADMAP Y FASES](#8-roadmap-y-fases)
9. [BUILDATHON LATAMHUBS](#9-buildathon-latamhubs)
10. [BRAND Y DISEÑO](#10-brand-y-diseño)
11. [MÉTRICAS DE ÉXITO](#11-métricas-de-éxito)
12. [ESTADO ACTUAL (6 Feb 2026)](#12-estado-actual-6-feb-2026)

---

## 1. IDENTIDAD DEL PROYECTO

### 1.1 Nombre y Tagline

**Nombre:** Puente  
**Tagline:** Remesas Sin Intermediarios  
**Elevator Pitch (30s):**

> "Puente es una plataforma de remesas P2P para Latinoamérica construida en blockchain Celo. Reducimos fees de 15% a <$0.01 y el tiempo de 5 días a 5 segundos. No custodiamos fondos—los usuarios tienen control total."

### 1.2 Misión, Visión, Valores

#### Misión (Actualizada - 6 Feb 2026)

**Unificar la economía fragmentada de la diáspora venezolana en una sola plataforma blockchain simple, barata y sin barreras.**

Específicamente:

1. **Remesas:** Costo <1% (vs 15% tradicional)
2. **Crowdfunding:** Comisiones justas 2% (vs GoFundMe 10%)
3. **Donaciones:** Apoyo directo a creadores 1% (vs Patreon 10%)

#### Visión 2027

**Ser el "Super-App" financiero de referencia para los 8 millones de venezolanos en el exterior.**

Medido por:

- **Adopción:** 100,000+ usuarios activos
- **Volumen:** $1M+ mensual en transacciones mixtas
- **Impacto:** 500+ campañas de salud financiadas exitosamente

#### Valores Core (VibeCoding)

1. **Transparencia Radical:** Build in public, admitir errores, documentar pivots
2. **Shipping > Perfection:** MVP funcional > Features completas
3. **User-Centric:** Cada decisión validada con usuarios reales
4. **Mainnet-First:** Transacciones reales > Testnet demos
5. **LATAM-First:** Diseñado por y para la diáspora latinoamericana

### 1.3 Origen e Historia

**Génesis (Dic 2025):**

- **Trigger:** Experiencia personal enviando remesas a Venezuela
- **Problema vivido:** Western Union cobra $15 por cada $100, tarda 3-5 días
- **Insight:** Blockchain puede eliminar el intermediario

**Evolución del nombre:**

1. "One Man Army" (nombre inicial, demasiado agresivo)
2. "Puente" (elegido: conecta, simple, significativo)

**Pivots principales:**

1. **Pivot 1:** De solo remesas → Super-app (Remesas + Crowdfunding + Donaciones)
2. **Pivot 2:** De testnet → Mainnet-first (gracias a incentivo de LatamHubs)
3. **Pivot 3:** De enfoque global → LATAM-específico (Venezuela como beachhead)

**Estado actual:** Fase 1 (Remesas) en desarrollo, Fases 2-3 planificadas para Q2-Q3 2026

---

## 2. CONTEXTO Y PROBLEMA

### 2.1 El Mercado (Venezuela Remittances)

#### Tamaño y Oportunidad

- **Diáspora:** 7.89 millones de venezolanos en el exterior (2024)
- **Mercado anual:** $3.8 mil millones USD en remesas (2024)
- **Hogares receptores:** 30% de hogares venezolanos (~3M)
- **Frecuencia:** Mensual o quincenal
- **Monto promedio:** $100-$300 USD por envío

#### Distribución Geográfica (Remitentes)

| País              | Venezolanos | % del Total |
| ----------------- | ----------- | ----------- |
| 🇨🇴 Colombia       | 2.8M        | 35%         |
| 🇵🇪 Perú           | 1.7M        | 22%         |
| 🇺🇸 Estados Unidos | 500K-700K   | 9%          |
| 🇨🇱 Chile          | 532K        | 7%          |
| 🇪🇨 Ecuador        | 444K        | 6%          |
| 🇧🇷 Brasil         | 568K        | 7%          |
| Otros             | 1.5M        | 14%         |

#### Crecimiento Proyectado

- 2025: $3.0-3.2B (caída por políticas migratorias USA)
- 2026: $3.5B (estabilización)
- 2027: $4.0B+ (recuperación)

### 2.2 El Problema (Jobs to be Done)

#### Pain Points Actuales

**Para el Remitente (enviando dinero):**

1. **Fees excesivos:** Western Union/MoneyGram cobran 10-15%
2. **Tiempo largo:** 3-5 días para que lleguen los fondos
3. **Fricción:** Filas, horarios limitados, documentación
4. **Inseguridad:** Miedo a pérdida/robo en efectivo
5. **Falta de tracking:** No saben si/cuándo llegó el dinero

**Para el Receptor (recibiendo dinero):**

1. **Bancarización baja:** 16% sin cuenta bancaria (~4.6M)
2. **Efectivo problemático:** Riesgo de robo, inflación
3. **Dependencia:** Sin alternativas, atrapados con opciones caras
4. **Acceso limitado:** Pocas sucursales en zonas rurales

**Cita Real (User Research):**

> "Mi mamá tiene que caminar 2 horas para recoger el dinero en Western Union. Y cuando llega, ya perdió 15% del valor. Es injusto."  
> — María G., remitente desde Miami

### 2.3 Soluciones Actuales (Landscape)

| Proveedor     | Tipo        | Fee      | Tiempo      | Limitaciones                           |
| ------------- | ----------- | -------- | ----------- | -------------------------------------- |
| Western Union | Tradicional | 10-15%   | 3-5 días    | Caro, lento, requiere efectivo         |
| MoneyGram     | Tradicional | 8-12%    | 2-4 días    | Similar a WU                           |
| Zelle         | Digital P2P | Gratis\* | Minutos     | Solo USA→USA, no internacional         |
| ElDorado P2P  | Crypto P2P  | 1-3%     | Minutos     | UX compleja, requiere crypto knowledge |
| Pago Móvil    | Local VEN   | Gratis   | Instantáneo | Solo dentro de Venezuela               |

**Gap identificado:** No hay solución que combine:

- ✅ Fees bajos (<1%)
- ✅ Velocidad (segundos)
- ✅ UX simple (como Zelle)
- ✅ Internacional
- ✅ No requiere conocimiento crypto

**→ Aquí entra Puente.**

### 2.4 Why Now? (Timing)

1. **Crypto maduró:** Celo L2 es rápido, barato, mobile-first
2. **Stablecoins aceptados:** cUSD reduce volatilidad
3. **Embedded wallets:** Privy/WaaP elimina fricción crypto
4. **Venezuela usa crypto:** 13º país globalmente en adopción (+110% YoY)
5. **Regulaciones cambiando:** LATAM más abierto a fintech blockchain
6. **LatamHubs incentiva Mainnet:** Bonus por transacciones reales

---

## 3. SOLUCIÓN Y PRODUCTO

### 3.1 Value Proposition (3 Niveles)

#### Nivel 1: Funcional

**¿Qué hace Puente?**

> Envía dinero de A → B usando blockchain en vez de bancos tradicionales.

#### Nivel 2: Emocional

**¿Qué ganas con Puente?**

> Ese dinero que Western Union se quedaba ahora es para tu familia.

#### Nivel 3: Social

**¿Qué significa Puente?**

> Democratizamos acceso financiero para quienes los bancos tradicionales excluyeron.

### 3.2 Producto (3 Fases)

```
PUENTE EVOLUTION
─────────────────────────────────────────────────
FASE 1          │ FASE 2           │ FASE 3
REMESAS         │ CROWDFUNDING     │ DONACIONES
(Q1 2026)       │ (Q2 2026)        │ (Q3 2026)
─────────────────────────────────────────────────
MVP ACTUAL      │ PLANIFICADO      │ PLANIFICADO
```

#### FASE 1: REMESAS (Estado: Desarrollo Activo)

**Problema que resuelve:**

> "Enviar $100 a Venezuela cuesta $15 y tarda 5 días"

**Solución:**

- Send/Receive cUSD en Celo Mainnet
- Fee: <$0.01 (gas de blockchain)
- Tiempo: 5 segundos (confirmación blockchain)
- UX: Email login (Privy) + Phone number (SocialConnect)

**User Flow:**

```
1. Login con Email (Privy Embedded Wallet)
   ↓
2. Ingresa número de teléfono del receptor
   ↓
3. SocialConnect/ODIS resuelve phone → address
   ↓
4. Ingresa monto en USD
   ↓
5. Confirma (sign transaction)
   ↓
6. ✅ Enviado en 5 segundos
   ↓
7. Receptor ve fondos en su wallet
```

**Diferenciador clave:**

- **vs Western Union:** 1500x más barato, 86,400x más rápido
- **vs ElDorado:** UX como Zelle (no requiere saber qué es blockchain)
- **vs Zelle:** Funciona internacionalmente

**Tech Stack:**

- Celo L2 (blockchain)
- cUSD (stablecoin)
- Privy (auth + embedded wallet)
- SocialConnect/ODIS (phone → address mapping)
- Supabase (backend, tx history)

**MVP Scope (LatamHubs Demo):**

- ✅ Login con email
- ✅ Wallet creation automática
- ✅ Send cUSD a address
- 🔄 SocialConnect integration (en desarrollo)
- 🔄 Phone number lookup (en desarrollo)
- ✅ Transaction history
- ✅ Mainnet deployment

#### FASE 2: CROWDFUNDING (Q2 2026)

**Problema que resuelve:**

> "GoFundMe cobra 10% y es imposible retirar fondos en Venezuela"

**Solución:**

- Campañas de emergencia médica, educación, vivienda
- Fee: 2% (vs GoFundMe 5-10%)
- Fondos van directo a wallet del beneficiario
- Transparencia blockchain (todos ven los fondos)

**Use Cases:**

1. Cirugía de emergencia ($5K)
2. Tratamiento de cáncer ($15K)
3. Reconstrucción post-desastre ($10K)

**Diferenciador:**

- Retiro directo a wallet (no conversión fiat)
- Transparencia total (smart contract)
- Fees mínimos (2% vs 10%)

#### FASE 3: DONACIONES (Q3 2026)

**Problema que resuelve:**

> "Patreon/Cafecito cobran 10% y no permiten suscripciones desde LATAM"

**Solución:**

- Micro-donaciones a creadores venezolanos
- Fee: 1% (vs Patreon 8-12%)
- Pagos recurrentes en cUSD
- Sin restricciones geográficas

**Use Cases:**

1. Artistas digitales
2. Escritores/bloggers
3. Educadores online
4. Músicos independientes

**Diferenciador:**

- Pagos instantáneos (vs 30 días en Patreon)
- Sin restricción país emisor/receptor
- Fees mínimos (1%)

### 3.3 Propuesta de Valor Integrada

**Tagline para cada fase:**
| Fase | Tagline | Beneficio |
|------|---------|-----------|
| Remesas | "Ese dinero es para tu familia. No para bancos." | Ahorro masivo |
| Crowdfunding | "GoFundMe sin fronteras" | Acceso directo |
| Donaciones | "Cafecito blockchain" | Sin restricciones |

**Pitch consolidado:**

> "Puente es el super-app financiero para la diáspora venezuelana. Hoy enviás remesas por $0.01. Mañana financiás emergencias médicas. Después apoyás a creadores. Todo en una sola wallet, una sola plataforma, fees mínimos."

---

## 4. TECNOLOGÍA Y ARQUITECTURA

### 4.1 Stack Técnico Completo

```
┌─────────────────────────────────────────────────┐
│              FRONTEND (Web App)                 │
│  Next.js 15 + TypeScript + Tailwind + Framer   │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│           AUTHENTICATION & WALLET               │
│  Privy (Email Login + Embedded Wallet)          │
│  Human.Tech WaaP (Buildathon Bounty)            │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│             IDENTITY LAYER                      │
│  SocialConnect (Celo)                           │
│  ODIS (Phone → Address Mapping)                 │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│            BLOCKCHAIN LAYER                     │
│  Celo L2 Mainnet                                │
│  cUSD Stablecoin                                │
│  Smart Contracts (Remittance.sol)              │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│             BACKEND & DATA                      │
│  Supabase (PostgreSQL + Edge Functions)        │
│  Transaction History                            │
│  User Metadata                                  │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│             DEPLOYMENT                          │
│  Vercel (Frontend)                              │
│  Supabase Cloud (Backend)                      │
│  Celo Mainnet (Blockchain)                     │
└─────────────────────────────────────────────────┘
```

### 4.2 Decisiones de Arquitectura (Con Rationale)

#### Por qué Celo?

1. **Mobile-first:** Diseñado para mercados emergentes (perfecto para LATAM)
2. **Barato:** Gas fees <$0.01 (vs Ethereum $5-50)
3. **Rápido:** 5 segundos de finality
4. **Stablecoins nativos:** cUSD, cEUR built-in
5. **SocialConnect:** Phone → Address mapping (crítico para UX)
6. **Comunidad LATAM:** Celo Mexico, Celo Colombia, CeLatam activos
7. **LatamHubs:** Buildathon específico de Celo

#### Por qué Next.js 15?

1. **React Server Components:** Better performance
2. **App Router:** Modern routing
3. **Vercel deployment:** 1-click deploy
4. **TypeScript native:** Type safety
5. **Ecosistema maduro:** Muchas libraries compatibles

#### Por qué Privy?

1. **Embedded Wallets:** Users no necesitan instalar Metamask
2. **Email login:** UX familiar (vs seed phrases)
3. **Non-custodial:** Puente no tiene acceso a private keys
4. **Celo compatible:** Funciona out-of-the-box
5. **Free tier:** Suficiente para MVP

#### Por qué Supabase?

1. **PostgreSQL:** Robust database
2. **Real-time:** Subscriptions para tx history
3. **Edge Functions:** Serverless backend logic
4. **Auth integration:** Compatible con Privy
5. **Free tier:** Generoso para startups

#### Por qué NO X?

- **NO Solana:** Ecosystem menos maduro en LATAM
- **NO Polygon:** Menos focus en mobile/LATAM
- **NO Firebase:** Preferimos Supabase (open source, Postgres)
- **NO Web3Modal:** Privy tiene mejor UX para non-crypto users

### 4.3 Smart Contracts

#### Remittance.sol (Fase 1)

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract PuenteRemittance is ReentrancyGuard {
    IERC20 public cUSD;

    event RemittanceSent(
        address indexed sender,
        address indexed recipient,
        uint256 amount,
        uint256 timestamp
    );

    constructor(address _cUSD) {
        cUSD = IERC20(_cUSD);
    }

    function sendRemittance(
        address recipient,
        uint256 amount
    ) external nonReentrant {
        require(amount > 0, "Amount must be > 0");
        require(
            cUSD.transferFrom(msg.sender, recipient, amount),
            "Transfer failed"
        );

        emit RemittanceSent(
            msg.sender,
            recipient,
            amount,
            block.timestamp
        );
    }
}
```

**Deployed Addresses:**

- Celo Mainnet: `0x[TBD - pending deployment]`
- Celo Alfajores (testnet): `0x[TBD]`

**Auditoría:** Pendiente (post-buildathon con fondos de premio)

### 4.4 Data Schema (Supabase)

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  wallet_address TEXT UNIQUE NOT NULL,
  phone_number TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  last_active TIMESTAMP
);

-- Transactions table
CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_address TEXT NOT NULL,
  recipient_address TEXT NOT NULL,
  amount NUMERIC(20, 6) NOT NULL,
  currency TEXT DEFAULT 'cUSD',
  tx_hash TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'pending', -- pending, confirmed, failed
  created_at TIMESTAMP DEFAULT NOW(),
  confirmed_at TIMESTAMP,

  FOREIGN KEY (sender_address) REFERENCES users(wallet_address),
  FOREIGN KEY (recipient_address) REFERENCES users(wallet_address)
);

-- Phone mappings (SocialConnect cache)
CREATE TABLE phone_mappings (
  phone_number TEXT PRIMARY KEY,
  wallet_address TEXT NOT NULL,
  verified_at TIMESTAMP DEFAULT NOW(),

  FOREIGN KEY (wallet_address) REFERENCES users(wallet_address)
);
```

### 4.5 Security Considerations

**Vulnerabilities Mitigadas:**

1. ✅ **Reentrancy:** ReentrancyGuard en smart contracts
2. ✅ **Private key exposure:** Privy maneja keys (encrypted, user-scoped)
3. ✅ **SQL Injection:** Supabase RLS (Row Level Security)
4. ✅ **XSS:** Next.js auto-escapes output
5. ✅ **CSRF:** Next.js CSRF tokens built-in

**Pendientes (Post-MVP):**

- [ ] Smart contract audit profesional
- [ ] Penetration testing
- [ ] Bug bounty program
- [ ] Rate limiting en API
- [ ] 2FA opcional

---

## 5. INVESTIGACIÓN DE USUARIO

### 5.1 Metodología

**Fuentes de Data:**

1. **Entrevistas 1-on-1:** 15 venezolanos (remitentes + receptores)
2. **Surveys:** 50+ respuestas (Google Forms)
3. **Secondary research:** Banco Mundial, IMF, Chainalysis
4. **Competitor analysis:** Western Union, ElDorado, Zelle

**Demographics:**

- **Remitentes:** 25-45 años, educación media-alta, viven en Colombia/USA/Chile
- **Receptores:** 35-65 años, educación variada, viven en Venezuela (urbano + rural)

### 5.2 Key Findings

#### Finding 1: Fees son el pain point #1

> "No me importa esperar 2 días si ahorro 10%. Pero $15 por cada $100 es robo."

**Insight:** Precio > Velocidad (aunque velocidad es un bonus)

**Implicación de producto:**

- Headline debe enfatizar "$0.01 fees" antes que "5 segundos"
- Landing page debe tener Fee Calculator prominente

#### Finding 2: Trust es crítico

> "¿Cómo sé que mi dinero va a llegar? Nunca he usado crypto."

**Insight:** Need social proof + transparencia

**Implicación de producto:**

- Mostrar transacciones en blockchain explorer (link directo)
- Testimonials reales con fotos
- "Non-custodial" explanation en onboarding
- Transaction confirmations por email

#### Finding 3: Phone numbers > Wallet addresses

> "No puedo pedirle a mi mamá que me mande su 'wallet address'. Ella ni sabe qué es eso."

**Insight:** SocialConnect es MUST-HAVE (no nice-to-have)

**Implicación de producto:**

- Priorizar integración SocialConnect/ODIS
- Fallback: Manual address entry (con warning)
- Onboarding: Explicar que phone = wallet

#### Finding 4: Mobile es primario

> "Siempre envío desde mi teléfono. Si necesito desktop, no lo uso."

**Insight:** Mobile-first no es opcional

**Implicación de producto:**

- PWA (Progressive Web App) prioritario
- Desktop es secundario
- Touch targets >44px
- Works offline (basic features)

#### Finding 5: Educación es necesaria

> "Nunca he oído de 'blockchain'. ¿Eso no es Bitcoin? ¿Es legal?"

**Insight:** Need onboarding educacional

**Implicación de producto:**

- Tooltips explicativos
- FAQ section robusta
- Video tutorial (1-2 min)
- Evitar jerga crypto en UI

### 5.3 User Personas

#### Persona 1: María (Remitente)

**Demographics:**

- 32 años, vive en Miami, FL
- Enfermera, $45K/año
- Envía $200/mes a su mamá en Caracas

**Goals:**

- Maximizar el dinero que llega a su mamá
- Envío rápido (emergencias médicas)
- Proceso simple (busy schedule)

**Frustrations:**

- Western Union cobra $30 por $200 (15%)
- Su mamá tiene que caminar 2h a sucursal
- No puede trackear si llegó el dinero

**Tech Savviness:** Media (usa apps pero no crypto)

**Quote:**

> "Si puedo ahorrar $25 cada mes, eso es $300 al año. Eso es mucho para mi mamá."

#### Persona 2: Carmen (Receptora)

**Demographics:**

- 58 años, vive en Valencia, Venezuela
- Ama de casa, depende de remesas
- Recibe $200/mes de su hija (María)

**Goals:**

- Recibir dinero fácilmente
- No perder valor por fees/inflación
- Usar el dinero para comida/medicina

**Frustrations:**

- Caminar 2h a Western Union
- Miedo a robo llevando efectivo
- No entiende tecnología

**Tech Savviness:** Baja (tiene smartphone pero solo usa WhatsApp)

**Quote:**

> "Mi hija me manda $200 pero yo recibo $170. ¿Dónde están los $30?"

#### Persona 3: Carlos (Power User)

**Demographics:**

- 28 años, vive en Bogotá, Colombia
- Developer, $60K/año
- Envía $500/mes a padres en Maracaibo

**Goals:**

- Mejor precio posible (compara opciones)
- Control total (no confía en intermediarios)
- Speed (envía cuando hay emergencias)

**Frustrations:**

- ElDorado tiene buenas fees pero UX es confusa
- Crypto exchanges tienen high withdrawal fees
- Familia no sabe usar wallets crypto

**Tech Savviness:** Alta (usa crypto, entiende blockchain)

**Quote:**

> "Sé que blockchain puede resolver esto, pero necesito algo que mi mamá pueda usar."

---

## 6. GO-TO-MARKET

### 6.1 Market Sizing (TAM/SAM/SOM)

```
TAM (Total Addressable Market)
└─ Global remittance market: $860B (2024)
   │
   SAM (Serviceable Addressable Market)
   └─ Latin America remittances: $150B
      │
      SOM (Serviceable Obtainable Market)
      └─ Venezuela remittances: $3.8B
         │
         Beachhead (Year 1)
         └─ Tech-savvy diaspora: $380M (10% of Venezuela)
            │
            Initial Target (MVP)
            └─ Early adopters: $38M (1% of Venezuela)
```

**Revenue Model (Fase 1):**

- Fee: 0.5% por transacción (vs 0% en MVP para ganar tracción)
- $38M \* 0.5% = $190K ARR potencial
- Reality check: Assume 10% capture → $19K ARR Year 1

**Realista para MVP:**

- 100 usuarios activos
- $500 promedio/mes/usuario
- $50K GMV mensual
- $250 MRR (a 0.5% fee)
- $3K ARR Year 1

### 6.2 Distribution Strategy

#### Canal 1: Community-Led Growth (Primary)

**Tactic:**

1. Identificar "super-connectors" en diáspora (WhatsApp groups, Facebook groups)
2. Offer free transfers (0% fee) for first 100 users
3. Referral program: "Envía gratis si invitas a 3 amigos"
4. Build in public en Twitter/X (@luissambrano_ux)

**Metrics:**

- Viral coefficient: Target 1.5 (cada usuario trae 1.5 usuarios)
- CAC: $0 (organic growth)

#### Canal 2: Content Marketing (Secondary)

**Platforms:**

1. **YouTube:** Tutoriales "Cómo enviar remesas sin fees"
2. **TikTok:** Clips cortos comparando Puente vs Western Union
3. **Blog:** SEO para "remesas Venezuela", "enviar dinero Venezuela"

**Metrics:**

- Organic traffic: 1K+ visitors/month by Month 3
- Conversion: 2% (10-20 signups/month)

#### Canal 3: Partnerships (Future)

**Targets:**

1. **Influencers venezolanos:** Micro-influencers (10K-50K followers)
2. **Remittance agents:** Offline agents que usan Puente como backend
3. **NGOs:** Organizaciones que envían ayuda humanitaria

**Timeline:** Q3 2026 (after MVP proven)

### 6.3 Pricing Strategy

**Fase 1 (MVP - 2026 Q1-Q2):**

```
Fee: 0% (FREE)
Rationale: Ganar usuarios, validar product-market fit
```

**Fase 2 (Growth - 2026 Q3-Q4):**

```
Fee: 0.5%
Rationale: Sostenible pero competitivo (vs 15% tradicional)
Transparency: "Usamos 0.3% para costos, 0.2% para mejorar el producto"
```

**Fase 3 (Scale - 2027+):**

```
Tiered pricing:
- 0-$100: 0.5%
- $100-$500: 0.3%
- $500+: 0.1%

Rationale: Incentiva mayores volúmenes
```

### 6.4 Launch Plan (LatamHubs Buildathon)

**Pre-Launch (Now - Jan 19):**

- ✅ Landing page live
- ✅ GitHub repo público
- ✅ Build in public en X/Twitter
- 🔄 Video teaser (30s)

**Launch (Jan 19 - Feb 27):**

- Day 1: Post en X/Twitter announcement
- Week 1: Onboard first 10 beta users (friends/family)
- Week 2-3: Iterate based on feedback
- Week 4-6: Push for 100 transactions (LatamHubs mainnet bonus)
- Feb 27: Submit to LatamHubs

**Post-Launch (Mar+):**

- Win MiniApps track (fingers crossed 🤞)
- Use prize money for:
  1. Smart contract audit ($5K)
  2. First marketing campaign ($2K)
  3. Legal/compliance review ($3K)

---

## 7. COMPETIDORES Y DIFERENCIACIÓN

### 7.1 Competitive Landscape

| Competidor        | Tipo            | Fee    | Velocidad | UX        | Crypto?  | Diferenciador Puente                 |
| ----------------- | --------------- | ------ | --------- | --------- | -------- | ------------------------------------ |
| **Western Union** | Traditional     | 10-15% | 3-5 días  | Simple    | No       | 1500x más barato, 86400x más rápido  |
| **MoneyGram**     | Traditional     | 8-12%  | 2-4 días  | Simple    | No       | Similar a WU                         |
| **Zelle**         | Digital P2P     | 0%\*   | Minutos   | Excelente | No       | Solo USA→USA (no internacional)      |
| **ElDorado**      | Crypto P2P      | 1-3%   | Minutos   | Compleja  | Sí       | UX simple (no requiere saber crypto) |
| **Binance P2P**   | Crypto Exchange | 0-1%   | Minutos   | Media     | Sí       | Non-custodial + SocialConnect        |
| **Strike**        | Lightning       | 0.3%   | Segundos  | Media     | Sí (BTC) | Celo > Bitcoin (mejor para LATAM)    |
| **Chipper Cash**  | Neobank         | 0-2%   | Minutos   | Buena     | No       | Blockchain transparencia             |

\*Zelle es gratis pero solo USA→USA domestic

### 7.2 MOAT (Competitive Advantages)

#### 1. SocialConnect/ODIS Integration

**Qué es:**

- Phone number → Wallet address mapping
- Decentralized (no single point of failure)
- Privacy-preserving (ODIS = Oblivious Decentralized Identity Service)

**Por qué es un moat:**

- Nadie más en LATAM lo usa todavía
- Difícil de replicar (requiere integración profunda con Celo)
- Network effects: Más usuarios = más phone numbers registered = más útil

#### 2. Non-Custodial + Simple UX

**Qué es:**

- Privy embedded wallets = user tiene control total
- Pero UX es email login (no seed phrases)

**Por qué es un moat:**

- Competidores custodiales (ej: Chipper) = riesgo de hack/cierre
- Competidores non-custodial (ej: ElDorado) = UX compleja
- Puente = mejor de ambos mundos

#### 3. LATAM-First Focus

**Qué es:**

- Diseñado específicamente para Venezuela/LATAM
- Partnerships con Celo Mexico, Celo Colombia, CeLatam
- Content en Español
- Customer support en Español

**Por qué es un moat:**

- Competidores globales (Strike, Cash App) = no localizados
- Entendemos el mercado mejor que extranjeros

#### 4. Build in Public

**Qué es:**

- GitHub público
- Roadmap transparente
- Community involvement en decisiones

**Por qué es un moat:**

- Trust (users ven el código)
- Community (users se sienten parte del proyecto)
- Recruiting (developers quieren contribuir)

### 7.3 Positioning Statement

**Para:** Venezolanos en la diáspora que envían remesas a familia en Venezuela

**Que están frustrados con:** Fees excesivos (15%) y tiempos largos (5 días) de Western Union

**Puente es:** Una plataforma de remesas blockchain

**Que:** Reduce fees a <$0.01 y tiempo a 5 segundos

**A diferencia de:** Western Union (tradicional caro) y ElDorado (crypto complejo)

**Porque:** Usamos Celo blockchain pero con UX simple (email login, phone numbers)

**Condensed:**

> "Puente es Western Union si fuera construido hoy: instant, casi-gratis, y transparente."

---

## 8. ROADMAP Y FASES

### 8.1 Timeline Master

```
2026 ROADMAP
═══════════════════════════════════════════════════════

Q1 (Jan-Mar)
├─ ✅ Landing page (Pump.fun style)
├─ ✅ GitHub repo público
├─ 🔄 MVP Remesas
│  ├─ ✅ Privy auth
│  ├─ ✅ Celo integration
│  ├─ 🔄 SocialConnect/ODIS
│  └─ 📅 100 transactions (mainnet)
├─ 📅 LatamHubs submission (Feb 27)
└─ 📅 Winners announcement (Mar 6)

Q2 (Apr-Jun)
├─ 🎯 Launch Remesas v1.0
├─ 🎯 Smart contract audit
├─ 🎯 Onboard first 500 users
├─ 🎯 Start building Crowdfunding module
└─ 🎯 Legal/compliance review

Q3 (Jul-Sep)
├─ 🎯 Launch Crowdfunding beta
├─ 🎯 First 10 successful campaigns
├─ 🎯 Start building Donaciones module
└─ 🎯 Reach $100K GMV

Q4 (Oct-Dec)
├─ 🎯 Launch Donaciones beta
├─ 🎯 Integrate all 3 modules
├─ 🎯 Fundraising (Seed round?)
└─ 🎯 End year: 10K users, $500K GMV

2027
└─ 🚀 Series A, Expansion to Colombia/Perú
```

### 8.2 Fase 1: Remesas (Detail)

**Timeline:** Jan-Mar 2026 (12 weeks)

**Milestones:**
| Week | Milestone | Status |
|------|-----------|--------|
| 1-2 | Landing page deployed | ✅ Done |
| 3-4 | Privy integration | ✅ Done |
| 5-6 | Celo Mainnet deployment | 🔄 In Progress |
| 7-8 | SocialConnect/ODIS | 🔄 In Progress |
| 9-10 | Beta testing (10 users) | 📅 Planned |
| 11 | Bug fixes + polish | 📅 Planned |
| 12 | LatamHubs submission | 📅 Planned (Feb 27) |

**Success Criteria:**

- [ ] 100+ transactions on Celo Mainnet
- [ ] 50+ unique users
- [ ] <1% transaction failure rate
- [ ] Average confirmation time <10s
- [ ] Net Promoter Score (NPS) >50

### 8.3 Fase 2: Crowdfunding (Outline)

**Features:**

1. Create campaign (title, description, goal, deadline)
2. Upload supporting docs (medical bills, etc.)
3. Share campaign link (social media)
4. Contributors send cUSD
5. Beneficiary withdraws when goal reached (or deadline)
6. Transparency: All contributions visible on-chain

**Tech Additions:**

- Smart contract: Escrow-based crowdfunding
- File upload: Supabase Storage for supporting docs
- Social sharing: Open Graph meta tags

**Timeline:** Apr-Jun 2026 (12 weeks)

### 8.4 Fase 3: Donaciones (Outline)

**Features:**

1. Creator profile (bio, content links)
2. Recurring donations setup
3. One-time tips
4. Supporter tiers (optional)
5. Creator analytics dashboard

**Tech Additions:**

- Recurring payments: Cron job + smart contract
- Creator pages: Dynamic routing in Next.js
- Analytics: Custom Supabase queries

**Timeline:** Jul-Sep 2026 (12 weeks)

---

## 9. BUILDATHON LATAMHUBS

### 9.1 Competition Details

**Name:** Latam Buildathon  
**Organizer:** Celo (via LatamHubs.lat)  
**Dates:**

- Pre-registration: Dec 18, 2025 → Jan 19, 2026
- Buildathon: Jan 19 → Feb 27, 2026
- Winners: Mar 6, 2026

**Prize Pool:**

- Main tracks: 8,000 CELO + 800 cUSD
- Sponsor bounties: 2,000 USD (Human.Tech + v0)

### 9.2 Tracks We're Competing In

#### Track 1: MiniApps (PRIMARY)

**Prize:**

- 🥇 1st: 3,000 CELO + 300 cUSD
- 🥈 2nd: 2,000 CELO + 150 cUSD
- 🥉 3rd: 1,000 CELO + 50 cUSD

**Why this track:**

- Bigger prizes (6K CELO vs 2K for Open Track)
- Existing projects allowed (si pivoteamos de testnet a mainnet cuenta)
- Mobile-first focus aligns with Puente

**Requirements:**

- Build/launch MiniApp on Farcaster or MiniPay
- Deployed on Celo Mainnet
- Public URL + GitHub repo

**Our angle:**

- MiniPay integration (Celo mobile wallet)
- PWA optimized for mobile
- "MiniApp Mondays" feature by @CeloOrg on Farcaster

#### Track 2: Human.Tech Bounty (SECONDARY)

**Prize:**

- WaaP (Wallet-as-a-Platform): 5x $100 USDC
- Passport (Proof-of-Personhood): 2x $250 USDC

**Why this track:**

- We already use Privy (similar to WaaP)
- Can integrate Passport for Sybil resistance
- Extra $100-250 USDC on top of main prize

**Requirements:**

- Integrate WaaP for wallet login OR
- Integrate Passport embeds for proof-of-personhood

**Our angle:**

- Use Passport to verify users (prevent bots/multiple accounts)
- Embed in onboarding flow

### 9.3 Mainnet Activity Bonus

**Rule:**

> "Projects generating the most transactions on Celo Mainnet receive special consideration for higher prizes."

**Strategy:**

1. **Deploy early** (by Week 6 = early Feb)
2. **Incentivize usage:**
   - Free transfers (0% fee)
   - Referral program: "Send to 3 friends, get $5 cUSD"
   - Beta tester rewards: First 100 users get $10 cUSD credit
3. **Track metrics:**
   - Transactions per day
   - Unique addresses
   - Volume in cUSD
4. **Report to judges:**
   - Dashboard showing mainnet activity
   - Transaction hashes as proof

**Goal:** 100+ transactions by Feb 27

### 9.4 Submission Requirements

**Karma Gap Project Link must include:**

1. ✅ GitHub repository (public)
2. 📅 Live demo URL (Celo Mainnet)
3. 📅 Presentation deck (slides)
4. 📅 Demo video (showing app in action)

**Timeline:**

- Week 10 (Feb 13-19): Record demo video
- Week 11 (Feb 20-26): Prepare deck + polish
- Feb 27: Submit Karma Gap link

### 9.5 Judging Criteria (Inferred)

Based on buildathon language:

1. **Impact:** Does it solve a real problem?
2. **Execution:** Is it functional and polished?
3. **Clarity:** Is the demo/pitch clear?
4. **Craft:** Attention to detail in UX/code
5. **Mainnet Activity:** Real usage (bonus points)

**Our strengths:**

- ✅ Impact: $3.8B market, 7.89M potential users
- ✅ Execution: Already 95% functional (landing + MVP)
- ✅ Clarity: Simple pitch ("Western Union pero blockchain")
- 🔄 Craft: Good but can improve (polish UI)
- 📅 Mainnet Activity: TBD (need to deploy + get users)

---

## 10. BRAND Y DISEÑO

### 10.1 Brand Identity

**Name:** Puente  
**Meaning:** "Bridge" (conecta remitente con receptor, diáspora con homeland)

**Logo:**

- Icon: Stylized bridge
- Colors: Verde #2ECC71 (primary), Negro #000000 (background)
- Typography: Inter (sans-serif, modern, accessible)

**Brand Voice:**

- **Tone:** Empático, transparente, empoderador
- **Avoid:** Jerga técnica, promesas exageradas
- **Example good:** "Ese dinero es para tu familia. No para bancos."
- **Example bad:** "Leverage blockchain to disrupt remittances."

### 10.2 Design System (Actualizado - Pump.fun Style)

**Inspiración:** Pump.fun Hackathon (minimalista, dark, impactante)

#### Color Palette

```css
/* PRIMARY */
--bg-black: #000000;
--text-white: #ffffff;
--text-gray: rgba(255, 255, 255, 0.7);

/* BRAND */
--green-primary: #2ecc71;
--green-dark: #27ae60;

/* UI */
--border-subtle: rgba(255, 255, 255, 0.1);
--glass-bg: rgba(255, 255, 255, 0.05);
```

#### Typography Scale

```css
/* HERO */
h1: 80-120px, font-weight: 900, line-height: 0.9

/* SECTIONS */
h2: 48-80px, font-weight: 700

/* BODY */
p: 18-20px, font-weight: 400
```

#### Components

- **Buttons:** Verde con glow, hover scale 1.05
- **Cards:** Glassmorphism (bg-white/5, border-white/10)
- **Inputs:** Dark con border verde on focus

### 10.3 Landing Page Structure

**Based on Pump.fun + PUENTE_PUMP_FUN_STRATEGY.md:**

```
1. Header (sticky)
   - Logo
   - Links: Acerca, Productos, Cómo Funciona, Roadmap, Contacto
   - CTA: "Enviar Ahora"

2. Marquee Banner (animated)
   - "Envíos 24/7 · Sin límites · Sin fronteras"

3. Hero
   - H1: "Remesas Sin Intermediarios"
   - Sub: "$3.8B enviados anualmente. 15% perdido. Ya no más."
   - CTAs: "Enviar Ahora" + "Ver Demo"
   - Video/mockup preview

4. Value Prop
   - H2: "Menos de $0.01 por transferencia"
   - Explicación de problema/solución

5. Three Products (Cards)
   - REMESAS (disponible ahora)
   - CROWDFUNDING (en construcción)
   - DONACIONES (próximamente)

6. How It Works (3 Steps)
   - 1. Conecta
   - 2. Envía
   - 3. Verifica

7. Fee Calculator (Interactive)
   - Input: Monto
   - Output: Western Union fee vs Puente fee
   - Savings highlighted

8. Social Proof
   - Partners: Celo, Privy, Supabase
   - Stats: $XXX enviados, XXX usuarios

9. Timeline (Roadmap)
   - Q1: Remesas
   - Q2: Crowdfunding
   - Q3: Donaciones
   - 2027: Super-app

10. Final CTA
    - "¿Listo para ahorrar?"
    - "Enviar Ahora" button

11. Footer
    - Links, Social, Legal
```

### 10.4 Assets Inventory

**Existing:**

- ✅ Logo (PNG, transparent)
- ✅ Brand colors defined
- ✅ Inter font
- ✅ Style guide doc

**Needed for LatamHubs:**

- 📅 Demo video (1-2 min)
- 📅 Presentation deck (10-15 slides)
- 📅 Screenshots (Hero mockup, Process steps)
- 📅 Partner logos (Celo, Privy, etc.)

---

## 11. MÉTRICAS DE ÉXITO

### 11.1 North Star Metric

**Definition:** Monthly Active Senders (MAS)

**Why this metric:**

- Remittance frequency = stickiness
- Sender retention = product working
- Direct correlation to revenue

**Target:**

- Month 1 (Jan): 10 MAS
- Month 2 (Feb): 25 MAS
- Month 3 (Mar): 50 MAS
- Month 6 (Jun): 200 MAS

### 11.2 KPIs Detallados

#### Acquisition

- **Website visitors:** 1K+/month by Month 3
- **Signup conversion:** 5% (50 signups/1K visitors)
- **CAC (Customer Acquisition Cost):** $0 target (organic)

#### Activation

- **Account completion:** 80% (signup → first transaction)
- **Time to first transaction:** <5 min average
- **KYC completion:** N/A for MVP (wallet-based, no KYC)

#### Retention

- **Monthly retention:** 60% (users who sent in Month N send again in Month N+1)
- **DAU/MAU ratio:** 0.3 (senders use app every 3 days on average)

#### Revenue (Post-MVP)

- **ARPU (Average Revenue Per User):** $2.50/month (at 0.5% fee on $500 sent)
- **GMV (Gross Merchandise Value):** $50K Month 3

#### Referral

- **Viral coefficient:** 1.5 target (each user brings 1.5 users)
- **NPS (Net Promoter Score):** >50

### 11.3 LatamHubs Specific Metrics

**Buildathon Goals:**

- [ ] 100+ transactions on Mainnet
- [ ] 50+ unique users
- [ ] 10+ daily active users (peak day)
- [ ] $10K+ volume (cumulative)
- [ ] <1% transaction failure rate

**Dashboard for Judges:**

- Real-time tx count
- Unique addresses graph
- Volume over time chart
- Recent transactions table
- All verifiable on Celo Explorer

---

## 12. ESTADO ACTUAL (6 Feb 2026)

### 12.1 What's Built (✅ Done)

**Frontend:**

- ✅ Landing page (11 components, Pump.fun style)
- ✅ Header (sticky, responsive)
- ✅ Hero section (copywriting aligned)
- ✅ ThreeProducts cards (3 fases)
- ✅ MarqueeBanner (animated)
- ✅ ProcessSteps, Testimonial, Timeline, Footer
- ✅ Glassmorphism styling
- ✅ Dark mode by default
- ✅ Mobile responsive
- ✅ Framer Motion animations

**Auth & Wallet:**

- ✅ Privy integration (email login)
- ✅ Embedded wallet creation
- ✅ Connect to Celo

**Smart Contracts:**

- ✅ Basic remittance contract written
- 🔄 Pending Mainnet deployment (Week 6)

**Infrastructure:**

- ✅ Vercel deployment
- ✅ Supabase setup
- ✅ GitHub repo public

### 12.2 What's In Progress (🔄)

**SocialConnect/ODIS:**

- 🔄 Phone → Address mapping
- 🔄 Integration with Celo ODIS nodes
- 🔄 Privacy-preserving lookups

**Mainnet Deployment:**

- 🔄 Contract deployment to Celo Mainnet
- 🔄 Frontend connected to Mainnet (vs Alfajores)
- 🔄 Production env variables

**Testing:**

- 🔄 Beta user onboarding (first 10 users)
- 🔄 Transaction flow testing
- 🔄 Bug fixes based on feedback

### 12.3 What's Next (📅 Planned)

**Week 6-7 (Feb 10-16):**

- [ ] Deploy smart contract to Celo Mainnet
- [ ] Complete SocialConnect integration
- [ ] Beta test with 10 users (friends/family)
- [ ] Fix critical bugs

**Week 8-9 (Feb 17-23):**

- [ ] Onboard 40 more users (total 50)
- [ ] Push for 100 transactions (mainnet activity bonus)
- [ ] Record demo video
- [ ] Create presentation deck

**Week 10-11 (Feb 24-27):**

- [ ] Final polish (UI, copy, bugs)
- [ ] Prepare Karma Gap submission
- [ ] Submit to LatamHubs (Feb 27 deadline)

**Post-Submission (Mar+):**

- [ ] Wait for winners announcement (Mar 6)
- [ ] Continue iterating based on user feedback
- [ ] Plan for Fase 2 (Crowdfunding) if we win prize money

### 12.4 Blockers & Risks

#### Blocker 1: SocialConnect Integration Complexity

**Issue:** ODIS integration más complejo de lo esperado  
**Impact:** Phone lookup puede no estar ready para demo  
**Mitigation:** Fallback a manual address entry + warning

#### Blocker 2: Mainnet Gas Costs

**Issue:** Celo Mainnet requiere CELO para gas (no tenemos suficiente)  
**Impact:** No podemos hacer 100 transactions  
**Mitigation:** LatamHubs dio 3 CELO por equipo (suficiente para ~300 txs)

#### Blocker 3: User Onboarding

**Issue:** Hard to get 50+ real users to test in 3 weeks  
**Impact:** Mainnet activity bonus en riesgo  
**Mitigation:**

1. Incentivize (free $5 cUSD per beta tester)
2. Referral program (invite 3 friends = extra $5)
3. Reach out to Venezuelan communities online

#### Risk 1: Competition

**Issue:** Other teams building similar things  
**Probability:** Medium  
**Impact:** High (dilutes our uniqueness)  
**Mitigation:** Focus on UX + SocialConnect differentiation

#### Risk 2: Regulatory

**Issue:** Remittances may require license in some countries  
**Probability:** Low (for MVP/buildathon)  
**Impact:** High (could block us long-term)  
**Mitigation:** Research post-buildathon, start with Venezuela only (less regulated)

### 12.5 Team & Roles

**Current:**

- **Luis Sambrano:** Solo founder (doing everything)
  - Product
  - Engineering (frontend + smart contracts)
  - Design
  - Marketing
  - Community

**Needed (Post-Buildathon):**

- Smart contract auditor (external, paid)
- Designer (improve UI/UX)
- Community manager (grow LATAM presence)
- Legal advisor (compliance)

**Budget for Year 1:**

- If we win 1st place MiniApps: 3,000 CELO (~$2,400 at current price)
- Allocation:
  - $1,000: Smart contract audit
  - $500: Marketing (ads, content creation)
  - $500: Legal consultation
  - $400: Buffer

---

## 📌 APÉNDICE

### A. Glosario

**Celo:** L2 blockchain optimizada para mobile y mercados emergentes  
**cUSD:** Stablecoin nativo de Celo (1 cUSD ≈ 1 USD)  
**SocialConnect:** Protocolo de Celo para mapear phone → address  
**ODIS:** Oblivious Decentralized Identity Service (backend de SocialConnect)  
**Privy:** Servicio de auth + embedded wallets  
**Non-custodial:** Usuario controla sus fondos (Puente no puede accederlos)  
**PWA:** Progressive Web App (web app que funciona como nativa)  
**GMV:** Gross Merchandise Value (volumen total transaccionado)

### B. Links Críticos

**Producto:**

- Landing: https://v0-puente-swart.vercel.app
- GitHub: https://github.com/LuisSambrano/puente-fintech-dapp

**Buildathon:**

- LatamHubs: https://latamhubs.lat
- Celo Docs: https://docs.celo.org
- Human.Tech: https://docs.human.tech

**Community:**

- Twitter: https://x.com/luissambrano_ux
- Telegram: https://t.me/luissambrano_ux
- Celo Discord: http://chat.celo.org

### C. Documentos Clave (Repo)

**Primarios (Fuente de Verdad):**

- `/docs/07-mision-vision.md` → Misión/Visión/Objetivos
- `/docs/09-user-research.md` → User research data
- `/brandkit/style_guide.md` → Brand + Design

**Secundarios (Referencia):**

- `/docs/03-stack-tecnico.md` → Tech decisions
- `/docs/11-competidores.md` → Competitor analysis
- `/docs/10-gtm-strategy.md` → Go-to-market

**Archivados (Histórico):**

- `/docs/00-contexto.md` → Initial context
- `/docs/01-brainstorming.md` → Early brainstorming
- `/docs/02-decision-proyecto.md` → Decision log

### D. Changelog (Pivots Documentados)

**Pivot 1 (Dic 2025):** "One Man Army" → "Puente"  
**Pivot 2 (Ene 2026):** Solo remesas → Super-app (3 fases)  
**Pivot 3 (Ene 2026):** Testnet → Mainnet-first  
**Pivot 4 (Feb 2026):** Generic LATAM → Venezuela beachhead

---

## ✅ CONCLUSIÓN

Este documento es la **ÚNICA FUENTE DE VERDAD** para Puente.

**Si hay conflicto entre este doc y otros:**
→ **ESTE DOCUMENTO PREVALECE.**

**Próximo paso:**

1. Usa este documento para alinear Antigravity
2. Genera PRD específicos para cada feature
3. Código debe reflejar esta narrativa

**Última actualización:** 6 Feb 2026  
**Próxima revisión:** Post-LatamHubs (Mar 2026)

---

**Made with ❤️ for la diáspora venezolana**
