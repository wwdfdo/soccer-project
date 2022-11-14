import React from "react";
import worldbg from "../images/world1.mp4";

function Worldbg() {
  return (
    <div className="relative">
      <video loop autoPlay muted className="w-full h-screen object-cover">
        <source src={worldbg} type="video/mp4" />
      </video>
    </div>
  );
}

export default Worldbg;
