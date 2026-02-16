"use client";

import type { ItemCardProps } from "@/types";
import { cn } from "@/utils";
import { itemFooterClasses, itemChipsClasses } from "./styles";
import { CardFooter } from "@heroui/card";
import { Chip } from "@heroui/chip";

export function ItemCardFooter({
  item,
  orientation,
  classNames,
}: Pick<ItemCardProps, "item" | "orientation" | "classNames">) {
  return (
    <CardFooter
      data-slot="emperor-ui-item-card-footer"
      className={cn(itemFooterClasses({ orientation }), classNames?.footer)}
    >
      {item?.chips && item?.chips?.length > 0 && (
        <menu
          data-slot="emperor-ui-item-card-chips"
          className={cn(itemChipsClasses({ orientation }), classNames?.chips)}
        >
          {item?.chips?.map(
            (
              {
                label,
                className: chipClassName,
                classNames: chipClassNames,
                ...props
              },
              index,
            ) => (
              <Chip
                key={index}
                data-slot="emperor-ui-item-card-chip"
                className={cn(chipClassName, classNames?.chip)}
                classNames={{
                  content: "text-xs mx-1",
                  ...chipClassNames,
                }}
                size="sm"
                variant="flat"
                color="primary"
                {...props}
              >
                {label}
              </Chip>
            ),
          )}
        </menu>
      )}
    </CardFooter>
  );
}
