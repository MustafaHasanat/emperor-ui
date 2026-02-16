import type { SharedComponentProps } from "@/types";
import { ReactNode } from "react";

export type FiltersClassnames = {
  base?: string;
};

export type FiltersProps = Omit<SharedComponentProps, "children"> & {
  classNames?: FiltersClassnames;
  children: ReactNode;
};
