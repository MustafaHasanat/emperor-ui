import type { Meta, StoryObj } from "@storybook/react-vite";
import { Uploader } from "@/components";
import { getStorybookDecorators } from "@/utils";
import { UploaderProps } from "@/types";
import { useUploader } from "@/hooks";

const meta: Meta<typeof Uploader> = {
  title: "Atoms/Uploader",
  component: Uploader,
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
  render: (args: UploaderProps) => {
    const uploadProps = useUploader({
      fileTypes: ["image"],
      labelId: "image",
      maxCount: 1,
      isRequired: false,
      compressFiles: true,
      isMulti: true,
    });

    return <Uploader {...uploadProps} {...args} />;
  },
};
