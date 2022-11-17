import React from "react";
import { menus } from "../../arrays/menus";
import HeaderLogo from "./HeaderLogo";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="w-full flex justify-center relative ">
      <div className=" fixed flex justify-between min-h-[60px] items-center w-full lg:px-12 px-2 z-10 bg-black bg-opacity-40">
        <HeaderLogo />
        <Navigation menus={menus} />
        <MobileNavigation menus={menus} />
      </div>
    </div>
  );
}

export default Header;
