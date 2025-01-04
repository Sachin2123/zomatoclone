import React from "react";

const Header = () => {
  const NavItems = [
    "Investor Relations",
    "Add restraurent",
    "Log in",
    "Sign up",
  ];
  return (
    <div className="bg-transparent py-4 px-6 fixed top-0 left-0 right-0 z-10">
      <div className="flex  text-xl  items-center justify-between pr-20 pl-20">
        <div className="flex items-center space-x-4">
          <div className="text-white text-xl  cursor-pointer">Get the App</div>
        </div>

        <div className="flex space-x-8">
          {NavItems.map((item, index) => (
            <div key={index} className="text-white cursor-pointer">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
