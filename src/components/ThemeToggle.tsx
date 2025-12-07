import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/shadcn/button";
import { Themes, useTheme } from "@/context/theme-provider";

export function ThemeToggle() {
  const themeValues = Object.values(Themes);

  const { theme, setTheme } = useTheme();
  const [themeIndex, setThemeIndex] = useState(themeValues.indexOf(theme));

  useEffect(() => {
    setTheme(themeValues[themeIndex]);
  }, [themeIndex, themeValues, setTheme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() =>
        setThemeIndex((themeIndex + 1) % Object.values(Themes).length)
      }
    >
      <Monitor
        className={`absolute transition-all ${theme === "system" ? "scale-100" : "scale-0"}`}
      />
      <Moon
        className={`absolute transition-all ${theme === "dark" ? "scale-100" : "scale-0"}`}
      />
      <Sun
        className={`absolute transition-all ${theme === "light" ? "scale-100" : "scale-0"}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
