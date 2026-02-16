import type { SharedComponentProps } from "@/types";
import { ReactNode } from "react";
import { Variants } from "framer-motion";
import { ChipProps } from "@heroui/chip";
import { DropdownItemProps } from "@heroui/dropdown";

export type ItemCardClassnames = {
  base?: string;
  image?: string;
  header?: string;
  footer?: string;
  imageWrapper?: string;
  mainWrapper?: string;
  banner?: string;
  dropdown?: string;
  body?: string;
  title?: string;
  price?: string;
  description?: string;
  chips?: string;
  chip?: string;
};

export type ItemCardAction = DropdownItemProps & {
  key: string;
  label: string;
};

export type ItemCardHoverEffect = "none" | "zoom" | "rotate";

export type ItemCardOrientation = "horizontal" | "vertical";

export type ItemChipProps = ChipProps & {
  label: string;
};

export type ItemProps = {
  key: string;
  title?: ReactNode;
  description?: ReactNode;
  image?: {
    src: string;
    alt: string;
  };
  chips?: ItemChipProps[];
  banner?: ReactNode;
  price?: ReactNode;
};

export type ItemCardProps = SharedComponentProps & {
  variants?: Variants;
  isLoading?: boolean;
  hoverEffect?: ItemCardHoverEffect;
  classNames?: ItemCardClassnames;
  item: ItemProps;
  actions?: ItemCardAction[];
  onActionClick?: (key: string) => void;
  orientation?: ItemCardOrientation;
};
