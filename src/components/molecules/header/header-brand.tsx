import type { HeaderBrandProps } from "@types";
import { cn } from "@utils";
import { cva, VariantProps } from "class-variance-authority";
import { Building2 } from "lucide-react";
import { ComponentProps, forwardRef } from "react";
import { Row } from "@components";

export const headerBrandStyles = cva([""], {
  variants: {
    variant: {},
  },
  defaultVariants: {},
  compoundVariants: [],
});

export const HeaderBrand = forwardRef<
  HTMLElement,
  ComponentProps<"div"> &
    VariantProps<typeof headerBrandStyles> &
    HeaderBrandProps
>(({ className, variant, ...props }, ref) => {
  return (
    <Row
      ref={ref}
      data-slot="emperor-header-brand"
      className={cn(headerBrandStyles({ variant, className }))}
      {...props}
    >
      <span data-slot="emperor-header-brand-logo">
        <Building2 />
      </span>

      <span
        data-slot="emperor-header-brand-name"
        className="font-semibold text-lg"
      >
        Emperor UI
      </span>
    </Row>
  );
});
