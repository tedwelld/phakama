"use client";

import { useCallback, useSyncExternalStore } from "react";
import { applyTheme, type Theme } from "@/lib/theme";

function getThemeSnapshot(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

function subscribe(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  window.addEventListener("storage", onStoreChange);

  return () => {
    observer.disconnect();
    window.removeEventListener("storage", onStoreChange);
  };
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    getThemeSnapshot,
    () => "light" as Theme
  );

  const isDark = theme === "dark";

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      applyTheme(event.target.checked ? "dark" : "light");
    },
    []
  );

  return (
    <input
      type="checkbox"
      className="theme-checkbox shrink-0"
      checked={isDark}
      onChange={handleChange}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    />
  );
}
