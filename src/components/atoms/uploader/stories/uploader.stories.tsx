import type { Meta, StoryObj } from "@storybook/react-vite";
import { Uploader } from "@/components";
import { getStorybookDecorators } from "@/utils";
import { useUploader } from "@/hooks";
import { useDisclosure } from "@heroui/react";
import { LangKey } from "@/i18n";

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
      interLocalization: {
        locales: {
          [LangKey.ENGLISH]: {
            atoms: {
              uploader: {},
            },
          },
          [LangKey.ARABIC]: {},
        },
      },
    },
  }),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => {
    const uploadProps = useUploader({
      fileTypes: ["image"],
      labelId: "image",
    });

    return <Uploader {...uploadProps} />;
  },
};

export const MultiFiles: Story = {
  args: {},
  render: () => {
    const uploadProps = useUploader({
      fileTypes: ["image"],
      labelId: "image",
      isMulti: true,
    });

    return <Uploader {...uploadProps} />;
  },
};

export const WithMaxCount: Story = {
  args: {},
  render: () => {
    const uploadProps = useUploader({
      fileTypes: ["image"],
      labelId: "image",
      isMulti: true,
      maxCount: 2,
    });

    return <Uploader {...uploadProps} />;
  },
};

export const Required: Story = {
  args: {},
  render: () => {
    const uploadProps = useUploader({
      fileTypes: ["image"],
      labelId: "image",
      isRequired: true,
    });

    return <Uploader {...uploadProps} />;
  },
};

export const CustomErrorMessage: Story = {
  args: {},
  render: () => {
    const uploadProps = useUploader({
      fileTypes: ["image"],
      labelId: "image",
      isRequired: true,
    });

    return <Uploader errorMessage="Please upload an image" {...uploadProps} />;
  },
};

export const HideListings: Story = {
  args: {},
  render: () => {
    const uploadProps = useUploader({
      fileTypes: ["image"],
      labelId: "image",
    });

    return <Uploader hideListing {...uploadProps} />;
  },
};

export const ViewableImages: Story = {
  args: {},
  render: () => {
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
      />
    );
  },
};

export const AllowDuplicates: Story = {
  args: {},
  render: () => {
    const uploadProps = useUploader({
      fileTypes: ["image"],
      labelId: "image",
      preventDuplicates: false,
    });

    return <Uploader {...uploadProps} />;
  },
};

export const CompressFiles: Story = {
  args: {},
  render: () => {
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

        <Uploader {...uploadProps} />
        <Uploader {...compressedUploadProps} />

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

export const WithTitle: Story = {
  args: {},
  render: () => {
    const uploadProps = useUploader({
      fileTypes: ["image"],
      labelId: "image",
    });

    return <Uploader {...uploadProps} title="Upload your image" />;
  },
};
