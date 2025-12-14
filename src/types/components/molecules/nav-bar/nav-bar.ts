import type { SharedComponentProps } from "@types";

export type NavBarClassnames = {
  base?: string;
};

export type NavBarProps = SharedComponentProps & {
  classNames?: NavBarClassnames;
};
