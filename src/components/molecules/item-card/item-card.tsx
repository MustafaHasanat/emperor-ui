import type { ItemCardProps } from "@types";
import { cn } from "@utils";

export function ItemCard({ className }: ItemCardProps) {
  return <div className={cn("", className)}>Item Card Component</div>;
}
