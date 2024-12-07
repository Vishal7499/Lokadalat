import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import downIcon from "../assets/images/teenyicons_down-solid.png";
import { FunnelIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import CustomerTable from "../components/CustomerTable"; // Import the new component

const CreateBatch = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("NPA");
  const [filters, setFilters] = useState({
    zone: "",
    division: "",
    region: "",
    hub: "",
    branch: "",
    customerType: "",
    dpd: "",
  });
  const [appliedFilters, setAppliedFilters] = useState(filters); // Store applied filters
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const rowsPerPage = 10; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);
  const tableHeaders = [
    "Name",
    "Zone",
    "Division",
    "Region",
    "Region",
    "Region",
    "Region",
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [batchName, setBatchName] = useState("");
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsFilterOpen(true); // Always open on large screens
      } else {
        setIsFilterOpen(false); // Closed initially on smaller screens
      }
    };

    handleResize(); // Set initial state based on current screen size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  const handleFilterChange = (filterType, value) => {
    // Reset all other filters except the one being selected
    const resetFilters = Object.keys(filters).reduce((acc, key) => {
      acc[key] = key === filterType ? value : ""; // Keep the new value for the current filter, reset others
      return acc;
    }, {});
    setFilters(resetFilters);
  };

  const handleApplyFilters = () => {
    setAppliedFilters(filters); // Apply selected filters
    console.log("Applied Filters:", filters); // Debugging or API call logic here
  };

  const handleCheckboxChange = (rowId) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(rowId)
        ? prevSelectedRows.filter((id) => id !== rowId)
        : [...prevSelectedRows, rowId]
    );
  };

  const handleCreateBatch = () => {
    if (selectedRows.length === 0) {
      alert("Please select at least one row to create a batch.");
      return;
    }
    setIsModalOpen(true);
  };

  const handleSaveBatch = () => {
    if (!batchName.trim()) {
      alert("Please provide a name for the batch.");
      return;
    }

    // Save selected rows with headers
    const selectedData = currentRows
      .filter((row) => selectedRows.includes(row.id))
      .map((row) => ({
        name: row.name,
        zone: row.zone,
        division: row.division,
        region: row.region,
      }));

    const batch = {
      name: batchName,
      data: { headers: tableHeaders, rows: selectedData },
    };

    setBatches((prevBatches) => [...prevBatches, batch]);
    setBatchName("");
    setSelectedRows([]);
    setIsModalOpen(false);
    console.log("Saved Batches:", [...batches, batch]);
  };

  const dropdownData = [
    { id: "zone", label: "Zone", options: ["Zone 1", "Zone 2", "Zone 3"] },
    {
      id: "division",
      label: "Division",
      options: ["Division A", "Division B", "Division C"],
    },
    {
      id: "region",
      label: "Region",
      options: ["Region X", "Region Y", "Region Z"],
    },
    { id: "hub", label: "HUB", options: ["HUB 1", "HUB 2", "HUB 3"] },
    {
      id: "branch",
      label: "Branch",
      options: ["Branch Alpha", "Branch Beta", "Branch Gamma"],
    },
    {
      id: "customerType",
      label: "Customer Type",
      options: ["Type 1", "Type 2", "Type 3"],
    },
    { id: "dpd", label: "DPD", options: ["DPD 10", "DPD 20", "DPD 30"] },
  ];

  const tableData = [
    {
      id: 1,
      name: "Row 1",
      zone: "Zone 1",
      division: "Division A",
      region: "Region X",
    },
    {
      id: 2,
      name: "Row 2",
      zone: "Zone 2",
      division: "Division B",
      region: "Region Y",
    },
    {
      id: 3,
      name: "Row 3",
      zone: "Zone 3",
      division: "Division C",
      region: "Region Z",
    },
    {
      id: 3,
      name: "Row 3",
      zone: "Zone 3",
      division: "Division C",
      region: "Region Z",
    },
    {
      id: 3,
      name: "Row 3",
      zone: "Zone 3",
      division: "Division C",
      region: "Region Z",
    },
    {
      id: 3,
      name: "Row 3",
      zone: "Zone 3",
      division: "Division C",
      region: "Region Z",
    },
    {
      id: 3,
      name: "Row 3",
      zone: "Zone 3",
      division: "Division C",
      region: "Region Z",
    },
    {
      id: 3,
      name: "Row 3",
      zone: "Zone 3",
      division: "Division C",
      region: "Region Z",
    },
    {
      id: 3,
      name: "Row 3",
      zone: "Zone 3",
      division: "Division C",
      region: "Region Z",
    },
    {
      id: 3,
      name: "Row 3",
      zone: "Zone 3",
      division: "Division C",
      region: "Region Z",
    },
  ];

  // Calculate pagination details
  const totalRows = tableData.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentRows = tableData.slice(startIndex, startIndex + rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex h-screen bg-[#f0F6FF]">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col ml-0 transition-all duration-300">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex-1 overflow-y-auto">
          {" "}
          {/* Allow scrolling in the main content area */}
          <div className="flex justify-center items-center md:p-6 p-4">
            <div className="relative w-full max-w-full">
              <div className="absolute right-2 top-[60px] lg:hidden">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer transition-all duration-300 ${
                    isFilterOpen ? "bg-red-400 hover:bg-red-500" : ""
                  }`}
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  {isFilterOpen ? (
                    <XMarkIcon className="text-white h-6 w-6" />
                  ) : (
                    <FunnelIcon className="text-black h-6 w-6" />
                  )}
                </div>
              </div>
              <div className="flex justify-between md:text-lg text-md font-bold text-gray-700">
                <button
                  className={`flex-1 text-center ${
                    selectedOption === "NPA"
                      ? "text-[#07223D]"
                      : "text-gray-400"
                  }`}
                  onClick={() => setSelectedOption("NPA")}
                >
                  NPA
                </button>
                <button
                  className={`flex-1 text-center ${
                    selectedOption === "Write-off"
                      ? "text-[#07223D]"
                      : "text-gray-400"
                  }`}
                  onClick={() => setSelectedOption("Write-off")}
                >
                  Write-off
                </button>
              </div>
              <div className="relative mt-2 h-1 bg-gray-300">
                <div
                  className={`absolute top-0 h-full bg-[#07223D] transition-all duration-300 ${
                    selectedOption === "NPA" ? "w-1/2 left-0" : "w-1/2 left-1/2"
                  }`}
                ></div>
              </div>
            </div>
          </div>
          {isFilterOpen && (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-2 md:pt-0 pt-16 bg-white text-sm">
                {dropdownData.map((dropdown, index) => (
                  <div key={dropdown.id} className="flex flex-col mb-2">
                    {index < 7 && (
                      <>
                        <label
                          htmlFor={dropdown.id}
                          className="text-gray-600 text-sm mb-1"
                        >
                          {dropdown.label}:
                        </label>
                        <div className="relative">
                          <select
                            id={dropdown.id}
                            className="w-full p-2 bg-[#E8F0FF] border-b border-blue-500 rounded-lg appearance-none"
                            value={filters[dropdown.id]}
                            onChange={(e) =>
                              handleFilterChange(dropdown.id, e.target.value)
                            }
                          >
                            <option value="">Select</option>
                            {dropdown.options.map((option, optionIndex) => (
                              <option key={optionIndex} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                          <img
                            src={downIcon}
                            alt="Dropdown Icon"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-4 h-4"
                          />
                        </div>
                      </>
                    )}
                  </div>
                ))}
                <div className="flex flex-col justify-center mt-4">
                  <button
                    className="px-6 py-2 bg-[#07223D] text-white rounded-lg font-bold hover:bg-[#055c2e] transition-all duration-300"
                    onClick={handleApplyFilters}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </>
          )}
          {/* Table */}
          <div className="bg-[#EFF6FF] p-2 rounded-lg md:mt-0 mt-10 ">
            <div className="overflow-x-auto w-[96vw] lg:w-[82vw] h-[500px] lg:h-[315px] bg-white shadow-lg mt-4">
              <div className="bg-[#EFF6FF] flex justify-end p-4 gap-2">
                <button
                  className="bg-white text-[#07223D] px-1 py-1 rounded-md border border-[#07223D] shadow hover:border-blue-500"
                  style={{
                    boxShadow: "inset 2px 2px 5px rgba(0, 0, 0, 0.1)", // Adjust the shadow as needed
                  }}
                  onClick={handleCreateBatch}
                >
                  Create Batch
                </button>
                <button
                  className="bg-white text-[#07223D] px-1 py-1 rounded-md border border-[#07223D] shadow hover:border-blue-500"
                  style={{
                    boxShadow: "inset 2px 2px 5px rgba(0, 0, 0, 0.1)", // Adjust the shadow as needed
                  }}
                  onClick={handleCreateBatch}
                >
                  Create Batch
                </button>
              </div>
              <div className="w-full max-w-full overflow-x-auto rounded-lg h-full relative">
                <table className="min-w-max table-auto border-collapse w-full">
                  <thead className="bg-[#D9E7FF] border-lg sticky top-0 z-10">
                    <tr>
                      <th className="p-2 text-left bg-[#D9E7FF] w-[50px]">
                        <input
                          type="checkbox"
                          checked={selectedRows.length === tableData.length}
                          onChange={() => {
                            if (selectedRows.length === tableData.length) {
                              setSelectedRows([]);
                            } else {
                              setSelectedRows(tableData.map((row) => row.id));
                            }
                          }}
                        />
                      </th>
                      {tableHeaders.map((header, index) => (
                        <th
                          key={index}
                          className="p-2 text-left text-gray-700 font-medium w-[150px]" // Adjust width if needed
                        >
                          {header}
                        </th>
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
                        <td className="p-2 w-[50px]">
                          <input
                            type="checkbox"
                            checked={selectedRows.includes(row.id)}
                            onChange={() => handleCheckboxChange(row.id)}
                          />
                        </td>
                        <td className="p-2 w-[150px]">{row.name}</td>
                        <td className="p-2 w-[150px]">{row.zone}</td>
                        <td className="p-2 w-[150px]">{row.division}</td>
                        <td className="p-2 w-[150px]">{row.region}</td>
                        <td className="p-2 w-[150px]">{row.region}</td>
                        <td className="p-2 w-[150px]">{row.region}</td>
                        <td className="p-2 w-[150px]">{row.region}</td>
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
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    className={`px-4 py-2 mx-1 rounded ${
                      currentPage === page
                        ? "bg-blue-700 text-white"
                        : "bg-blue-500 text-white"
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                )
              )}
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
            {/* Batch Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg w-[90vw] sm:w-[60vw] md:w-[30vw] relative">
                  {/* Title with Background Color and Close Icon */}
                  <div className="bg-[#B2CCFD] text-white text-center py-2 rounded-t-lg mb-4 relative">
                    <h2 className="text-xl text-black">Create Batch</h2>
                    {/* Close Icon */}
                    <button
                      className="absolute top-2 right-2 text-white hover:text-gray-200"
                      onClick={() => setIsModalOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Input Layout */}
                  <div className="">
                    <label className="p-6 text-lg font-semibold text-gray-700">
                      Name:
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="bg-blue-100 border-b-4 w-[70%] border-black p-2 rounded-lg focus:outline-none"
                      value={batchName}
                      onChange={(e) => setBatchName(e.target.value)}
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-center mt-4">
                    <button
                      className="bg-[#077836] text-white px-6 py-2 rounded-full mb-3"
                      onClick={handleSaveBatch}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBatch;
