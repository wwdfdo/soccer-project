import React from "react";
import { FaUser } from "react-icons/fa";

import { useContext } from "react";

import { Link } from "react-router-dom";
import AuthContext from "../store/auth-context";

function Navigation() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <ul className="lg:flex gap-5 items-center hidden">
      {/* {menus.map((menu) => (
        <Link
          key={menu.id}
          to={menu.url}
          className="focus:text-[#ff33ff] focus:bg-opacity-80 hover:bg-opacity-80 bg-opacity-40  tracking-[.07rem] font-medium text-[1.1rem] px-3 h-7 text-gray-200 hover:text-[#ff33ff] text-center rounded-md flex items-center cursor-pointer"
        >
          <li> {menu.name}</li>
        </Link>
      ))} */}
      {!isLoggedIn && (
        <Link
          to="/"
          className="focus:text-[#ff33ff] focus:bg-opacity-80 hover:bg-opacity-80 bg-opacity-40  tracking-[.07rem] font-medium text-[1.1rem] px-3 h-7 text-gray-200 hover:text-[#ff33ff] text-center rounded-md flex items-center cursor-pointer"
        >
          <li>Home</li>
        </Link>
      )}
      {!isLoggedIn && (
        <Link
          to="/gallery"
          className="focus:text-[#ff33ff] focus:bg-opacity-80 hover:bg-opacity-80 bg-opacity-40  tracking-[.07rem] font-medium text-[1.1rem] px-3 h-7 text-gray-200 hover:text-[#ff33ff] text-center rounded-md flex items-center cursor-pointer"
        >
          <li>FIFA Battles</li>
        </Link>
      )}
      {!isLoggedIn && (
        <Link
          to="/worldbg"
          className="focus:text-[#ff33ff] focus:bg-opacity-80 hover:bg-opacity-80 bg-opacity-40  tracking-[.07rem] font-medium text-[1.1rem] px-3 h-7 text-gray-200 hover:text-[#ff33ff] text-center rounded-md flex items-center cursor-pointer"
        >
          <li>Matches</li>
        </Link>
      )}
      {!isLoggedIn && (
        <Link
          to="/roadmap"
          className="focus:text-[#ff33ff] focus:bg-opacity-80 hover:bg-opacity-80 bg-opacity-40  tracking-[.07rem] font-medium text-[1.1rem] px-3 h-7 text-gray-200 hover:text-[#ff33ff] text-center rounded-md flex items-center cursor-pointer"
        >
          <li>Features</li>
        </Link>
      )}
      {!isLoggedIn && (
        <Link
          to="/roadmapTwo"
          className="focus:text-[#ff33ff] focus:bg-opacity-80 hover:bg-opacity-80 bg-opacity-40  tracking-[.07rem] font-medium text-[1.1rem] px-3 h-7 text-gray-200 hover:text-[#ff33ff] text-center rounded-md flex items-center cursor-pointer"
        >
          <li>Shop</li>
        </Link>
      )}
      {!isLoggedIn && (
        <Link
          to="/roadmapThree"
          className="focus:text-[#ff33ff] focus:bg-opacity-80 hover:bg-opacity-80 bg-opacity-40  tracking-[.07rem] font-medium text-[1.1rem] px-3 h-7 text-gray-200 hover:text-[#ff33ff] text-center rounded-md flex items-center cursor-pointer"
        >
          <li>Contacts</li>
        </Link>
      )}
      {!isLoggedIn && (
        <Link
          to="/login"
          className="focus:text-[#ff33ff] focus:bg-opacity-80 hover:bg-opacity-80 bg-opacity-40  tracking-[.07rem] font-medium text-[1.1rem] px-3 h-7 text-gray-200 hover:text-[#ff33ff] text-center rounded-md flex items-center cursor-pointer"
        >
          <li>
            <FaUser size={20} />
          </li>
        </Link>
      )}
      {isLoggedIn && (
        <Link className="focus:text-[#ff33ff] focus:bg-opacity-80 hover:bg-opacity-80 bg-opacity-40  tracking-[.07rem] font-medium text-[1.1rem] px-3 h-7 text-gray-200 hover:text-[#ff33ff] text-center rounded-md flex items-center cursor-pointer">
          <li onClick={logoutHandler}>Logout</li>
        </Link>
      )}
    </ul>
  );
}

export default Navigation;
