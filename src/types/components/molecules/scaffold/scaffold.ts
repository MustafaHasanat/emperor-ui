import type { SharedComponentProps } from "@/types";

export type ScaffoldClassnames = {
  base?: string;
};

export type ScaffoldProps = SharedComponentProps & {
  classNames?: ScaffoldClassnames;
};
