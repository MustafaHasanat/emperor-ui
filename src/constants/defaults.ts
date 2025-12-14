import type { ColorsPalette, EmperorUIConfig } from "@types";

export const defaultColorsPalette: ColorsPalette = {
  primary: "#006FEE",
  secondary: "#9353d3",
  background: "#3f3f46",
  foreground: "#ECEDEE",
  success: "#17c964",
  warning: "#f5a524",
  danger: "#f31260",
  info: "#3B82F6",
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
