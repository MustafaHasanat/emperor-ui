import { type ReactNode } from "react";

export type EmperorUIContextState = {
  config: EmperorUIConfig;
};

export type EmperorUIProviderProps = {
  children: ReactNode;
  config: EmperorUIConfig;
};

export type ColorMode = "light" | "dark";

export type ColorsPalette = {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
  background: string;
  text: string;
};

export type EmperorUITheme = {
  mode: ColorMode;
  colors: Partial<ColorsPalette>;
};

export type EmperorUILayout = {
  withScaffold: boolean;
};

export type EmperorUIConfig = {
  theme?: Partial<EmperorUITheme>;
  layout?: Partial<EmperorUILayout>;
};
