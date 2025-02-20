import Link from "next/link";

// Define the Contact interface
interface Contact {
  value: string; // Page URL, phone number, or email
  type: "url" | "tel" | "email";
  label: string;
  className?: string;
}

// Contact component
export const Contact = ({ value, label, type, className }: Contact) => {
  // Determine the href protocol based on the type
  const getHref = () => {
    switch (type) {
      case "email":
        return `mailto:${value}`;
      case "tel":
        return `tel:${value}`;
      case "url":
        return value.startsWith("http://") || value.startsWith("https://")
          ? value
          : `https://${value}`;
      default:
        return value;
    }
  };

  return (
    <Link
      className={className}
      href={getHref()}
      target={type === "url" ? "_blank" : undefined} // Open URL in a new tab
      rel={type === "url" ? "noopener noreferrer" : undefined} // Security for external links
    >
      <span>
        {label}: <strong className="hover:underline">{value}</strong>
      </span>
    </Link>
  );
};
