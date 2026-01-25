import { Scaffold } from "@/components";
import { defaultEmperorUIConfig } from "@/constants";
import { EmperorUIContext } from "@/context";
import type {
  ConfigContextState,
  ConfigProviderProps,
  EmperorUIConfig,
} from "@/types";
import { useMemo } from "react";

export function ConfigProvider({
  children,
  config = defaultEmperorUIConfig,
}: ConfigProviderProps) {
  const emperorUIProviderValue: ConfigContextState = useMemo(() => {
    const mergedConfig: EmperorUIConfig = {
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
      interLocalization: {
        ...defaultEmperorUIConfig?.interLocalization,
        ...config?.interLocalization,
      },
    };

    return {
      config: mergedConfig,
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
