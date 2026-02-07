/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

import { FloatingFooter } from "@/components/FloatingFooter";
import { Providers } from "@/components/Providers";
import { NetworkGuard } from "@/components/NetworkGuard";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="relative flex min-h-screen flex-col bg-background selection:bg-primary/20 pb-16 lg:pb-0">
          <Providers>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark" // Force Dark Mode
              enableSystem={false} // Disable System
              disableTransitionOnChange
            >
              <NetworkGuard>
                <main className="flex-1">{children}</main>
                {/* <FloatingFooter /> */}
              </NetworkGuard>
            </ThemeProvider>
          </Providers>
        </div>
      </body>
    </html>
  );
}
