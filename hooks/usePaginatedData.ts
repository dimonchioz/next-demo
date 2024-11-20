import useSWR from "swr";

interface Item {
  id: number;
  name: string;
  description: string;
}

interface PaginatedResponse {
  items: Item[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function usePaginatedData(page: number, limit: number) {
  const { data, error, isLoading } = useSWR<PaginatedResponse>(
    `http://localhost:3000/api/items?page=${page}&limit=${limit}`,
    fetcher
  );

  return {
    data: data?.items || [],
    totalItems: data?.totalItems || 0,
    isLoading,
    error,
  };
}
