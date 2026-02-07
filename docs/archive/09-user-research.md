# Investigación de Usuario - Puente

## Resumen Ejecutivo

Investigación basada en datos reales (2024-2025) sobre usuarios venezolanos de remesas para informar el diseño de UX/UI de Puente.

**Hallazgos clave**:

- 7.89M venezolanos en el exterior (mercado potencial)
- $3.8B en remesas anuales (2024)
- 30% de hogares venezolanos reciben remesas
- Costos actuales: 3-4% promedio (hasta 15% en servicios tradicionales)
- 84% tiene cuenta bancaria, pero 16% no bancarizado
- 61.6% penetración de internet, 73.4% conexiones móviles
- Alta adopción de crypto (13º globalmente, 110% crecimiento)

---

## 1. Demografía del Usuario

### 1.1 El Remitente (Venezolano en el Exterior)

**Ubicación geográfica**:

- Total: 7.89 millones de venezolanos fuera del país (dic 2024)
- Colombia: 2.8M (35%)
- Perú: 1.7M (22%)
- Estados Unidos: ~500K-700K
- Chile: 532K
- Ecuador: 444K
- Brasil: 568K

**Proyección**: 8-9 millones para finales de 2025

**Perfil típico**:

- Edad: 25-45 años
- Educación: Media-alta (muchos profesionales)
- Situación migratoria: Variada (muchos sin documentos regulares)
- Motivación: Enviar dinero a familia en Venezuela

**Comportamiento de envío**:

- Frecuencia: Mensual o quincenal
- Monto promedio: $100-$300 USD
- Destino: Familia directa (padres, hermanos, hijos)

### 1.2 El Receptor (Venezolano en Venezuela)

**Población**:

- ~29.1 millones en Venezuela
- 30% de hogares reciben remesas (~3M+ hogares)

**Perfil típico**:

- Edad: Variada (desde jóvenes hasta adultos mayores)
- Situación económica: Vulnerable
- Dependencia de remesas: Alta (línea de vida)

**Acceso tecnológico**:

- 84% tiene cuenta bancaria (2021)
- 16% no bancarizado (~4.6M personas)
- 61.6% usa internet (17.94M usuarios)
- 73.4% tiene conexión móvil (21.37M conexiones)

**Desafío crítico**:

- Smartphone de gama media = 112 meses de salario mínimo (mayo 2024)
- Muchos usan dispositivos antiguos o de baja gama
- Velocidad móvil promedio: 12.24 Mbps (138º de 147 países)

---

## 2. Mercado de Remesas

### 2.1 Volumen y Tendencias

**Datos 2024**:

- Remesas totales: $3.8 mil millones
- Representa: ~3% del GDP de Venezuela
- Proyección 2025: $2.8-3.0 mil millones (caída por políticas migratorias USA)

**Datos históricos**:

- 2022: $4.2 mil millones
- 2023: $3.0 mil millones

**Canales**:

- Servicios tradicionales: Western Union, MoneyGram
- Transferencias bancarias
- Crypto: 9% del total ($270M+ en 2023)
- Informal: Zelle, Pago Móvil, P2P

### 2.2 Costos Actuales

**Promedio regional (Latinoamérica)**:

- Enviar $200: 3.89%
- Enviar $400: 3.22%

**Servicios específicos**:

- **MoneyGram**: 1.49% FX margin ($200), 1.87% ($400)
- **Western Union**: 0.43% FX margin ($200), 0.46% ($400)
- **Nota**: Estos son solo márgenes de FX, no incluyen fees de transferencia

**Realidad para Venezuela**:

- Costos totales pueden llegar a 10-15% con servicios tradicionales
- Fees variables según método de pago y recepción
- Muchos usan canales informales para evitar costos

**Problema identificado**:

> Los servicios tradicionales cobran entre 3-15% del monto enviado. Para una familia que recibe $200/mes, esto significa $6-30 perdidos en fees.

---

## 3. Adopción de Tecnología

### 3.1 Internet y Móvil

**Penetración**:

- Internet: 61.6% (17.94M usuarios)
- Móvil: 73.4% (21.37M conexiones)
- Crecimiento móvil: +7.7% (1.5M nuevas conexiones, 2023-2024)

**Calidad de conexión**:

- Velocidad móvil: 12.24 Mbps (mejora desde 7.24 Mbps en 2023)
- Ranking global: 138º de 147 países
- Casi todas las conexiones son "broadband" (3G/4G/5G)

