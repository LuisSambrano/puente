# Verificación de Requisitos del Buildathon (Pivot Híbrido)

> **Fecha Actualización**: 29 Enero 2026  
> **Estado**: ✅ Alineado  
> **Pivote**: Modelo Híbrido (Remesas + Crowdfunding + Donaciones)

---

## ✅ Validación de Requisitos Obligatorios

### 1. **Deployment en Celo Mainnet** ✅

- **MVP (Remesas)**: Deploy de contratos de custodia y envío.
- **Diferencia**: No desplegaremos contratos de Crowdfunding aún (Fase 2).
- **Cumplimiento**: 100% (Solo se necesita una dApp funcional en Mainnet).

### 2. **URL Pública** ✅

- **URL**: `https://puente-remesas.vercel.app`
- **Contenido**: Landing page mostrando visión híbrida, pero app funcional solo para remesas.

### 3. **Karma Gap** ✅

- **Perfil**: Se actualizará con la narrativa "Super-App Financiera".
- **Video Demo**: Mostrará el flujo de remesas (MVP) y mencionará las tabs futuras de "Ayuda" (Crowdfunding) y "Creadores" (Donaciones) como "Coming Soon".

---

## 🏆 Validación de Tracks y Bounties

### Track MiniApps (MiniPay) ✅

- **Requisito**: App ligera dentro de MiniPay.
- **MVP Impact**: Las remesas son el caso de uso #1 para MiniPay.
- **Estrategia**: Al usar **Privy**, la wallet integration es nativa, lo que mejora la UX dentro de MiniPay.

### Bounty Human.Tech ($1,000) ✅

- **Requisito**: Integrar Passport.
- **Uso Crítico**: "Verificación sin documentos". Vital para nuestro segmento de migrantes indocumentados.
- **Implementación**: Embed de Passport en el onboarding de remesas.

### Bounty v0 ($1,000) ✅

- **Requisito**: Usar v0 para UI.
- **Implementación**: Toda la interfaz de "Enviar Dinero" y el Dashboard se generará con v0.

---

## 📅 Timeline Ajustado (Privy + MVP)

### Semana 1 (Ene 29 - Feb 4)

- [ ] Configurar **Privy** (Auth + Wallet).
- [ ] Integrar **Passport** en flujo de Privy.
- [ ] Generar UI base con **v0** (Landing + Dashboard).

### Semana 2 (Feb 5 - Feb 11) - MAINNET

- [ ] Escribir contratos de Remesas (TokenTransfer).
- [ ] Deploy a Celo Mainnet.
- [ ] Conectar Frontend (Privy) con Contratos (Viem).

### Semana 3 (Feb 12 - Feb 18) - TRACTION

- [ ] Onboarding de 10 usuarios Alpha.
- [ ] Generar 50 txs en Mainnet (P2P entre testers).
- [ ] Grabar Video Demo.

### Semana 4+ (Feb 19 - Feb 27) - POLISH

- [ ] Submission a Karma Gap.
- [ ] Pitch Deck (Narrativa Híbrida).
- [ ] Roadmap de Fase 2 (Crowdfunding).

---

## 📝 Veredicto

El cambio a **Modelo Híbrido** NO afecta negativamente los requisitos. Al contrario:

1. **Mejora la narrativa** (Pitch más fuerte).
2. **Justifica el uso de blockchain** (Fees bajos para 3 verticales).
3. **Mantiene el MVP simple** (Solo remesas en código por ahora).

**Status**: GO. ✅
