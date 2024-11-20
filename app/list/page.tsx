"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { DataTable, Spinner } from "@/components";
import { usePaginatedData } from "@/hooks/usePaginatedData";
import { ERROR_MSG } from "@/const/constants";

const productColumns = [
  {
    name: "ID",
    selector: (row: { id: number }) => row.id,
    sortable: true,
  },
  {
    name: "Product Name",
    selector: (row: { name: string }) => row.name,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row: { description: string }) => `${row.description}`,
    sortable: true,
  },
];

export default function List() {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  const { data, totalItems, isLoading, error } = usePaginatedData(
    currentPage,
    itemsPerPage
  );
  if (isLoading) return <Spinner />;

  if (error) {
    router.push(`/error-page?message=${error?.message || ERROR_MSG.DEFAULT}`);
    return null;
  }

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
  };

  return (
    <div className="px-5 py-16">
      <div className="tableContainer overflow-auto">
        <div className="md:max-w-2xl w-full max-md:w-[600px] mx-auto">
          <DataTable
            columns={productColumns}
            itemsPerPage={itemsPerPage}
            tableData={data}
            totalItems={totalItems}
            handlePageChange={handlePageChange}
            handleItemsPerPageChange={handleItemsPerPageChange}
          />
        </div>
      </div>
    </div>
  );
}
