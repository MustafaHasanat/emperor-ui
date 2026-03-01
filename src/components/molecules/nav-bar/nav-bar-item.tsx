import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { forwardRef, ComponentProps } from "react";
import type { NavBarItemProps } from "@/types";
import { navBarItemClasses, navBarItemStyles } from "./styles";
import { useNavigation } from "@/hooks";

export const NavBarItem = forwardRef<
  HTMLLIElement,
  ComponentProps<"li"> &
    VariantProps<typeof navBarItemClasses> &
    NavBarItemProps
>(({ className, item, variant, hoverEffect, ...props }, ref) => {
  const {
    hoveredItemId,
    subItemsBoxIsHovered,
    setSubItems,
    setHoveredItemId,
    setIsSubItemsBoxOpen,
  } = useNavigation();

  const { id, label, Icon, subItems } = item;

  const isHovered = hoveredItemId === id;

  const handleHover = (id: string | null) => {
    if (id) {
      setHoveredItemId(id);

      if (subItems && subItems.length > 0) {
        setSubItems(subItems);
        setIsSubItemsBoxOpen(true);
      } else {
        setIsSubItemsBoxOpen(false);
      }
      return;
    }

    setHoveredItemId(null);

    if (!subItemsBoxIsHovered) {
      setIsSubItemsBoxOpen(false);
    }
  };

  return (
    <li
      ref={ref}
      data-slot="emperor-nav-bar-item"
      style={navBarItemStyles({
        hoverEffect,
        isHovered,
        variant,
      })}
      className={cn(navBarItemClasses({ hoverEffect, variant }))}
      onMouseEnter={() => handleHover(id)}
      onMouseLeave={() => handleHover(null)}
      {...props}
    >
      {Icon && <Icon className="size-4" />}
      {label && <p>{label}</p>}
    </li>
  );
});
