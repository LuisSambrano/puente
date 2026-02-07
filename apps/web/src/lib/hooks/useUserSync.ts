/*
 * Copyright (c) 2026 Luis Sambrano.
 * Licensed under the Business Source License 1.1 (BSL 1.1).
 * See LICENSE file for details.
 *
 * COMMERCIAL USE PROHIBITED without express permission.
 */

import { usePrivy } from "@privy-io/react-auth";
import { useEffect, useState } from "react";

export function useUserSync() {
  const { ready, authenticated, getAccessToken, user } = usePrivy();
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncedUser, setSyncedUser] = useState<any>(null);
  const [isSocialVerified, setIsSocialVerified] = useState(false);

  useEffect(() => {
    const syncIdentity = async () => {
      // Only sync if ready, authenticated, and we haven't synced this session (or user changed)
      if (!ready || !authenticated || !user) return;

      setIsSyncing(true);
      try {
        const token = await getAccessToken();
        if (!token) {
          console.error("No access token available for sync");
          return;
        }

        const res = await fetch("/api/auth/sync", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Sync failed");
        }

        const data = await res.json();
        setSyncedUser(data.user);

        // Check if there is a verified phone in the user metadata/database
        // This is a placeholder for actual DB check that we will implement next
        setIsSocialVerified(!!data.user?.phone_verified);

        console.log("✅ Identity Synced:", data.user);
      } catch (err) {
        console.error("❌ Sync Error:", err);
      } finally {
        setIsSyncing(false);
      }
    };

    syncIdentity();
  }, [ready, authenticated, user, getAccessToken]);

  return { isSyncing, syncedUser, isSocialVerified, setIsSocialVerified };
}
