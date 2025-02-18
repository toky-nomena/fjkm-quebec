import { AlertTriangle } from "lucide-react";
import Link from "next/link";

interface ErrorFallbackProps {
  title?: string;
  message?: string;
  actionLabel?: string;
  actionUrl?: string;
}

export function ErrorFallback({
  title = "Oops! Quelque chose s'est mal passé",
  message = "Nous rencontrons des difficultés techniques. Veuillez réessayer plus tard.",
  actionLabel = "Retourner à l'accueil",
  actionUrl = "/",
}: ErrorFallbackProps) {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[50vh] p-6 text-center space-y-6 bg-background"
      role="alert"
    >
      <div className="p-4 mb-4 rounded-full bg-destructive/10">
        <AlertTriangle
          className="w-12 h-12 text-destructive"
          strokeWidth={1.5}
        />
      </div>

      <div className="space-y-4 max-w-md">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>

        <p className="text-muted-foreground">{message}</p>
      </div>

      <Link
        href={actionUrl}
        className="inline-flex justify-center items-center px-6 py-3 rounded-lg transition-colors  bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        {actionLabel}
      </Link>
    </div>
  );
}
