import type {
  NavigationProviderProps,
  NavigationContextState,
  NavigationItem,
} from "@/types";
import { useMemo, useState } from "react";
import { NavigationContext } from "@/context";
import { PreservedKeys } from "@/enums";

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const [subItems, setSubItems] = useState<NavigationItem[]>([]);
  const [isSubItemsBoxOpen, setIsSubItemsBoxOpen] = useState(false);
  const [subItemsBoxIsHovered, setSubItemsBoxIsHovered] = useState(false);

  const navigationProviderValue: NavigationContextState = useMemo(() => {
    return {
      hoveredItemId,
      subItems,
      isSubItemsBoxOpen,
      subItemsBoxIsHovered,
      setHoveredItemId,
      setSubItems,
      setIsSubItemsBoxOpen,
      setSubItemsBoxIsHovered,
    };
  }, [hoveredItemId, subItems, isSubItemsBoxOpen, subItemsBoxIsHovered]);

  return (
    <NavigationContext.Provider
      value={navigationProviderValue}
      data-slot="emperor-navigation-provider"
    >
      <div
        id={PreservedKeys.COMPACT_SIDEBAR_ID}
        data-slot="emperor-compact-sidebar"
      />

      {children}
    </NavigationContext.Provider>
  );
}
