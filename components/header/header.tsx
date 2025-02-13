"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "../theme/theme-switcher";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Activités", href: "/activities" },
  { name: "Branches", href: "/branches" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo />
          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Desktop Menu */}
            <nav className="hidden space-x-4 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-foreground hover:text-primary",
                    pathname === item.href ? "text-primary" : ""
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            {/* Theme Switcher */}
            <ThemeSwitcher />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="py-4 md:hidden reveal">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block py-2 text-foreground hover:text-primary",
                  pathname === item.href ? "text-primary" : ""
                )}
                onClick={toggleMenu} // Close the menu on link click
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
