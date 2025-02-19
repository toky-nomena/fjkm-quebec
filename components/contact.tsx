import { getExternalLinkProps } from "@/lib/link";
import Link from "next/link";

// Define the Contact interface
interface Contact {
  value: string;
  type: "url" | "tel" | "email";
  label: string;
  className?: string;
}

// Contact component
export const Contact = ({ value, label, type, className }: Contact) => {
  return (
    <Link className={className} {...getExternalLinkProps(value, type)}>
      <span>
        {label}: <strong className="hover:underline">{value}</strong>
      </span>
    </Link>
  );
};
