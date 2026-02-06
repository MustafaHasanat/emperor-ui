import { Eye, Pencil, Trash2 } from "lucide-react";
import { ItemCardAction } from "@/types";

export const ITEM_CARD_ACTIONS: ItemCardAction[] = [
  {
    key: "view",
    label: "View details",
    color: "primary",
    variant: "flat",
    startContent: <Eye className="size-4" />,
  },
  {
    key: "edit",
    label: "Edit",
    color: "secondary",
    variant: "flat",
    startContent: <Pencil className="size-4" />,
  },
  {
    key: "delete",
    label: "Delete",
    color: "danger",
    variant: "flat",
    startContent: <Trash2 className="size-4" />,
  },
];
