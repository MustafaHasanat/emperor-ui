import { ConfigProviderProps } from "@/types";
import { ConfigProvider, NavigationProvider } from "@/providers";
import { HeroUIProvider } from "@heroui/system";
import { ToastProvider } from "@heroui/toast";
import { ThemeProvider } from "next-themes";

type EmperorUIProviderProps = ConfigProviderProps & {};

export function EmperorUIProvider({
  children,
  ...props
}: EmperorUIProviderProps) {
  return (
    <ConfigProvider {...props}>
      <HeroUIProvider>
        <NavigationProvider>
          <ThemeProvider>
            <ToastProvider
              placement="top-center"
              toastProps={{
                radius: "lg",
                size: "lg",
                color: "primary",
                variant: "flat",
                timeout: 4000,
              }}
              {...props?.config?.toast}
            />
            {children}
          </ThemeProvider>
        </NavigationProvider>
      </HeroUIProvider>
    </ConfigProvider>
  );
}
