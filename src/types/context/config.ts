import { type ReactNode } from "react";
import { EmperorUIInterLocalization } from "@/types";
import { ToastProps } from "@heroui/toast";

export type ConfigContextState = {
  config: EmperorUIConfig;
};

export type ConfigProviderProps = {
  children: ReactNode;
  config?: EmperorUIConfig;
};

export type EmperorUILayout = {
  withScaffold: boolean;
};

export type EmperorUIConfig = {
  layout?: Partial<EmperorUILayout>;
  interLocalization?: Partial<EmperorUIInterLocalization>;
  toast?: ToastProps;
};
