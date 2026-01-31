"use client";

import { usePrivy } from "@privy-io/react-auth";
import { LoginButton } from "@/components/LoginButton";

import { LandingHero } from "@/components/landing/LandingHero";
import { LandingFeatures } from "@/components/landing/LandingFeatures";
import { InstallPrompt } from "@/components/landing/InstallPrompt";

export default function Home() {
  const { ready, authenticated } = usePrivy();

  // Loading State
  if (!ready) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background text-foreground">
        <div className="animate-pulse">Loading Puente...</div>
      </main>
    );
  }

  // Dashboard View (Logged In)
  if (authenticated) {
    // Redirect to the new dashboard
    import("next/navigation").then(({ redirect }) => redirect("/dashboard"));
    return null;
  }

  // Public/Landing View (Logged Out)
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-proximity scroll-smooth">
      <LandingHero />
      <LandingFeatures />
      <InstallPrompt />
    </main>
  );
}
