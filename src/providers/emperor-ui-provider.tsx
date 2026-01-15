import { ConfigProviderProps } from "@types";
import { ConfigProvider, NavigationProvider } from "@providers";
import { HeroUIProvider } from "@heroui/react";

type EmperorUIProviderProps = ConfigProviderProps & {};

export function EmperorUIProvider({
  children,
  ...props
}: EmperorUIProviderProps) {
  return (
    <ConfigProvider {...props}>
      <HeroUIProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </HeroUIProvider>
    </ConfigProvider>
  );
}
