import type { ItemDetailsProps } from "@/types";
import { cn } from "@/utils";

export function ItemDetails({ className }: ItemDetailsProps) {
  return <div className={cn("", className)}>ItemDetails Component</div>;
}
