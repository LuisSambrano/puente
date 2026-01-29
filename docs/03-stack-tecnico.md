# Stack Técnico - Puente (Actualizado Fase Híbrida)

> **Cambio Crítico (29 Ene 2026)**: Reemplazo de RainbowKit con **Privy**.
> **Razón**: Necesitamos onboarding masivo para usuarios no-crypto. Email/SMS login es obligatorio.

---

## 🛠️ Core Stack

### Frontend & Wallet

| Componente         | Tecnología         | Justificación                                                                        |
| ------------------ | ------------------ | ------------------------------------------------------------------------------------ |
| **Framework**      | **Next.js 14**     | Estándar de industria, SSR, optimizado por Vercel.                                   |
| **Auth & Wallet**  | **Privy**          | **Game Changer**. Email/SMS login, wallets embebidas, social recovery. UX tipo Web2. |
| **Blockchain Lib** | **Viem**           | Ligero, moderno, recomendado por Celo. Fee abstraction nativa.                       |
| **UI Kit**         | **Shadcn/UI + v0** | Componentes accesibles y bonitos generados por IA.                                   |
| **HTTP Client**    | **TanStack Query** | Manejo de estado asíncrono robusto.                                                  |

### Backend & Data

| Componente   | Tecnología             | Justificación                                                        |
| ------------ | ---------------------- | -------------------------------------------------------------------- |
| **Database** | **Supabase**           | PostgreSQL con esteroides. Auth (si necesario extra), RLS, Realtime. |
| **API**      | **Next.js API Routes** | Backend serverless integrado.                                        |
| **Hosting**  | **Vercel**             | Deploy automático, Edge functions.                                   |

### Blockchain & Celo

| Componente      | Tecnología              | Justificación                                             |
| --------------- | ----------------------- | --------------------------------------------------------- |
| **Network**     | **Celo Mainnet**        | Rápido, barato, mobile-first, compatible EVM.             |
| **Currency**    | **cUSD**                | Stablecoin nativa para evitar volatilidad en remesas.     |
| **Gas Payment** | **Fee Abstraction**     | Usuarios pagan gas con cUSD, no necesitan CELO.           |
| **Identity**    | **Human.Tech Passport** | Verificación de humanidad sin KYC documental tradicional. |
| **Wallet App**  | **MiniPay**             | Integration target principal.                             |

---

## 🏗️ Arquitectura del Sistema Híbrido

Aunque el MVP es solo remesas, la arquitectura base soporta las 3 verticales (Remesas, Crowdfunding, Donaciones).

```mermaid
graph TD
    User[Usuario (Web/Mobile)] -->|Auth (Email/SMS)| Privy
    Privy -->|Embedded Wallet| Wallet[Celo Wallet]

    User -->|UI Interaction| NextJS[Next.js App]

    NextJS -->|Read/Write Data| Supabase[Supabase DB]
    subgraph Supabase
        UsersTable[Users]
        TransactionsTable[Transactions]
        CampaignsTable[Campaigns (Future)]
    end

    NextJS -->|Execute Tx| SmartContracts[Celo Smart Contracts]
    subgraph Celo Blockchain
        cUSD[cUSD Token]
        PuenteContract[Puente Logic]
        PassportContract[Passport Verifier]
    end

    Wallet -->|Sign Tx| SmartContracts
```

---

## 🔧 Integraciones Clave

### 1. Privy (Auth + Wallet)

El corazón de la experiencia de usuario.

- **Flow**: Usuario entra email -> Recibe código -> Wallet lista.
- **Config**: Login methods (Email, SMS, Google).
- **Embedded Wallet**: El usuario no sabe que tiene una seed phrase (está encriptada/sharded).

### 2. Celo Fee Abstraction

Crítico para remesas. El usuario envía $100 cUSD. El gas se cobra de esos mismos cUSD.

- **Configuración en Viem**: Usar `feeCurrency` apuntando al contrato de cUSD.

### 3. Human.Tech Passport

- **Flow**: Usuario conecta wallet -> Firma mensaje -> Human.Tech verifica score -> Smart contract guarda estado "Verificado".
- **Uso**: Límites de transacción más altos para usuarios verificados.

---

## 💻 Entorno de Desarrollo

### Setup Local

1. **Repo**: Monorepo con Turborepo (opcional si Celo Composer lo trae) o estructura Next.js estándar.
2. **Contracts**: Hardhat integrado en el proyecto.
3. **Simulación**:
   - `ngrok` para exponer localhost a MiniPay en celular real.
   - `celo-devchain` o fork de mainnet para pruebas rápidas.

### Despliegue

1. **Contracts**: Deploy a Celo Mainnet via Hardhat ignition o scripts.
2. **App**: Push a main -> Vercel Build -> Deploy.

---

## 📝 Decisiones Técnicas (Log)

- **29 Ene 2026**: Cambio de RainbowKit a **Privy**.
  - _Motivo_: RainbowKit asume que el usuario ya tiene wallet o sabe crearla. Privy abstrae esto totalmente, permitiendo onboarding masivo.
- **29 Ene 2026**: Adopción de arquitectura híbrida en DB.
  - _Motivo_: Evitar refactor masivo cuando agreguemos crowdfunding. La tabla `transactions` tendrá un campo `type` (remittance, donation, campaign_fund).

---

## ¿Por qué NO usamos X?

- **WalletConnect puro**: Muy crudo para UX masiva.
- **Account Abstraction (ERC-4337) manual**: Privy ya maneja gran parte de la complejidad de embedded wallets, no necesitamos implementar un bundler propio aun.
- **Firebase**: Supabase ofrece mejor integración SQL relacional que es vital para datos financieros complejos cruzados.
