import type { HeaderProps } from "@types";
import { cn } from "@utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const headerStyles = cva(["flex justify-center items-center min-h-16"], {
  variants: {
    variant: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-gray-500 text-black",
    },
    padding: {
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
    },
  },
  defaultVariants: {
    variant: "primary",
    padding: "md",
  },
  compoundVariants: [
    {
      variant: "primary",
      padding: "lg",
      class: "shadow-lg",
    },
    {
      variant: "secondary",
      padding: "sm",
      class: "border-2 border-black",
    },
  ],
});

export const Header = forwardRef<
  HTMLElement,
  ComponentProps<"header"> & VariantProps<typeof headerStyles> & HeaderProps
>(({ className, variant, padding, ...props }, ref) => {
  return (
    <header
      ref={ref}
      className={cn(headerStyles({ variant, padding, className }))}
      {...props}
    >
      this is a header
    </header>
  );
});
