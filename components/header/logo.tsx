import { Church } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex justify-center items-center space-x-2">
      <Church className="w-6 h-6 text-primary" />
      <span className="text-xl font-bold text-gray-800 dark:text-white">
        FJKM QUEBEC
      </span>
    </Link>
  );
}
