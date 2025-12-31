import { ConfigProviderProps } from "@types";
import { ConfigProvider } from "@providers";
import { HeroUIProvider } from "@heroui/react";

type EmperorUIProviderProps = ConfigProviderProps & {};

export function EmperorUIProvider({
  children,
  ...props
}: EmperorUIProviderProps) {
  return (
    <ConfigProvider {...props}>
      <HeroUIProvider>{children}</HeroUIProvider>
    </ConfigProvider>
  );
}
