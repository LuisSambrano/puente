"use client";

/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ShieldCheck,
  Phone,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SocialConnectVerificationProps {
  onSuccess?: () => void;
  initialPhone?: string;
}

export function SocialConnectVerification({
  onSuccess,
  initialPhone,
}: SocialConnectVerificationProps) {
  const { getAccessToken, user } = usePrivy();
  const [step, setStep] = useState<"phone" | "otp" | "success">("phone");
  const [phone, setPhone] = useState(initialPhone || "");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const handleRequestSms = async () => {
    if (!phone || !phone.startsWith("+")) {
      setError("Please enter a valid phone number starting with +");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${supabaseUrl}/functions/v1/socialconnect-issuer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${anonKey}`,
          },
          body: JSON.stringify({
            action: "request_verification",
            phone: phone.trim(),
            account: user?.wallet?.address,
          }),
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to send SMS");

      setStep("otp");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      setError("Enter the 6-digit code");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${supabaseUrl}/functions/v1/socialconnect-issuer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${anonKey}`,
          },
          body: JSON.stringify({
            action: "verify_and_register",
            phone: phone.trim(),
            code: otp.trim(),
            account: user?.wallet?.address,
          }),
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Verification failed");

      setStep("success");
      onSuccess?.();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="glass-frost border-white/10 overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 mb-1">
          <ShieldCheck className="w-5 h-5 text-primary" />
          <CardTitle className="text-lg">SocialConnect</CardTitle>
        </div>
        <CardDescription>
          Verify your phone to link it with your wallet and enable direct
          payments.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <AnimatePresence mode="wait">
          {step === "phone" && (
            <motion.div
              key="phone"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5" /> Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="+58 412 1234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-white/5 border-white/10"
                />
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {error}
                </div>
              )}

              <Button
                onClick={handleRequestSms}
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                ) : null}
                Send Code
              </Button>
            </motion.div>
          )}

          {step === "otp" && (
            <motion.div
              key="otp"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="space-y-2 text-center">
                <p className="text-sm text-muted-foreground">
                  We sent a code to{" "}
                  <span className="text-foreground font-medium">{phone}</span>
                </p>
                <Input
                  type="text"
                  maxLength={6}
                  placeholder="000000"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="bg-white/5 border-white/10 text-center tracking-[1em] text-xl font-bold"
                />
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {error}
                </div>
              )}

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setStep("phone")}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  onClick={handleVerifyOtp}
                  disabled={isLoading}
                  className="flex-1"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  ) : null}
                  Verify
                </Button>
              </div>
            </motion.div>
          )}

          {step === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6 flex flex-col items-center text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold">Identity Verified</h4>
                <p className="text-sm text-muted-foreground max-w-[200px] mt-1">
                  Your phone is now linked to your wallet address.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
