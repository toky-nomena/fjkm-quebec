import { Check } from "lucide-react";

interface BranchMissionsProps {
  readonly missions: string[];
}

export default function BranchMissions({ missions = [] }: BranchMissionsProps) {
  return (
    <ul className="space-y-2 max-w-2xl">
      {missions.map((mission) => (
        <li key={mission} className="flex gap-2 items-center">
          <div className={`rounded-full p-1.5 text-blue-100 bg-blue-500/75`}>
            <Check className="w-4 h-4" />
          </div>
          <span className="text-lg text-left text-blue-400">{mission}</span>
        </li>
      ))}
    </ul>
  );
}
