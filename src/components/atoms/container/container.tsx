import type { ContainerProps } from "@types";
import { cn } from "@utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, ComponentProps } from "react";

const containerStyles = cva(["flex w-full container p-4 mx-auto"], {
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
});

export const Container = forwardRef<
  HTMLElement,
  ComponentProps<"section"> &
    VariantProps<typeof containerStyles> &
    ContainerProps
>(({ className, children, ...props }, ref) => {
  return (
    <section
      ref={ref}
      data-slot="container"
      className={cn(containerStyles({ className }))}
      {...props}
    >
      {children}
    </section>
  );
});
