"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProvider({ children }: React.PropsWithChildren<{}>) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <>{children}</>

    return (
        <NextThemeProvider
        // enableSystem
        // defaultTheme="system"
        // disableTransitionOnChange
        >
            {children}
        </NextThemeProvider>
    );
}