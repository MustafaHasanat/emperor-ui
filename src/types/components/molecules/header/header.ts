import type { SharedComponentProps } from "@types";

export type HeaderClassnames = {
  base?: string;
  logo?: string;
  navbar?: string;
  userDropdown?: string;
  sideMenu?: string;
};

export type HeaderActivations = {
  hideLog?: boolean;
  hideNavbar?: boolean;
  hideUserDropdown?: boolean;
  hideSideMenu?: boolean;
};

export type HeaderProps = SharedComponentProps & {
  variant?: "default" | "compact";
  classNames?: HeaderClassnames;
};

export type HeaderBrandProps = SharedComponentProps & {};

export type HeaderDropdownProps = SharedComponentProps & {};

export type UserDropdownProps = SharedComponentProps & {};
