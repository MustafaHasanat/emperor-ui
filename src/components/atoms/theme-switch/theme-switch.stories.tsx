import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeSwitch } from "@/components";
import { getStorybookDecorators } from "@/utils";

const meta: Meta<typeof ThemeSwitch> = {
  title: "Atoms/ThemeSwitch",
  component: ThemeSwitch,
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
  render: () => (
    <div className="flex justify-center items-center w-screen h-screen">
      <ThemeSwitch className="m-auto" />
    </div>
  ),
};
