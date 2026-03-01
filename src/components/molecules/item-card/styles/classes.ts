import { cva } from "class-variance-authority";

export const itemCardMotionClasses = cva(["w-full relative"], {
  variants: {
    orientation: {
      vertical: "max-w-80",
      horizontal: "min-w-full max-w-full",
    },
  },
  defaultVariants: {},
  compoundVariants: [],
});

export const itemMainWrapperClasses = cva(["size-full"], {
  variants: {
    orientation: {
      vertical: "flex flex-col",
      horizontal: "grid grid-cols-[200px_auto]",
    },
  },
  defaultVariants: {},
  compoundVariants: [],
});

export const itemImageWrapperClasses = cva(
  ["relative aspect-4/3 overflow-hidden"],
  {
    variants: {
      orientation: {
        vertical: "w-full",
        horizontal: "w-fit h-full",
      },
    },
    defaultVariants: {},
    compoundVariants: [],
  },
);

export const itemHeaderClasses = cva(["relative p-0"], {
  variants: {
    orientation: {
      vertical: "",
      horizontal: "row-span-2",
    },
  },
  defaultVariants: {},
  compoundVariants: [],
});

export const itemBodyClasses = cva(["relative flex flex-col gap-2 p-4"], {
  variants: {
    orientation: {
      vertical: "",
      horizontal: "",
    },
  },
  defaultVariants: {},
  compoundVariants: [],
});

export const itemFooterClasses = cva(
  ["flex flex-wrap flex-col p-4 gap-4 items-start"],
  {
    variants: {
      orientation: {
        vertical: "",
        horizontal: "justify-end",
      },
    },
    defaultVariants: {},
    compoundVariants: [],
  },
);

export const itemTitleClasses = cva(
  ["line-clamp-1 font-semibold text-foreground"],
  {
    variants: {
      orientation: {
        vertical: "",
        horizontal: "w-[calc(100%-30px)]",
      },
    },
    defaultVariants: {},
    compoundVariants: [],
  },
);

export const itemPriceClasses = cva(["text-2xl font-bold text-foreground"], {
  variants: {
    orientation: {
      vertical: "",
      horizontal: "",
    },
  },
  defaultVariants: {},
  compoundVariants: [],
});

export const itemDescriptionClasses = cva(
  ["line-clamp-2 text-sm text-default-600"],
  {
    variants: {
      orientation: {
        vertical: "",
        horizontal: "",
      },
    },
    defaultVariants: {},
    compoundVariants: [],
  },
);

export const itemChipsClasses = cva(["flex flex-wrap items-center gap-2 p-1"], {
  variants: {
    orientation: {
      vertical: "",
      horizontal: "",
    },
  },
  defaultVariants: {},
  compoundVariants: [],
});

export const itemBannerClasses = cva(
  [
    "absolute left-0 top-0 z-10 px-2 py-1 text-xs font-semibold",
    "bg-primary-500/50 backdrop-blur-sm text-center flex justify-center items-center",
    "-rotate-45 w-full text-white",
  ],
  {
    variants: {
      orientation: {
        vertical: "-translate-x-28 translate-y-7",
        horizontal: "-translate-x-14 translate-y-7",
      },
    },
    defaultVariants: {},
    compoundVariants: [],
  },
);
