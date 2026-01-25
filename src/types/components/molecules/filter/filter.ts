import type { SharedComponentProps } from "@/types";

export type FilterClassnames = {
  base?: string;
};

export type FilterProps = SharedComponentProps & {
  classNames?: FilterClassnames;
};
