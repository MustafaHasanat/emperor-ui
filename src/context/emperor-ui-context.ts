import type { ConfigContextState } from "@/types";
import { createContext } from "react";

export const EmperorUIContext = createContext<ConfigContextState | undefined>(
  undefined,
);
