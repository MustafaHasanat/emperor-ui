"use client";

import type { ItemCardProps } from "@/types";
import { cn } from "@/utils";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";

type ItemActionsOverlayProps = Pick<
  ItemCardProps,
  "actions" | "classNames" | "onActionClick" | "orientation"
>;

export function ItemActionsOverlay({
  actions,
  classNames,
  onActionClick,
  orientation,
}: ItemActionsOverlayProps) {
  if (!actions || actions?.length === 0) return null;

  return (
    <div
      data-slot="emperor-ui-item-card-actions-overlay"
      className={cn(
        "absolute inset-0 z-20 gap-3 flex items-center justify-center bg-black/60 opacity-0",
        orientation === "horizontal" ? "flex-row" : "flex-col",
        "transition-opacity duration-200 group-hover:opacity-100",
        classNames?.actions,
      )}
    >
      {actions?.map(
        ({ key, label, className: actionClassName, ...props }, index) => {
          return (
            <Tooltip content={label}>
              <Button
                key={key ?? index}
                data-slot="emperor-ui-item-card-actions-overlay-button"
                isIconOnly
                radius="full"
                className={cn(classNames?.action, actionClassName)}
                onPress={() => key && onActionClick?.(String(key))}
                {...props}
              />
            </Tooltip>
          );
        },
      )}
    </div>
  );
}
