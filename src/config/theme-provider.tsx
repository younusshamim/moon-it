'use client';

import { useIsMounted } from '@/hooks/use-is-mounted';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children }: ThemeProviderProps) {
    const isMounted = useIsMounted();

    return (
        <NextThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            {isMounted && children}
        </NextThemeProvider>
    );
}