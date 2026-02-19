"use client";

import { FilterProps } from "@/types";
import { filterClasses } from "@/components";
import { Input } from "@heroui/input";
import { cn } from "@/utils";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Search } from "lucide-react";
import { useEmperorUI, useSearchParamsHandler } from "@/hooks";

export function SearchFilter({
  classNames,
  searchProps,
  paramKey,
}: Pick<FilterProps, "classNames" | "searchProps" | "paramKey">) {
  const { config } = useEmperorUI();

  const theme = config?.theme?.components?.input;

  const [searchValue, setSearchValue] = useState(
    searchProps?.defaultValue || "",
  );
  const { setParams } = useSearchParamsHandler();

  const [debouncedSearchValue] = useDebounce(searchValue, 700);

  useEffect(() => {
    setParams({
      params: {
        [paramKey]: debouncedSearchValue,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchValue]);

  return (
    <Input
      {...theme}
      {...searchProps}
      endContent={<Search className="size-4" />}
      value={searchValue}
      onValueChange={setSearchValue}
      className={cn(filterClasses({ type: "search" }), classNames?.field)}
      classNames={{
        input: "min-w-40",
        label: "font-semibold",
        ...theme?.classNames,
        ...searchProps?.classNames,
      }}
    />
  );
}
