"use client";

import { FilterProps } from "@/types";
import { filterClasses } from "@/components";
import { Input } from "@heroui/input";
import { cn } from "@/utils";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Search } from "lucide-react";
import { useSearchParamsHandler } from "@/hooks";

export function SearchFilter({
  classNames,
  searchProps,
  paramKey,
  ...props
}: Pick<FilterProps, "classNames" | "searchProps" | "paramKey">) {
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
      labelPlacement="outside-top"
      variant="faded"
      radius="sm"
      endContent={<Search className="size-4" />}
      {...searchProps}
      {...props}
      value={searchValue}
      onValueChange={setSearchValue}
      className={cn(filterClasses({ type: "search" }), classNames?.field)}
      classNames={{
        input: "min-w-40",
        label: "font-semibold",
        ...searchProps?.classNames,
      }}
    />
  );
}
