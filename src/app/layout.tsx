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
    default: 'Moon IT - Best Computer & Language Training Institute in Feni - Moon Institute of IT ',
    template: `%s - Moon IT`,
  },
  description:
    "Moon IT is a leading institute in Feni offering computer and language training courses. Join us to boost your skills and advance your career. | Call: 01785882381 | Moon Institute of IT",
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
