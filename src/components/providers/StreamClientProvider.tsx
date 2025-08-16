"use client";

import { ReactNode, useEffect, useState } from "react";
import { StreamVideoClient, StreamVideo } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";
import LoaderUI from "../LoaderUI";
import { streamTokenProvider } from "@/actions/stream.actions";

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [streamVideoClient, setStreamVideoClient] = useState<StreamVideoClient>();
  const { user, isLoaded } = useUser();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isLoaded || !user) return;

    try {
      console.log("Initializing Stream client with API key:", process.env.NEXT_PUBLIC_STREAM_API_KEY);
      
      const client = new StreamVideoClient({
        apiKey: process.env.NEXT_PUBLIC_STREAM_API_KEY!,
        user: {
          id: user?.id,
          name:
            [user?.firstName, user?.lastName].filter(Boolean).join(" ") || user?.id,
          image: user?.imageUrl,
        },
        tokenProvider: streamTokenProvider,
      });

      console.log("Stream client created successfully");
      setStreamVideoClient(client);
    } catch (error) {
      console.error("Failed to initialize Stream client:", error);
    }
  }, [user, isLoaded]);

  if (!isClient || !streamVideoClient) return <LoaderUI />;

  return <StreamVideo client={streamVideoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
