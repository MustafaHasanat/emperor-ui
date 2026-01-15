import type { Meta, StoryObj } from "@storybook/react";
import { LandingPage } from "@components";
import { getStorybookDecorators } from "@utils";

const meta: Meta<typeof LandingPage> = {
  title: "Templates/LandingPage",
  component: LandingPage,
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
