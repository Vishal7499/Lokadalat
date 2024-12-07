import React, { useState, useRef, useEffect } from "react";
import profileIcon from "../assets/images/iconamoon_profile-light.png";
import logoutIcon from "../assets/images/solar_logout-outline (1).png";

const Navbar = ({ toggleSidebar }) => {
  const [showUserDetails, setShowUserDetails] = useState(window.innerWidth >= 1024); // Default to true for lg screens
  const userDetailsRef = useRef(null); // Reference for user details section

  const userDetails = {
    userID: "23834",
    userLevel: "Admin",
    roleName: "Sarthi Calling Team",
    mobileNo: "749902xxxx",
    lastLogin: "2024-12-01 10:30 AM",
  };

  // Update `showUserDetails` based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowUserDetails(true); // Show user details by default on lg screens
      } else {
        setShowUserDetails(false); // Hide user details for smaller screens
      }
    };

    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle clicks outside the User Details Section for smaller screens
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        window.innerWidth < 1024 && // Only for smaller screens
        userDetailsRef.current &&
        !userDetailsRef.current.contains(event.target) &&
        event.target.id !== "profile-icon"
      ) {
        setShowUserDetails(false); // Close the User Details Section
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleUserDetails = () => {
    if (window.innerWidth < 1024) {
      setShowUserDetails((prev) => !prev); // Toggle user details visibility only for smaller screens
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div className="bg-[#E8F0FF] shadow-md p-4 flex justify-between items-center">
        {/* Hamburger Icon */}
        <button
          className="lg:hidden text-gray-700 text-2xl toggle-btn"
          onClick={() => toggleSidebar(true)}
        >
          &#9776; {/* Hamburger icon */}
        </button>

        {/* Welcome Section with Icon */}
        <div className="flex items-center space-x-2 text-gray-700 text-lg">
          <img
            id="profile-icon"
            src={profileIcon}
            alt="Profile Icon"
            className="w-6 h-6 object-contain cursor-pointer"
            onClick={toggleUserDetails} // Toggle user details on icon click
          />
          <span>Welcome, Sita Yadav!</span>
        </div>

        <div className="flex items-center space-x-2 text-gray-700 text-md">
          <span className="hidden sm:block">logout</span>
          <img
            src={logoutIcon}
            alt="Logout Icon"
            className="w-6 h-6 object-contain"
          />
        </div>
      </div>

      {/* User Details Section */}
      {showUserDetails && (
        <div
          ref={userDetailsRef} // Attach the ref to this section
          className="bg-[#ACC5F1] shadow-inner p-1 text-gray-700 text-sm transition-all duration-300 lg:block"
        >
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-4 ml-4">
            <span>
              UserID: <span className="font-bold">{userDetails.userID}</span>
            </span>
            <span>
              User Level:{" "}
              <span className="font-bold">{userDetails.userLevel}</span>
            </span>
            <span>
              Role Name:{" "}
              <span className="font-bold">{userDetails.roleName}</span>
            </span>
            <span>
              Mobile No:{" "}
              <span className="font-bold">{userDetails.mobileNo}</span>
            </span>
            <span>
              Last Login:{" "}
              <span className="font-bold">{userDetails.lastLogin}</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
