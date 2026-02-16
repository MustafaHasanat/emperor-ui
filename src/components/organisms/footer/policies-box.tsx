import { cn } from "@/utils";
import { Link } from "@heroui/link";
import { FooterProps } from "@/types";
import { policiesClasses } from "./styles";

export function PoliciesBox({ policies, classNames }: FooterProps) {
  return (
    <section
      data-slot="emperor-footer-policies"
      className={cn(
        policiesClasses({
          className: cn(classNames?.policiesWrapper),
        }),
      )}
    >
      {policies?.map((policy) => (
        <Link
          key={policy.href}
          href={policy.href}
          className={cn(classNames?.policy)}
        >
          {policy.label}
        </Link>
      ))}
    </section>
  );
}
