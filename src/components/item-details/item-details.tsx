import type { ItemDetailsProps } from "src";
import { cn } from "@utils";

export function ItemDetails({ className }: ItemDetailsProps) {
  return <div className={cn("", className)}>ItemDetails Component</div>;
}
