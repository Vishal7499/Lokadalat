import React, { useState } from "react";
import Sidebar from "../components/Sidebar"; // Import Sidebar component
import Navbar from "../components/Navbar"; // Import Navbar component
import { FaRegCreditCard } from "react-icons/fa"; // Example icon import
import IconImage from "../assets/images/image 3.png";
import IconImage3 from "../assets/images/image 30.svg";
import IconImage4 from "../assets/images/image 24 (1).svg";
import IconImage5 from "../assets/images/Vector.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ReactSpeedometer from "react-d3-speedometer";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("NPA");
  const [toggleValue, setToggleValue] = useState("JLG");
  const maxValue = 79000; // Example max value
  const currentValue = 73000; // Example current value
  const percentage1 = Math.round((currentValue / maxValue) * 100); // Calculate percentage
  const collectedAmount = 55000; // Replace with dynamic value if needed
  const totalAmount = 78000; // Replace with dynamic value if needed
  const percentage = ((collectedAmount / totalAmount) * 100).toFixed(1); // Calculate percentage
  const percentage2 = 95; // Example dynamic percentage from the backend

  // Function to toggle the sidebar visibility
  const toggleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  // ApexCharts configuration
  const chartOptions = {
    series: [parseFloat(percentage)], // Pass dynamic percentage here
    chart: {
      height: 120,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "50%", // Adjust the hollow size
        },

        dataLabels: {
          name: {
            show: false, // Hides the label
          },
          value: {
            fontSize: "14px", // Font size of percentage
            show: true,
            color: "#2563EB", // Percentage color
            offsetY: 5, // Centers the text vertically
            // Show percentage with '%'
          },
        },
      },
    },
    colors: ["#2563EB"], // Set progress bar color
  };

  const [data, setData] = useState({
    totalCustomers: 100,
    closedCustomers: 424,
    progressPercentage: 71,
  });

  // Function to toggle between JLG and ILG
  const handleToggle = () => {
    setToggleValue(toggleValue === "JLG" ? "ILG" : "JLG");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />{" "}
      {/* Pass the toggleSidebar function */}
      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-0 transition-all duration-300">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />{" "}
        {/* Passing toggleSidebar to Navbar */}
        {/* Dashboard Content */}
        <div className="flex-1 md:p-6 p-4">
          <div className="flex justify-center items-center mb-8">
            {/* Options */}
            <div className="relative w-full max-w-full">
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
              {/* Line */}
              <div className="relative mt-2 h-1 bg-gray-300">
                <div
                  className={`absolute top-0 h-full bg-[#07223D] transition-all duration-300 ${
                    selectedOption === "NPA" ? "w-1/2 left-0" : "w-1/2 left-1/2"
                  }`}
                ></div>
              </div>
            </div>
          </div>

          {/* Cards or Dashboard Components */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
            {/* Card 1 */}
            <div className="bg-[#EFF6FF] p-4 rounded-lg shadow-[0px_5px_15px_rgba(0,0,0,0.4),0_1px_3px_rgba(0,0,0,0.06)]">
              <h3 className="text-xl font-semibold text-gray-700 md:hidden flex items-center">
                {/* Circle Icon */}
                <div className="bg-white p-2 rounded-full mr-3 border border-gray-400">
                  <img
                    src={IconImage}
                    alt="Icon"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                Loan Summary
              </h3>

              <div className="flex justify-between mt-4 ">
                <div className="text-center sm:hidden hidden lg:block mt-2">
                  <p className="text-[20px]  text-[#000000] flex items-center">
                    {/* Circle Icon */}
                    <div className="bg-white p-2 rounded-full mr-3 border border-gray-400">
                      <img
                        src={IconImage}
                        alt="Icon"
                        className="w-7 h-7 object-contain"
                      />
                    </div>
                    Loan Summary
                  </p>
                </div>
                {/* First column */}
                <div className="text-center">
                  <p className="md:text-3xl font-bold text-[#07223D] mb-2">
                    60
                  </p>
                  <p className="sm:text-[20px] text-[12px] text-[#CEA606]">
                    NPA
                  </p>
                </div>
                {/* Vertical line */}
                <div className="border-l-2 border-[#07223D] mx-4"></div>{" "}
                {/* This is the vertical line */}
                {/* Middle column */}
                <div className="text-center">
                  <p className="md:text-3xl font-bold text-[#07223D] mb-2">
                    ₹73,000
                  </p>
                  <p className="sm:text-[20px] text-[12px] text-[#2079D2]">
                    Principle Outstanding{" "}
                  </p>
                </div>
                {/* Vertical line */}
                <div className="border-l-2 border-[#07223D] mx-4"></div>{" "}
                {/* This is the vertical line */}
                {/* Last column */}
                <div className="text-center">
                  <p className="md:text-3xl font-bold text-[#07223D] mb-2">
                    6,000
                  </p>
                  <p className="sm:text-[20px] text-[12px] text-[#2079D2]">
                    Interest Outstanding
                  </p>
                </div>
                <div className="border-l-2 border-[#07223D] mx-4"></div>{" "}
                <div className="text-center">
                  <p className="md:text-3xl font-bold text-[#07223D] mb-2">
                    79,000
                  </p>
                  <p className="sm:text-[20px] text-[12px] text-[#2079D2]">
                    Total Outstanding
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#EFF6FF] p-4 rounded-lg shadow-[0px_5px_15px_rgba(0,0,0,0.4),0_1px_3px_rgba(0,0,0,0.06)]">
              <h3 className="text-xl font-semibold text-gray-700 md:hidden flex items-center">
                {/* Circle Icon */}
                <div className="bg-white p-2 rounded-full mr-3 border border-gray-400">
                  <img
                    src={IconImage}
                    alt="Icon"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                Batches Summary
              </h3>

              <div className="flex justify-between mt-4 ">
                <div className="text-center sm:hidden hidden lg:block mt-2">
                  <p className="text-[20px]  text-[#000000] flex items-center">
                    {/* Circle Icon */}
                    <div className="bg-white p-2 rounded-full mr-3 border border-gray-400">
                      <img
                        src={IconImage}
                        alt="Icon"
                        className="w-7 h-7 object-contain"
                      />
                    </div>
                    Batches Summary
                  </p>
                </div>
                {/* First column */}
                <div className="text-center">
                  <p className="md:text-3xl font-bold text-[#07223D] mb-2">
                    24
                  </p>
                  <p className="sm:text-[20px] text-[12px] text-[#2079D2]">
                    Created
                  </p>
                </div>
                {/* Vertical line */}
                <div className="border-l-2 border-[#07223D] mx-4"></div>{" "}
                {/* This is the vertical line */}
                {/* Middle column */}
                <div className="text-center">
                  <p className="md:text-3xl font-bold text-[#07223D] mb-2">
                    ₹12
                  </p>
                  <p className="sm:text-[20px] text-[12px] text-[#CEA606]">
                    Pending for Approval
                  </p>
                </div>
                {/* Vertical line */}
                <div className="border-l-2 border-[#07223D] mx-4"></div>{" "}
                {/* This is the vertical line */}
                {/* Last column */}
                <div className="text-center">
                  <p className="md:text-3xl font-bold text-[#07223D] mb-2">
                    12
                  </p>
                  <p className="sm:text-[20px] text-[12px] text-[#0CB731]">
                    Approved
                  </p>
                </div>
                <div className="border-l-2 border-[#07223D] mx-4"></div>{" "}
                <div className="text-center">
                  <p className="md:text-3xl font-bold text-[#07223D] mb-2">0</p>
                  <p className="sm:text-[20px] text-[12px] text-[#E62514]">
                    Rejected
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}

            <div className="bg-[#EFF6FF] p-4 rounded-lg shadow-[0px_5px_15px_rgba(0,0,0,0.4),0_1px_3px_rgba(0,0,0,0.06)]">
              <div className="flex flex-wrap lg:flex-nowrap gap-4">
                {/* Left Section */}
                <div className="flex flex-col gap-4 w-full lg:w-[60%]">
                  {/* Box 1 */}
                  <div className="bg-white rounded-lg shadow-md flex-1 ">
                    <h2 className="text-xl font-bold text-gray-800  p-1">
                      Batches
                    </h2>
                    <div className="bg-white rounded-lg shadow-md flex-1">
                      <div className="bg-[#EFF6FF] p- rounded-lg shadow-[0px_5px_15px_rgba(0,0,0,0.4),0_1px_3px_rgba(0,0,0,0.06)]">
                        {/* Row with three boxes */}
                        <div className="grid grid-cols-3 sm:grid-cols-3 ">
                          {/* Repeated Box 1 */}
                          <div className="bg-[#EFF6FF] sm:p-6 p-3 shadow-md rounded-tl-[8px] rounded-bl-[8px]">
                            <div className="relative flex items-center justify-between">
                              {/* Icon on the left side */}
                              <img
                                src={IconImage3}
                                alt="Icon"
                                className="absolute left-[-8px] top-[-8px] sm:w-10 w-7 sm:h-10 h-7"
                              />
                              {/* ApexCharts progress bar */}
                              <div className="absolute top-[-20px] right-[-25px] w-24 h-24">
                                <ReactApexChart
                                  options={chartOptions}
                                  series={chartOptions.series}
                                  type="radialBar"
                                  height={100}
                                />
                              </div>
                            </div>
                            {/* Collection count */}
                            <p className="mt-20 sm:text-lg text-sm font-bold text-gray-800 text-center">
                              {collectedAmount.toLocaleString()}/
                              {totalAmount.toLocaleString()}
                            </p>
                            {/* Header */}
                            <p className="text-sm text-gray-600 text-center mt-2">
                              Outstanding
                            </p>
                          </div>

                          {/* Repeated Box 2 */}
                          <div className="bg-[#EFF6FF] sm:p-6 p-3 shadow-md">
                            <div className="relative flex items-center justify-between">
                              {/* Icon on the left side */}
                              <img
                                src={IconImage3}
                                alt="Icon"
                                className="absolute left-[-8px] top-[-8px] sm:w-10 w-7 sm:h-10 h-7"
                              />
                              {/* ApexCharts progress bar */}
                              <div className="absolute top-[-20px] right-[-25px] w-24 h-24">
                                <ReactApexChart
                                  options={chartOptions}
                                  series={chartOptions.series}
                                  type="radialBar"
                                  height={100}
                                />
                              </div>
                            </div>
                            {/* Collection count */}
                            <p className="mt-20 sm:text-lg text-sm font-bold text-gray-800 text-center">
                              {collectedAmount.toLocaleString()}/
                              {totalAmount.toLocaleString()}
                            </p>
                            {/* Header */}
                            <p className="text-sm text-gray-600 text-center mt-2">
                              Outstanding
                            </p>
                          </div>

                          {/* Repeated Box 3 */}
                          <div className="bg-[#EFF6FF] sm:p-6 p-3 shadow-md rounded-tr-[8px] rounded-br-[8px]">
                            <div className="relative flex items-center justify-between">
                              {/* Icon on the left side */}
                              <img
                                src={IconImage3}
                                alt="Icon"
                                className="absolute left-[-8px] top-[-8px] sm:w-10 w-7 sm:h-10 h-7"
                              />
                              {/* ApexCharts progress bar */}
                              <div className="absolute top-[-20px] right-[-25px] w-24 h-24">
                                <ReactApexChart
                                  options={chartOptions}
                                  series={chartOptions.series}
                                  type="radialBar"
                                  height={100}
                                />
                              </div>
                            </div>
                            {/* Collection count */}
                            <p className="mt-20 sm:text-lg text-sm font-bold text-gray-800 text-center">
                              {collectedAmount.toLocaleString()}/
                              {totalAmount.toLocaleString()}
                            </p>
                            {/* Header */}
                            <p className="text-sm text-gray-600 text-center mt-2">
                              Outstanding
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Box 2 */}
                  <div className="bg-white rounded-lg shadow-md flex-1">
                    <div className="bg-white rounded-lg shadow-md flex-1 ">
                      <h2 className="text-xl font-bold text-gray-800  p-1">
                        Batches
                      </h2>
                      <div className="bg-white rounded-lg shadow-md flex-1">
                        <div className="bg-[#EFF6FF] p- rounded-lg shadow-[0px_5px_15px_rgba(0,0,0,0.4),0_1px_3px_rgba(0,0,0,0.06)]">
                          {/* Row with three boxes */}
                          <div className="grid grid-cols-3 sm:grid-cols-3 ">
                            {/* Repeated Box 1 */}
                            <div className="bg-[#EFF6FF] p-6 rounded-lg shadow-md">
                              <div className="flex items-center sm:justify-between justify-center sm:gap-0 gap-10">
                                {/* Icon on the left side */}
                                <img
                                  src={IconImage4}
                                  alt="Icon"
                                  className="sm:w-10 w-5 sm:h-10 h-5"
                                />

                                <div className="flex items-center">
                                  {/* Icon on the right side */}
                                  <img
                                    src={IconImage5}
                                    alt="Icon"
                                    className="sm:w-5 w-3 sm:h-5 h-3"
                                  />
                                  {/* Percentage next to the icon */}
                                  <p className="ml-2 text-sm text-gray-600 font-semibold">
                                    {percentage2}%
                                  </p>
                                </div>
                              </div>

                              {/* Progress Bar */}
                              <div className="mt-10 relative">
                                {/* Horizontal progress bar container */}
                                <div className="sm:w-[120%] w-[160%] -ml-5 bg-gray-300 h-2 rounded-full relative">
                                  {/* Dynamic progress bar */}
                                  <div
                                    className="bg-black h-2 rounded-full relative"
                                    style={{ width: `${percentage2}%` }} // Dynamically set width
                                  >
                                    {/* Value displayed dynamically above the filled bar */}
                                    <div
                                      className="absolute -top-8 text-lg font-bold text-gray-800"
                                      style={{
                                        left: `calc(${percentage2}% - 0px)`, // Adjust position based on percentage
                                      }}
                                    >
                                      12{" "}
                                      {/* Replace with dynamic value if needed */}
                                    </div>
                                  </div>
                                </div>
                                {/* Display percentage below progress bar */}
                                <p className="text-right text-sm text-gray-600 mt-1">
                                  {percentage2}%
                                </p>
                              </div>

                              {/* Header */}
                              <p className="text-sm text-gray-600 text-center mt-6">
                                Outstanding
                              </p>
                            </div>

                            {/* Repeated Box 2 */}
                            <div className="bg-[#EFF6FF] p-6 rounded-lg shadow-md">
                              <div className="flex items-center sm:justify-between justify-center sm:gap-0 gap-10">
                                {/* Icon on the left side */}
                                <img
                                  src={IconImage4}
                                  alt="Icon"
                                  className="sm:w-10 w-5 sm:h-10 h-5"
                                />

                                <div className="flex items-center">
                                  {/* Icon on the right side */}
                                  <img
                                    src={IconImage5}
                                    alt="Icon"
                                    className="sm:w-5 w-3 sm:h-5 h-3"
                                  />
                                  {/* Percentage next to the icon */}
                                  <p className="ml-2 text-sm text-gray-600 font-semibold">
                                    {percentage2}%
                                  </p>
                                </div>
                              </div>

                              {/* Progress Bar */}
                              <div className="mt-10 relative">
                                {/* Horizontal progress bar container */}
                                <div className="sm:w-[120%] w-[160%] -ml-5 bg-gray-300 h-2 rounded-full relative">
                                  {/* Dynamic progress bar */}
                                  <div
                                    className="bg-black h-2 rounded-full relative"
                                    style={{ width: `${percentage2}%` }} // Dynamically set width
                                  >
                                    {/* Value displayed dynamically above the filled bar */}
                                    <div
                                      className="absolute -top-8 text-lg font-bold text-gray-800"
                                      style={{
                                        left: `calc(${percentage2}% - 0px)`, // Adjust position based on percentage
                                      }}
                                    >
                                      12{" "}
                                      {/* Replace with dynamic value if needed */}
                                    </div>
                                  </div>
                                </div>
                                {/* Display percentage below progress bar */}
                                <p className="text-right text-sm text-gray-600 mt-1">
                                  {percentage2}%
                                </p>
                              </div>

                              {/* Header */}
                              <p className="text-sm text-gray-600 text-center mt-6">
                                Outstanding
                              </p>
                            </div>

                            {/* Repeated Box 3 */}
                            <div className="bg-[#EFF6FF] p-6 rounded-lg shadow-md">
                              <div className="flex items-center sm:justify-between justify-center sm:gap-0 gap-10">
                                {/* Icon on the left side */}
                                <img
                                  src={IconImage4}
                                  alt="Icon"
                                  className="sm:w-10 w-5 sm:h-10 h-5"
                                />

                                <div className="flex items-center">
                                  {/* Icon on the right side */}
                                  <img
                                    src={IconImage5}
                                    alt="Icon"
                                    className="sm:w-5 w-3 sm:h-5 h-3"
                                  />
                                  {/* Percentage next to the icon */}
                                  <p className="ml-2 text-sm text-gray-600 font-semibold">
                                    {percentage2}%
                                  </p>
                                </div>
                              </div>

                              {/* Progress Bar */}
                              <div className="mt-10 relative">
                                {/* Horizontal progress bar container */}
                                <div className="sm:w-[120%] w-[160%] -ml-5 bg-gray-300 h-2 rounded-full relative">
                                  {/* Dynamic progress bar */}
                                  <div
                                    className="bg-black h-2 rounded-full relative"
                                    style={{ width: `${percentage2}%` }} // Dynamically set width
                                  >
                                    {/* Value displayed dynamically above the filled bar */}
                                    <div
                                      className="absolute -top-8 text-lg font-bold text-gray-800"
                                      style={{
                                        left: `calc(${percentage2}% - 0px)`, // Adjust position based on percentage
                                      }}
                                    >
                                      12{" "}
                                      {/* Replace with dynamic value if needed */}
                                    </div>
                                  </div>
                                </div>
                                {/* Display percentage below progress bar */}
                                <p className="text-right text-sm text-gray-600 mt-1">
                                  {percentage2}%
                                </p>
                              </div>

                              {/* Header */}
                              <p className="text-sm text-gray-600 text-center mt-6">
                                Outstanding
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section */}
                <div className="bg-white rounded-lg shadow-md w-full lg:w-[40%] lg:h-auto">
                  <h2 className="text-xl p-1 font-bold text-gray-800 ">
                    Batches
                  </h2>
                  <div className="bg-[#EFF6FF] p-4 rounded-lg shadow-[0px_5px_15px_rgba(0,0,0,0.4),0_1px_3px_rgba(0,0,0,0.06)]">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                      Collection
                    </h2>
                    {/* Header */}
                    <div className="flex justify-between items-center">
                      <p className="text-gray-800 font-semibold text-lg">
                        Attempted Customers
                      </p>
                      <p className="text-gray-600 text-sm">70/100</p>
                    </div>
                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="w-full bg-gray-300 h-2 rounded-full">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                      <p className="text-right text-sm text-gray-600 mt-1">
                        70%
                      </p>
                    </div>

                    {/* Header */}
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-gray-800 font-semibold text-lg">
                        Attempted Customers
                      </p>
                      <p className="text-gray-600 text-sm">70/100</p>
                    </div>
                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="w-full bg-gray-300 h-2 rounded-full">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                      <p className="text-right text-sm text-gray-600 mt-1">
                        70%
                      </p>
                    </div>
                    {/* Header */}
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-gray-800 font-semibold text-lg">
                        Attempted Customers
                      </p>
                      <p className="text-gray-600 text-sm">70/100</p>
                    </div>
                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="w-full bg-gray-300 h-2 rounded-full">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                      <p className="text-right text-sm text-gray-600 mt-1">
                        70%
                      </p>
                    </div>
                    {/* Header */}
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-gray-800 font-semibold text-lg">
                        Attempted Customers
                      </p>
                      <p className="text-gray-600 text-sm">70/100</p>
                    </div>
                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="w-full bg-gray-300 h-2 rounded-full">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                      <p className="text-right text-sm text-gray-600 mt-1">
                        70%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
