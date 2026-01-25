import type { Meta, StoryObj } from "@storybook/react-vite";
import { Scaffold } from "@/components";
import { getStorybookDecorators } from "@/utils";

const meta: Meta<typeof Scaffold> = {
  title: "Molecules/Scaffold",
  component: Scaffold,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: getStorybookDecorators({}),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
