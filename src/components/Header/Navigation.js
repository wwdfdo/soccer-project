import React from "react";

import { Link } from "react-router-dom";

function Navigation({ menus }) {
  return (
    <ul className="lg:flex gap-5 items-center hidden">
      {menus.map((menu) => (
        <Link
          key={menu.id}
          to={menu.url}
          className="focus:text-[#ff33ff] focus:bg-opacity-80 hover:bg-opacity-80 bg-opacity-40  tracking-[.07rem] font-medium text-[1.1rem] px-3 h-7 text-gray-200 hover:text-[#ff33ff] text-center rounded-md flex items-center cursor-pointer"
        >
          <li> {menu.name}</li>
        </Link>
      ))}
    </ul>
  );
}

export default Navigation;
