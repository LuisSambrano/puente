# Estructura del Proyecto Puente

> **Generado por**: Celo Composer v2.4.13  
> **Fecha**: 28 Enero 2026  
> **Template**: MiniPay  
> **Monorepo**: Turborepo

---

## 📁 Estructura General

```
puente-app/
├── apps/
│   ├── web/                    # Frontend Next.js
│   └── contracts/              # Smart contracts Hardhat
├── package.json                # Root package.json
├── pnpm-workspace.yaml         # Workspace configuration
├── turbo.json                  # Turborepo configuration
└── tsconfig.json               # TypeScript base config
```

---

## 🌐 Frontend (`apps/web/`)

### Stack Técnico

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Wallet**: RainbowKit (configurado)
- **Blockchain**: Viem + Wagmi

### Estructura

```
apps/web/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/             # React components
│   │   ├── ui/                 # shadcn/ui components
│   │   └── ...                 # Custom components
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utilities and helpers
│   └── types/                  # TypeScript types
├── .env.template               # Environment variables template
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind configuration
└── package.json                # Frontend dependencies
```

### Environment Variables (`.env.template`)

```bash
# Wallet Connect
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=

# Network
NEXT_PUBLIC_CHAIN_ID=42220  # Celo Mainnet
```

### Scripts Disponibles

```bash
# Development
pnpm dev                        # Start dev server (http://localhost:3000)

# Build
pnpm build                      # Build for production

# Lint
pnpm lint                       # Run ESLint

# Type check
pnpm type-check                 # Run TypeScript compiler
```

---

## 📜 Smart Contracts (`apps/contracts/`)

### Stack Técnico

- **Framework**: Hardhat
- **Language**: Solidity
- **Testing**: Hardhat + Chai
- **Deployment**: Hardhat Ignition
- **Library**: Viem (instead of ethers.js)

### Estructura

```
apps/contracts/
├── contracts/                  # Solidity contracts
│   └── Lock.sol                # Example contract
├── test/                       # Contract tests
│   └── Lock.ts                 # Example test
├── ignition/                   # Deployment modules
│   └── modules/
│       └── Lock.ts             # Example deployment
├── hardhat.config.ts           # Hardhat configuration
├── .env.example                # Environment variables example
└── package.json                # Contract dependencies
```

### Environment Variables (`.env.example`)

```bash
# Deployer private key
PRIVATE_KEY=

# RPC URLs
CELO_MAINNET_RPC_URL=https://forno.celo.org
CELO_ALFAJORES_RPC_URL=https://alfajores-forno.celo-testnet.org

# Block explorers
CELOSCAN_API_KEY=
```

### Scripts Disponibles

```bash
# Compile
pnpm contracts:compile          # Compile contracts

# Test
pnpm contracts:test             # Run tests

# Deploy
pnpm contracts:deploy           # Deploy to local network
pnpm contracts:deploy:celo-sepolia  # Deploy to Celo Sepolia Testnet
pnpm contracts:deploy:celo      # Deploy to Celo Mainnet
```

### Redes Configuradas

| Red                | Chain ID | RPC URL                                  |
| ------------------ | -------- | ---------------------------------------- |
| **Celo Mainnet**   | 42220    | https://forno.celo.org                   |
| **Celo Alfajores** | 44787    | https://alfajores-forno.celo-testnet.org |
| **Celo Sepolia**   | 1328     | https://sepolia-forno.celo-testnet.org   |

---

## 🔧 Configuración de Turborepo

### `turbo.json`

Configuración de pipelines para:

- `build`: Build all apps
- `dev`: Development servers
- `lint`: Linting
- `type-check`: TypeScript checking

**Beneficios**:

- Caching inteligente
- Ejecución paralela de tareas
- Dependencias entre paquetes

---

## 🚀 Cómo Usar

### 1. Instalar Dependencias

```bash
cd puente-app
pnpm install
```

**Nota**: Si no tienes pnpm:

```bash
npm install -g pnpm
```

### 2. Configurar Environment Variables

**Frontend** (`apps/web/.env.local`):

```bash
cp apps/web/.env.template apps/web/.env.local
# Editar y agregar WALLET_CONNECT_PROJECT_ID
```

**Contracts** (`apps/contracts/.env`):

```bash
cp apps/contracts/.env.example apps/contracts/.env
# Editar y agregar PRIVATE_KEY
```

### 3. Compilar Contratos

```bash
pnpm contracts:compile
```

### 4. Ejecutar Tests

```bash
pnpm contracts:test
```

### 5. Iniciar Development Server

```bash
pnpm dev
```

Esto iniciará:

- Frontend en `http://localhost:3000`
- Hot reload habilitado

---

## 📝 Próximos Pasos

### Inmediato

1. **Configurar WalletConnect**
   - Ir a https://cloud.walletconnect.com
   - Crear proyecto
   - Copiar Project ID a `.env.local`

2. **Configurar Supabase**
   - Crear proyecto en https://supabase.com
   - Agregar variables de entorno

3. **Integrar Human.Tech Passport**
   - Registrar app en https://human.tech
   - Agregar SDK al frontend

### Desarrollo

4. **Crear Smart Contracts de Remesas**
   - `RemittanceEscrow.sol`
   - `PassportVerifier.sol`

5. **Generar Componentes UI con v0**
   - Landing page hero
   - Formulario de envío
   - Dashboard de transacciones

6. **Conectar Frontend con Contracts**
   - Hooks de wagmi
   - Integración con MiniPay

---

## 🎨 Componentes Pre-instalados

### shadcn/ui Components

El proyecto viene con shadcn/ui configurado. Para agregar componentes:

```bash
cd apps/web
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
```

**Componentes útiles para Puente**:

- `button` - CTAs
- `card` - Transaction cards
- `input` - Forms
- `dialog` - Modals
- `toast` - Notifications
- `avatar` - User profiles

---

## 🔗 Integración con MiniPay

### Wallet Detection

El template ya incluye detección de MiniPay:

```typescript
// Ejemplo de uso
import { useAccount } from 'wagmi'

export function Component() {
  const { address, isConnected } = useAccount()

  return (
    <div>
      {isConnected ? (
        <p>Connected: {address}</p>
      ) : (
        <button>Connect Wallet</button>
      )}
    </div>
  )
}
```

### Transacciones

```typescript
import { useWriteContract } from 'wagmi'

export function SendRemittance() {
  const { writeContract } = useWriteContract()

  const sendMoney = async () => {
    await writeContract({
      address: '0x...',
      abi: RemittanceABI,
      functionName: 'sendRemittance',
      args: [recipient, amount]
    })
  }

  return <button onClick={sendMoney}>Send</button>
}
```

---

## 📚 Referencias

- [Celo Composer Docs](https://github.com/celo-org/celo-composer)
- [Next.js 14 Docs](https://nextjs.org/docs)
- [Hardhat Docs](https://hardhat.org/docs)
- [Viem Docs](https://viem.sh)
- [Wagmi Docs](https://wagmi.sh)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [Turborepo Docs](https://turbo.build/repo/docs)

---

## ✅ Checklist de Setup

- [x] Celo Composer ejecutado
- [x] Estructura generada
- [x] Dependencias instaladas
- [ ] WalletConnect Project ID configurado
- [ ] Supabase integrado
- [ ] Human.Tech Passport integrado
- [ ] Primer componente con v0
- [ ] Smart contracts de remesas creados
- [ ] Deploy a Vercel

**Siguiente**: Configurar WalletConnect y Supabase
