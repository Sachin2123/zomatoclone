import React from "react";

const Header = () => {
  const NavItems = [
    "Investor Relations",
    "Add Restaurant",
    "Log in",
    "Sign up",
  ];

  return (
    <header className="bg-transparent py-4 px-6 fixed top-0 left-0 right-0 z-10">
      {/* Container */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
        {/* Left Section */}
        <div className="flex items-center">
          <div className="text-white text-lg sm:text-xl font-light cursor-pointer">
            Get the App
          </div>
        </div>

        {/* Right Section */}
        <nav>
          <ul className="hidden md:flex items-center space-x-6">
            {NavItems.map((item, index) => (
              <li
                key={index}
                className="text-white text-sm lg:text-base font-light cursor-pointer hover:text-gray-300 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white cursor-pointer">
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
