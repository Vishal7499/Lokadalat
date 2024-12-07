import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import downIcon from "../assets/images/teenyicons_down-solid.png";
import { FunnelIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const Batches = () => {
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
  const navigate = useNavigate(); // Initialize navigate function
  const [appliedFilters, setAppliedFilters] = useState(filters); // Store applied filters
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const rowsPerPage = 10; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);

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

  // Navigate to the Create Batch screen
  const handleCreateBranchClick = () => {
    navigate("/create-batch"); // Update the route as per your routing setup
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
      Batch: "Batch 1",
      Batch_Name: "XYZ",
      Created_Date: "23-5-2024",
      Loans: "24",
      Outstanding_Amount: "24",
      Status: "Approved",
      
    },
    {
      id: 2,
      Batch: "Batch 2",
      Batch_Name: "XYZ",
      Created_Date: "23-9-2024",
      Loans: "43",
      Outstanding_Amount: "24",
      Status: "Rejected",
    },
    
    // Add more rows as needed
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
              <div className="absolute right-2 top-[60px]">
              <div className="flex flex-col justify-center mt-2">
                  <button
                    onClick={handleCreateBranchClick}
                    className="bg-white text-[#07223D] px-1 py-1 rounded-md border border-[#07223D] shadow hover:border-blue-500"
                    style={{
                      boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.1)', // Adjust the shadow as needed
                    }}
                  >
                    Add Batch
                  </button>
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
              
            </>
          )}
          {/* Table */}
          <div className="bg-[#EFF6FF] p-2 rounded-lg md:mt-5 mt-10">
            <div className="overflow-x-auto w-[96vw] lg:w-[82vw] h-[500px] lg:h-[315px] bg-white shadow-lg mt-4">
              <div className="w-full max-w-full overflow-x-auto rounded-lg h-full relative">
                <table className="min-w-max table-auto border-collapse w-full">
                  <thead className="bg-[#D9E7FF] border-lg sticky top-0 z-10">
                    <tr>
                      <th className="p-2 text-left bg-[#D9E7FF]">
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
                      <th className="p-2 text-left bg-[#D9E7FF]">Batch</th>
                      <th className="p-2 text-left bg-[#D9E7FF]">Batch Name</th>
                      <th className="p-2 text-left bg-[#D9E7FF]">Created Date</th>
                      <th className="p-2 text-left bg-[#D9E7FF]">Loans</th>
                      <th className="p-2 text-left bg-[#D9E7FF]">Outstanding Amount</th>
                      <th className="p-2 text-left bg-[#D9E7FF]">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row) => (
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
                        <td className="p-2">{row.Batch}</td>
                        <td className="p-2">{row.Batch_Name}</td>
                        <td className="p-2">{row.Created_Date}</td>
                        <td className="p-2">{row.Loans}</td>
                        <td className="p-2">{row.Outstanding_Amount}</td>
                        <td className="p-2">{row.Status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Batches;
