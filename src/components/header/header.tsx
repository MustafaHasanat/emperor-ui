import type { HeaderProps } from "@types";
import { cn } from "@utils";

export function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn("flex justify-center items-center min-h-16", className)}
    >
      this is a header 123
    </header>
  );
}
