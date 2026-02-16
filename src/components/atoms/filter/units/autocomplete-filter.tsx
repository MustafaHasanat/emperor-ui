"use client";

import { FilterProps } from "@/types";
import { filterClasses } from "@/components";
import { Autocomplete } from "@heroui/autocomplete";
import { cn } from "@/utils";
import { useSearchParamsHandler } from "@/hooks";

export function AutocompleteFilter({
  classNames,
  autocompleteProps,
  paramKey,
  ...props
}: Pick<FilterProps, "classNames" | "autocompleteProps" | "paramKey">) {
  const { getParam, setParams } = useSearchParamsHandler();

  const value = getParam(paramKey);

  return (
    <Autocomplete
      labelPlacement="outside-top"
      variant="faded"
      radius="sm"
      selectedKey={value || null}
      onSelectionChange={(selectedKey) =>
        setParams({
          params: {
            [paramKey]: selectedKey ? String(selectedKey) : undefined,
          },
        })
      }
      {...autocompleteProps}
      {...props}
      className={cn(filterClasses({ type: "autocomplete" }), classNames?.field)}
    >
      <div />
    </Autocomplete>
  );
}
