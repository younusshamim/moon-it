import { useEffect, useState } from "react";

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}

export default useMediaQuery;

export const useXlScreen = () => useMediaQuery("(min-width: 1280px)");
export const useLgScreen = () => useMediaQuery("(min-width: 1024px)");
export const useMdScreen = () => useMediaQuery("(min-width: 768px)");
export const useSmScreen = () => useMediaQuery("(min-width: 640px)");

export const useXlScreenOnly = () =>
  useMediaQuery("(min-width: 1280px) and (max-width: 1535px)");
export const useLgScreenOnly = () =>
  useMediaQuery("(min-width: 1024px) and (max-width: 1279px)");
export const useMdScreenOnly = () =>
  useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
export const useSmScreenOnly = () =>
  useMediaQuery("(min-width: 640px) and (max-width: 767px)");
export const useXsScreenOnly = () => useMediaQuery("(max-width: 639px)");
