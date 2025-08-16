import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Input } from "./ui/input";
import { CopyIcon, ShareIcon } from "lucide-react";
import toast from "react-hot-toast";
import { generateMeetingLink } from "@/lib/meeting-utils";

interface ShareMeetingLinkProps {
  isOpen: boolean;
  onClose: () => void;
  meetingId: string;
}

function ShareMeetingLink({ isOpen, onClose, meetingId }: ShareMeetingLinkProps) {
  const meetingLink = generateMeetingLink(meetingId);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(meetingLink);
      toast.success("Meeting link copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy link");
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join my meeting",
          text: "Join my meeting on Remote Interview Platform",
          url: meetingLink,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Share Meeting Link</DialogTitle>
          <DialogDescription>
            Share this link with candidates or interviewers to join the meeting session.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2">
            <Input value={meetingLink} readOnly />
            <Button variant="outline" size="icon" onClick={handleCopyLink}>
              <CopyIcon className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button onClick={handleShare}>
              <ShareIcon className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ShareMeetingLink; 