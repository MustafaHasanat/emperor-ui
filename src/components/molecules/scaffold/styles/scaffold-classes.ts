import { cva } from "class-variance-authority";

export const scaffoldClasses = cva(
  ["flex flex-col min-h-screen w-full max-w-screen"],
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
  },
);