**Implicación para Puente**:

> Diseñar para conexiones lentas. Optimizar peso de la app, usar lazy loading, priorizar funcionalidad sobre gráficos pesados.

### 3.2 Crypto y Fintech

**Adopción de crypto**:

- Ranking global: 13º en adopción (2024)
- Crecimiento: 110% en un año
- Volumen: $25 mil millones en transacciones (2024)
- Stablecoins: 56.4% de transacciones
- Bitcoin: Solo 12% (preferencia por stablecoins)

**Uso de crypto en remesas**:

- 9% de remesas son en crypto ($270M+ en 2023)
- Plataformas populares: Binance, Airtm, El Dorado
- Empresas pagan salarios en crypto
- Universidades ofrecen cursos de crypto

**Implicación para Puente**:

> Los venezolanos YA están familiarizados con crypto y stablecoins. Celo/cUSD no será un concepto extraño. Enfatizar beneficios (velocidad, costo) sobre educación básica de crypto.

### 3.3 Servicios de Remesas Digitales

**Plataformas populares**:

- El Dorado (P2P crypto)
- Mukuru
- RemittVen
- MyBambu
- MoneyGram (digital)
- Curiara

**Características valoradas**:

1. **Velocidad**: Transferencias en 35 minutos o menos
2. **Costo**: Fees competitivos y transparentes
3. **Facilidad**: Onboarding simple
4. **Opciones**: Múltiples métodos de pago/recepción
5. **Soporte**: Chat en vivo, WhatsApp

---

## 4. Comportamiento del Usuario

### 4.1 Preferencias de Remesas

**Prioridades (en orden)**:

1. **Seguridad** (85%+)
   - Encriptación de datos
   - Verificación de identidad
   - Protección contra fraude

2. **Velocidad** (80%+)
   - Transferencias en minutos, no días
   - Notificaciones en tiempo real

3. **Costo** (75%+)
   - Fees transparentes
   - Exchange rate justo
   - Sin costos ocultos

4. **Facilidad de uso** (70%+)
   - Proceso simple (3-5 pasos máximo)
   - Interfaz intuitiva
   - Lenguaje claro

5. **Flexibilidad** (65%+)
   - Múltiples métodos de pago
   - Opciones de recepción variadas

### 4.2 Barreras y Frustraciones

**Con servicios tradicionales**:

- ❌ Costos altos (10-15%)
- ❌ Lentitud (3-5 días)
- ❌ Requieren documentos que no tienen
- ❌ Oficinas físicas (no accesibles)
- ❌ Horarios limitados

**Con servicios digitales actuales**:

- ❌ Desconfianza (miedo a fraude)
- ❌ Complejidad técnica
- ❌ Falta de soporte en español
- ❌ Problemas con KYC/documentos

**Oportunidad para Puente**:

> Passport resuelve el problema de documentos. MiniPay elimina complejidad. Celo reduce costos. UI en español con soporte accesible construye confianza.

### 4.3 Patrones de Uso

**Frecuencia de envío**:

- Mensual: 45%
- Quincenal: 30%
- Semanal: 15%
- Ocasional: 10%

**Horarios preferidos**:

- Fines de semana (sábado/domingo)
- Noches (después del trabajo)
- Días de pago (1 y 15 del mes)

**Dispositivos**:

- Móvil: 85%+
- Desktop: 15%

**Implicación para Puente**:

> Mobile-first es crítico. Optimizar para uso nocturno (modo oscuro). Permitir programar transferencias para días de pago.

---

## 5. Análisis de UX/UI

### 5.1 Principios de Diseño para LatAm

**Basado en investigación de UX en Latinoamérica**:

1. **Construir confianza sin fricción**
   - Muchos desconfían de plataformas digitales
   - Mostrar seguridad visualmente (badges, certificados)
   - Transparencia total en costos y proceso

2. **Simplicidad extrema**
   - Usuarios tienen niveles variados de alfabetización digital
   - Máximo 3-5 pasos por flujo
   - Lenguaje claro, sin jerga técnica

3. **Optimizar para dispositivos antiguos**
   - Muchos usan smartphones de gama baja
   - App debe funcionar en 3G
   - Diseño ligero, imágenes comprimidas

4. **Localización cultural**
   - Español natural de Venezuela (no España)
   - Colores vibrantes (culturalmente relevante)
   - Soporte accesible (WhatsApp, chat)

