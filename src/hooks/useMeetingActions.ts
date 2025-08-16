import { useRouter } from "next/navigation";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import toast from "react-hot-toast";

const useMeetingActions = () => {
  const router = useRouter();
  const client = useStreamVideoClient();

  const createInstantMeeting = async () => {
    if (!client) {
      console.error("Stream client not initialized");
      toast.error("Stream client not ready. Please refresh and try again.");
      return;
    }

    try {
      console.log("Creating meeting with Stream client:", client);
      const id = crypto.randomUUID();
      const call = client.call("default", id);

      console.log("Call object created:", call);
      await call.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
          custom: {
            description: "Instant Meeting",
          },
        },
      });

      console.log("Meeting created successfully:", call.id);
      router.push(`/meeting/${call.id}`);
      toast.success("Meeting Created");
    } catch (error) {
      console.error("Failed to create meeting:", error);
      toast.error("Failed to create meeting. Please check your connection and try again.");
    }
  };

  const joinMeeting = (callId: string) => {
    if (!client) return toast.error("Failed to join meeting. Please try again.");
    router.push(`/meeting/${callId}`);
  };

  return { createInstantMeeting, joinMeeting };
};

export default useMeetingActions;
