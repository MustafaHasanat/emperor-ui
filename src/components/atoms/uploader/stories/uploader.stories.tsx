import type { Meta, StoryObj } from "@storybook/react-vite";
import { Uploader } from "@/components";
import { getStorybookDecorators } from "@/utils";
import { UploaderProps } from "@/types";
import { useUploader } from "@/hooks";
import { useDisclosure } from "@heroui/react";

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
    });

    return <Uploader {...uploadProps} {...args} />;
  },
};

export const MultiFiles: Story = {
  args: {},
  render: (args: UploaderProps) => {
    const uploadProps = useUploader({
      fileTypes: ["image"],
      labelId: "image",
      isMulti: true,
    });

    return <Uploader {...uploadProps} {...args} />;
  },
};

export const WithMaxCount: Story = {
  args: {},
  render: (args: UploaderProps) => {
    const uploadProps = useUploader({
      fileTypes: ["image"],
      labelId: "image",
      isMulti: true,
      maxCount: 2,
    });

    return <Uploader {...uploadProps} {...args} />;
  },
};

export const Required: Story = {
  args: {},
  render: (args: UploaderProps) => {
    const uploadProps = useUploader({
      fileTypes: ["image"],
      labelId: "image",
      isRequired: true,
    });

    return <Uploader {...uploadProps} {...args} />;
  },
};

export const HideListings: Story = {
  args: {},
  render: (args: UploaderProps) => {
    const uploadProps = useUploader({
      fileTypes: ["image"],
      labelId: "image",
    });

    return <Uploader hideListing {...uploadProps} {...args} />;
  },
};

export const ViewableImages: Story = {
  args: {},
  render: (args: UploaderProps) => {
    const uploadProps = useUploader({
      fileTypes: ["image"],
      labelId: "image",
    });

    const modalProps = useDisclosure();

    return (
      <Uploader
        isFileViewable
        modal={{
          ...modalProps,
        }}
        {...uploadProps}
        {...args}
      />
    );
  },
};

export const AllowDuplicates: Story = {
  args: {},
  render: (args: UploaderProps) => {
    const uploadProps = useUploader({
      fileTypes: ["image"],
      labelId: "image",
      preventDuplicates: false,
    });

    return <Uploader {...uploadProps} {...args} />;
  },
};

export const CompressFiles: Story = {
  args: {},
  render: (args: UploaderProps) => {
    const uploadProps = useUploader({
      fileTypes: ["image"],
      labelId: "uncompressed-image",
      compressFiles: false,
    });

    const compressedUploadProps = useUploader({
      fileTypes: ["image"],
      labelId: "compressed-image",
      compressFiles: true,
    });

    return (
      <div className="grid grid-cols-2 gap-4">
        <h3 className="text-lg font-bold">Uncompressed</h3>
        <h3 className="text-lg font-bold">Compressed</h3>

        <Uploader {...uploadProps} {...args} />
        <Uploader {...compressedUploadProps} {...args} />

        <p className="text-sm text-gray-500">
          File size: {uploadProps.files[0]?.file?.size || "---"}
        </p>
        <p className="text-sm text-gray-500">
          File size: {compressedUploadProps.files[0]?.file?.size || "---"}
        </p>
      </div>
    );
  },
};
