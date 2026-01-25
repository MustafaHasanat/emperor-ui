import { useEmperorUI } from "@/hooks";
import type { HeaderProps, NavBarHoverEffect, NavBarVariant } from "@/types";
import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { Brand, NavBar, SideBar } from "@/components";
import { headerClasses, headerStyles } from "./styles";
import { useDisclosure } from "@heroui/react";
import { MOCK_HEADER_ITEMS, MOCK_HEADER_ACTIONS } from "@/mocks";
import { SegmentedHeaderContent } from "./segmented-header-content";

export const Header = forwardRef<
  HTMLElement,
  ComponentProps<"header"> & VariantProps<typeof headerClasses> & HeaderProps
>(
  (
    { className, variant = "default", glassEffect, children, ...props },
    ref,
  ) => {
    const { config } = useEmperorUI();
    const { isOpen, onOpenChange } = useDisclosure();

    const primaryColor = config?.theme?.colors?.primary;
    const foregroundColor = config?.theme?.colors?.foreground;

    const content = children || (
      <>
        <SideBar
          items={MOCK_HEADER_ITEMS}
          actions={MOCK_HEADER_ACTIONS}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          header={<Brand className="text-white" />}
          triggerProps={{
            startContent: (
              <Brand
                className="text-white"
                classNames={{
                  logo: "size-6",
                }}
              />
            ),
            isIconOnly: false,
            variant: "light",
          }}
        />

        <NavBar
          className="hidden md:flex mx-auto"
          items={MOCK_HEADER_ITEMS}
          hoverEffect={
            {
              default: "default",
              floating: "underline",
              light: "underline",
              "segmented-floating": "default",
            }[variant] as NavBarHoverEffect
          }
          variant={
            {
              default: "default",
              floating: "default",
              light: "default",
              "segmented-floating": "default",
            }[variant] as NavBarVariant
          }
        />
      </>
    );

    return (
      <header
        ref={ref}
        data-slot="emperor-header"
        className={cn(headerClasses({ variant, className }))}
        style={headerStyles({
          primaryColor,
          foregroundColor,
          variant,
          glassEffect,
        })}
        {...props}
      >
        {variant === "segmented-floating" ? (
          <SegmentedHeaderContent glassEffect={glassEffect}>
            {content}
          </SegmentedHeaderContent>
        ) : (
          content
        )}
      </header>
    );
  },
);
