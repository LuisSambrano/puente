# Estructura del Proyecto Puente (Privy Integrated)

> **Based on**: Celo Composer v2.4.13  
> **Modified for**: Privy + Hybrid Model

---

## 🌐 Frontend (`apps/web/`)

### Stack Técnico Actualizado

- **Framework**: Next.js 14 App Router
- **Auth & Wallet**: **Privy SDK** (Reemplaza RainbowKit)
- **Blockchain**: Viem
- **UI**: shadcn/ui + Generados por v0
- **Identidad**: Human.Tech Passport SDK

### Environment Variables (`.env.local`)

```bash
# Privy (Auth & Wallet)
NEXT_PUBLIC_PRIVY_APP_ID=clp...             # Crear en dashboard.privy.io

# Blockchain
NEXT_PUBLIC_CHAIN_ID=42220                  # Celo Mainnet

# WalletConnect (Opción de respaldo en Privy)
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=...
```

### Nueva Estructura de Componentes Sugerida

```
apps/web/src/
├── components/
│   ├── providers/
│   │   └── PrivyProvider.tsx       # Configuración global de Privy
│   ├── auth/
│   │   ├── LoginButton.tsx         # v0 based button -> privy.login()
│   │   └── UserProfile.tsx         # Muestra email/address
│   ├── remittance/
│   │   ├── SendForm.tsx            # v0 generated form
│   │   └── TransactionList.tsx     # Supabase driven list
│   └── passport/
│       └── PassportScorer.tsx      # Human.Tech integration
```

---

## 📜 Smart Contracts (`apps/contracts/`)

### Roadmap de Contratos (Híbrido)

1. **Fase 1 (MVP)**: `PuenteRemittance.sol`
   - Simple custody & release.
   - Event emission para indexar en Supabase.
2. **Fase 2 (Crowdfunding)**: `PuenteCampaign.sol`
   - Lógica de metas y deadlines.
   - Retiro solo por creador.

3. **Fase 3 (Donations)**: `PuenteTips.sol`
   - Direct transfer con mensaje adjunto.

---

## 🔄 Flujo de Datos

1. **Frontend** inicia con `PrivyProvider`.
2. Usuario hace **Login**.
3. **Privy** retorna `user` object con `wallet`.
4. Usuario interactúa con `SendForm`.
5. `writeContract` (usando wallet de Privy) llama a `PuenteRemittance` en Celo.
6. Contrato emite evento `RemittanceSent`.
7. **Supabase** (o frontend listener) detecta evento y actualiza UI.

---

## 🚀 Cómo Usar (Updated)

1. **Instalar Privy**:

   ```bash
   pnpm add @privy-io/react-auth@latest
   ```

2. **Configurar Provider**:
   En `app/layout.tsx`, envolver la app con `<PrivyProvider>`.

3. **Usar Hooks**:
   ```tsx
   const { login, authenticated } = usePrivy();
   ```

Esta estructura mantiene la base sólida de Celo Composer pero moderniza la capa de Auth/Wallet para UX masiva.
