"use client";

import { useSiteTheme } from "@/contexts/NavbarThemeContext";

interface ThemeToggleProps {
  className?: string;
}

/** Uiverse switch by cuzpq — https://uiverse.io/cuzpq/gentle-goat-72 */
export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, setTheme } = useSiteTheme();

  return (
    <input
      type="checkbox"
      className={`theme-checkbox ${className}`}
      checked={theme === "light"}
      onChange={(e) => setTheme(e.target.checked ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    />
  );
}
