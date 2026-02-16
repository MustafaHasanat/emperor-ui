import type { SharedComponentProps } from "@/types";

export type FieldClassnames = {
  base?: string;
};

export type FieldProps = SharedComponentProps & {
  classNames?: FieldClassnames;
};
