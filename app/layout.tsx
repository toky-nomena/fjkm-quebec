import "./globals.css";
import { Suspense, type ReactNode } from "react";
import { Geist } from "next/font/google";
import type { Metadata } from "next";

import MouseMoveEffect from "@/components/ui/mouse-move-effect";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Footer from "@/components/footer";
import { Bg } from "@/components/ui/bg";
import Header from "@/components/header/header";
import { BackToTop } from "@/components/ui/back-to-top";
import { Theme } from "@/components/theme";

const font = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FJKM Québec - Church",
  description: "FJKM Québec",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} bg-background text-foreground antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MouseMoveEffect />
          <div className="relative min-h-screen">
            <Bg />
            <div className="relative z-10">
              <Header />
              <main className="container flex-1 mx-auto my-16 space-y-10 reveal">
                <Theme />
                {children}
              </main>
              <Suspense>
                <Footer />
              </Suspense>
              <BackToTop />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
