"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Toggle } from "./ui/toggle";
export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div>
      <Toggle
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        className="group size-9 data-[state=on]:bg-transparent data-[state=on]:hover:bg-muted rounded-xl cursor-pointer"
        onPressedChange={() => setTheme(isDark ? "light" : "dark")}
        pressed={isDark}
        variant="outline"
      >
        <MoonIcon
          aria-hidden="true"
          className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
          size={16}
        />
        <SunIcon
          aria-hidden="true"
          className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
          size={16}
        />
      </Toggle>
    </div>
  );
}

