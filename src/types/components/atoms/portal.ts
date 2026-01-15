import { SharedComponentProps } from "@types";

export type PortalProps = SharedComponentProps & {
  containerId: string;
  isVisible?: boolean;
};
