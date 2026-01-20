import type { Meta, StoryObj } from "@storybook/react";
import { Row } from "@components";
import { getStorybookDecorators } from "@utils";

const meta: Meta<typeof Row> = {
  title: "Atoms/Row",
  component: Row,
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
  render: (args) => (
    <Row {...args}>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="bg-blue-300 p-2 rounded-md">
          Item {index + 1}
        </div>
      ))}
    </Row>
  ),
};
