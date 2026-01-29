# Estrategia de Herramientas: División de Responsabilidades (Privy Edition)

> **Fecha**: 29 Enero 2026 (Actualizado)  
> **Objetivo**: Integrar Privy en el stack de Celo Composer + v0

---

## 🎯 Resumen Ejecutivo

**El Stack Ganador**:

1. **Celo Composer** → Estructura ("El Esqueleto")
2. **Privy** → Auth & Wallet ("El Corazón")
3. **v0** → UI Components ("La Piel")
4. **Supabase** → Data ("El Cerebro")
5. **Passport** → Identidad ("El ID")

---

## 🔧 División de Responsabilidades Actualizada

### 1. **Privy** → Auth & Wallet Integration (NUEVO)

**Qué hace**:

- ✅ Login con Email, Google, SMS (Web2 style).
- ✅ Crea/Gestiona wallets EVM en background (Embedded).
- ✅ Firma transacciones de Celo.
- ✅ Reemplaza a RainbowKit y ConnectButton complejos.

**Por qué lo usamos**:

- La mayor fricción para remesas es "Crear una Wallet".
- Privy elimina esa fricción. El usuario loguea y ya tiene wallet.
- **Crítico para adopción masiva**: Mi abuela no guarda seed phrases.

### 2. **Celo Composer** → Estructura Base

- Sigue siendo la base del proyecto.
- **Cambio**: Limpiaremos la integración default de RainbowKit para usar Privy SDK.

### 3. **v0 by Vercel** → Diseño UI

- Genera los componentes visuales (Forms, Dashboards).
- Nosotros conectamos los botones de v0 a los hooks de Privy.

---

## 🔄 Flujo de Desarrollo (Privy Flow)

```mermaid
graph TB
    User[Usuario] -->|Login Email| Privy
    Privy -->|Crea/Recupera| Wallet[Embedded Wallet]

    subgraph Frontend
        v0[UI Component (v0)] -->|Trigger Action| PrivyHook[usePrivy()]
        PrivyHook -->|Sign Tx| Wallet
    end

    Wallet -->|Submit Tx| Blockchain[Celo Mainnet]
    Blockchain -->|Event| Supabase[Backend Indexer]
```

---

## 📝 checklist de Decisión (Actualizado)

- [ ] ¿Necesito un botón de Login? → **Privy** (`login()`)
- [ ] ¿Necesito la dirección del usuario? → **Privy** (`user.wallet.address`)
- [ ] ¿Necesito firmar una tx? → **Privy** + **Viem**
- [ ] ¿Necesito verificar humanidad? → **Passport**
- [ ] ¿Necesito guardar historial? → **Supabase**
- [ ] ¿Necesito un componente visual? → **v0**

---

## 🏆 Para el Buildathon

**Los jueces verán**:

1. **Onboarding Mágico**: Login con email (gracias a Privy).
2. **Celo Native**: Las txs ocurren en Celo (rápido/barato).
3. **Identidad**: Passport integrado.
4. **UI Pro**: Generada por v0.

**Esta combinación (Privy + Celo + Passport) es ganadora porque resuelve el trilema de UX/Seguridad/Descentralización.**
