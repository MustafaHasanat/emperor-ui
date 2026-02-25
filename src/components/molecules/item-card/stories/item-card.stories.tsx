import type { Meta, StoryObj } from "@storybook/react-vite";
import { ItemCard } from "@/components";
import { getStorybookDecorators } from "@/utils";
import { getListing, MOCK_LISTINGS } from "@/mocks";
import type { MockItemType } from "@/mocks";
import { useEffect, useState } from "storybook/internal/preview-api";
import { ItemCardProps } from "@/types";
import { ITEM_CARD_ACTIONS } from "@/constants";

const meta: Meta<typeof ItemCard> = {
  title: "Molecules/Item Card",
  component: ItemCard,
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
    item: {
      key: String(MOCK_LISTINGS[0]?.id),
      title: MOCK_LISTINGS[0]?.title,
      description: MOCK_LISTINGS[0]?.description,
      image: {
        src: MOCK_LISTINGS[0]?.image || "",
        alt: MOCK_LISTINGS[0]?.title || "",
      },
    },
  },
};

export const WithLoading: Story = {
  args: {},
  render: () => {
    const [item, setItem] = useState<MockItemType | null | undefined>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      (async () => {
        const { item } = await getListing();

        setItem(item);
        setIsLoading(false);
      })();
    }, []);

    return (
      <ItemCard
        isLoading={isLoading}
        item={{
          key: String(item?.id),
          title: item?.title,
          description: item?.description,
          image: { src: item?.image || "", alt: item?.title || "" },
        }}
      />
    );
  },
};

export const WithHorizontalLoading: Story = {
  args: {
    orientation: "horizontal",
  },
  render: (args: ItemCardProps) => {
    const [item, setItem] = useState<MockItemType | null | undefined>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      (async () => {
        const { item } = await getListing();

        setItem(item);
        setIsLoading(false);
      })();
    }, []);

    return (
      <ItemCard
        {...args}
        isLoading={isLoading}
        item={{
          key: String(item?.id),
          title: item?.title,
          description: item?.description,
          image: { src: item?.image || "", alt: item?.title || "" },
        }}
      />
    );
  },
};

export const WithActions: Story = {
  args: {
    item: {
      key: String(MOCK_LISTINGS[0]?.id),
      title: MOCK_LISTINGS[0]?.title,
      description: MOCK_LISTINGS[0]?.description,
      image: {
        src: MOCK_LISTINGS[0]?.image || "",
        alt: MOCK_LISTINGS[0]?.title || "",
      },
    },
    actions: ITEM_CARD_ACTIONS,
  },
};

export const WithButtonsActions: Story = {
  args: {
    item: {
      key: String(MOCK_LISTINGS[0]?.id),
      title: MOCK_LISTINGS[0]?.title,
      description: MOCK_LISTINGS[0]?.description,
      image: {
        src: MOCK_LISTINGS[0]?.image || "",
        alt: MOCK_LISTINGS[0]?.title || "",
      },
    },
    actions: ITEM_CARD_ACTIONS,
    actionsViewVariant: "buttons",
  },
};

export const WithHoverOverlayActions: Story = {
  args: {
    item: {
      key: String(MOCK_LISTINGS[0]?.id),
      title: MOCK_LISTINGS[0]?.title,
      description: MOCK_LISTINGS[0]?.description,
      image: {
        src: MOCK_LISTINGS[0]?.image || "",
        alt: MOCK_LISTINGS[0]?.title || "",
      },
    },
    actions: ITEM_CARD_ACTIONS?.map((action) => ({
      ...action,
      variant: "solid",
      size: "lg",
    })),
    actionsViewVariant: "hover-overlay",
  },
};

export const WithChips: Story = {
  args: {
    item: {
      key: String(MOCK_LISTINGS[2]?.id),
      title: MOCK_LISTINGS[2]?.title,
      description: MOCK_LISTINGS[2]?.description,
      image: {
        src: MOCK_LISTINGS[2]?.image || "",
        alt: MOCK_LISTINGS[2]?.title || "",
      },
      chips: MOCK_LISTINGS[2]?.categories,
    },
  },
};

export const WithBanner: Story = {
  args: {
    item: {
      key: String(MOCK_LISTINGS[0]?.id),
      title: MOCK_LISTINGS[0]?.title,
      description: MOCK_LISTINGS[0]?.description,
      image: {
        src: MOCK_LISTINGS[0]?.image || "",
        alt: MOCK_LISTINGS[0]?.title || "",
      },
      banner: MOCK_LISTINGS[0]?.isBestSeller ? "Best Seller" : undefined,
    },
  },
};

export const WithPrice: Story = {
  args: {
    item: {
      key: String(MOCK_LISTINGS[0]?.id),
      title: MOCK_LISTINGS[0]?.title,
      description: MOCK_LISTINGS[0]?.description,
      price: `$ ${MOCK_LISTINGS[0]?.price}`,
      image: {
        src: MOCK_LISTINGS[0]?.image || "",
        alt: MOCK_LISTINGS[0]?.title || "",
      },
    },
  },
};

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
    actions: ITEM_CARD_ACTIONS,
    item: {
      key: String(MOCK_LISTINGS[0]?.id),
      title: MOCK_LISTINGS[0]?.title,
      description: MOCK_LISTINGS[0]?.description,
      image: {
        src: MOCK_LISTINGS[0]?.image || "",
        alt: MOCK_LISTINGS[0]?.title || "",
      },
      banner: MOCK_LISTINGS[0]?.isBestSeller ? "Best Seller" : undefined,
      chips: MOCK_LISTINGS[0]?.categories,
      price: `$ ${MOCK_LISTINGS[0]?.price}`,
    },
  },
};
