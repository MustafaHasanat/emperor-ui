"use client";

import type { ItemCardOrientation, ItemCardProps } from "@/types";
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

  return (
    <motion.div
      data-slot="emperor-ui-item-card"
      className={cn(
        itemCardMotionClasses({ orientation }),
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
          classNames?.mainWrapper,
        )}
      >
        <ItemCardHeader
          item={item}
          orientation={orientation}
          classNames={classNames}
          actions={actions}
          onActionClick={onActionClick}
        />

        <ItemCardBody
          item={item}
          orientation={orientation}
          classNames={classNames}
          actions={actions}
          onActionClick={onActionClick}
        />

        <ItemCardFooter
          item={item}
          orientation={orientation}
          classNames={classNames}
        />
      </Card>
    </motion.div>
  );
}
