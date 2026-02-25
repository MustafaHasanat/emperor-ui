"use client";

import type { ItemCardProps } from "@/types";
import { cn } from "@/utils";
import { Button } from "@heroui/button";

type ItemActionsOverlayProps = Pick<
  ItemCardProps,
  "actions" | "classNames" | "onActionClick"
>;

export function ItemActionsOverlay({
  actions,
  classNames,
  onActionClick,
}: ItemActionsOverlayProps) {
  if (!actions || actions.length === 0) return null;

  return (
    <div
      data-slot="emperor-ui-item-card-actions-overlay-buttons"
      className={cn("flex flex-col items-center gap-3", classNames?.actions)}
    >
      {actions?.map(
        ({ key, label, className: actionClassName, ...props }, index) => {
          return (
            <Button
              key={key ?? index}
              data-slot="emperor-ui-item-card-actions-overlay-button"
              isIconOnly
              radius="full"
              className={cn(classNames?.action, actionClassName)}
              onPress={() => key && onActionClick?.(String(key))}
              {...props}
            />
          );
        },
      )}
    </div>
  );
}
