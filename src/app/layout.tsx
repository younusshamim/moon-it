import { Inter } from "next/font/google";
import "./globals.css";
import { HindSiliguri } from "@/lib/fonts/fonts";
import { ReactNode } from "react";
import { ThemeProvider } from "@/lib/config/theme-provider";
import NextProgress from "@/components/next-progress";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Moon Institute of IT | Best Computer & Language Training Institute in Feni",
  description:
    "Moon Institute of IT is a leading institute in Feni offering computer and language training courses. Join us to boost your skills and advance your career. | Call: 01785882381 | Moon IT",
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
      >
        <ThemeProvider>
          <NextProgress />
          <div className={`${HindSiliguri.className} font-medium bg-background overflow-hidden`}>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
