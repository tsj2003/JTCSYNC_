"use client";

import { useUser } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

export default function UserSync() {
  const { user, isLoaded } = useUser();
  const syncUser = useMutation(api.users.syncUser);
  const markMissedInterviews = useMutation(api.interviews.markMissedInterviews);

  const userRecord = useQuery(api.users.getUserByClerkId, { clerkId: user?.id || "" });
  const updateUserRole = useMutation(api.users.updateUserRole);

  const [showRolePicker, setShowRolePicker] = useState(false);
  const [isUpdatingRole, setIsUpdatingRole] = useState(false);

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

  useEffect(() => {
    // If the user record exists but role is missing, show role picker
    if (user && userRecord && !userRecord.role) {
      setShowRolePicker(true);
    } else {
      setShowRolePicker(false);
    }
  }, [user, userRecord]);

  const chooseRole = async (role: "candidate" | "interviewer") => {
    if (!user) return;
    setIsUpdatingRole(true);
    try {
      await updateUserRole({ clerkId: user.id, role });
      toast.success(`You are now a ${role}.`);
      setShowRolePicker(false);
    } catch (err) {
      console.error("Failed to set role", err);
      toast.error("Failed to set role");
    } finally {
      setIsUpdatingRole(false);
    }
  };

  if (!isLoaded || !user) return null;

  return (
    <>
      {/* Existing background sync does not render UI */}
      {showRolePicker && (
        <div className="fixed bottom-4 right-4 bg-slate-800 p-4 rounded-lg border border-slate-700 z-50">
          <h3 className="text-white font-semibold mb-2">Choose Role</h3>
          <p className="text-sm text-muted-foreground mb-3">Choose whether you want to participate as a candidate or interviewer.</p>
          <div className="flex gap-2">
            <Button onClick={() => chooseRole("candidate")} disabled={isUpdatingRole} className="bg-green-600">
              {isUpdatingRole ? "Updating..." : "I am a Candidate"}
            </Button>
            <Button onClick={() => chooseRole("interviewer")} disabled={isUpdatingRole} variant="outline">
              {isUpdatingRole ? "Updating..." : "I am an Interviewer"}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
