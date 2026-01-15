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

export type HeaderVariant =
  | "default"
  | "floating"
  | "light"
  | "segmented-floating";

export type HeaderGlassEffect = {
  enabled?: boolean;
  blur?: number;
  backgroundColor?: string;
  foregroundColor?: string;
  opacity?: number;
};

export type HeaderProps = SharedComponentProps & {
  variant?: HeaderVariant;
  classNames?: HeaderClassnames;
  glassEffect?: HeaderGlassEffect;
};

export type HeaderDropdownProps = SharedComponentProps & {};

export type UserDropdownProps = SharedComponentProps & {};

export type HeaderStylesProps = {
  primaryColor?: string;
  foregroundColor?: string;
  variant?: HeaderVariant;
  glassEffect?: HeaderGlassEffect;
};

export type SegmentedHeaderContentProps = SharedComponentProps & {
  glassEffect?: HeaderGlassEffect;
};
