# Prompt Maestro para Stitch / Google Labs (Brand Kit Edition)

**Role:** Actúa como un Lead Product Designer y Frontend Engineer experto en Fintech.

**Task:** Crea un **Prototipo Visual de Alta Fidelidad (Frontend Only)** para **Puente** utilizando nuestro **Kit de Marca Oficial**.
Tu objetivo es implementar el sistema de diseño definido en las imágenes adjuntas (Puente Brand Kit) y aplicarlo a las **5 Pantallas Clave**, utilizando **Data Hardcodeada**.

**IMPORTANTE:**

- **NO** clones sitios externos. Usa EXCLUSIVAMENTE los estilos definidos aquí.
- **NO** generes backend. Solo frontend visual.
- **SÍ** hardcodea los datos JSON para la demo.

---

**Inputs:**

1.  **Sistema de Diseño (Extraído del Brand Kit):**
    - **Logo/Icon:** Puente (Puente minimalista verde).
    - **Tipografía:** `Inter` (Headlines: **Bold**, Subheadings: **Semi-Bold**, Body: Regular).
    - **Paleta de Colores Principal:**
      - `Puente Green`: #2ECC71 (Botones primarios, iconos activos, bordes de focus).
      - `Puente Black`: #000000 (Textos principales, fondos oscuros).
      - `Secondary Green`: #27AE60 (Hover states, degradados).
      - `Neutral Gray`: #95A5A6 (Textos secundarios).
      - `Light Gray`: #ECF0F1 (Fondos de tarjetas, inputs inactivos).
      - `White`: #FFFFFF (Fondos principales).
    - **Estilo UI:**
      - **Glassmorphism:** Uso sutil de transparencias y blur en tarjetas destacadas (como la tarjeta de saldo).
      - **Botones:** Redondeados (Pill-shaped o Rounded-lg), con sombras suaves.
      - **Inputs:** Bordes limpios, focus en verde (#2ECC71).

2.  **Alcance: 5 Pantallas Clave (SPA State):**
    Genera una SPA (Single Page Application) en un solo archivo `App.tsx` que maneje estas 5 vistas:
    - **1. Onboarding / Landing (Public):**
      - Hero Section con el Logo "Puente" grande.
      - Headline: "Establate yiur eneiegy to comp date: and biglitate" (Usa un texto real mejor: "**El puente financiero que conecta tu mundo**").
      - Botón CTA principal (Verde #2ECC71): "Get Started".
      - Mockup del teléfono mostrando la app (opcional, si puedes hacerlo con CSS).

    - **2. Home Vault (Private - Dashboard):**
      - Tarjeta de Saldo estilo "Debit Card" o "Glassmorphism" con degradado verde.
      - Saldo: `$4,520.50 cUSD`.
      - Grid de Acciones rápidas (Iconos verdes).

    - **3. Send Flow (Private):**
      - Input de monto gigante.
      - Selector de destinatario.
      - Botón de enviar (Verde sólido).

    - **4. Receive / QR (Private):**
      - Código QR central.
      - Dirección de billetera.

    - **5. Activity History (Private):**
      - Lista limpia de transacciones.
      - Montos en Verde (positivo) y Negro (negativo).

3.  **Mock Data (Hardcodear):**
    ```json
    {
      "user": { "name": "Luis S.", "tag": "@luis.puente" },
      "wallet": { "balance": "4,520.50", "currency": "cUSD" },
      "transactions": [
        {
          "id": 1,
          "type": "sent",
          "to": "Maria P.",
          "amount": "-$50.00",
          "date": "Hoy",
          "status": "completed"
        },
        {
          "id": 2,
          "type": "received",
          "from": "Payroll",
          "amount": "+$1,200.00",
          "date": "Ayer",
          "status": "completed"
        },
        {
          "id": 3,
          "type": "swap",
          "from": "CELO",
          "to": "cUSD",
          "amount": "+$150.00",
          "date": "2 Ene",
          "status": "completed"
        }
      ]
    }
    ```

**Instrucciones Técnicas:**

1.  **Stack:** React + Tailwind CSS + Lucide Icons.
2.  **Calidad:** Pixel-perfect basado en la guía de estilo.

**Output:**
Genera el código completo del archivo `App.tsx`.
