import type { FooterProps } from "@/types";
import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { footerClasses, footerStyles } from "./styles";

export const Footer = forwardRef<
  HTMLElement,
  ComponentProps<"footer"> & VariantProps<typeof footerClasses> & FooterProps
>(({ className, variant = "default", children, ...props }, ref) => {
  return (
    <footer
      ref={ref}
      data-slot="emperor-footer"
      className={cn(footerClasses({ variant, className }))}
      style={footerStyles({})}
      {...props}
    ></footer>
  );
});
