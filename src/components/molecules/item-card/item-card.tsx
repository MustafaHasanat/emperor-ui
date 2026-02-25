"use client";

import type {
  ItemCardActionsViewVariant,
  ItemCardOrientation,
  ItemCardProps,
} from "@/types";
import { cn } from "@/utils";
import { Card } from "@heroui/card";
import { motion } from "framer-motion";
import { itemMainWrapperClasses, itemCardMotionClasses } from "./styles";
import { getCardMotion } from "@/constants";
import {
  LoadingItem,
  ItemCardHeader,
  ItemCardBody,
  ItemCardFooter,
} from "@/components";
import { useWindowSize } from "@/hooks";
import { ItemActionsOverlay } from "./item-actions-overlay";

export function ItemCard({
  variants,
  isLoading = false,
  className,
  classNames,
  item,
  actions = [],
  hoverEffect = "none",
  onActionClick,
  orientation: defaultOrientation = "vertical",
  actionsViewVariant = "dropdown",
}: ItemCardProps) {
  const { isExtraSmallDevice } = useWindowSize();

  const orientation: ItemCardOrientation = isExtraSmallDevice
    ? "vertical"
    : defaultOrientation;

  if (isLoading)
    return (
      <LoadingItem
        className={className}
        classNames={classNames}
        orientation={orientation}
      />
    );

  const hasActions = actions && actions.length > 0;
  const isDropdownVariant: boolean =
    (actionsViewVariant as ItemCardActionsViewVariant) === "dropdown";
  const isHoverOverlayVariant: boolean =
    (actionsViewVariant as ItemCardActionsViewVariant) === "hover-overlay";

  return (
    <motion.div
      data-slot="emperor-ui-item-card"
      className={cn(
        itemCardMotionClasses({ orientation }),
        "group",
        classNames?.base,
        className,
      )}
      variants={variants}
      {...getCardMotion({ hoverEffect })}
    >
      <Card
        shadow="sm"
        data-slot="emperor-ui-item-card-main-wrapper"
        className={cn(
          itemMainWrapperClasses({ orientation }),
          "relative overflow-hidden",
          classNames?.mainWrapper,
        )}
      >
        <ItemCardHeader
          item={item}
          orientation={orientation}
          classNames={classNames}
          actions={actions}
          onActionClick={onActionClick}
          actionsViewVariant={
            isDropdownVariant ? "dropdown" : actionsViewVariant
          }
        />

        <ItemCardBody
          item={item}
          orientation={orientation}
          classNames={classNames}
          actions={actions}
          onActionClick={onActionClick}
          actionsViewVariant={
            isDropdownVariant ? "dropdown" : actionsViewVariant
          }
        />

        <ItemCardFooter
          item={item}
          orientation={orientation}
          classNames={classNames}
          actions={actions}
          onActionClick={onActionClick}
          actionsViewVariant={actionsViewVariant}
        />
        {isHoverOverlayVariant && hasActions && (
          <div
            data-slot="emperor-ui-item-card-actions-hover-overlay"
            className={cn(
              "pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-black/60 opacity-0",
              "transition-opacity duration-200 group-hover:opacity-100",
            )}
          >
            <ItemActionsOverlay
              actions={actions}
              classNames={classNames}
              onActionClick={onActionClick}
            />
          </div>
        )}
      </Card>
    </motion.div>
  );
}
