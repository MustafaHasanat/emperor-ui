import type { ButtonProps } from "@heroui/button";

export type DeletionConfirmorClassnames = {
  base?: string;
  content?: string;
  header?: string;
  body?: string;
  footer?: string;
  confirmButton?: string;
  declineButton?: string;
};

export type DeletionConfirmorProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  className?: string;
  classNames?: DeletionConfirmorClassnames;
  confirmProps?: ButtonProps;
  declineProps?: ButtonProps;
};
