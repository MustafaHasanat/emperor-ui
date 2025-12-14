import type { SharedComponentProps } from "@types";

export type ItemCardClassnames = {
  base?: string;
};

export type ItemCardProps = SharedComponentProps & {
  classNames?: ItemCardClassnames;
};
