import { type ReactNode } from "react";
import { HeroUIProviderProps } from "@heroui/react";

export type ConfigContextState = {
  config: EmperorUIConfig;
};

export type ConfigProviderProps = {
  children: ReactNode;
  config?: EmperorUIConfig;
};

export type ColorMode = "light" | "dark";
export type AppDirection = "ltr" | "rtl";

export type ColorsPalette = {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
  background: string;
  foreground: string;
};

export type EmperorUITheme = {
  mode: ColorMode;
  colors: Partial<ColorsPalette>;
};

export type EmperorUILayout = {
  withScaffold: boolean;
};

export type EmperorUILang = "en" | "ar";

export type EmperorUILocales = Record<EmperorUILang, Record<string, string>>;

export type EmperorUIInterLocalization = {
  lang?: EmperorUILang;
  languages?: EmperorUILang[];
  defaultLanguage?: EmperorUILang;
  isMultiLingual?: boolean;
  dir?: AppDirection;
  locales?: EmperorUILocales;
};

export type EmperorUIConfig = {
  theme?: Partial<EmperorUITheme>;
  layout?: Partial<EmperorUILayout>;
  interLocalization?: Partial<EmperorUIInterLocalization>;
  toast?: HeroUIProviderProps;
};
