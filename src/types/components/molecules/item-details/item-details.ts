import type { SharedComponentProps } from "@/types";

export type ItemDetailsClassnames = {
  base?: string;
};

export type ItemDetailsProps = SharedComponentProps & {
  classNames?: ItemDetailsClassnames;
};
