import { type ReactNode } from "react";
import { HeroUIProviderProps } from "@heroui/react";
import { EmperorUITheme, EmperorUIInterLocalization } from "@/types";

export type ConfigContextState = {
  config: EmperorUIConfig;
};

export type ConfigProviderProps = {
  children: ReactNode;
  config?: EmperorUIConfig;
};

export type EmperorUILayout = {
  withScaffold: boolean;
};

export type EmperorUIConfig = {
  theme?: Partial<EmperorUITheme>;
  layout?: Partial<EmperorUILayout>;
  interLocalization?: Partial<EmperorUIInterLocalization>;
  toast?: HeroUIProviderProps;
};
