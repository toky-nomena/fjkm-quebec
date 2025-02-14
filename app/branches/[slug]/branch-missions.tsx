import { Check } from "lucide-react";

interface BranchMissionsProps {
  missions?: string[];
}

export default function BranchMissions({ missions = [] }: BranchMissionsProps) {
  return (
    <ul className="space-y-2">
      {missions.map((mission) => (
        <li key={mission} className="flex items-center gap-2">
          <div className={`rounded-full p-1.5 text-blue-100 bg-blue-500/75`}>
            <Check className="w-4 h-4" />
          </div>
          <span className="text-lg text-left text-blue-400">{mission}</span>
        </li>
      ))}
    </ul>
  );
}
