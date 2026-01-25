import type { ColumnProps } from "@/types";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, ComponentProps } from "react";

const columnStyles = cva(["flex flex-col gap-3"], {
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
});

export const Column = forwardRef<
  HTMLElement,
  ComponentProps<"section"> & VariantProps<typeof columnStyles> & ColumnProps
>(({ className, children, ...props }, ref) => {
  return (
    <section ref={ref} className={cn(columnStyles({ className }))} {...props}>
      {children}
    </section>
  );
});
