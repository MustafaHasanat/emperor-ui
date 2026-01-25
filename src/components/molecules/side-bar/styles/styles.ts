import { SideBarItemStylesProps } from "@/types";
import { CSSProperties } from "react";

export const sideBarItemStyles = ({
  foregroundColor,
  primaryColor,
  isHovered,
}: SideBarItemStylesProps): CSSProperties => {
  return {
    color: isHovered ? foregroundColor : "inherit",
    backgroundColor: isHovered ? primaryColor : "transparent",
  };
};
