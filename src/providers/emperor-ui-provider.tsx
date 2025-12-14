import type {
  EmperorUIConfig,
  EmperorUIContextState,
  EmperorUIProviderProps,
} from "@types";
import { useMemo } from "react";
import { EmperorUIContext } from "@context";
import { defaultEmperorUIConfig } from "@constants";
import { Scaffold } from "@components";

export function EmperorUIProvider({
  children,
  config,
}: EmperorUIProviderProps) {
  const emperorUIProviderValue: EmperorUIContextState = useMemo(() => {
    return {
      config: {
        layout: {
          ...defaultEmperorUIConfig?.layout,
          ...config?.layout,
        },
        theme: {
          ...defaultEmperorUIConfig?.theme,
          ...config?.theme,
          colors: {
            ...defaultEmperorUIConfig?.theme?.colors,
            ...config?.theme?.colors,
          },
        },
      } as EmperorUIConfig,
    };
  }, [config]);

  const withScaffold = config.layout?.withScaffold ?? true;

  if (withScaffold)
    return (
      <EmperorUIContext.Provider value={emperorUIProviderValue}>
        <Scaffold>{children}</Scaffold>
      </EmperorUIContext.Provider>
    );

  return (
    <EmperorUIContext.Provider value={emperorUIProviderValue}>
      {children}
    </EmperorUIContext.Provider>
  );
}
