"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

type BackgroundType = "pixel-blast" | "letter-glitch";

interface BackgroundContextType {
  backgroundType: BackgroundType;
  toggleBackground: () => void;
  setBackground: (type: BackgroundType) => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export function BackgroundProvider({ children }: { children: React.ReactNode }) {
  const [backgroundType, setBackgroundType] = useState<BackgroundType>("pixel-blast");

  const toggleBackground = useCallback(() => {
    setBackgroundType((prev) => (prev === "pixel-blast" ? "letter-glitch" : "pixel-blast"));
  }, []);

  const setBackground = useCallback((type: BackgroundType) => {
    setBackgroundType(type);
  }, []);

  return (
    <BackgroundContext.Provider value={{ backgroundType, toggleBackground, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackground() {
  const context = useContext(BackgroundContext);
  if (context === undefined) {
    throw new Error("useBackground must be used within BackgroundProvider");
  }
  return context;
}
