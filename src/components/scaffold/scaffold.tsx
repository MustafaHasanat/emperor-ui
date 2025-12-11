import { useEmperorUI } from "@hooks";
import type { ScaffoldProps } from "@types";
import { cn } from "@utils";

export function Scaffold({ className, children }: ScaffoldProps) {
  const { config } = useEmperorUI();

  const backgroundColor = config?.theme?.colors?.background;

  return (
    <div className={cn("flex flex-col", className)} style={{ backgroundColor }}>
      {children}
    </div>
  );
}
