"use client";

import type { ItemCardProps } from "@/types";
import { cn } from "@/utils";
import { Button } from "@heroui/button";

type ItemActionsButtonsProps = Pick<
  ItemCardProps,
  "actions" | "classNames" | "onActionClick"
> & {
  className?: string;
};

export function ItemActionsButtons({
  actions,
  classNames,
  onActionClick,
  className,
}: ItemActionsButtonsProps) {
  if (!actions || actions.length === 0) return null;

  return (
    <div
      data-slot="emperor-ui-item-card-actions-buttons"
      className={cn("flex flex-wrap gap-2", classNames?.actions, className)}
    >
      {actions.map(
        ({ key, label, className: actionClassName, ...props }, index) => (
          <Button
            key={key ?? index}
            data-slot="emperor-ui-item-card-actions-button"
            size="sm"
            className={cn(classNames?.action, actionClassName)}
            onPress={() => key && onActionClick?.(String(key))}
            {...props}
          >
            {label}
          </Button>
        ),
      )}
    </div>
  );
}
