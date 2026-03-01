"use client";

import { ItemCardProps } from "@/types";
import { cn } from "@/utils";
import { itemBannerClasses } from "@/components";

export function ItemBanner({
  item,
  orientation,
  classNames,
}: Pick<ItemCardProps, "item" | "orientation" | "classNames">) {
  if (!item?.banner) return null;

  return (
    <div
      data-slot="emperor-ui-item-card-banner"
      className={cn(itemBannerClasses({ orientation }), classNames?.banner)}
    >
      {item?.banner}
    </div>
  );
}
