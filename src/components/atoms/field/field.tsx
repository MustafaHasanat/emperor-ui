import { cn } from "@/utils";
import { FieldProps } from "@/types";
import { fieldClasses } from "./styles";

export function Field({ className, classNames, ...props }: FieldProps) {
  return (
    <div className={cn(fieldClasses({}), className)} {...props}>
      Sorter Component
    </div>
  );
}
