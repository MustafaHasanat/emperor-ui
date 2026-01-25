import type { Meta, StoryObj } from "@storybook/react-vite";
import { Column } from "@/components";
import type { ColumnProps } from "@/types";
import { getStorybookDecorators } from "@/utils";

const meta: Meta<typeof Column> = {
  title: "Atoms/Column",
  component: Column,
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
  render: (args: ColumnProps) => (
    <Column {...args}>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="bg-blue-300 p-2 rounded-md">
          Item {index + 1}
        </div>
      ))}
    </Column>
  ),
};
