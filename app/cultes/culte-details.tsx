import { cn } from "@/lib/utils";
import {
  Clock,
  MapPin,
  Calendar,
  BookOpen,
  Monitor,
  Facebook,
  Youtube,
} from "lucide-react";

interface CulteDetailsProps {
  className?: string;
  details: {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    address: string;
  };
}

export function CulteDetails({ details, className }: CulteDetailsProps) {
  const formattedDate = new Date(details.date).toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const eventDetails = [
    {
      icon: Calendar,
      label: "Date",
      value: formattedDate,
    },
    {
      icon: Clock,
      label: "Heure",
      value: details.time,
    },
    {
      icon: MapPin,
      label: "Lieu",
      primary: details.location,
      secondary: details.address,
    },
  ];

  const description =
    "Un moment de communion, de prière et de partage de la Parole de Dieu. " +
    "Venez nous rejoindre pour une célébration spirituelle et communautaire. " +
    "Ensemble, nous approfondirons notre foi et notre compréhension des Écritures.";

  return (
    <div
      className={cn(
        "overflow-hidden bg-white rounded-2xl shadow-lg dark:bg-gray-900",
        className
      )}
    >
      <div className="px-6 py-3 border-b border-gray-200 bg-primary/5 dark:border-gray-800">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {details.title}
        </h1>
      </div>

      {/* Left Column: Event Details */}
      <div className="p-6 space-y-4">
        {eventDetails.map(
          ({ icon: Icon, label, value, primary, secondary }, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="mt-1">
                <Icon className="w-5 h-5 text-primary" />
              </div>

              <div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {label}
                </div>

                {primary ? (
                  <>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {primary}
                    </div>

                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {secondary}
                    </div>
                  </>
                ) : (
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {value}
                  </div>
                )}
              </div>
            </div>
          )
        )}

        <div className="flex items-start mt-4 space-x-3">
          <div className="mt-1">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>

          <div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Description
            </div>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              {description}
            </p>
          </div>
        </div>

        <div className="flex items-start mt-4 space-x-3">
          <div className="mt-1">
            <Monitor className="w-5 h-5 text-primary" />
          </div>

          <div className="space-y-2">
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Diffusion en Direct
            </div>
            <div className="flex items-center space-x-3">
              {[
                {
                  icon: Youtube,
                  name: "YouTube Live",
                  link: "https://youtube.com/fjkmquebec",
                },
                {
                  icon: Facebook,
                  name: "Facebook Live",
                  link: "https://facebook.com/fjkmquebec",
                },
                {
                  icon: BookOpen,
                  name: "Zoom Meeting",
                  link: "https://zoom.us/j/fjkmquebec",
                },
              ].map((platform, index) => (
                <a
                  key={index}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-sm text-gray-700 transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                >
                  <platform.icon className="w-4 h-4" />
                  <span>{platform.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
