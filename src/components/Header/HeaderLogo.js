import React from "react";
import logo from "../../images/logo2.webp";

function HeaderLogo() {
  return (
    <div className="p-2 bg-gradient-to-r  rounded-3xl font-extrabold text-xl text-white">
      <img className="w-[180px]" src={logo} alt="" />
    </div>
  );
}

export default HeaderLogo;
