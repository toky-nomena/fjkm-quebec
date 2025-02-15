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
} from "lucide-react";

interface BranchIconProps {
  icon: string;
  name: string;
  className?: string;
  backgroundClassName?: string;
}

function getIconComponent(icon: string) {
  switch (icon) {
    case "book-open":
      return BookOpen;
    case "zap":
      return Zap;
    case "tent":
      return Tent;
    case "heart":
      return Heart;
    case "users":
      return Users;
    case "star":
      return Star;
    case "music":
      return Music;
    case "globe":
      return Globe;
    case "mic":
      return Mic;
    default:
      return null;
  }
}

export function BranchIcon({
  icon,
  name,
  className = "w-16 h-16 text-primary",
  backgroundClassName = "flex justify-center items-center w-32 h-32 rounded-full bg-primary/10",
}: BranchIconProps) {
  // Explicit icon mapping with switch statement
  const IconComponent = getIconComponent(icon);

  return (
    <div className={backgroundClassName}>
      {IconComponent ? (
        <IconComponent className={className} aria-label={`Icône de ${name}`} />
      ) : null}
    </div>
  );
}
