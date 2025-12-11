import type { FooterProps } from "@types";
import { cn } from "@utils";

export function Footer({ className }: FooterProps) {
  return <div className={cn("", className)}>Footer Component</div>;
}
