import type { Meta, StoryObj } from "@storybook/react-vite";
import { Container } from "@/components";
import { getStorybookDecorators } from "@/utils";
import type { ContainerProps } from "@/types";

const meta: Meta<typeof Container> = {
  title: "Atoms/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
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
    className: "h-screen flex items-center justify-center",
  },
  render: (args: ContainerProps) => (
    <Container {...args}>
      <div className="bg-blue-300 p-2 text-center rounded-md w-full h-fit">
        Responsive contained content
      </div>
    </Container>
  ),
};
