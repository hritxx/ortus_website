"use client";

import { tableData } from "@/constants";
import * as React from "react";
import { useTable } from "react-table";
import SectionIntro from "./SectionIntro";

const Table = () => {
  const data = React.useMemo(() => tableData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Investment Amount",
        accessor: "id",
      },
      {
        Header: "ORTUS FINANCE",
        accessor: "ortus",
      },
      {
        Header: "Govt. Financial Institutions",
        accessor: "gov",
      },
      {
        Header: "Non Govt. Financial Institutions",
        accessor: "nonGov",
      },
      {
        Header: "Small Finance Banks",
        accessor: "smallBanks",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="At ORTUS FINANCE, we specialize in
turning your financial aspirations into
reality."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our vision is to be a trusted investment leader, offering innovative
          solutions and superior returns through expert, transparent, and
          customer-focused management.
        </p>
      </SectionIntro>
      <div className="flex justify-center p-4">
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table
            {...getTableProps()}
            className="min-w-full text-left table-auto border-collapse bg-white"
          >
            <thead className="bg-gray-100 border-b">
              {headerGroups.map((headerGroup) => {
                const { key: headerGroupKey, ...headerGroupProps } =
                  headerGroup.getHeaderGroupProps();
                return (
                  <tr key={headerGroupKey} {...headerGroupProps}>
                    {headerGroup.headers.map((column) => {
                      const { key: columnKey, ...columnProps } =
                        column.getHeaderProps();
                      return (
                        <th
                          key={columnKey}
                          {...columnProps}
                          className="px-6 py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider text-center"
                        >
                          {column.render("Header")}
                        </th>
                      );
                    })}
                  </tr>
                );
              })}
            </thead>
            <tbody
              {...getTableBodyProps()}
              className="divide-y divide-gray-200"
            >
              {rows.map((row) => {
                prepareRow(row);
                const { key: rowKey, ...rowProps } = row.getRowProps();
                return (
                  <tr key={rowKey} {...rowProps} className="hover:bg-gray-100">
                    {row.cells.map((cell) => {
                      const { key: cellKey, ...cellProps } =
                        cell.getCellProps();
                      const isOrtus = cell.column.id === "ortus";
                      return (
                        <td
                          key={cellKey}
                          {...cellProps}
                          className={`px-6 py-4 text-sm whitespace-nowrap text-center ${
                            isOrtus
                              ? "text-green-600 font-semibold"
                              : "text-gray-600"
                          }`}
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