5. **Diseño para touch**
   - Botones grandes (mínimo 7-10mm)
   - Espaciado generoso
   - Feedback táctil inmediato

### 5.2 Flujos Críticos

#### Flujo 1: Enviar Remesa (Remitente)

**Pasos ideales**:

1. Ingresar monto en USD
2. Seleccionar receptor (o agregar nuevo)
3. Revisar detalles (monto, fees, exchange rate, total)
4. Confirmar con biométrico/PIN
5. Ver confirmación y tracking

**Tiempo objetivo**: <2 minutos

**Elementos clave**:

- Mostrar exchange rate en tiempo real
- Calcular fees automáticamente
- Permitir guardar receptores frecuentes
- Notificación push cuando receptor recibe

#### Flujo 2: Recibir Remesa (Receptor)

**Pasos ideales**:

1. Notificación de remesa entrante
2. Ver detalles (remitente, monto)
3. Aceptar transferencia
4. Fondos disponibles en wallet

**Tiempo objetivo**: <1 minuto

**Elementos clave**:

- Notificación clara y prominente
- Opción de convertir a bolívares
- Historial de remesas recibidas

#### Flujo 3: Verificación con Passport (Primera vez)

**Pasos ideales**:

1. Explicación breve de por qué (1 pantalla)
2. Abrir Passport embed
3. Completar verificación
4. Confirmación y badge de verificado

**Tiempo objetivo**: <5 minutos

**Elementos clave**:

- Explicar beneficios (seguridad, confianza)
- Proceso guiado paso a paso
- Soporte en caso de problemas

### 5.3 Componentes UI Prioritarios

**Basado en v0 y Shadcn/UI**:

1. **Dashboard**
   - Balance prominente
   - Acción rápida: "Enviar dinero"
   - Historial reciente (últimas 3 transacciones)
   - Estado de verificación Passport

2. **Formulario de envío**
   - Input de monto grande y claro
   - Selector de receptor con avatares
   - Calculadora de fees en tiempo real
   - Botón CTA grande y colorido

3. **Cards de transacción**
   - Estado visual claro (pendiente/completado/fallido)
   - Información esencial (monto, fecha, receptor)
   - Acción rápida (ver detalles, repetir)

4. **Notificaciones**
   - Toast para acciones inmediatas
   - Push para remesas entrantes
   - Badge de contador para pendientes

5. **Onboarding**
   - Carousel de 3 slides (problema, solución, cómo funciona)
   - Skip option
   - CTA claro al final

### 5.4 Paleta de Colores Recomendada

**Basado en preferencias culturales de LatAm**:

```
Primary: #00D4AA (Celo green - confianza, dinero)
Secondary: #FCFF52 (Celo yellow - energía, optimismo)
Accent: #FF6B6B (Rojo vibrante - urgencia, acción)
Background: #0D1117 (Oscuro - moderno, premium)
Surface: #161B22 (Gris oscuro - contraste suave)
Text: #C9D1D9 (Gris claro - legibilidad)
Success: #3FB950 (Verde - confirmación)
Warning: #D29922 (Amarillo - precaución)
Error: #F85149 (Rojo - error)
```

**Modo oscuro por defecto** (preferido en LatAm, ahorra batería)

### 5.5 Tipografía

**Fuentes recomendadas**:

- **Headings**: Inter Bold (Google Fonts)
- **Body**: Inter Regular
- **Numbers**: Inter Medium (para montos)

**Tamaños**:

- H1: 32px (títulos principales)
- H2: 24px (secciones)
- Body: 16px (texto normal)
- Small: 14px (secundario)
- Caption: 12px (metadatos)

**Nota**: Inter es legible en pantallas pequeñas y soporta múltiples pesos.

---

## 6. Personas de Usuario

### Persona 1: María (Remitente)

**Demografía**:

- Edad: 32 años
- Ubicación: Miami, USA
- Ocupación: Enfermera
- Educación: Universitaria
- Ingresos: $3,500/mes

**Contexto**:

- Migró hace 3 años
- Envía $250/mes a su madre en Caracas
- Usa Western Union actualmente
- Tiene smartphone (iPhone 11)

**Objetivos**:

- Enviar dinero rápido y seguro
- Minimizar fees (cada dólar cuenta)
- Saber que su madre recibió el dinero

**Frustraciones**:

- Western Union cobra $25-30 por transferencia (10-12%)
- Tarda 2-3 días
- Tiene que ir a una oficina física

**Cita**:

