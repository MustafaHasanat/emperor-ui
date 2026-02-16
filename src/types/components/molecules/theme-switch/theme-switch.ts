import type { SharedComponentProps } from "@/types";

export type ThemeSwitchClassnames = {
  base?: string;
};

export type ThemeSwitchProps = SharedComponentProps & {
  classNames?: ThemeSwitchClassnames;
};
