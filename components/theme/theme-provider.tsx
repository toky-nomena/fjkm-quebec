"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

import { useTheme as useNextTheme } from "next-themes";

export const useTheme = () => {
  const { theme, setTheme } = useNextTheme();
  return { theme, setTheme };
};
