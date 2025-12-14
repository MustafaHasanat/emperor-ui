import type { RowProps } from "@types";
import { cn } from "@utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, ComponentProps } from "react";

const rowStyles = cva(["flex items-center gap-3"], {
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
});

export const Row = forwardRef<
  HTMLElement,
  ComponentProps<"section"> & VariantProps<typeof rowStyles> & RowProps
>(({ className, children, ...props }, ref) => {
  return (
    <section
      ref={ref}
      data-slot="row"
      className={cn(rowStyles({ className }))}
      {...props}
    >
      {children}
    </section>
  );
});
