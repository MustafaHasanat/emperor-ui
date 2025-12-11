import type { ItemCardProps } from "src";
import { cn } from "@utils";

export function ItemCard({ className }: ItemCardProps) {
  return <div className={cn("", className)}>ItemCard Component</div>;
}
