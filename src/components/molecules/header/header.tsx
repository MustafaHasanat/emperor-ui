import { useEmperorUI } from "@hooks";
import type { HeaderProps } from "@types";
import { cn } from "@utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { HeaderBrand, NavBar, SideBar } from "@components";

export const headerStyles = cva(
  [
    "flex flex-nowrap items-center justify-between",
    "w-full min-h-16 gap-4 px-6",
  ],
  {
    variants: {
      variant: {},
    },
    defaultVariants: {},
    compoundVariants: [],
  },
);

export const Header = forwardRef<
  HTMLElement,
  ComponentProps<"header"> & VariantProps<typeof headerStyles> & HeaderProps
>(({ className, variant, children, ...props }, ref) => {
  const { config } = useEmperorUI();

  const primaryColor = config?.theme?.colors?.primary;
  const foregroundColor = config?.theme?.colors?.foreground;

  return (
    <header
      ref={ref}
      data-slot="emperor-header"
      className={cn(headerStyles({ variant, className }))}
      style={{
        backgroundColor: primaryColor,
        color: foregroundColor,
      }}
      {...props}
    >
      {children}

      {!children && (
        <>
          <HeaderBrand />
          <NavBar
            className="hidden md:flex"
            items={[
              {
                id: "home",
                label: "Home",
                href: "#home",
              },
              {
                id: "about",
                label: "About",
                href: "#about",
              },
            ]}
          />
          <SideBar />
        </>
      )}
    </header>
  );
});
