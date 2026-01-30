import type { SharedComponentProps } from "@/types";

export type ListingsClassnames = {
  base?: string;
};

export type ListingsVariant = "default";

export type ListingsProps<ListingType> = SharedComponentProps & {
  classNames?: ListingsClassnames;
  variant?: ListingsVariant;
  items: ListingType[];
};
