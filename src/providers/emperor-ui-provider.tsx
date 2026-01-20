import { ConfigProviderProps } from "@types";
import { ConfigProvider, NavigationProvider } from "@providers";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { Fragment } from "react";

type EmperorUIProviderProps = ConfigProviderProps & {};

export function EmperorUIProvider({
  children,
  ...props
}: EmperorUIProviderProps) {
  return (
    <ConfigProvider {...props}>
      <HeroUIProvider>
        <NavigationProvider>
          <Fragment>
            <ToastProvider {...props?.config?.toast} />
            {children}
          </Fragment>
        </NavigationProvider>
      </HeroUIProvider>
    </ConfigProvider>
  );
}
