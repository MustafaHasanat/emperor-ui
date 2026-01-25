import type { ListingsProps } from "@/types";
import { cn } from "@/utils";

export function Listings({ className }: ListingsProps) {
  return <div className={cn("", className)}>Listings Component</div>;
}
