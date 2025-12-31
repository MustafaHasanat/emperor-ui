import {
  NavBarItemStylesProps,
  NavBarMenuStylesProps,
  NavBarStylesProps,
} from "@types";
import { cva } from "class-variance-authority";
import { CSSProperties } from "react";

// classes

export const navBarClasses = cva(["flex items-center gap-3"], {
  variants: {
    hoverEffect: {
      default: [],
      solid: [],
      underline: [],
      ghost: [],
      bordered: [],
      none: [],
    },
    variant: {
      default: [],
      solid: [],
      bordered: [],
    },
  },
  defaultVariants: {
    hoverEffect: "default",
    variant: "default",
  },
});

export const navBarMenuClasses = cva(["size-full flex items-center"], {
  variants: {
    variant: {
      default: [],
      solid: [],
      bordered: [],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const navBarItemClasses = cva(
  ["cursor-pointer px-4 py-2 transition-all"],
  {
    variants: {
      hoverEffect: {
        default: [],
        solid: ["hover:opacity-80"],
        underline: [
          "relative font-bold",
          "before:absolute before:bottom-0 before:left-0",
          "before:h-0.5 before:w-full before:bg-current before:rounded-lg",
          "before:scale-x-0 before:transition-transform hover:before:scale-x-100",
        ],
        ghost: [],
        bordered: ["last:border-r-2! first:border-l-2!"],
        none: [],
      },
      variant: {
        default: [],
        solid: [],
        bordered: [],
      },
    },
    defaultVariants: {
      hoverEffect: "default",
      variant: "default",
    },
  },
);

// styles

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
}: NavBarItemStylesProps): CSSProperties => {
  if (hoverEffect === "solid") {
    return {
      color: foregroundColor,
      backgroundColor: primaryColor,
    };
  }

  if (hoverEffect === "underline") {
    return {
      color: primaryColor,
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

  return {};
};
