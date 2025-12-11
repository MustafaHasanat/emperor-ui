import type { NavBarProps } from "src";
import { cn } from "@utils";

export function NavBar({ className }: NavBarProps) {
  return <div className={cn("", className)}>NavBar Component</div>;
}
