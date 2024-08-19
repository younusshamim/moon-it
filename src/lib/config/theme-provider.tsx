'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { type ThemeProviderProps } from "next-themes/dist/types";
import { useIsMounted } from '../hooks/use-is-mounted';

export function ThemeProvider({ children }: ThemeProviderProps) {
    const isMounted = useIsMounted();

    return (
        <NextThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {isMounted && children}
        </NextThemeProvider>
    );
}