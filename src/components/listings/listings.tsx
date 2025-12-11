import type { ListingsProps } from "src";
import { cn } from "@utils";

export function Listings({ className }: ListingsProps) {
  return <div className={cn("", className)}>Listings Component</div>;
}
