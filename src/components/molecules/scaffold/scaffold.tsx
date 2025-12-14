import { useEmperorUI } from "@hooks";
import type { ScaffoldProps } from "@types";
import { cn } from "@utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

const scaffoldStyles = cva(["flex flex-col min-h-screen w-full max-w-screen"], {
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
});

export const Scaffold = forwardRef<HTMLDivElement, ScaffoldProps>(
  ({ className, children, ...props }, ref) => {
    const { config } = useEmperorUI();

    const backgroundColor = config?.theme?.colors?.background;
    const foregroundColor = config?.theme?.colors?.foreground;

    return (
      <div
        ref={ref}
        data-slot="scaffold"
        className={cn(scaffoldStyles({ className }), className)}
        style={{
          backgroundColor: backgroundColor,
          color: foregroundColor,
        }}
        {...props}
      >
        {children}
      </div>
    );
  },
);
