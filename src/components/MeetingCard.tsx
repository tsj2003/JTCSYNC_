import useMeetingActions from "@/hooks/useMeetingActions";
import { Doc } from "../../convex/_generated/dataModel";
import { getMeetingStatus } from "@/lib/utils";
import { format } from "date-fns";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CalendarIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

type Interview = Doc<"interviews">;

function MeetingCard({ interview }: { interview: Interview }) {
  const { joinMeeting } = useMeetingActions();

  const status = getMeetingStatus(interview);
  const formattedDate = format(new Date(interview.startTime), "EEEE, MMMM d · h:mm a");

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/50">
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <CalendarIcon className="h-4 w-4 text-cyan-400" />
            {formattedDate}
          </div>

          <Badge
            variant={
              status === "live" ? "default" : status === "upcoming" ? "secondary" : "outline"
            }
            className="font-medium px-3 py-1 rounded-full"
          >
            {status === "live" ? "Live Now" : status === "upcoming" ? "Upcoming" : "Completed"}
          </Badge>
        </div>

        <CardTitle className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors">
          {interview.title}
        </CardTitle>

        {interview.description && (
          <CardDescription className="line-clamp-2 text-slate-300 leading-relaxed">
            {interview.description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent>
        {status === "live" && (
          <Button 
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105" 
            onClick={() => joinMeeting(interview.streamCallId)}
          >
            Join Meeting
          </Button>
        )}

        {status === "upcoming" && (
          <Button 
            variant="outline" 
            className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white font-semibold py-3 rounded-xl transition-all duration-300" 
            disabled
          >
            Waiting to Start
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
export default MeetingCard;
