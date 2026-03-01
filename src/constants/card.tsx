/* eslint-disable react-refresh/only-export-components */
import { Eye, Pencil, Trash2 } from "lucide-react";
import { ItemCardAction } from "@/types";

export const ITEM_CARD_ACTIONS: ItemCardAction[] = [
  {
    key: "view",
    label: "View details",
    color: "primary",
    variant: "flat",
    size: "sm",
    startContent: <Eye className="size-4" />,
  },
  {
    key: "edit",
    label: "Edit",
    color: "secondary",
    variant: "flat",
    size: "sm",
    startContent: <Pencil className="size-4" />,
  },
  {
    key: "delete",
    label: "Delete",
    color: "danger",
    variant: "flat",
    size: "sm",
    startContent: <Trash2 className="size-4" />,
  },
];

export const ITEM_CARD_ACTIONS_OVERLAY: ItemCardAction[] =
  ITEM_CARD_ACTIONS.map((action) => ({
    ...action,
    variant: "solid",
    size: "lg",
    startContent: {
      view: <Eye className="size-5" />,
      edit: <Pencil className="size-5" />,
      delete: <Trash2 className="size-5" />,
    }[action?.key],
  }));
