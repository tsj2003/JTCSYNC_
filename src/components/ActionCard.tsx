import { QuickActionType } from "@/constants";
import { Card } from "./ui/card";

// some weird tw bug, but this is how it works
// from-orange-500/10 via-orange-500/5 to-transparent
// from-blue-500/10 via-blue-500/5 to-transparent
// from-purple-500/10 via-purple-500/5 to-transparent
// from-primary/10 via-primary/5 to-transparent

function ActionCard({ action, onClick }: { action: QuickActionType; onClick: () => void }) {
  return (
    <Card
      className="group relative overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl cursor-pointer bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border-slate-700/50"
      onClick={onClick}
    >
      {/* ACTION GRADIENT */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-60 group-hover:opacity-80 transition-all duration-300`}
      />

      {/* ACTION CONTENT WRAPPER */}
      <div className="relative p-6 size-full">
        <div className="space-y-4">
          {/* ACTION ICON */}
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-${action.color}/20 group-hover:scale-110 transition-all duration-300 shadow-lg`}
          >
            <action.icon className={`h-7 w-7 text-${action.color} group-hover:rotate-12 transition-transform duration-300`} />
          </div>

          {/* ACTION DETAILS */}
          <div className="space-y-2">
            <h3 className="font-bold text-xl group-hover:text-primary transition-colors duration-300">
              {action.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">{action.description}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ActionCard;
