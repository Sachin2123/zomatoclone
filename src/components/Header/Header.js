import React from "react";

const Header = () => {
  const NavItems = [
    "Investor Relations",
    "Add restraurent",
    "Log in",
    "Sign up",
  ];
  return (
    <div>
      <div>Get the App</div>
      <div>
        {NavItems.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default Header;
