import { Button } from "@heroui/button";
import { DeletionConfirmorProps } from "@/types";
import { useState } from "react";
import { DeletionConfirmor } from "@/components";

export const DeletionConfirmorWithTrigger = (args: DeletionConfirmorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Button color="danger" onPress={() => setIsOpen(true)}>
        Delete item
      </Button>

      <DeletionConfirmor
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};
