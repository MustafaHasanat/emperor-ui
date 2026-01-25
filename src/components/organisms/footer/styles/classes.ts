import { cva } from "class-variance-authority";

export const footerClasses = cva(
  [
    "w-full grid md:grid-cols-[1fr_2fr] gap-4 p-5 min-h-80",
    "bg-foreground text-background",
  ],
  {
    variants: {
      variant: {
        default: [],
      },
    },
    defaultVariants: {},
    compoundVariants: [],
  },
);

export const contentClasses = cva(["flex flex-col gap-4"], {
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
});

export const policiesClasses = cva(
  [
    "col-span-full w-fit flex flex-col items-center gap-4 p-5 text-center",
    "md:flex-row",
  ],
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
  },
);

export const socialLinksClasses = cva(
  ["w-fit flex p-5 gap-4 items-center flex-wrap"],
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
  },
);

export const copyRightsClasses = cva(
  ["col-span-full w-fit flex p-2 mx-auto text-center"],
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
  },
);

export const contactsClasses = cva([""], {
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
});

export const quickLinksClasses = cva(
  [
    "grid gap-4 p-5 w-fit mx-auto",
    "sm:w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  ],
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
  },
);
