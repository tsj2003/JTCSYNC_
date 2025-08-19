"use client";

import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "./ui/button";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AdminSetup() {
  const { user, isLoaded } = useUser();
  const updateUserRole = useMutation(api.users.updateUserRole);
  const [isUpdating, setIsUpdating] = useState(false);

  const makeCandidate = async () => {
    if (!user) return;

    setIsUpdating(true);
    try {
      await updateUserRole({
        clerkId: user.id,
        role: "candidate",
      });
      toast.success("You are now a candidate! Please refresh the page.");
    } catch (error) {
      console.error("Failed to make candidate:", error);
      toast.error("Failed to make candidate");
    } finally {
      setIsUpdating(false);
    }
  };

  const makeInterviewer = async () => {
    if (!user) return;

    setIsUpdating(true);
    try {
      await updateUserRole({
        clerkId: user.id,
        role: "interviewer",
      });
      toast.success("You are now an interviewer! Please refresh the page.");
    } catch (error) {
      console.error("Failed to make interviewer:", error);
      toast.error("Failed to make interviewer");
    } finally {
      setIsUpdating(false);
    }
  };

  if (!isLoaded || !user) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 p-4 rounded-lg border border-slate-700 z-50">
      <h3 className="text-white font-semibold mb-2">Role Setup</h3>
      <div className="space-y-2">
        <Button
          onClick={makeCandidate}
          disabled={isUpdating}
          className="w-full bg-green-600 hover:bg-green-700"
        >
          {isUpdating ? "Updating..." : "Make Candidate"}
        </Button>
        <Button
          onClick={makeInterviewer}
          disabled={isUpdating}
          variant="outline"
          className="w-full"
        >
          {isUpdating ? "Updating..." : "Make Interviewer"}
        </Button>
        {/* Make Admin removed - only Candidate and Interviewer options available */}
      </div>
    </div>
  );
}
