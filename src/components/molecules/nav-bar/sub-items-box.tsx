import { cn } from "@/utils";
import { Link } from "@heroui/link";
import { useNavigation } from "@/hooks";
import { SubItemsBoxProps } from "@/types";

export const SubItemsBox = ({ subItemsColumns = 3 }: SubItemsBoxProps) => {
  const {
    hoveredItemId,
    subItems,
    isSubItemsBoxOpen,
    subItemsBoxIsHovered,
    setSubItemsBoxIsHovered,
    setIsSubItemsBoxOpen,
  } = useNavigation();

  const isOpen = isSubItemsBoxOpen || subItemsBoxIsHovered;

  return (
    <div
      className={cn(
        "absolute top-full left-0 w-full overflow-hidden bg-background",
        "transition-all duration-300 ease-in-out z-50",
      )}
      style={{
        maxHeight: isOpen
          ? `${Number(subItems.length / subItemsColumns) * 70}px`
          : "0px",
      }}
      onMouseEnter={() => {
        setSubItemsBoxIsHovered(true);
        setIsSubItemsBoxOpen(true);
      }}
      onMouseLeave={() => {
        setSubItemsBoxIsHovered(false);
        if (!hoveredItemId) setIsSubItemsBoxOpen(false);
      }}
    >
      <ul
        className="grid border border-gray-200"
        style={{ gridTemplateColumns: `repeat(${subItemsColumns}, 1fr)` }}
      >
        {subItems?.map(({ id, href, label, Icon }) => (
          <Link
            key={id}
            href={href}
            className={cn(
              " w-full flex items-center gap-2 text-foreground p-2 transition-all duration-300 ease-in-out",
              "hover:text-background hover:bg-primary",
            )}
          >
            {Icon && <Icon className="size-4" />}
            {label && <p>{label}</p>}
          </Link>
        ))}
      </ul>
    </div>
  );
};
