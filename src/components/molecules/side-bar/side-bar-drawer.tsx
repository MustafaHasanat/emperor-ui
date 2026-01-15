import { useEmperorUI } from "@hooks";
import { useState } from "react";
import {
  Button,
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  ScrollShadow,
  Divider,
  DrawerFooter,
} from "@heroui/react";
import { SideBarProps } from "@types";
import { cn } from "@utils";
import { sideBarItemClasses, sideBarItemStyles } from "./styles";

export const SideBarDrawer = ({
  isOpen,
  onOpenChange,
  triggerProps,
  classNames,
  header,
  items = [],
  actions = [],
  variant = "default",
}: SideBarProps) => {
  const { config } = useEmperorUI();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { content, ...restTriggerProps } = triggerProps || {};

  const dir = config?.interLocalization?.dir;
  const backgroundColor = config?.theme?.colors?.background;
  const primaryColor = config?.theme?.colors?.primary;
  const foregroundColor = config?.theme?.colors?.foreground;

  const isRTL = dir === "rtl";

  return (
    <>
      <Button
        variant="ghost"
        isIconOnly
        size="sm"
        onPress={() => onOpenChange?.(true)}
        className={cn(classNames?.trigger)}
        {...restTriggerProps}
      >
        {content}
      </Button>

      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement={isRTL ? "right" : "left"}
        size="sm"
        dir={dir}
        className="p-0"
      >
        <DrawerContent
          className="p-0"
          style={{ backgroundColor, color: foregroundColor }}
        >
          <DrawerHeader className={cn("text-xl font-bold", classNames?.title)}>
            {header}
          </DrawerHeader>

          <DrawerBody className={cn("p-0 mt-4 h-fit")}>
            <ScrollShadow
              as="ul"
              hideScrollBar
              data-slot="emperor-side-bar-menu"
              className={cn("max-h-[60vh] overflow-y-auto", classNames?.menu)}
            >
              {items?.map(({ id, label, href, Icon }) => (
                <li
                  key={href}
                  data-slot="emperor-side-bar-item"
                  style={sideBarItemStyles({
                    foregroundColor,
                    primaryColor,
                    isHovered: hoveredItem === id,
                    variant,
                  })}
                  className={cn(
                    sideBarItemClasses({ variant }),
                    classNames?.menuItem,
                  )}
                  onMouseEnter={() => setHoveredItem(id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {Icon && <Icon className="size-4" />}
                  {label && <p>{label}</p>}
                </li>
              ))}
            </ScrollShadow>
          </DrawerBody>

          {actions && actions?.length > 0 && (
            <>
              <Divider
                className="m-auto w-11/12"
                style={{ backgroundColor: foregroundColor + "20" }}
              />

              <DrawerFooter className={cn(classNames?.actionsWrapper)}>
                {actions?.map(({ key, label, ...props }) => (
                  <Button
                    key={key}
                    variant="ghost"
                    size="sm"
                    className={cn(classNames?.actionItem)}
                    {...props}
                  >
                    {label}
                  </Button>
                ))}
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
