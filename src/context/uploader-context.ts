import type { UploaderContextState } from "@/types";
import { createContext } from "react";

export const UploaderContext = createContext<UploaderContextState | undefined>(
  undefined,
);