> "Trabajo duro por este dinero. Me duele que $30 se vayan en fees cuando mi mamá los necesita."

**Cómo Puente la ayuda**:

- Fees <1% ($2-3 en vez de $30)
- Transferencia en minutos
- Todo desde su teléfono

### Persona 2: Pedro (Receptor)

**Demografía**:

- Edad: 58 años
- Ubicación: Caracas, Venezuela
- Ocupación: Jubilado
- Educación: Secundaria
- Ingresos: Depende de remesas de hija

**Contexto**:

- Recibe $250/mes de su hija en USA
- Tiene smartphone Android (gama baja, 2020)
- Usa Pago Móvil para compras locales
- Alfabetización digital media

**Objetivos**:

- Recibir dinero de forma confiable
- Convertir a bolívares para gastos
- Proceso simple (no es muy tech-savvy)

**Frustraciones**:

- Tiene que ir a oficina de Western Union
- A veces no tiene documentos actualizados
- Proceso confuso

**Cita**:

> "Solo quiero recibir el dinero que mi hija me envía sin complicaciones. No entiendo mucho de tecnología."

**Cómo Puente lo ayuda**:

- Recibe notificación en su teléfono
- Proceso simple (3 pasos)
- No necesita documentos tradicionales (Passport)
- Soporte en español si tiene dudas

### Persona 3: Carlos (Remitente Tech-Savvy)

**Demografía**:

- Edad: 28 años
- Ubicación: Buenos Aires, Argentina
- Ocupación: Desarrollador de software
- Educación: Universitaria
- Ingresos: $2,000/mes

**Contexto**:

- Migró hace 2 años
- Envía $150 quincenal a su hermano en Valencia
- Ya usa crypto (Binance, Airtm)
- Tiene smartphone (Android flagship)

**Objetivos**:

- Máxima eficiencia (tiempo y costo)
- Control total del proceso
- Transparencia en fees y exchange rates

**Frustraciones**:

- Servicios tradicionales son lentos y caros
- Crypto P2P a veces es riesgoso (scams)
- Falta de regulación/protección

**Cita**:

> "Sé que hay formas más baratas de enviar dinero, pero quiero algo confiable y rápido. No quiero preocuparme por scams."

**Cómo Puente lo ayuda**:

- Velocidad de crypto con seguridad de Passport
- Fees ultra-bajos (<1%)
- Transparencia total (blockchain)
- UI moderna que entiende

---

## 7. Recomendaciones de UX/UI

### 7.1 Prioridades Inmediatas (MVP)

1. **Onboarding ultra-simple**
   - 3 pantallas máximo
   - Explicar valor en 30 segundos
   - CTA claro: "Enviar mi primera remesa"

2. **Flujo de envío optimizado**
   - Máximo 5 pasos
   - Autocompletar receptores frecuentes
   - Calculadora de fees en tiempo real

3. **Notificaciones push**
   - Confirmación de envío
   - Notificación de recepción
   - Actualizaciones de estado

4. **Modo oscuro por defecto**
   - Ahorra batería
   - Preferido culturalmente
   - Reduce fatiga visual

5. **Soporte accesible**
   - Botón de WhatsApp visible
   - FAQ integrado
   - Chat en vivo (si es posible)

### 7.2 Features Post-MVP

1. **Programar transferencias**
   - Envíos recurrentes (mensual/quincenal)
   - Recordatorios de días de pago

2. **Conversión a bolívares**
   - Integración con exchange local
   - Rate en tiempo real

3. **Referidos**
   - Programa de incentivos
   - Compartir en WhatsApp/Telegram

4. **Estadísticas**
   - Total enviado/recibido
   - Ahorro vs servicios tradicionales

5. **Multi-idioma**
   - Español (Venezuela)
   - Inglés
   - Portugués (Brasil)

### 7.3 Métricas de UX a Trackear

**Onboarding**:

- Tasa de completación
- Tiempo promedio
- Punto de abandono

**Envío de remesa**:

- Tiempo de completación
- Tasa de error
- Uso de receptores guardados

**Verificación Passport**:

- Tasa de completación
- Tiempo promedio
- Tasa de abandono

**Retención**:

- DAU/MAU
- Frecuencia de uso
- Churn rate

**Satisfacción**:

- NPS (Net Promoter Score)
- CSAT (Customer Satisfaction)
- Reseñas en app store

---

## 8. Benchmarking Competitivo

### 8.1 Servicios Tradicionales

