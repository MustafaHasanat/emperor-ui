import { NavigationItem } from "@/types";
import { ReactNode } from "react";

export type NavigationContextState = {
  hoveredItemId: string | null;
  subItems: NavigationItem[];
  isSubItemsBoxOpen: boolean;
  subItemsBoxIsHovered: boolean;
  setHoveredItemId: (id: string | null) => void;
  setSubItems: (items: NavigationItem[]) => void;
  setIsSubItemsBoxOpen: (isOpen: boolean) => void;
  setSubItemsBoxIsHovered: (isHovered: boolean) => void;
};

export type NavigationProviderProps = {
  children: ReactNode;
};
