"use client";

import { ChevronUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed right-8 bottom-20 z-50 p-3 rounded-full border transition-all z-80 hover:bg-primary hover:text-primary-foreground border-border bg-background"
      >
        <ChevronUpIcon className="w-6 h-6" />
      </button>
    )
  );
}
