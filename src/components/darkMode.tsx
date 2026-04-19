"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;

    const stored = localStorage.getItem("theme");
    return stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  // evita hydration mismatch
  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full overflow-hidden focus-ring md:w-20 md:h-10 lg:w-24 lg:h-12"
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      aria-pressed={isDark}
    >
      <div
        className={`absolute inset-0 transition-colors duration-500  ${
          isDark ? "bg-secondary" : "bg-muted"
        }`}
      />

      <div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-background flex items-center justify-center shadow-md transition-transform duration-300  md:w-8 md:h-8 lg:w-10 lg:h-10 ${
          isDark
            ? "translate-x-0"
            : "translate-x-8 md:translate-x-9 lg:translate-x-12"
        }`}
      >
        {isDark ? (
          <Moon
            aria-hidden="true"
            className="w-4 h-4 text-primary md:w-5 md:h-5 lg:w-6 lg:h-6 "
          />
        ) : (
          <Sun
            aria-hidden="true"
            className="w-4 h-4 text-primary md:w-5 md:h-5 lg:w-6 lg:h-6"
          />
        )}
      </div>
    </button>
  );
}
