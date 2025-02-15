import "./globals.css";
import { Suspense, type ReactNode } from "react";
import { Geist } from "next/font/google";
import type { Metadata } from "next";

import MouseMoveEffect from "@/components/ui/mouse-move-effect";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Footer from "@/components/footer";
import { Bg } from "@/components/ui/bg";
import Header from "@/components/header/header";
import { Banner } from "@/components/banner";
import { BackToTop } from "@/components/ui/back-to-top";
import { Theme } from "@/components/theme";

const font = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FJKM Quebec - Church",
  description: "FJKM Quebec",
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
              <Banner />
              <Header />
              <main className="container flex-1 mx-auto reveal my-16 space-y-10">
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
