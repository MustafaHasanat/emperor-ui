import type {
  ItemCardAction,
  ItemCardProps,
  SharedComponentProps,
} from "@/types";

export type ListingsClassnames = {
  base?: string;
  item?: string;
  pagination?: string;
};

export type ListingsLayout = "grid" | "list" | "carousel";

export type ListingsProps = SharedComponentProps & {
  classNames?: ListingsClassnames;
  layout?: ListingsLayout;
  items: ItemCardProps[];
  isLoading?: boolean;
  actions?: ItemCardAction[];
  onActionClick?: (key: string) => void;
  pagination?: {
    page: number;
    setPage: (page: number) => void;
    pageSize: number;
    totalItemsCount: number;
    pagesCount: number;
  };
};
