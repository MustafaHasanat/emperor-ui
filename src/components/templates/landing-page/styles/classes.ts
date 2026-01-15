import { cva } from "class-variance-authority";

export const landingPageClasses = cva(["flex flex-col w-full"], {
  variants: {
    variant: {
      default: [],
    },
  },
  defaultVariants: {},
  compoundVariants: [],
});
