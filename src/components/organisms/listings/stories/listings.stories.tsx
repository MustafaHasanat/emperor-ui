import type { Meta, StoryObj } from "@storybook/react-vite";
import { Listings } from "@/components";
import { getStorybookDecorators } from "@/utils";
import { getListings, MockItemType } from "@/mocks";

const meta: Meta<typeof Listings> = {
  title: "Organisms/Listings",
  component: Listings,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: getStorybookDecorators({}),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => {
    const items = getListings({
      page: 1,
      pageSize: 10,
    });

    return <Listings<MockItemType> {...args} items={items} />;
  },
};
