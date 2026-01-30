export type MockItemType = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export const MOCK_LISTINGS: MockItemType[] = [
  {
    id: 1,
    title: "Listing 1",
    description: "Description 1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Listing 2",
    description: "Description 2",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Listing 3",
    description: "Description 3",
    image: "https://via.placeholder.com/150",
  },

  {
    id: 4,
    title: "Listing 4",
    description: "Description 4",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Listing 5",
    description: "Description 5",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    title: "Listing 6",
    description: "Description 6",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    title: "Listing 7",
    description: "Description 7",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    title: "Listing 8",
    description: "Description 8",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    title: "Listing 9",
    description: "Description 9",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    title: "Listing 10",
    description: "Description 10",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 11,
    title: "Listing 11",
    description: "Description 11",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 12,
    title: "Listing 12",
    description: "Description 12",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 13,
    title: "Listing 13",
    description: "Description 13",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 14,
    title: "Listing 14",
    description: "Description 14",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 15,
    title: "Listing 15",
    description: "Description 15",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 16,
    title: "Listing 16",
    description: "Description 16",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 17,
    title: "Listing 17",
    description: "Description 17",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 18,
    title: "Listing 18",
    description: "Description 18",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 19,
    title: "Listing 19",
    description: "Description 19",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 20,
    title: "Listing 20",
    description: "Description 20",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 21,
    title: "Listing 21",
    description: "Description 21",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 22,
    title: "Listing 22",
    description: "Description 22",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 23,
    title: "Listing 23",
    description: "Description 23",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 24,
    title: "Listing 24",
    description: "Description 24",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 25,
    title: "Listing 25",
    description: "Description 25",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 26,
    title: "Listing 26",
    description: "Description 26",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 27,
    title: "Listing 27",
    description: "Description 27",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 28,
    title: "Listing 28",
    description: "Description 28",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 29,
    title: "Listing 29",
    description: "Description 29",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 30,
    title: "Listing 30",
    description: "Description 30",
    image: "https://via.placeholder.com/150",
  },
];

export const getListings = ({
  page = 1,
  pageSize = 10,
}: {
  page?: number;
  pageSize?: number;
}) => {
  return MOCK_LISTINGS.slice((page - 1) * pageSize, page * pageSize);
};
