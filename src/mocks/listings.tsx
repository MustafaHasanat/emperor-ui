/* eslint-disable react-refresh/only-export-components */
import { type MockReview, type MockItemType } from "@/mocks/types";
import {
  MOCK_REVIEW_COMMENTS,
  MOCK_REVIEW_AUTHORS,
  MOCK_BASE_DATE,
  MOCK_ITEM_CATEGORIES,
  MOCK_ITEM_BRANDS,
  MOCK_COLORS,
  MOCK_LISTING_TITLES,
  MOCK_LISTING_DESCRIPTIONS,
  MOCK_LISTING_IMAGES,
} from "@/mocks/constants";
import { ItemChipProps } from "@/types";
import { Star } from "lucide-react";

const createReviewList = (count: number, offset: number): MockReview[] => {
  return Array.from({ length: count }, (_, index) => {
    const id = offset + index + 1;
    const ratingBase = (index % 5) + 1 + (index % 3) * 0.1;
    const rating = Number(Math.min(5, ratingBase).toFixed(1));
    const comment = MOCK_REVIEW_COMMENTS[index % MOCK_REVIEW_COMMENTS?.length];
    const author = MOCK_REVIEW_AUTHORS[index % MOCK_REVIEW_AUTHORS.length];

    return {
      id,
      rating,
      comment,
      author,
      createdAt: MOCK_BASE_DATE,
      updatedAt: MOCK_BASE_DATE,
    };
  });
};

// 10 reviews
export const MOCK_ITEM_REVIEWS_1: MockReview[] = createReviewList(10, 0);

// 50 reviews
export const MOCK_ITEM_REVIEWS_2: MockReview[] = createReviewList(50, 10);

// 100 reviews
export const MOCK_ITEM_REVIEWS_3: MockReview[] = createReviewList(100, 60);

const getListingCategories = (index: number): ItemChipProps[] => {
  const count = (index % 5) + 1; // from 1 to 5 categories
  const categories: ItemChipProps[] = [];

  for (let i = 0; i < count; i += 1) {
    const category: ItemChipProps = {
      label: MOCK_ITEM_CATEGORIES[(index + i) % MOCK_ITEM_CATEGORIES.length],
      startContent: <Star className="size-3 fill-current" />,
    };

    if (!categories.includes(category)) {
      categories.push(category);
    }
  }

  return categories;
};

const getListingReviews = (index: number): MockReview[] => {
  if (index < 10) return MOCK_ITEM_REVIEWS_1;
  if (index < 30) return MOCK_ITEM_REVIEWS_2;

  const maxReviews = 100;
  const count = index % (maxReviews + 1); // from 0 to 100

  return MOCK_ITEM_REVIEWS_3.slice(0, count);
};

const getAverageRating = (reviews: MockReview[]): number => {
  if (!reviews.length) return 0;

  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  const average = total / reviews.length;

  return Number(average.toFixed(1));
};

// 50 listings
export const MOCK_LISTINGS: MockItemType[] = Array.from(
  { length: 50 },
  (_, index) => {
    const id = index + 1;
    const brand = MOCK_ITEM_BRANDS[index % MOCK_ITEM_BRANDS.length];
    const color = MOCK_COLORS[index % MOCK_COLORS.length];
    const title = MOCK_LISTING_TITLES[index % MOCK_LISTING_TITLES.length];
    const description =
      MOCK_LISTING_DESCRIPTIONS[index % MOCK_LISTING_DESCRIPTIONS.length];
    const image = MOCK_LISTING_IMAGES[index % MOCK_LISTING_IMAGES.length];
    const priceBase = 300 + (index % 10) * 75;
    const priceBrandModifier = (index % 3) * 50;
    const price = priceBase + priceBrandModifier; // always less than 10000
    const isAvailable = index % 7 !== 0;
    const isBestSeller = index % 6 === 0;
    const isTopRated = index % 5 === 0;
    const reviews = getListingReviews(index);
    const averageRating = getAverageRating(reviews);
    const createdAt = new Date(
      MOCK_BASE_DATE.getTime() - index * 24 * 60 * 60 * 1000,
    );
    const updatedAt = createdAt;

    return {
      id,
      title,
      description,
      image,
      price,
      categories: getListingCategories(index),
      isAvailable,
      isBestSeller,
      isTopRated,
      averageRating,
      reviews,
      brand,
      color,
      createdAt,
      updatedAt,
    };
  },
);

export const getListings = async ({
  page = 1,
  pageSize = 12,
}: {
  page?: number;
  pageSize?: number;
}): Promise<{ items: MockItemType[] }> => {
  const items = MOCK_LISTINGS.slice((page - 1) * pageSize, page * pageSize);

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return {
    items,
  };
};

export const getListing = async (): Promise<{
  item?: MockItemType | null | undefined;
}> => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return {
    item: MOCK_LISTINGS[0],
  };
};
