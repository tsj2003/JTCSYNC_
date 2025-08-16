import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export function useUserRole() {
  const { user, isLoaded: isUserLoaded } = useUser();
  const userData = useQuery(api.users.getUserByClerkId, {
    clerkId: user?.id || "",
  });

  const isLoading = !isUserLoaded || !userData;
  const isInterviewer = userData?.role === "interviewer";
  const isCandidate = userData?.role === "candidate";
  const isAdmin = userData?.role === "admin";

  const canCreateMeeting = isInterviewer || isAdmin;
  const canEndMeeting = isInterviewer || isAdmin;
  const canScheduleInterview = isInterviewer || isAdmin;
  const canViewRecordings = isInterviewer || isAdmin;

  return {
    isLoading,
    isInterviewer,
    isCandidate,
    isAdmin,
    canCreateMeeting,
    canEndMeeting,
    canScheduleInterview,
    canViewRecordings,
    userData,
  };
}