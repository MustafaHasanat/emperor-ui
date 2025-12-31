import type { SideBarProps } from "src";
import { cn } from "@utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, ComponentProps } from "react";
import { Menu } from "lucide-react";

export const sideBarStyles = cva([""], {
  variants: {
    variant: {},
  },
  defaultVariants: {},
  compoundVariants: [],
});

export const SideBar = forwardRef<
  HTMLDivElement,
  ComponentProps<"div"> & VariantProps<typeof sideBarStyles> & SideBarProps
>(({ className, variant, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="emperor-side-bar"
      className={cn(sideBarStyles({ variant, className }))}
      {...props}
    >
      <Menu />
    </div>
  );
});
