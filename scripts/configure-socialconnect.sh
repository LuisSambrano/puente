#!/bin/bash

# 1. Asegurar que estamos en la carpeta del proyecto
# (Se mueve al directorio padre de donde está este script)
cd "$(dirname "$0")/.." || { echo "Error: No se pudo entrar al directorio del proyecto"; exit 1; }

echo ""
echo "🔐 CONFIGURACIÓN INTERACTIVA DE SOCIALCONNECT"
echo "============================================="
echo "Solo pega los datos de Twilio cuando se te pida y presiona Enter."
echo ""

# 2. Pedir datos de Twilio (Interactivos)
read -p "👉 Twilio Account SID (Empieza con AC...): " TWILIO_SID
read -p "👉 Twilio Auth Token: " TWILIO_TOKEN
read -p "👉 Twilio Phone Number (ej: +1555...): " TWILIO_NUMBER

# 3. Clave Privada del Issuer (Ya generada anteriormente)
ISSUER_KEY="0xd2c7cbaca05e8f37af09a575753320174ddb8c11f8ddc2c893a366bc89940383"

echo ""
echo "🚀 Guardando secretos en Supabase (puente-fintetch-app)..."
echo "---------------------------------------------"

# 4. Ejecutar comando de Supabase
pnpm exec supabase secrets set \
  TWILIO_ACCOUNT_SID="$TWILIO_SID" \
  TWILIO_AUTH_TOKEN="$TWILIO_TOKEN" \
  TWILIO_FROM_NUMBER="$TWILIO_NUMBER" \
  ISSUER_PRIVATE_KEY="$ISSUER_KEY"

echo "---------------------------------------------"
echo "✅ ¡Configuración Completada!"
