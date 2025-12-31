import type { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "@components";
import { getStorybookDecorators } from "@utils";

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

export const SolidHover: Story = {
  args: {
    items,
    hoverEffect: "solid",
  },
};

export const GhostHover: Story = {
  args: {
    items,
    hoverEffect: "ghost",
  },
};

export const BorderedHover: Story = {
  args: {
    items,
    hoverEffect: "bordered",
  },
};

export const UnderlinedHover: Story = {
  args: {
    items,
    hoverEffect: "underline",
  },
};
