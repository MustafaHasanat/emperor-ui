import type { Meta, StoryObj } from "@storybook/react-vite";
import { Field } from "@/components";
import { getStorybookDecorators } from "@/utils";

const meta: Meta<typeof Field> = {
  title: "Atoms/Field",
  component: Field,
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
