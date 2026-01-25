import type { NavigationContextState } from "@/types";
import { createContext } from "react";

export const NavigationContext = createContext<
  NavigationContextState | undefined
>(undefined);
