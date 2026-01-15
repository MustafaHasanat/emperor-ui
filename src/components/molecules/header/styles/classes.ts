import { cva } from "class-variance-authority";

export const headerClasses = cva(
  ["flex min-h-16 items-center justify-between gap-4 px-6 w-full"],
  {
    variants: {
      variant: {
        default: ["flex-nowrap w-full"],
        floating: [
          "fixed min-h-14 w-[90vw] rounded-full shadow-lg",
          "top-3 left-1/2 -translate-x-1/2 z-10",
        ],
        light: [],
        "segmented-floating": [
          "fixed min-h-12 w-[90vw] top-3 left-1/2 -translate-x-1/2 z-10",
        ],
      },
    },
    defaultVariants: {},
    compoundVariants: [],
  },
);
