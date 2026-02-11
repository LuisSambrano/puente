/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { z } from "zod";

/**
 * Server-side environment variables schema.
 * These are NEVER exposed to the client bundle.
 * Validates at import time — app crashes fast if misconfigured.
 */
const serverEnvSchema = z.object({
  SUPABASE_SERVICE_ROLE_KEY: z
    .string()
    .min(1, "SUPABASE_SERVICE_ROLE_KEY is required"),
  PRIVY_APP_SECRET: z.string().min(1, "PRIVY_APP_SECRET is required"),
  SERVICE_WALLET_PRIVATE_KEY: z
    .string()
    .startsWith("0x", "SERVICE_WALLET_PRIVATE_KEY must start with 0x")
    .min(66, "SERVICE_WALLET_PRIVATE_KEY must be at least 66 chars"),
  SERVICE_WALLET_ADDRESS: z
    .string()
    .startsWith("0x", "SERVICE_WALLET_ADDRESS must start with 0x")
    .length(42, "SERVICE_WALLET_ADDRESS must be exactly 42 chars"),
});

/**
 * Client-side environment variables schema.
 * Only variables prefixed with NEXT_PUBLIC_ are exposed to the browser.
 */
const clientEnvSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z
    .string()
    .url("NEXT_PUBLIC_SUPABASE_URL must be a valid URL"),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z
    .string()
    .min(1, "NEXT_PUBLIC_SUPABASE_ANON_KEY is required"),
  NEXT_PUBLIC_PRIVY_APP_ID: z
    .string()
    .min(1, "NEXT_PUBLIC_PRIVY_APP_ID is required"),
});

// Lazy initialization to avoid crashing during build/lint
// when server env vars aren't available
let _serverEnv: z.infer<typeof serverEnvSchema> | null = null;
let _clientEnv: z.infer<typeof clientEnvSchema> | null = null;

/**
 * Validated server environment variables.
 * Call this only in server-side code (API routes, server components).
 *
 * @throws {Error} If required server env vars are missing or invalid
 */
export function getServerEnv(): z.infer<typeof serverEnvSchema> {
  if (!_serverEnv) {
    const result = serverEnvSchema.safeParse(process.env);
    if (!result.success) {
      const formatted = result.error.issues
        .map((i) => `  ❌ ${i.path.join(".")}: ${i.message}`)
        .join("\n");
      throw new Error(
        `Missing or invalid server environment variables:\n${formatted}\n\n` +
          "Add them to .env.local for local dev or Vercel Environment Variables for production."
      );
    }
    _serverEnv = result.data;
  }
  return _serverEnv;
}

/**
 * Validated client environment variables.
 * Safe to use in both server and client code.
 *
 * @throws {Error} If required client env vars are missing or invalid
 */
export function getClientEnv(): z.infer<typeof clientEnvSchema> {
  if (!_clientEnv) {
    const result = clientEnvSchema.safeParse({
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      NEXT_PUBLIC_PRIVY_APP_ID: process.env.NEXT_PUBLIC_PRIVY_APP_ID,
    });
    if (!result.success) {
      const formatted = result.error.issues
        .map((i) => `  ❌ ${i.path.join(".")}: ${i.message}`)
        .join("\n");
      throw new Error(
        `Missing or invalid client environment variables:\n${formatted}\n\n` +
          "Add them to .env.local for local dev or Vercel Environment Variables for production."
      );
    }
    _clientEnv = result.data;
  }
  return _clientEnv;
}
