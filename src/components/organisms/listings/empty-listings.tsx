"use client";

import { Locale } from "@/i18n";
import { Inbox } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/utils";
import { emptyListingsClasses } from "@/components";
import { useEmperorUI } from "@/hooks";
import { blinkContainer, blinkItem, floating } from "@/animations";

export function EmptyListings({
  className,
  classNames,
}: {
  className?: string;
  classNames?: {
    wrapper?: string;
    iconWrapper?: string;
    title?: string;
    description?: string;
  };
}) {
  const { config } = useEmperorUI();

  const locales = config?.interLocalization?.locales;
  const lang = config?.interLocalization?.lang;

  const locale = locales?.[lang || "en"] as Locale;
  const listingsLocale = locale?.organisms?.listings;

  return (
    <motion.div
      data-slot="emperor-ui-empty-listings"
      className={cn(emptyListingsClasses(), className)}
      variants={blinkContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={cn(
          "flex items-center justify-center rounded-2xl bg-default-100/80 p-6 mb-5",
          classNames?.iconWrapper,
        )}
        variants={blinkItem}
      >
        <motion.div
          variants={floating}
          animate="animate"
          className="flex items-center justify-center"
        >
          <Inbox
            className="size-14 text-default-400"
            strokeWidth={1.25}
            aria-hidden
          />
        </motion.div>
      </motion.div>

      <motion.h2
        className={cn(
          "text-xl font-semibold text-foreground mb-2",
          classNames?.title,
        )}
        variants={blinkItem}
      >
        {listingsLocale?.emptyTitle}
      </motion.h2>

      <motion.p
        className={cn(
          "text-sm text-default-500 max-w-sm",
          classNames?.description,
        )}
        variants={blinkItem}
      >
        {listingsLocale?.emptyDescription}
      </motion.p>
    </motion.div>
  );
}
