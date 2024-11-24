"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import clientsData from "../../constants/client2.js";

export default function Admin() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
  }, [session, status, router]);

  if (status === "loading") return <p>Loading...</p>;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = clientsData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(clientsData.length / itemsPerPage);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Admin Page</h1>
      <p className="mb-4">Only accessible to authenticated admins.</p>
      <table className="table-auto border-collapse w-3/4 mb-4">
        <thead>
          <tr>
            <th className="border border-black px-4 py-2 bg-blue-300">S.No</th>
            <th className="border border-black px-4 py-2 bg-green-300">Name</th>
            <th className="border border-black px-4 py-2 bg-yellow-300">
              reg_no
            </th>
            <th className="border border-black px-4 py-2 bg-red-300">
              Investment Type
            </th>
            <th className="border border-black px-4 py-2 bg-purple-300">
              Transaction Amount
            </th>
            <th className="border border-black px-4 py-2 bg-pink-300">
              Interest Rate(%)
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((client, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="border border-black px-4 py-2 text-center align-middle">
                {indexOfFirstItem + index + 1}
              </td>
              <td className="border border-black px-4 py-2 text-center align-middle">
                {client.name}
              </td>
              <td className="border border-black px-4 py-2 text-center align-middle">
                {client.reg_no}
              </td>
              <td className="border border-black px-4 py-2 text-center align-middle">
                {client.investment_type}
              </td>
              <td className="border border-black px-4 py-2 text-center align-middle">
                {client.transactions[0].amount}
              </td>
              <td className="border border-black px-4 py-2 text-center align-middle">
                {client.transactions[0].interest_rate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`bg-black text-white px-4 py-2 ${
            currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`bg-black text-white px-4 py-2 ${
            currentPage === totalPages ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
