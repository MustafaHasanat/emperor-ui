import { cva } from "class-variance-authority";

export const listingsClasses = cva(["w-full p-4 gap-4 relative"], {
  variants: {
    layout: {
      grid: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
      list: "flex flex-col gap-4",
      carousel: "flex flex-col gap-4",
    },
  },
  defaultVariants: {},
  compoundVariants: [],
});

export const listingsItemClasses = cva([""], {
  variants: {
    layout: {
      grid: "size-full",
      list: "w-full h-fit",
      carousel: "",
    },
  },
  defaultVariants: {},
  compoundVariants: [],
});

export const listingsPaginationClasses = cva(["mx-auto my-5 col-span-full"], {
  variants: {
    layout: {
      grid: "",
      list: "",
      carousel: "",
    },
  },
  defaultVariants: {},
  compoundVariants: [],
});

export const emptyListingsClasses = cva(
  [
    "flex flex-col items-center justify-center min-h-[280px] w-full py-12 px-4",
    "text-center",
  ],
  {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
  },
);
