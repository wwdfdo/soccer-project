import React from "react";
import "./RoadmapThree.css";

function RoadmapThree() {
  return (
    <div className="w-[95%] mx-auto pt-[5rem]">
      <div class=" grid grid-cols-5 relative ">
        <div className=" relative w-full">
          <div className="first bg-black  h-[280px] w-full border-4 border-blue-700"></div>
        </div>
        <div className=" relative">
          <div className="second bg-red-600 h-[280px] w-full absolute -left-[6%]"></div>
        </div>
        <div>
          <div className="third bg-blue-700 h-[280px] w-full"></div>
        </div>
        <div className="relative">
          <div className="fourth bg-yellow-600 h-[280px] w-full absolute -left-[14%]"></div>
        </div>
        <div className="relative">
          <div className="fifth bg-green-600 h-[280px] w-full absolute -left-[5%] "></div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapThree;
