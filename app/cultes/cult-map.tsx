import { GoogleMapsEmbed } from "@next/third-parties/google";

interface CustomMapProps {
  address: string;
  className?: string;
}

export function CustomMap({ address, className }: CustomMapProps) {
  // Replace spaces with plus signs for the query parameter
  const formattedAddress = address.replace(/\s+/g, "+");

  return (
    <div className={className}>
      <GoogleMapsEmbed
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        height={400}
        width="100%"
        mode="place"
        zoom="16"
        q={formattedAddress}
        loading="lazy"
        allowfullscreen
      />
    </div>
  );
}
