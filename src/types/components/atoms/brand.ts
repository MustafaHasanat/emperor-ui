import { SharedComponentProps } from "@types";

export type BrandProps = SharedComponentProps & {
  src?: string;
  alt?: string;
  name?: string;
  isIconOnly?: boolean;
  classNames?: {
    base?: string;
    logo?: string;
    name?: string;
  };
};
