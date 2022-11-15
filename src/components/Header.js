import React from "react";
import logo from "../images/logo2.webp";
import { menus } from "../arrays/menus";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full flex justify-center">
      <div className=" fixed flex justify-between min-h-[100px] items-center w-[95%] mx-auto z-10  ">
        <div className="p-2 bg-gradient-to-r  rounded-3xl font-extrabold text-xl text-white">
          <img className="w-[180px]" src={logo} alt="" />
        </div>
        <ul className="flex gap-5 items-center">
          {menus.map((menu) => (
            <Link
              to={menu.url}
              className="focus:underline focus:bg-opacity-80 hover:bg-opacity-80 bg-opacity-40  tracking-[.1825rem] font-medium text-[1.1rem] px-3 h-7 text-gray-200 hover:text-[#ff0000] text-center rounded-md flex items-center cursor-pointer"
            >
              <li> {menu.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
