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
  render: (args) => {
    const [value, setValue] = useState("#000000");
    return <ColorPicker {...args} value={value} onValueChange={setValue} />;
  },
};

export const WithPresets: Story = {
  render: () => {
    const [value, setValue] = useState("#000000");

    return (
      <ColorPicker
        inputType="preset"
        presets={["#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF"]}
        value={value}
        onSelectionChange={(keys) => {
          setValue(keys?.currentKey ?? "");
        }}
        defaultSelectedKeys={["#000000"]}
      />
    );
  },
};
