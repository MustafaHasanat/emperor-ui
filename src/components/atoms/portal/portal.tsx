import { PortalProps } from "@types";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function Portal({
  children,
  containerId,
  isVisible = true,
}: PortalProps) {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.getElementById(containerId);

    setContainer(element);
  }, [containerId]);

  if (!container || !isVisible) {
    return null;
  }

  return createPortal(children, container);
}
