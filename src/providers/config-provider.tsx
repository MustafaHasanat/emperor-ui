import { Scaffold } from "@/components";
import { defaultEmperorUIConfig } from "@/constants";
import { EmperorUIContext } from "@/context";
import { LangKey, Locale } from "@/i18n";
import type {
  ConfigContextState,
  ConfigProviderProps,
  EmperorUIConfig,
} from "@/types";
import { mergeLocales } from "@/utils";
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
        locales: {
          [LangKey.ENGLISH]: mergeLocales({
            defaultLocales: defaultEmperorUIConfig?.interLocalization
              ?.locales?.[LangKey.ENGLISH] as Locale,
            configLocales: config?.interLocalization?.locales?.[
              LangKey.ENGLISH
            ] as Locale,
          }),
          [LangKey.ARABIC]: mergeLocales({
            defaultLocales: defaultEmperorUIConfig?.interLocalization
              ?.locales?.[LangKey.ARABIC] as Locale,
            configLocales: config?.interLocalization?.locales?.[
              LangKey.ARABIC
            ] as Locale,
          }),
        },
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
