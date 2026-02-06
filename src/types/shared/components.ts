import { type ReactNode } from "react";

export type SharedComponentProps = {
  className?: string;
  classNames?: {
    base?: string;
  };
  children?: ReactNode;
};

export type ComponentSize = "xs" | "sm" | "base" | "md" | "lg" | "xl";

export type ComponentRadius = "none" | "sm" | "md" | "lg" | "full";
