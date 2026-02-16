import { ButtonProps } from "@heroui/button";
import type { NavigationItem, SharedComponentProps } from "@/types";
import type { ReactNode } from "react";

export type SideBarVariant = "default" | "compact";

export type SideBarClassnames = {
  base?: string;
  trigger?: string;
  title?: string;
  menu?: string;
  menuItem?: string;
  actionsWrapper?: string;
  actionItem?: string;
};

export type SideBarAction = ButtonProps & {
  key: string;
  label?: string;
};

export type SideBarProps = SharedComponentProps & {
  classNames?: SideBarClassnames;
  variant?: SideBarVariant;
  items: NavigationItem[];
  actions?: SideBarAction[];
  triggerProps?: Omit<ButtonProps, "content"> & { content?: ReactNode };
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  header?: ReactNode;
};

export type SideBarItemStylesProps = {
  foregroundColor?: string;
  primaryColor?: string;
  isHovered?: boolean;
  variant?: SideBarVariant;
};

export type CompactSideBarProps = SideBarProps & {};
