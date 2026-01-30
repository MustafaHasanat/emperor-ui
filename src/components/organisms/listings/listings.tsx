import type { ListingsProps } from "@/types";
import { listingsClasses, listingsStyles } from "./styles";

export function Listings<ListingType>({
  className,
  variant = "default",
}: ListingsProps<ListingType>) {
  return (
    <section
      data-slot="emperor-ui-listings"
      className={listingsClasses({ className, variant })}
      style={listingsStyles({ variant })}
    ></section>
  );
}
