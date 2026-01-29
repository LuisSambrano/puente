# Guía Supabase: Setup & Schema Híbrido

## 📍 [Pasos 1-6: Setup Inicial...]

_(Ver guía original para creación de proyecto y obtención de keys)_

---

## 📍 Paso 7: Ejecutar SQL Inicial (Modelo Híbrido)

Una vez tengas tu proyecto, ve al **SQL Editor** en el dashboard de Supabase y ejecuta este script.
Esto creará las tablas necesarias para **Remesas (MVP)**, **Crowdfunding** y **Donaciones**.

```sql
-- 1. Usuarios (Extiende auth.users o manejado vía Privy mapping)
-- Nota: Privy maneja la auth, aquí guardamos perfiles linkeados por wallet/email
CREATE TABLE public.profiles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    wallet_address TEXT UNIQUE,
    email TEXT,
    full_name TEXT,
    avatar_url TEXT,
    is_verified_passport BOOLEAN DEFAULT FALSE,
    reputation_score INT DEFAULT 0
);

-- 2. Transacciones (Registro central de todo movimiento financiero)
CREATE TYPE transaction_type AS ENUM ('remittance', 'donation', 'campaign_fund');
CREATE TYPE transaction_status AS ENUM ('pending', 'completed', 'failed');

CREATE TABLE public.transactions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    tx_hash TEXT UNIQUE, -- Hash en Celo Mainnet
    sender_wallet TEXT REFERENCES public.profiles(wallet_address),
    recipient_wallet TEXT, -- Puede no estar registrado aun
    amount DECIMAL(18, 6) NOT NULL, -- cUSD tiene 18 decimales
    token_symbol TEXT DEFAULT 'cUSD',
    type transaction_type NOT NULL,
    status transaction_status DEFAULT 'pending',
    message TEXT -- Mensaje adjunto (para donaciones/remesas)
);

-- 3. Campañas de Crowdfunding (Fase 2)
CREATE TABLE public.campaigns (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    creator_wallet TEXT REFERENCES public.profiles(wallet_address),
    title TEXT NOT NULL,
    description TEXT,
    goal_amount DECIMAL(18, 6),
    current_amount DECIMAL(18, 6) DEFAULT 0,
    deadline TIMESTAMP WITH TIME ZONE,
    is_active BOOLEAN DEFAULT TRUE,
    category TEXT
);

-- 4. Seguridad (Row Level Security - RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.campaigns ENABLE ROW LEVEL SECURITY;

-- Políticas básicas (ajustar según necesidad)
-- Permitir lectura pública de campañas
CREATE POLICY "Public campaigns verify" ON public.campaigns FOR SELECT USING (true);

-- Permitir a usuarios ver sus propias transacciones
CREATE POLICY "Users view own txs" ON public.transactions FOR SELECT
USING (auth.uid()::text = sender_wallet OR auth.uid()::text = recipient_wallet);
-- Nota: Esto requiere mapear auth.uid() de Supabase a wallet, o usar lógica custom si usamos Privy standalone.
```

### Explicación del Schema

1. **`profiles`**: Tabla maestra de usuarios. Se llenará cuando el usuario haga login con Privy.
2. **`transactions`**: Tabla única para los 3 casos de uso. El campo `type` diferencia si es una remesa, donación o aporte a campaña.
3. **`campaigns`**: Estructura lista para cuando activemos el Crowdfunding.

---

## 📍 Paso 8: Conectar con Frontend

En tu código Next.js (con Privy), cuando ocurra una transacción exitosa en Celo, deberás insertar el registro en `transactions`:

```typescript
const { data, error } = await supabase.from("transactions").insert([
  {
    tx_hash: receipt.transactionHash,
    sender_wallet: user.wallet.address,
    amount: 100.0,
    type: "remittance",
  },
]);
```

¡Listo! Tu backend está preparado para escalar. 🚀
