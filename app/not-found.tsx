import { BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center space-y-6 py-24 md:py-32">
      <BookOpen className="w-10 h-10" />
      <span>Page introuvable</span>
    </div>
  );
}
