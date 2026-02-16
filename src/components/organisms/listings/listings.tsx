import { EmptyListings, ItemCard, LoadingItem } from "@/components";
import type { ItemCardOrientation, ListingsProps } from "@/types";
import { cn } from "@/utils";
import {
  listingsClasses,
  listingsItemClasses,
  listingsPaginationClasses,
  listingsStyles,
} from "./styles";
import { Pagination } from "@heroui/pagination";
import { motion } from "framer-motion";

export function Listings({
  items = [],
  isLoading = false,
  className,
  classNames,
  layout = "grid",
  actions = [],
  onActionClick,
  pagination,
}: ListingsProps) {
  const orientation: ItemCardOrientation = {
    grid: "vertical",
    list: "horizontal",
    carousel: "vertical",
  }[layout] as ItemCardOrientation;

  const isEmpty = items?.length === 0;

  return (
    <motion.section
      data-slot="emperor-ui-listings"
      className={cn(listingsClasses({ className, layout }))}
      style={listingsStyles({ layout })}
      initial="hidden"
      animate="visible"
    >
      {isLoading &&
        Array.from({ length: pagination?.pageSize || 12 }).map((_, index) => (
          <LoadingItem
            key={index}
            className={className}
            classNames={classNames}
            orientation={orientation}
          />
        ))}

      {!isLoading && isEmpty && <EmptyListings className="col-span-full" />}

      {!isLoading &&
        !isEmpty &&
        items?.map(
          ({
            item,
            actions: itemActions,
            onActionClick: onItemActionClick,
          }) => (
            <ItemCard
              key={item?.key}
              className={cn(listingsItemClasses({ layout }), classNames?.item)}
              item={item}
              isLoading={isLoading}
              actions={itemActions || actions || []}
              onActionClick={onItemActionClick || onActionClick}
              orientation={orientation}
            />
          ),
        )}

      {!isLoading && !isEmpty && pagination && (
        <Pagination
          className={cn(
            listingsPaginationClasses({ layout }),
            classNames?.pagination,
          )}
          classNames={{
            next: "rtl:rotate-180 cursor-pointer",
            prev: "rtl:rotate-180 cursor-pointer",
            item: "cursor-pointer",
            chevronNext: "rtl:rotate-180 cursor-pointer",
            forwardIcon: "rtl:rotate-180 cursor-pointer",
          }}
          total={pagination?.pagesCount}
          page={pagination?.page}
          onChange={pagination?.setPage}
          variant="faded"
          showControls
          color="primary"
          initialPage={1}
          showShadow
        />
      )}
    </motion.section>
  );
}
