"use client";

import type { ItemCardProps } from "@/types";
import { cn } from "@/utils";
import {
  itemBodyClasses,
  itemDescriptionClasses,
  itemPriceClasses,
  itemTitleClasses,
  ItemActionsDropdown,
} from "@/components";
import { CardBody } from "@heroui/card";

export function ItemCardBody({
  item,
  orientation,
  classNames,
  actions,
  onActionClick,
  actionsViewVariant = "dropdown",
}: Pick<
  ItemCardProps,
  | "item"
  | "orientation"
  | "classNames"
  | "actions"
  | "onActionClick"
  | "actionsViewVariant"
>) {
  return (
    <CardBody
      data-slot="emperor-ui-item-card-body"
      className={cn(itemBodyClasses({ orientation }), classNames?.body)}
    >
      {item?.title && (
        <h3
          data-slot="emperor-ui-item-card-title"
          className={cn(itemTitleClasses({ orientation }), classNames?.title)}
        >
          {item?.title}
        </h3>
      )}

      {item?.description && (
        <p
          data-slot="emperor-ui-item-card-description"
          className={cn(
            itemDescriptionClasses({ orientation }),
            classNames?.description,
          )}
        >
          {item?.description}
        </p>
      )}

      {item?.price && (
        <p
          data-slot="emperor-ui-item-card-price"
          className={cn(itemPriceClasses({ orientation }), classNames?.price)}
        >
          {item?.price}
        </p>
      )}

      {orientation === "horizontal" && actionsViewVariant === "dropdown" && (
        <ItemActionsDropdown
          actions={actions}
          classNames={classNames}
          onActionClick={onActionClick}
        />
      )}
    </CardBody>
  );
}
