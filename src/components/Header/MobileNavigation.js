import React from "react";
import { ImMenu } from "react-icons/im";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

function MobileNavigation({ menus }) {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <ImMenu
      className="text-[30px] absolute right-[3%] top-5 text-white"
      onClick={() => {
        setOpen(!open);
      }}
    />
  );

  const closeIcon = (
    <CgClose
      className="text-[30px] absolute right-[3%] top-5 text-white"
      onClick={() => {
        setOpen(!open);
      }}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <>
      <div
        className={`lg:hidden gap-12 absolute items-center text-md font-semibold flex flex-col mt-3 -top-5 right-0 w-full h-screen py-[20%] ${
          open ? "bg-[#000000] p-5" : ""
        }`}
      >
        {open ? closeIcon : hamburgerIcon}
        {open &&
          menus.map((menu) => (
            <a
              key={menu.id}
              className={`text-[#ffffff] text-lg`}
              href={menu.url}
              onClick={() => closeMobileMenu()}
            >
              {menu.name}
            </a>
          ))}
      </div>
    </>
  );
}

export default MobileNavigation;
