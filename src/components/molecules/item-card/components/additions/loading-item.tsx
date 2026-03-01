"use client";

import { cn } from "@/utils";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";
import { motion } from "framer-motion";
import {
  itemMainWrapperClasses,
  itemCardMotionClasses,
  itemImageWrapperClasses,
  itemHeaderClasses,
  itemBodyClasses,
  itemFooterClasses,
  itemChipsClasses,
} from "@/components";
import { getCardMotion } from "@/constants";
import type { ItemCardProps } from "@/types";

export function LoadingItem({
  className,
  classNames,
  hoverEffect = "none",
  orientation = "vertical",
}: Pick<
  ItemCardProps,
  "className" | "classNames" | "hoverEffect" | "orientation"
>) {
  return (
    <motion.div
      {...getCardMotion({ hoverEffect })}
      data-slot="emperor-ui-item-card"
      className={cn(
        itemCardMotionClasses({ orientation }),
        classNames?.base,
        className,
      )}
    >
      <Card
        shadow="sm"
        data-slot="emperor-ui-item-card-main-wrapper"
        className={cn(
          itemMainWrapperClasses({ orientation }),
          classNames?.mainWrapper,
        )}
      >
        <CardHeader
          data-slot="emperor-ui-item-card-header"
          className={cn(itemHeaderClasses({ orientation }), classNames?.header)}
        >
          <Skeleton
            className={cn(
              itemImageWrapperClasses({ orientation }),
              classNames?.imageWrapper,
            )}
          />
        </CardHeader>

        <CardBody
          data-slot="emperor-ui-item-card-body"
          className={cn(itemBodyClasses({ orientation }), classNames?.body)}
        >
          <div className="flex items-start justify-between gap-2">
            <Skeleton className="h-5 flex-1 rounded-lg" />
            <Skeleton className="size-8 shrink-0 rounded-lg" />
          </div>

          <Skeleton className="h-4 w-4/5 rounded-lg" />
          <Skeleton className="h-4 w-full rounded-lg" />
        </CardBody>

        <CardFooter
          data-slot="emperor-ui-item-card-footer"
          className={cn(itemFooterClasses({ orientation }), classNames?.footer)}
        >
          <menu
            data-slot="emperor-ui-item-card-chips"
            className={cn(itemChipsClasses({ orientation }), classNames?.chips)}
          >
            {" "}
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-14 rounded-full" />
          </menu>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
