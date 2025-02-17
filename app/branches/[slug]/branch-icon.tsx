import {
  BookOpen,
  Zap,
  Tent,
  Heart,
  Users,
  Star,
  Music,
  Globe,
  Mic,
  Church,
  Cross,
  Flame,
  Leaf,
  Radio,
  Rocket,
  Sailboat,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  book: BookOpen,
  zap: Zap,
  tent: Tent,
  heart: Heart,
  users: Users,
  star: Star,
  music: Music,
  globe: Globe,
  mic: Mic,
  church: Church,
  cross: Cross,
  flame: Flame,
  leaf: Leaf,
  radio: Radio,
  rocket: Rocket,
  sailboat: Sailboat,
};

interface BranchIconProps {
  icon: string;
  name: string;
}

export function BranchIcon({ icon, name }: BranchIconProps) {
  const Icon = ICON_MAP[icon] || BookOpen;

  return (
    <div
      className="flex justify-center items-center w-32 h-32 rounded-full bg-primary/10"
      aria-label={`Icon for ${name}`}
    >
      <Icon className="w-16 h-16 text-primary" aria-hidden="true" />
    </div>
  );
}
