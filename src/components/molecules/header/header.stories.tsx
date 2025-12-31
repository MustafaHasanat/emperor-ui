import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "@components";
import { getStorybookDecorators } from "@utils";

const meta: Meta<typeof Header> = {
  title: "Molecules/Header",
  component: Header,
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