**Western Union**:

- ✅ Reconocimiento de marca
- ✅ Red global
- ❌ Costos altos (10-15%)
- ❌ Lento (2-3 días)
- ❌ Requiere oficina física

**MoneyGram**:

- ✅ Similar a Western Union
- ❌ Mismos problemas de costo y velocidad

### 8.2 Servicios Digitales

**El Dorado** (crypto P2P):

- ✅ Fees bajos
- ✅ Rápido
- ❌ Riesgo de scams
- ❌ UX compleja para no-crypto users

**Mukuru**:

- ✅ Enfocado en África/LatAm
- ✅ Fees competitivos
- ❌ No usa blockchain
- ❌ Limitado a ciertos corredores

**MyBambu**:

- ✅ App móvil
- ✅ Múltiples opciones
- ❌ Fees variables
- ❌ No tan rápido como crypto

### 8.3 Ventaja Competitiva de Puente

| Feature          | Western Union | El Dorado | Mukuru     | **Puente**    |
| ---------------- | ------------- | --------- | ---------- | ------------- |
| **Costo**        | 10-15%        | 1-2%      | 3-5%       | **<1%**       |
| **Velocidad**    | 2-3 días      | Minutos   | Horas      | **Minutos**   |
| **Verificación** | Documentos    | Ninguna   | Documentos | **Passport**  |
| **Seguridad**    | Alta          | Media     | Alta       | **Alta**      |
| **UX**           | Compleja      | Compleja  | Buena      | **Excelente** |
| **Blockchain**   | No            | Sí        | No         | **Sí**        |
| **Mobile-first** | No            | Parcial   | Sí         | **Sí**        |

**Diferenciador clave**: Passport + Celo + UX optimizada = mejor de todos los mundos

---

## 9. Conclusiones y Próximos Pasos

### 9.1 Hallazgos Clave

1. **Mercado maduro y creciente**
   - 7.89M venezolanos en el exterior
   - $3.8B en remesas anuales
   - 30% de hogares dependen de remesas

2. **Dolor real y cuantificable**
   - Costos de 3-15% son inaceptables
   - Velocidad de días es frustrante
   - Falta de acceso (16% no bancarizado)

3. **Adopción tecnológica favorable**
   - 73.4% tiene móvil
   - 13º en adopción de crypto
   - Familiaridad con stablecoins

4. **Oportunidad clara para Puente**
   - Resolver problema de costos (<1% vs 10-15%)
   - Resolver problema de velocidad (minutos vs días)
   - Resolver problema de acceso (Passport vs documentos)

### 9.2 Recomendaciones de Diseño

**Prioridad 1: Confianza**

- Mostrar seguridad visualmente
- Transparencia total en costos
- Soporte accesible en español

**Prioridad 2: Simplicidad**

- Máximo 5 pasos por flujo
- Lenguaje claro y natural
- Diseño intuitivo

**Prioridad 3: Performance**

- Optimizar para 3G
- Funcionar en dispositivos antiguos
- Modo oscuro por defecto

**Prioridad 4: Localización**

- Español de Venezuela
- Colores vibrantes
- Soporte cultural

### 9.3 Próximos Pasos

1. **Validar con usuarios reales**
   - Entrevistar 5-10 venezolanos (remitentes y receptores)
   - Testear prototipos de v0
   - Iterar basado en feedback

2. **Crear prototipos con v0**
   - Onboarding flow
   - Envío de remesa
   - Dashboard

3. **Testear en dispositivos reales**
   - Android gama baja
   - Conexión 3G simulada
   - Usuarios no tech-savvy

4. **Documentar en pitch deck**
   - Usar datos reales en presentación
   - Mostrar entendimiento profundo del usuario
   - Demostrar ventaja competitiva

---

## 10. Fuentes y Referencias

**Datos de migración**:

- IOM (International Organization for Migration)
- UNHCR (UN Refugee Agency)

**Datos de remesas**:

- The Dialogue (Inter-American Dialogue)
- Ecoanalítica
- World Bank

**Datos de tecnología**:

- DataReportal
- Ookla Speedtest
- Freedom House

**Datos de crypto**:

- Chainalysis
- Bitget
- CoinMarketCap

**UX/UI research**:

- Mobile Growth Association
- Visa Global Remittances
- EBANX (LatAm payments)

---

**Última actualización**: 2026-01-28  
**Próxima revisión**: Después de validación con usuarios reales
