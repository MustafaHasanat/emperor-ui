import { EmperorUIProvider } from "@/providers";
import { defaultEmperorUIConfig } from "@/constants";
import { EmperorUIConfig } from "@/types";

export const getStorybookDecorators = ({
  config = defaultEmperorUIConfig,
}: {
  config?: EmperorUIConfig;
}) => [
  (Story: any) => (
    <EmperorUIProvider config={config}>
      <Story />
    </EmperorUIProvider>
  ),
];
