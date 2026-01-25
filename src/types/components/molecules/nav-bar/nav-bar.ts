import type {
  ComponentRadius,
  ComponentSize,
  SharedComponentProps,
} from "@/types";
import type { ElementType } from "react";

export type NavBarClassnames = {
  base?: string;
};

export type NavigationItem = {
  id: string;
  label?: string;
  href?: string;
  subItems?: NavigationItem[];
  onClick?: () => void;
  Icon?: ElementType;
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

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type NavBarMenuStylesProps = {};

export type NavBarItemStylesProps = {
  foregroundColor?: string;
  primaryColor?: string;
  hoverEffect: NavBarHoverEffect;
  isHovered?: boolean;
  variant?: NavBarVariant;
};

export type NavBarProps = SharedComponentProps & {
  items: NavigationItem[];
  classNames?: NavBarClassnames;
  hoverEffect?: NavBarHoverEffect;
  radius?: ComponentRadius;
  size?: ComponentSize;
  variant?: NavBarVariant;
  subItemsColumns?: number;
};

export type NavBarItemProps = {
  item: NavigationItem;
  variant: NavBarVariant;
  hoverEffect: NavBarHoverEffect;
};

export type SubItemsBoxProps = {
  subItemsColumns?: number;
};
