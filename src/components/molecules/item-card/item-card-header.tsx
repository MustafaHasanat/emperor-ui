"use client";

import { CardHeader } from "@heroui/card";
import { cn } from "@/utils";
import { itemHeaderClasses } from "./styles";
import { itemImageWrapperClasses } from "./styles";
import { Image } from "@heroui/image";
import { ItemBanner } from "@/components";
import { ItemActionsDropdown } from "./item-actions-dropdown";
import type { ItemCardProps } from "@/types";

export function ItemCardHeader({
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
    <CardHeader
      data-slot="emperor-ui-item-card-header"
      className={cn(itemHeaderClasses({ orientation }), classNames?.header)}
    >
      {item?.image && (
        <div
          data-slot="emperor-ui-item-card-image-wrapper"
          className={cn(
            itemImageWrapperClasses({ orientation }),
            classNames?.imageWrapper,
          )}
        >
          <Image
            data-slot="emperor-ui-item-card-image"
            src={item?.image?.src}
            alt={item?.image?.alt}
            className={cn("size-full object-cover", classNames?.image)}
            radius="none"
            removeWrapper
          />
        </div>
      )}

      <ItemBanner
        item={item}
        orientation={orientation}
        classNames={classNames}
      />

      {orientation === "vertical" && (
        <ItemActionsDropdown
          actions={actions}
          classNames={classNames}
          onActionClick={onActionClick}
        />
      )}
    </CardHeader>
  );
}
