import type { SharedComponentProps } from "@/types";

export type FooterClassnames = {
  base?: string;
};

export type FooterProps = SharedComponentProps & {
  classNames?: FooterClassnames;
};
