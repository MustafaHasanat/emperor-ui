import type { Meta, StoryObj } from "@storybook/react-vite";
import { Brand } from "@/components";
import { getStorybookDecorators } from "@/utils";

const meta: Meta<typeof Brand> = {
  title: "Atoms/Brand",
  component: Brand,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: getStorybookDecorators({
    config: {
      layout: {
        withScaffold: false,
      },
    },
  }),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
