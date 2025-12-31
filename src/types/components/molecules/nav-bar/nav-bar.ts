import type {
  ComponentRadius,
  ComponentSize,
  SharedComponentProps,
} from "@types";

export type NavBarClassnames = {
  base?: string;
};

export type NavBarItem = {
  id: string;
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
};

export type NavBarHoverEffect =
  | "default"
  | "underline"
  | "solid"
  | "ghost"
  | "bordered"
  | "none";

export type NavBarVariant = "default" | "solid" | "bordered";

export type NavBarStylesProps = {
  primaryColor?: string;
  foregroundColor?: string;
  variant?: NavBarVariant;
};

export type NavBarMenuStylesProps = {};

export type NavBarItemStylesProps = {
  foregroundColor?: string;
  primaryColor?: string;
  hoverEffect: NavBarHoverEffect;
  isHovered?: boolean;
};

export type NavBarProps = SharedComponentProps & {
  items: NavBarItem[];
  classNames?: NavBarClassnames;
  hoverEffect?: NavBarHoverEffect;
  radius?: ComponentRadius;
  size?: ComponentSize;
  variant?: NavBarVariant;
};
