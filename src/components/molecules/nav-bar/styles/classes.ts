import { cva } from "class-variance-authority";

export const navBarClasses = cva(["relative flex items-center gap-3"], {
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
  [
    "relative cursor-pointer px-4 py-2 transition-all font-semibold flex items-center gap-2",
  ],
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
        bordered: ["last:border-r-2! first:border-l-2!"],
      },
    },
    defaultVariants: {
      hoverEffect: "default",
      variant: "default",
    },
  },
);
