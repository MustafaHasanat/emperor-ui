import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { forwardRef, ComponentProps } from "react";
import type { NavBarProps } from "@/types";
import {
  navBarClasses,
  navBarMenuClasses,
  navBarMenuStyles,
  navBarStyles,
} from "./styles";
import { NavBarItem, SubItemsBox } from "@/components";

export const NavBar = forwardRef<
  HTMLDivElement,
  ComponentProps<"nav"> & VariantProps<typeof navBarClasses> & NavBarProps
>(
  (
    {
      className,
      hoverEffect = "default",
      variant = "default",
      items = [],
      subItemsColumns = 3,
      ...props
    },
    ref,
  ) => {
    return (
      <nav
        ref={ref}
        data-slot="emperor-nav-bar"
        className={cn(navBarClasses({ hoverEffect, variant, className }))}
        style={navBarStyles({
          variant,
        })}
        {...props}
      >
        <ul
          className={cn(navBarMenuClasses({ className }))}
          style={navBarMenuStyles({ hoverEffect, variant })}
          data-slot="emperor-nav-bar-menu"
        >
          {items?.map((item) => (
            <NavBarItem
              key={item.id}
              item={item}
              variant={variant}
              hoverEffect={hoverEffect}
            />
          ))}
        </ul>

        <SubItemsBox subItemsColumns={subItemsColumns} />
      </nav>
    );
  },
);
