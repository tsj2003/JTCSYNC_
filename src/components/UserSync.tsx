"use client";

import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect } from "react";

export default function UserSync() {
  const { user, isLoaded } = useUser();
  const syncUser = useMutation(api.users.syncUser);

  const markMissedInterviews = useMutation(api.interviews.markMissedInterviews);

  useEffect(() => {
    if (isLoaded && user) {
      // Sync user to Convex database
      syncUser({
        name: `${user.firstName || ""} ${user.lastName || ""}`.trim() || user.username || user.id,
        email: user.emailAddresses[0]?.emailAddress || "",
        clerkId: user.id,
        image: user.imageUrl,
      }).catch((error) => {
        console.error("Failed to sync user:", error);
      });

      // Mark any past interviews as missed
      markMissedInterviews().catch((error) => {
        console.error("Failed to mark missed interviews:", error);
      });
    }
  }, [isLoaded, user, syncUser, markMissedInterviews]);

  return null; // This component doesn't render anything
}
