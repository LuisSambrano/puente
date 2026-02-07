-- Create verification_codes table
CREATE TABLE IF NOT EXISTS public.verification_codes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    phone_number TEXT NOT NULL,
    code TEXT NOT NULL,
    attempts INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    metadata JSONB DEFAULT '{}'::jsonb
);

-- Add index for phone lookups
CREATE INDEX IF NOT EXISTS verification_codes_phone_idx ON public.verification_codes(phone_number);

-- Secure it with RLS (only service_role can access)
ALTER TABLE public.verification_codes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can do everything" ON public.verification_codes
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);
