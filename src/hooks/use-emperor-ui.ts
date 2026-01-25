import { EmperorUIContext } from "@/context";
import { useContext } from "react";

export function useEmperorUI() {
  const context = useContext(EmperorUIContext);

  if (!context) {
    throw new Error("useEmperorUI must be used within a EmperorUIProvider");
  }

  return context;
}
