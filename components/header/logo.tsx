import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <img
        src="https://avatar.iran.liara.run/public"
        alt="Logo"
        width={32}
        height={32}
        className="rounded-full"
      />
      <span className="text-xl font-bold text-gray-800 dark:text-white">
        FJKM QUEBEC
      </span>
    </Link>
  );
}
