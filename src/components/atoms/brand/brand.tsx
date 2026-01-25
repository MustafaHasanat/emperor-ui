import type { BrandProps } from "@/types";
import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { Row } from "@/components";
import { brandStyles } from "./styles";
import { Image } from "@heroui/react";

export const Brand = forwardRef<
  HTMLElement,
  ComponentProps<"div"> & VariantProps<typeof brandStyles> & BrandProps
>(
  (
    {
      className,
      variant,
      src = "/images/emperor-ui-logo.png",
      alt = "Emperor UI",
      name = "Emperor UI",
      isIconOnly = false,
      classNames,
      ...props
    },
    ref,
  ) => {
    return (
      <Row
        ref={ref}
        data-slot="emperor-brand"
        className={cn(
          brandStyles({ variant, className: cn(className, classNames?.base) }),
        )}
        {...props}
      >
        {src && (
          <Image
            data-slot="emperor-brand-logo"
            src={src}
            alt={alt}
            radius="md"
            className={cn("min-w-7 min-h-7 size-7", classNames?.logo)}
          />
        )}

        {name && !isIconOnly && (
          <p
            data-slot="emperor-brand-name"
            className={cn("font-semibold text-lg", classNames?.name)}
          >
            {name}
          </p>
        )}
      </Row>
    );
  },
);
