import React from "react";

const CustomerTable = ({
  tableHeaders,
  currentRows,
  selectedRows,
  setSelectedRows,
  handleCheckboxChange,
  totalPages,
  currentPage,
  handlePageChange,
}) => {
  return (
    <div className="bg-[#EFF6FF] p-2 rounded-lg md:mt-0 mt-10">
      <div className="overflow-x-auto w-[96vw] lg:w-[82vw] h-[500px] lg:h-[315px] bg-white shadow-lg mt-4">
        <div className="w-full max-w-full overflow-x-auto rounded-lg h-full relative">
          <table className="min-w-max table-auto border-collapse w-full">
            <thead className="bg-[#D9E7FF] border-lg sticky top-0 z-10">
              <tr>
                <th className="p-2 text-left bg-[#D9E7FF]">
                  <input
                    type="checkbox"
                    checked={selectedRows.length === currentRows.length}
                    onChange={() => {
                      if (selectedRows.length === currentRows.length) {
                        setSelectedRows([]);
                      } else {
                        setSelectedRows(currentRows.map((row) => row.id));
                      }
                    }}
                  />
                </th>
                {tableHeaders.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentRows.map((row) => (
                <tr
                  key={row.id}
                  className={`border-b ${
                    selectedRows.includes(row.id) ? "bg-[#EAF1FF]" : ""
                  }`}
                >
                  <td className="p-2">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(row.id)}
                      onChange={() => handleCheckboxChange(row.id)}
                    />
                  </td>
                  <td className="p-2">{row.name}</td>
                  <td className="p-2">{row.zone}</td>
                  <td className="p-2">{row.division}</td>
                  <td className="p-2">{row.region}</td>
                  <td className="p-2">{row.region}</td>
                  <td className="p-2">{row.region}</td>
                  <td className="p-2">{row.region}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomerTable;
