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

  const makeAdmin = async () => {
    if (!user) return;
    
    setIsUpdating(true);
    try {
      await updateUserRole({
        clerkId: user.id,
        role: "admin",
      });
      toast.success("You are now an admin! Please refresh the page.");
    } catch (error) {
      console.error("Failed to make admin:", error);
      toast.error("Failed to make admin");
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
          onClick={makeAdmin} 
          disabled={isUpdating}
          className="w-full bg-purple-600 hover:bg-purple-700"
        >
          {isUpdating ? "Updating..." : "Make Admin"}
        </Button>
        <Button 
          onClick={makeInterviewer} 
          disabled={isUpdating}
          variant="outline"
          className="w-full"
        >
          {isUpdating ? "Updating..." : "Make Interviewer"}
        </Button>
      </div>
    </div>
  );
}
