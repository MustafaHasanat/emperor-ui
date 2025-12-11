import type { FilterProps } from "@types";
import { cn } from "@utils";

export function Filter({ className }: FilterProps) {
  return <div className={cn("", className)}>Filter Component</div>;
}
