import { cva } from "class-variance-authority";

export const sideBarClasses = cva([""], {
  variants: {
    variant: {
      default: [],
      compact: [],
    },
  },
  defaultVariants: {},
  compoundVariants: [],
});

export const sideBarItemClasses = cva(
  [
    "w-full cursor-pointer px-6 py-2 transition-all font-semibold text-sm flex items-center gap-2",
  ],
  {
    variants: {
      variant: {
        default: [],
        compact: [],
      },
    },
    defaultVariants: {},
    compoundVariants: [],
  },
);
