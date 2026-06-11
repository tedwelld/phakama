"use client";

import { createContext, useContext, useState, useEffect } from "react";

export type SiteTheme = "dark" | "light";

interface SiteThemeContextValue {
  theme: SiteTheme;
  toggleTheme: () => void;
  setTheme: (t: SiteTheme) => void;
}

const defaultValue: SiteThemeContextValue = {
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
};

export const SiteThemeContext = createContext<SiteThemeContextValue>(defaultValue);
export const NavbarThemeProvider = SiteThemeProvider;

export function SiteThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<SiteTheme>("dark");

  useEffect(() => {
    const saved = localStorage.getItem("phakama-theme") as SiteTheme | null;
    if (saved === "light") setThemeState("light");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("theme-light", theme === "light");
    localStorage.setItem("phakama-theme", theme);
  }, [theme]);

  const toggleTheme = () => setThemeState((t) => (t === "dark" ? "light" : "dark"));
  const setTheme = (t: SiteTheme) => setThemeState(t);

  return (
    <SiteThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </SiteThemeContext.Provider>
  );
}

export function useSiteTheme() {
  return useContext(SiteThemeContext);
}

export function useNavbarTheme() {
  const { theme, setTheme } = useContext(SiteThemeContext);
  return { theme, setTheme };
}
