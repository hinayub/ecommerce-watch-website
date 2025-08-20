import React from "react";
import logo from "../assets/logo.png";
import "./NavStyle.css";

const Logo = () => {
  return (
    <span className="logo flex flex-row gap-2 logo h-full  ml-[50px] items-center  ">
      <img src={logo} alt="logo" className="h-[50px] w-[50px] object-cover" />{" "}
      <span className="font-sans font-bold text-xl">watch</span>
    </span>
  );
};

export default Logo;
