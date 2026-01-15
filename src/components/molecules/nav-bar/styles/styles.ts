import {
  NavBarItemStylesProps,
  NavBarMenuStylesProps,
  NavBarStylesProps,
} from "@types";
import { CSSProperties } from "react";

export const navBarStyles = ({
  primaryColor,
  foregroundColor,
  variant,
}: NavBarStylesProps): CSSProperties => {
  if (variant === "solid") {
    return {
      backgroundColor: primaryColor,
      color: foregroundColor,
    };
  }

  return {};
};

export const navBarMenuStyles = ({}: NavBarMenuStylesProps): CSSProperties => {
  return {};
};

export const navBarItemStyles = ({
  foregroundColor,
  hoverEffect,
  primaryColor,
  isHovered,
  variant,
}: NavBarItemStylesProps): CSSProperties => {
  if (hoverEffect === "solid") {
    return {
      color: foregroundColor,
      backgroundColor: primaryColor,
    };
  }

  if (hoverEffect === "underline") {
    return {
      // color: primaryColor,
    };
  }

  if (hoverEffect === "ghost") {
    return {
      color: isHovered ? primaryColor : foregroundColor,
      backgroundColor: isHovered ? "transparent" : primaryColor,
      borderColor: isHovered ? primaryColor : "transparent",
      borderWidth: "2px",
      borderStyle: "solid",
    };
  }

  if (hoverEffect === "bordered") {
    return {
      color: isHovered ? foregroundColor : primaryColor,
      backgroundColor: isHovered ? primaryColor : "transparent",
      borderColor: isHovered ? "transparent" : primaryColor,
      borderTopWidth: "2px",
      borderBottomWidth: "2px",
      borderRightWidth: "1px",
      borderLeftWidth: "1px",
      borderStyle: "solid",
    };
  }

  if (variant === "bordered") {
    return {
      color: primaryColor,
      backgroundColor: "transparent",
      borderColor: primaryColor,
      borderTopWidth: "2px",
      borderBottomWidth: "2px",
      borderRightWidth: "1px",
      borderLeftWidth: "1px",
      borderStyle: "solid",
    };
  }

  return {};
};
