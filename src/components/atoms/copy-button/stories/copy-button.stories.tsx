import type { Meta, StoryObj } from "@storybook/react-vite";
import { CopyButton } from "@/components";

const meta: Meta<typeof CopyButton> = {
  title: "Atoms/CopyButton",
  component: CopyButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "Copied to clipboard successfully!",
  },
};
