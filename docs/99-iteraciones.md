# Iteraciones y Decisiones del Proyecto

> **Log de Decisiones Estratégicas**  
> Documentación de cómo construimos Puente en tiempo real.

---

## Iteración 6: El Pivote Híbrido y Privy (Game Changer)

**Fecha**: 29 Enero 2026  
**Tipo**: Pivot Estratégico & Stack Técnico  
**Versión**: v0.6.0

### Contexto

Tras analizar a profundidad la competencia (ElDorado, Felix, Cafecito) y las herramientas disponibles, identificamos dos debilidades críticas en nuestro plan original:

1. **Niche Trap**: Una app _solo_ de remesas compite por precio contra gigantes.
2. **UX Friction**: RainbowKit es excelente para crypto-natives, pero intimidante para una abuela en Maracaibo.

### Decisión 1: Modelo Híbrido (3-en-1)

Evolucionamos de "App de Remesas" a **"Plataforma Financiera Integral"**.

- **Vertical 1 (Remesas)**: Para el día a día.
- **Vertical 2 (Crowdfunding)**: Para emergencias (reemplazar GoFundMe).
- **Vertical 3 (Donaciones)**: Para ingresos pasivos (reemplazar Cafecito).

**Por qué ahora**:

- Usamos la **misma infraestructura** (Celo + Passport) para los 3.
- Aumentamos el **LTV** del usuario.
- Narrativa mucho más potente para el Buildathon ("Super-App").

### Decisión 2: Adoptar Privy (Adiós RainbowKit)

Reemplazamos RainbowKit/Wagmi standard con **Privy**.

**Por qué**:

- **Email/SMS Login**: Crítico para adopción masiva.
- **Embedded Wallets**: El usuario no necesita saber qué es una "seed phrase".
- **User experience Web2**: Se siente como usar PayPal o Zelle.

### Impacto en Roadmap

- **Scope Buildathon**: Seguimos enfocados en **Remesas P2P** como MVP.
- **Arquitectura**: Diseñamos la DB para soportar Campañas y Donaciones a futuro.
- **Frontend**: Usaremos el SDK de Privy en vez de RainbowKit.

### Documentación Afectada

- Actualizados todos los docs core (`00`, `02`, `03`, `07`, `10`, `11`).
- Stack técnico simplificado y modernizado.

---

## Iteración 5: Investigación Pago Móvil...

[Contenido previo...]
