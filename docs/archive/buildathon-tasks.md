# One Man Army - Buildathon Tasks (Híbrido + Privy)

## Fase 1: Setup Moderno (Ene 29 - Feb 2)

### Identidad & Wallet (Privy) ✅

- [ ] Crear cuenta en dashboard.privy.io
- [ ] Configurar App ID en env vars
- [ ] Configurar Login Methods (Email, Google, SMS)
- [ ] Customizar branding (Logo Puente, colores)

### Celo & Base

- [ ] Configurar Viem con Celo Mainnet
- [ ] Setup Celo Composer (limpieza de template default)
- [ ] Deploy "Hello World" a Vercel

### Passport

- [ ] Obtener API Keys de Human.Tech
- [ ] Integrar scorer básico en frontend

---

## Fase 2: Core MVP - Remesas (Feb 3 - Feb 9)

### Smart Contracts

- [ ] `PuenteRemesas.sol`: Contrato simple de custodia y envío.
- [ ] Tests en Hardhat.
- [ ] Deploy a Celo Mainnet.

### Frontend (v0 + Privy)

- [ ] **Auth Screen**: Login con Privy.
- [ ] **Dashboard**: Ver saldo cUSD (v0).
- [ ] **Send Flow**: Input dirección/email -> Confirmar -> Firmar (v0).
- [ ] **Transactions**: Lista de envíos recientes (Supabase).

---

## Fase 3: Integración & Tracción (Feb 10 - Feb 16)

### Backend (Supabase)

- [ ] Tabla `users`: Mapear Privy DID -> Datos perfil.
- [ ] Tabla `transactions`: Log de txs on-chain.

### Testing

- [ ] 5 usuarios Alpha (One Man Army friends).
- [ ] Probar flujo completo: Login -> Send -> Receive.
- [ ] Verificar fees en block explorer.

---

## Fase 4: Narrativa Híbrida & Polish (Feb 17 - Feb 27)

### UI "Super-App"

- [ ] Agregar Tabs visuales: "Remesas" (Activo), "Ayuda" (Coming Soon), "Creadores" (Coming Soon).
- [ ] Landing Page actualizada con visión 3-en-1.

### Submission

- [ ] **Video Demo**: Enfocado en la facilidad de uso (Privy) y la visión (Híbrida).
- [ ] **Pitch Deck**: "Zelle + GoFundMe + Cafecito de LATAM".
- [ ] **Karma Gap**: Subir todo antes del deadline.

---

## Tareas Roadmap (Post-Buildathon)

- [ ] Smart Contracts para Crowdfunding (Escrow condicional).
- [ ] Widget de donaciones para creadores.
- [ ] Integración de off-ramp (Pago Móvil/P2P Marketplace).
