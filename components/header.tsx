"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Activités", href: "/activities" },
  { name: "Programmes", href: "/programs" },
  { name: "Blog", href: "/blog" },
];

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center max-w-screen-2xl h-14">
        <div className="hidden mr-8 md:flex">
          <Link href="/" className="flex items-center mr-6 space-x-2">
            <span className="font-bold">FJKM QUÉBEC</span>
          </Link>
        </div>
        <div className="flex flex-1 justify-between items-center space-x-6 md:justify-end">
          <nav className="flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex items-center text-sm font-medium transition-colors hover:text-foreground/80 ${
                  pathname === item.href
                    ? "text-primary before:absolute before:-bottom-5 before:h-0.5 before:w-full before:bg-primary before:shadow-[0_0_10px_2px_rgba(59,130,246,0.5)] before:opacity-70"
                    : "text-foreground/60"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="w-9 h-9"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="w-4 h-4 transition-transform scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute w-4 h-4 transition-transform scale-0 rotate-90 dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
