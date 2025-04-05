
import React from "react";
import { useTheme } from "@/providers/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden rounded-full w-9 h-9"
    >
      <Sun
        className={cn(
          "h-5 w-5 transition-all absolute",
          theme === "light" 
            ? "rotate-0 opacity-100 scale-100" 
            : "-rotate-90 opacity-0 scale-75"
        )}
      />
      <Moon
        className={cn(
          "h-5 w-5 transition-all absolute",
          theme === "dark" 
            ? "rotate-0 opacity-100 scale-100" 
            : "rotate-90 opacity-0 scale-75"
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
