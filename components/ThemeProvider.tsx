'use client';

import {ThemeProvider as NextThemesProvider} from "next-themes";
import {ReactNode} from "react";

interface IThemeProvider {
    children: ReactNode,
    attribute: string;
    defaultTheme: string
}

export default function ThemeProvider({children, ...props}: IThemeProvider) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
