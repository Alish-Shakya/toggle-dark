import { useEffect, useState } from "react";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";

const THEME_OPTIONS = ["light", "dark", "system"];

export default function ThemeToggle() {
  const [theme, setTheme] = useState("system");

  // On load, check saved theme or default to system
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
    updateHtmlClass(savedTheme);
  }, []);

  const updateHtmlClass = (theme) => {
    const root = document.documentElement;

    if (theme === "light") {
      root.classList.remove("dark");
    } else if (theme === "dark") {
      root.classList.add("dark");
    } else {
      // system
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      root.classList.toggle("dark", prefersDark);
    }
  };

  const toggleTheme = () => {
    // Cycle through the three options
    const currentIndex = THEME_OPTIONS.indexOf(theme);
    const nextTheme = THEME_OPTIONS[(currentIndex + 1) % THEME_OPTIONS.length];
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    updateHtmlClass(nextTheme);
  };

  // Icon based on current theme
  const renderIcon = () => {
    if (theme === "light") return <FaSun />;
    if (theme === "dark") return <FaMoon />;
    return <FaDesktop />; // system
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      aria-label="Toggle theme"
    >
      {renderIcon()}
    </button>
  );
}
