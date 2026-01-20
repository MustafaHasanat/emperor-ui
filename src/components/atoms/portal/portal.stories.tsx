import type { Meta, StoryObj } from "@storybook/react";
import { Portal } from "@components";
import { getStorybookDecorators } from "@utils";
import { FAKE_PARAGRAPH } from "@constants";

const meta: Meta<typeof Portal> = {
  title: "Atoms/Portal",
  component: Portal,
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
  args: {},
  render: () => (
    <main className="h-screen w-full flex flex-col gap-10 p-5">
      <div id="portal-container" />

      <p>{FAKE_PARAGRAPH}</p>
      <p>{FAKE_PARAGRAPH}</p>
      <p>{FAKE_PARAGRAPH}</p>

      <Portal containerId="portal-container">
        <div className="bg-blue-300 p-2 rounded-md absolute top-5 left-1/2 -translate-x-1/2">
          <h2>Portal Content</h2>
        </div>
      </Portal>
    </main>
  ),
};
