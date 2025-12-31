import type { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "@components";
import { getStorybookDecorators } from "@utils";

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

const items = [
  {
    id: "home",
    label: "Home",
    href: "#home",
  },
  {
    id: "about",
    label: "About",
    href: "#about",
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
  },
  {
    id: "blog",
    label: "Blog",
    href: "#blog",
  },
];

export const Default: Story = {
  args: {
    items,
  },
};

export const Solid: Story = {
  args: {
    items,
    variant: "solid",
  },
};

export const Bordered: Story = {
  args: {
    items,
    variant: "bordered",
  },
};
