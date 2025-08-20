import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { BsCart4 } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import NavLink from "./NavLink";
import Logo from "./Logo";
import { IoReorderThreeOutline } from "react-icons/io5";
import "./NavStyle.css";

const Nav = () => {
  const [open, setopen] = useState(false);
  const cardRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (!cardRef.current) return;

      if (
        !lineRef.current.contains(event.target) &&
        !cardRef.current.contains(event.target)
      )
        setopen(false);
    };

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <nav className=" flex flex-row justify-between items-center bg-black h-[70px] text-white">
      <span className="w-full flex justify-between items-center">
        <span className="relative md:hidden">
          <IoReorderThreeOutline
            ref={lineRef}
            className=" text-5xl text-white h-[40px] w-[40px] "
            onClick={() => setopen(true)}
          />
          {open && (
            <div
              ref={cardRef}
              className="absolute w-[170px] h-[170px] z-20 bg-white rounded "
            >
              <ul className="pl-4 flex flex-col gap-4 font-sans text-black">
                <li className="font-sans  text-xl border-b border-gray-300 font-medium pt-2 pb-3 cursor-pointer">
                  Home
                </li>
                <li className="font-sans  text-xl border-b border-gray-300 font-medium pb-3 cursor-pointer">
                  Best Seller
                </li>
                <li className="font-sans  text-xl  font-medium  pb-3 cursor-pointer">
                  About
                </li>
              </ul>
            </div>
          )}
        </span>
        <Logo />
        <NavLink />

        <span className="loginCart flex flex-row gap-7 logo h-full   mr-[50px] items-center ">
          <CiLogin className="text-5xl text-white h-[40px] w-[40px]" />
          <BsCart4 className="text-5xl text-white h-[40px] w-[40px]" />
        </span>
      </span>
    </nav>
  );
};

export default Nav;
