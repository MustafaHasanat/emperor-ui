import { UploaderContext } from "@context";
import { useContext } from "react";

export function useUploaderContext() {
  const context = useContext(UploaderContext);

  if (!context) {
    throw new Error(
      "useUploaderContext must be used within a UploaderProvider",
    );
  }

  return context;
}
