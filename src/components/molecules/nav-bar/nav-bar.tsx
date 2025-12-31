import { cn } from "@utils";
import { VariantProps } from "class-variance-authority";
import { forwardRef, ComponentProps, useState } from "react";
import type { NavBarProps } from "@types";
import { useEmperorUI } from "@hooks";
import {
  navBarClasses,
  navBarItemClasses,
  navBarItemStyles,
  navBarMenuClasses,
  navBarMenuStyles,
  navBarStyles,
} from "./styles/styles";

export const NavBar = forwardRef<
  HTMLDivElement,
  ComponentProps<"nav"> & VariantProps<typeof navBarClasses> & NavBarProps
>(
  (
    { className, hoverEffect = "default", variant = "default", ...props },
    ref,
  ) => {
    const { config } = useEmperorUI();
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const primaryColor = config?.theme?.colors?.primary;
    const foregroundColor = config?.theme?.colors?.foreground;

    return (
      <nav
        ref={ref}
        data-slot="emperor-nav-bar"
        className={cn(navBarClasses({ hoverEffect, variant, className }))}
        style={navBarStyles({
          foregroundColor,
          primaryColor,
          variant,
        })}
        {...props}
      >
        <menu
          className={cn(navBarMenuClasses({ className }))}
          style={navBarMenuStyles({ hoverEffect, variant })}
          data-slot="emperor-nav-bar-menu"
        >
          {props.items?.map(({ id, label, href }) => (
            <li
              key={href}
              data-slot="emperor-nav-bar-item"
              style={navBarItemStyles({
                foregroundColor,
                primaryColor,
                hoverEffect,
                isHovered: hoveredItem === id,
              })}
              className={cn(navBarItemClasses({ hoverEffect, variant }))}
              onMouseEnter={() => setHoveredItem(id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {label}
            </li>
          ))}
        </menu>
      </nav>
    );
  },
);
