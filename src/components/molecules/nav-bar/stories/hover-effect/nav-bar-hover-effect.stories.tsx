import type { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "@components";
import { getStorybookDecorators } from "@utils";
import { MOCK_HEADER_ITEMS } from "@mocks";

const meta: Meta<typeof NavBar> = {
  title: "Molecules/NavBar/HoverEffect",
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

export const SolidHover: Story = {
  args: {
    items: MOCK_HEADER_ITEMS,
    hoverEffect: "solid",
  },
};

export const GhostHover: Story = {
  args: {
    items: MOCK_HEADER_ITEMS,
    hoverEffect: "ghost",
  },
};

export const BorderedHover: Story = {
  args: {
    items: MOCK_HEADER_ITEMS,
    hoverEffect: "bordered",
  },
};

export const UnderlinedHover: Story = {
  args: {
    items: MOCK_HEADER_ITEMS,
    hoverEffect: "underline",
  },
};
