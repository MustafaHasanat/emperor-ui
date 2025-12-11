import type { EmperorUIContextState } from "@types";
import { createContext } from "react";

export const EmperorUIContext = createContext<
  EmperorUIContextState | undefined
>(undefined);
