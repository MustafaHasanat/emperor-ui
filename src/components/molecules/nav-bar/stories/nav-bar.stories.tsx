import type { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "@components";
import { getStorybookDecorators } from "@utils";
import { MOCK_HEADER_ITEMS, MOCK_HEADER_ITEMS_WITH_SUB_ITEMS } from "@mocks";

const meta: Meta<typeof NavBar> = {
  title: "Molecules/NavBar",
  component: NavBar,
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
  args: {
    items: MOCK_HEADER_ITEMS,
  },
};

export const Solid: Story = {
  args: {
    items: MOCK_HEADER_ITEMS,
    variant: "solid",
  },
};

export const Bordered: Story = {
  args: {
    items: MOCK_HEADER_ITEMS,
    variant: "bordered",
  },
};

export const WithSubItems: Story = {
  args: {
    items: MOCK_HEADER_ITEMS_WITH_SUB_ITEMS,
  },
};
