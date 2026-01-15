import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { cn } from "@utils";
import { Button, Divider, ScrollShadow } from "@heroui/react";
import { CompactSideBarProps } from "@types";

const CompactSideBarContent = ({
  items = [],
  isOpen,
  onOpenChange,
  triggerProps,
}: CompactSideBarProps) => {
  const { content, ...restTriggerProps } = triggerProps || {};

  return (
    <div
      className={cn(
        "flex flex-col gap-4 p-2",
        "h-[calc(100vh-16px)] bg-gray-200 m-2 rounded-lg overflow-hidden",
        "transition-width ease-in-out duration-300",
        isOpen ? "w-[20vw]" : "w-[48px]",
      )}
    >
      <div className="w-fit flex flex-col">
        <Button
          variant="light"
          size="sm"
          onPress={() => onOpenChange?.(true)}
          className={cn("min-w-7 w-fit px-0.5")}
          {...restTriggerProps}
        >
          {content}
        </Button>
      </div>

      <Divider />

      <ScrollShadow
        as="ul"
        hideScrollBar
        className="max-h-[70vh] flex flex-col gap-4 p-0 overflow-y-auto"
      >
        {items?.map(({ id, Icon, label }) => (
          <li
            key={id}
            className="w-fit flex items-center justify-center gap-3 ms-1.5 cursor-pointer"
          >
            {Icon && <Icon className="size-5" />}

            {label && isOpen && (
              <p className={cn("text-sm font-semibold")}>{label}</p>
            )}
          </li>
        ))}
      </ScrollShadow>
    </div>
  );
};

export const CompactSideBar = (props: CompactSideBarProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.getElementById("emperor-compact-sidebar");
    setContainer(element);
  }, []);

  if (!container) {
    return null;
  }

  return createPortal(<CompactSideBarContent {...props} />, container);
};
