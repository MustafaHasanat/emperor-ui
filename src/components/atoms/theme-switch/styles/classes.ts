import { cva } from "class-variance-authority";

export const themeSwitcherClasses = cva(
  [
    "flex items-center justify-center size-9 rounded-lg transition-all duration-300 text-foreground/80 cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ",
    "hover:bg-default-100 hover:text-foreground",
  ],
  {
    variants: {
      variant: {},
    },
    defaultVariants: {},
    compoundVariants: [],
  },
);
