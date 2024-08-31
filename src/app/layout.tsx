import NextProgress from "@/components/next-progress";
import { ThemeProvider } from "@/config/theme-provider";
import { HindSiliguri } from "@/lib/fonts/fonts";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Moon IT | Best Computer & Language Training in Feni | Top Institute in Feni',
    template: '%s - Moon IT | Computer & Language Training | Top Institute in Feni',
  },
  description:
    "Moon IT is Feni's top institute for computer and language training. Improve your skills with our expert courses. Enroll today at the best training center in Feni. Call: 01785882381 | Moon Institute of IT.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      // 💡 Prevent next-themes hydration warning
      suppressHydrationWarning
      lang="en"
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body
        // 💡 Prevent hydration warnings caused by third-party extensions, such as Grammarly.
        suppressHydrationWarning
        className={`${HindSiliguri.className} font-medium bg-background`}
      >
        <ThemeProvider>
          <NextProgress />
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
