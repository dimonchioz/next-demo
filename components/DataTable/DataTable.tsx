"use client";

import DefaultDataTable from "react-data-table-component";
import { Primitive } from "react-data-table-component/dist/DataTable/types";

interface DataTablePropsType<T> {
  columns: Array<{
    name: string;
    selector: (row: T) => Primitive;
    sortable?: boolean;
  }>;
  itemsPerPage: number;
  totalItems: number;
  tableData: T[];
  handlePageChange: (val: number) => void;
  handleItemsPerPageChange: (val: number) => void;
}

export const DataTable = <
  T extends { id: number; name: string; description: string }
>({
  columns,
  itemsPerPage,
  totalItems,
  tableData,
  handlePageChange,
  handleItemsPerPageChange,
}: DataTablePropsType<T>) => {
  return (
    <div className="w-full">
      <DefaultDataTable
        title="Item List"
        columns={columns}
        data={tableData}
        pagination
        paginationServer
        paginationPerPage={itemsPerPage}
        paginationTotalRows={totalItems}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleItemsPerPageChange}
      />
    </div>
  );
};
