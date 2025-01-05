import React, { useState } from "react";

const Header = ({ setIsHomeVisible }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const NavItems = [
    "Investor Relations",
    "Add Restaurant",
    "Log in",
    "Sign up",
  ];

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    console.log("Header.js:- ", !isDrawerOpen);
    setIsHomeVisible(!isDrawerOpen); // Toggle Home page visibility
  };

  return (
    <header className="bg-transparent py-4 px-6 absolute top-0 left-0 right-0 z-10">
      {/* Container */}
      <div className="mt-5 flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
        {/* Left Section */}
        <div className="flex items-center sm:block hidden">
          <div
            style={{
              fontSize: "1rem",
              lineHeight: "1.5px",
              fontWeight: "450",
              textAlign: "right",
              color: "rgb(255, 255, 255)",
            }}
          >
            Get the App
          </div>
        </div>

        {/* Right Section */}
        <nav>
          <ul className="hidden md:flex items-center space-x-8">
            {NavItems.map((item, index) => (
              <li
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "1.5px",
                  fontWeight: "350",
                  textAlign: "right",
                  color: "rgb(255, 255, 255)",
                }}
                key={index}
                className="cursor-pointer hover:text-gray-300 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-white cursor-pointer absolute top-4 left-4"
          onClick={toggleDrawer}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className=" fixed inset-0 bg-black bg-opacity-75 z-20 flex justify-end">
          <div className=" w-full bg-white h-full shadow-lg p-6">
            <button className="text-gray-700 mb-6" onClick={toggleDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="flex flex-col space-y-4">
              {NavItems.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-800 text-lg font-medium cursor-pointer hover:text-gray-600"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
