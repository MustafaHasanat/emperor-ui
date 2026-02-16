import type { Meta, StoryObj } from "@storybook/react-vite";
import { Filter, Filters } from "@/components";
import { getStorybookDecorators } from "@/utils";

const meta: Meta<typeof Filters> = {
  title: "Organisms/Filters",
  component: Filters,
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
  render: () => (
    <Filters>
      <Filter type="search" paramKey="search" />
    </Filters>
  ),
};
