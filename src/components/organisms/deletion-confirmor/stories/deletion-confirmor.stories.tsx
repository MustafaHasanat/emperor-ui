import type { Meta, StoryObj } from "@storybook/react-vite";
import { DeletionConfirmor, DeletionConfirmorWithTrigger } from "@/components";
import { getStorybookDecorators } from "@/utils";
import { DeletionConfirmorProps } from "@/types";
import { mockAwaitingDelete } from "@/mocks";
import { Button } from "@heroui/button";
import { useState } from "react";

const meta: Meta<typeof DeletionConfirmor> = {
  title: "Organisms/DeletionConfirmor",
  component: DeletionConfirmor,
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
  args: {
    title: "Delete item?",
    description:
      "This action cannot be undone. This will permanently delete the item.",
  },
  render: (args: DeletionConfirmorProps) => {
    return <DeletionConfirmorWithTrigger {...args} />;
  },
};

export const WithConfirmLoading: Story = {
  args: {
    title: "Delete item?",
    description:
      "This action cannot be undone. The confirm button will show a loading state for 2 seconds.",
  },
  render: (args: DeletionConfirmorProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isConfirmLoading, setIsConfirmLoading] = useState(false);

    const handleConfirm = async () => {
      setIsConfirmLoading(true);

      await mockAwaitingDelete(() => {
        setIsOpen(false);
        setIsConfirmLoading(false);
      })();
    };

    return (
      <div className="flex flex-col gap-4">
        <Button color="danger" onPress={() => setIsOpen(true)}>
          Delete item
        </Button>

        <DeletionConfirmor
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          confirmProps={{
            ...args.confirmProps,
            isLoading: isConfirmLoading,
            onPress: handleConfirm,
          }}
        />
      </div>
    );
  },
};
