"use client";

import { ItemCardProps } from "@/types";
import { cn } from "@/utils";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { EllipsisVertical } from "lucide-react";

export function ItemActionsDropdown({
  actions,
  classNames,
  onActionClick,
}: Pick<ItemCardProps, "actions" | "classNames" | "onActionClick">) {
  if (!actions || actions?.length === 0) return null;

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger data-slot="emperor-ui-item-card-actions-dropdown-trigger">
        <Button
          isIconOnly
          size="sm"
          variant="flat"
          radius="full"
          className={cn(
            "absolute right-2 top-2 z-10 size-7 min-w-7 backdrop-blur-lg",
            "border-1 border-default-300",
            classNames?.dropdown,
          )}
        >
          <EllipsisVertical className="size-4" />
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        data-slot="emperor-ui-item-card-actions-dropdown-menu"
        aria-label="Card actions"
        onAction={(key) => onActionClick?.(String(key))}
        items={actions}
      >
        {({ key, label, ...props }) => (
          <DropdownItem
            key={key}
            data-slot="emperor-ui-item-card-actions-dropdown-item"
            textValue={label}
            title={label}
            {...props}
          />
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
