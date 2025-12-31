import type { SharedComponentProps } from "@types";

export type SideBarClassnames = {
  base?: string;
};

export type SideBarProps = SharedComponentProps & {
  classNames?: SideBarClassnames;
};
