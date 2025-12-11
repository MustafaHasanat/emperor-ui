import type { ColorsPalette, EmperorUIConfig } from "@types";

export const defaultColorsPalette: ColorsPalette = {
  primary: "#1E40AF",
  secondary: "#F59E0B",
  background: "#FFFFFF",
  text: "#111827",
  danger: "#DC2626",
  warning: "#D97706",
  info: "#3B82F6",
  success: "#16A34A",
};

export const defaultEmperorUIConfig: EmperorUIConfig = {
  theme: {
    mode: "dark",
    colors: defaultColorsPalette,
  },
  layout: {
    withScaffold: true,
  },
};
