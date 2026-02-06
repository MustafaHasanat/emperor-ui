"use client";

import type { ItemCardProps } from "@/types";
import { cn } from "@/utils";
import {
  itemBodyClasses,
  itemDescriptionClasses,
  itemPriceClasses,
  itemTitleClasses,
} from "./styles";
import { CardBody } from "@heroui/react";
import { ItemActionsDropdown } from "./item-actions-dropdown";

export function ItemCardBody({
  item,
  orientation,
  classNames,
  actions,
  onActionClick,
}: Pick<
  ItemCardProps,
  "item" | "orientation" | "classNames" | "actions" | "onActionClick"
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

      {orientation === "horizontal" && (
        <ItemActionsDropdown
          actions={actions}
          classNames={classNames}
          onActionClick={onActionClick}
        />
      )}
    </CardBody>
  );
}
