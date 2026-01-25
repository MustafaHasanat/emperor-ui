import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { forwardRef, ComponentProps } from "react";
import { sideBarClasses } from "./styles";
import type { SideBarProps } from "@/types";
import { SideBarDrawer } from "./side-bar-drawer";
import { CompactSideBar } from "./compact-side-bar";

export const SideBar = forwardRef<
  HTMLDivElement,
  ComponentProps<"div"> & VariantProps<typeof sideBarClasses> & SideBarProps
>((props, ref) => {
  const { variant = "default", className, classNames } = props;

  return (
    <div
      ref={ref}
      data-slot="emperor-side-bar"
      className={cn(
        sideBarClasses({
          variant,
          className: cn(className, classNames?.base),
        }),
      )}
      {...props}
    >
      {variant === "default" && <SideBarDrawer {...props} />}
      {variant === "compact" && <CompactSideBar {...props} />}
    </div>
  );
});
