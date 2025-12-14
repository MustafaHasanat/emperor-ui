import { useEmperorUI } from "@hooks";
import type { HeaderProps } from "@types";
import { cn } from "@utils";
import { cva, VariantProps } from "class-variance-authority";
import { Building2 } from "lucide-react";
import { ComponentProps, forwardRef } from "react";
import { Row } from "@components";

export const headerStyles = cva(
  [
    "flex flex-nowrap justify-between items-center",
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
>(({ className, variant, ...props }, ref) => {
  const { config } = useEmperorUI();

  const primaryColor = config?.theme?.colors?.primary;
  const foregroundColor = config?.theme?.colors?.foreground;

  return (
    <header
      ref={ref}
      data-slot="header"
      className={cn(headerStyles({ variant, className }))}
      style={{
        backgroundColor: primaryColor,
      }}
      {...props}
    >
      <Row data-slot="brand">
        <span data-slot="brand-logo">
          <Building2 color={foregroundColor} />
        </span>

        <span data-slot="brand-name" className="font-semibold text-lg">
          Emperor UI
        </span>
      </Row>
    </header>
  );
});
