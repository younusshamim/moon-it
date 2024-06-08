import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

export function convertToBanglaNumber(englishNumber: number) {
  const englishToBanglaMap: { [key: string]: string } = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
  };
  const numberString = englishNumber.toString();
  const banglaNumber = numberString
    .split("")
    .map((char) => englishToBanglaMap[char] || char)
    .join("");
  return banglaNumber;
}
