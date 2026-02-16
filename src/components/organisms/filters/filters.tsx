import { cn } from "@/utils";
import { FilterProps, FiltersProps } from "@/types";
import { filtersClasses } from "./styles";
import { Children, isValidElement, ReactElement } from "react";
import { Filter } from "@/components";

export function Filters({
  className,
  classNames,
  children,
  ...props
}: FiltersProps) {
  const childArray = Children.toArray(children).filter(
    isValidElement,
  ) as ReactElement<FilterProps, typeof Filter>[];

  childArray.forEach((child) => {
    const type = child.type;

    if (type !== Filter) {
      throw new Error(
        `Allowed children for <Filters /> must be of type <Filter />. Got ${type} instead.`,
      );
    }
  });

  return (
    <nav
      data-slot="emperor-ui-filters"
      className={cn(filtersClasses({}), className)}
      {...props}
    >
      <ul className="flex items-center gap-2">{children}</ul>
    </nav>
  );
}
