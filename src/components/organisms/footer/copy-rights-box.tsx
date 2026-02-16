import { cn } from "@/utils";
import { FooterProps } from "@/types";
import { copyRightsClasses } from "./styles";

export function CopyRightsBox({ copyRights, classNames }: FooterProps) {
  return (
    <section
      data-slot="emperor-footer-policies"
      className={cn(
        copyRightsClasses({
          className: cn(classNames?.copyRightsWrapper),
        }),
      )}
    >
      <p
        className={cn(
          "flex items-center gap-1 text-sm text-gray-400 text-center",
          classNames?.copyRightsText,
        )}
      >
        <span>©</span>
        <span>{copyRights?.year}</span>
        <span>{copyRights?.text}</span>
      </p>
    </section>
  );
}
