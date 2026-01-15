import type { Meta, StoryObj } from "@storybook/react";
import { Brand, SideBar } from "@components";
import { getStorybookDecorators } from "@utils";
import { MenuIcon } from "lucide-react";
import { useDisclosure } from "@heroui/react";
import { MOCK_HEADER_ACTIONS, MOCK_HEADER_ITEMS } from "@mocks";

const meta: Meta<typeof SideBar> = {
  title: "Molecules/SideBar",
  component: SideBar,
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
    header: <Brand className="text-white" />,
    triggerProps: {
      className: "m-5",
      startContent: <MenuIcon className="size-4" />,
    },
  },
  render: (args) => {
    const { isOpen, onOpenChange } = useDisclosure();

    return <SideBar {...args} isOpen={isOpen} onOpenChange={onOpenChange} />;
  },
};

export const WithItems: Story = {
  args: {
    header: <Brand className="text-white" />,
    triggerProps: {
      className: "m-5",
      startContent: <MenuIcon className="size-4" />,
    },
  },
  render: (args) => {
    const { isOpen, onOpenChange } = useDisclosure();

    return (
      <SideBar
        {...args}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        items={MOCK_HEADER_ITEMS}
      />
    );
  },
};

export const WithActions: Story = {
  args: {
    header: <Brand className="text-white" />,
    triggerProps: {
      className: "m-5",
      startContent: <MenuIcon className="size-4" />,
    },
  },
  render: (args) => {
    const { isOpen, onOpenChange } = useDisclosure();

    return (
      <SideBar
        {...args}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        items={MOCK_HEADER_ITEMS}
        actions={MOCK_HEADER_ACTIONS}
      />
    );
  },
};

export const Compact: Story = {
  args: {
    variant: "compact",
  },
  render: (args) => {
    const { isOpen, onOpenChange } = useDisclosure();

    return (
      <SideBar
        {...args}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        items={MOCK_HEADER_ITEMS}
        actions={MOCK_HEADER_ACTIONS}
        triggerProps={{
          content: (
            <Brand classNames={{ logo: "size-7" }} isIconOnly={!isOpen} />
          ),
        }}
      />
    );
  },
};
