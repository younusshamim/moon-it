import { Inter, Lexend_Deca } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const HindSiliguri = localFont({
  src: [
    {
      path: "./Hind_Siliguri/HindSiliguri-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Hind_Siliguri/HindSiliguri-Regular.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Hind_Siliguri/HindSiliguri-Medium.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Hind_Siliguri/HindSiliguri-SemiBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Hind_Siliguri/HindSiliguri-Bold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

export { HindSiliguri };
