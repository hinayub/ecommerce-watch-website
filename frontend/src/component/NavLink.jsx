import React from "react";

const NavLink = () => {
  return (
    <ul className="hidden md:flex  sm:gap-4 md:gap-[60px] text-white">
      <li className="font-sans  text-xl">Home</li>
      <li className="font-sans  text-xl">Best Seller</li>
      <li className="font-sans  text-xl">About</li>
    </ul>
  );
};

export default NavLink;
