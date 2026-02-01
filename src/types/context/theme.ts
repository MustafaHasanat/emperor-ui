export type ColorMode = "light" | "dark";

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
