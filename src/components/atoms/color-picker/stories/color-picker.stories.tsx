import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorPicker } from "@/components";
import { useState } from "react";
import { getStorybookDecorators } from "@/utils";

const meta: Meta<typeof ColorPicker> = {
  title: "Atoms/ColorPicker",
  component: ColorPicker,
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
  render: () => {
    const [value, setValue] = useState("#000000");

    return (
      <section className="flex flex-col gap-4">
        <ColorPicker
          inputType="free"
          value={value}
          onChange={setValue}
          defaultValue="#000000"
        />

        <p className="text-xs text-gray-500">Value: {value}</p>
      </section>
    );
  },
};

export const WithPresets: Story = {
  render: () => {
    const [value, setValue] = useState("#000000");

    return (
      <section className="flex flex-col gap-4">
        <ColorPicker
          inputType="preset"
          presets={["#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF"]}
          value={value}
          onChange={setValue}
          defaultValue="#000000"
        />

        <p className="text-xs text-gray-500">Value: {value}</p>
      </section>
    );
  },
};
