import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import dashboard from "../assets/images/solar_notes-broken.svg";
import batchesImage from "../assets/images/Frame (1).svg";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [hovered, setHovered] = useState(null);
  const location = useLocation(); // For determining the active route

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click happened outside the sidebar or the toggle button
      if (
        !event.target.closest(".sidebar") &&
        !event.target.closest(".toggle-btn") &&
        !event.target.closest(".sidebar-button")
      ) {
        toggleSidebar(false); // Close the sidebar
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    // Cleanup the event listener on component unmount or when `isOpen` changes
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`sidebar lg:w-64 w-64 bg-[#07223D] text-white p-6 fixed lg:relative transition-all duration-300 ${
          isOpen ? "left-0" : "-left-64"
        } lg:left-0 top-0 h-full z-50 font-ibm-plex-sans-condensed`}
      >
        {/* Close button */}
        <button
          className="sidebar-button absolute top-4 right-4 text-white text-2xl lg:hidden"
          onClick={() => toggleSidebar(false)}
        >
          &times; {/* Cross icon for closing */}
        </button>

        {/* Heading */}
        <h1 className="text-2xl font-semibold mb-8 text-center w-full">
          Lokadalat
        </h1>

        <ul className="space-y-4">
          {/* Dashboard */}
          <li>
            <Link
              to="/"
              onMouseEnter={() => setHovered("dashboard")}
              onMouseLeave={() => setHovered(null)}
              className={`flex items-center text-lg px-4 py-2 rounded transition ${
                location.pathname === "/"
                  ? "bg-[#ffffff] text-black"
                  : "text-white hover:bg-[#ffffff] hover:text-black"
              }`}
            >
              <img
                src={dashboard}
                alt="Dashboard Icon"
                className={`w-6 h-6 mr-3 object-contain ${
                  location.pathname === "/" || hovered === "dashboard"
                    ? "filter invert-0" // Black icon
                    : "filter invert brightness-0" // White icon
                }`}
              />
              Dashboard
            </Link>
          </li>

          {/* Batches */}
          <li>
            <Link
              to="/batches"
              onMouseEnter={() => setHovered("batches")}
              onMouseLeave={() => setHovered(null)}
              className={`flex items-center text-lg px-4 py-2 rounded transition ${
                location.pathname === "/batches"
                  ? "bg-[#ffffff] text-black"
                  : "text-white hover:bg-[#ffffff] hover:text-black"
              }`}
            >
              <img
                src={batchesImage}
                alt="Batches Icon"
                className={`w-6 h-6 mr-3 object-contain ${
                  location.pathname === "/batches" || hovered === "batches"
                    ? "filter invert-0" // Black icon
                    : "filter invert brightness-0" // White icon
                }`}
              />
              Batches
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
