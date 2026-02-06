"use client";

import { useEffect, useMemo, useState } from "react";

const SCREENS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const useWindowSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const currentScreen: "base" | "sm" | "md" | "lg" | "xl" | "2xl" =
    useMemo(() => {
      if (size?.width > SCREENS?.["2xl"]) return "2xl";
      else if (size?.width > SCREENS?.xl) return "xl";
      else if (size?.width > SCREENS?.lg) return "lg";
      else if (size?.width > SCREENS?.md) return "md";
      else if (size?.width > SCREENS?.sm) return "sm";
      else return "base";
    }, [size]);

  const isSmallDevice = useMemo(
    () => ["base", "sm", "md"].includes(currentScreen),
    [currentScreen],
  );

  const isExtraSmallDevice = useMemo(
    () => ["base"].includes(currentScreen),
    [currentScreen],
  );

  return {
    viewportWidth: size.width,
    viewportHeight: size.height,
    currentScreen,
    isSmallDevice,
    isExtraSmallDevice,
  };
};
