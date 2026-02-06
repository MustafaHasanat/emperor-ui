import type { Meta, StoryObj } from "@storybook/react-vite";
import { Listings } from "@/components";
import { getStorybookDecorators } from "@/utils";
import { getListings, MOCK_LISTINGS } from "@/mocks";
import type { MockItemType } from "@/mocks";
import { useMemo, useState } from "react";
import { useEffect } from "react";
import { ListingsProps } from "@/types";
import { usePagination } from "@heroui/react";

const meta: Meta<typeof Listings> = {
  title: "Organisms/Listings/List",
  component: Listings,
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
    layout: "list",
  },
  render: (args: ListingsProps) => {
    return (
      <main className="w-screen container mx-auto p-5">
        <Listings
          {...args}
          items={MOCK_LISTINGS.map((item) => ({
            item: {
              key: String(item.id),
              title: item?.title,
              description: item.description,
              image: { src: item?.image, alt: item?.title },
            },
          }))}
        />
      </main>
    );
  },
};

export const WithLoading: Story = {
  args: {
    layout: "list",
  },
  render: (args: ListingsProps) => {
    const [items, setItems] = useState<MockItemType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      (async () => {
        const { items } = await getListings({});

        setItems(items);
        setIsLoading(false);
      })();
    }, []);

    return (
      <Listings
        {...args}
        isLoading={isLoading}
        items={items.map((item) => ({
          item: {
            key: String(item.id),
            title: item?.title,
            description: item.description,
            image: { src: item?.image, alt: item?.title },
          },
        }))}
      />
    );
  },
};

export const WithActions: Story = {
  args: {
    layout: "list",
    items: MOCK_LISTINGS.map((item) => ({
      item: {
        key: String(item.id),
        title: item?.title,
        description: item.description,
        image: { src: item?.image, alt: item?.title },
      },
      actions: [
        { key: "view", label: "View details" },
        { key: "edit", label: "Edit" },
        { key: "delete", label: "Delete" },
      ],
    })),
  },
};

export const WithPagination: Story = {
  args: {
    layout: "list",
  },
  render: (args: ListingsProps) => {
    const [items, setItems] = useState<MockItemType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const pageSize = 6;
    const totalItemsCount = MOCK_LISTINGS.length;
    const pagesCount = useMemo(
      () => Math.ceil(totalItemsCount / pageSize),
      [totalItemsCount, pageSize],
    );

    const { activePage: page, setPage } = usePagination({
      total: pagesCount,
      initialPage: 1,
    });

    useEffect(() => {
      (async () => {
        setIsLoading(true);

        const { items } = await getListings({
          page,
          pageSize,
        });

        setItems(items);
        setIsLoading(false);
      })();
    }, [page]);

    return (
      <Listings
        {...args}
        isLoading={isLoading}
        items={items.map((item) => ({
          item: {
            key: String(item.id),
            title: item?.title,
            description: item.description,
            image: { src: item?.image, alt: item?.title },
            banner: item?.isBestSeller ? "Best Seller" : undefined,
            chips: item?.categories || [],
          },
        }))}
        pagination={{
          page,
          setPage,
          pageSize,
          totalItemsCount,
          pagesCount,
        }}
      />
    );
  },
};

export const EmptyListings: Story = {
  args: {
    items: [],
  },
};
