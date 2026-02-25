import { Eye, Pencil, Trash2 } from "lucide-react";
import { ItemCardAction } from "@/types";

export const ITEM_CARD_ACTIONS: ItemCardAction[] = [
  {
    key: "view",
    label: "View details",
    color: "primary",
    variant: "flat",
    size: "sm",
    startContent: <Eye className="size-5" />,
  },
  {
    key: "edit",
    label: "Edit",
    color: "secondary",
    variant: "flat",
    size: "sm",
    startContent: <Pencil className="size-5" />,
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
