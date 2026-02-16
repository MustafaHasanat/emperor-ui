import { useEmperorUI } from "@/hooks";
import type { ScaffoldProps } from "@/types";
import { cn } from "@/utils";
import { forwardRef } from "react";
import { scaffoldClasses } from "@/components";

export const Scaffold = forwardRef<HTMLDivElement, ScaffoldProps>(
  ({ className, children, ...props }, ref) => {
    const { config } = useEmperorUI();

    return (
      <main
        ref={ref}
        dir={config?.interLocalization?.dir}
        data-slot="scaffold"
        className={cn(scaffoldClasses({ className }), className)}
        {...props}
      >
        {children}
      </main>
    );
  },
);
