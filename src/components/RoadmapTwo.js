import React from "react";
import girl from "../images/cartoon-girl.webp";
import monkey1 from "../images/monkey1.png";
import monkey3 from "../images/monkey3.png";
import monkey2 from "../images/monkey2.png";
import monkey4 from "../images/monkey4.png";
import monkey5 from "../images/monkey5.webp";
import monkey6 from "../images/monkey6.png";
import monkey7 from "../images/monkey7.png";
import "./RoadmapTwo.css";

function RoadmapTwo() {
  return (
    <div className="w-[95%] mx-auto pt-[5rem] ">
      <div className="grid gap-3 py-10">
        <div className=" grid grid-cols-[35%_18%_25%_20%] grid-rows-[300px] gap-3 text-white">
          <div className=" bg-black rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl rounded-br-2xl relative item2  overflow-hidden border-4 border-red-700 border-opacity-0 hover:border-opacity-100 animation2">
            <div className=" text-8xl font-extrabold  number2 absolute left-10 animation2">
              01
            </div>
            <div className="flex items-center text-2xl font-semibold absolute top-[7rem] left-4 animation2 survivor-title2  ">
              <span className="animation flex items-center font-extrabold animation survivor-arrow2 opacity-0  ">
                &#62;
              </span>
              Survivors
            </div>
            <div className="absolute w-3/4 survivor-girl-two animation2 -bottom-32 right-0">
              <img src={girl} alt="" />
            </div>
          </div>
          <div className=" bg-blue-900 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl rounded-br-2xl relative item2 overflow-hidden ">
            <div className=" text-8xl font-extrabold  number2 absolute left-10 animation2">
              02
            </div>
            <div className="flex items-center text-2xl font-semibold absolute top-[7rem] left-4 animation2 survivor-title2  ">
              <span className="animation flex items-center font-extrabold animation survivor-arrow2 opacity-0  ">
                &#62;
              </span>
              Survivors
            </div>
            <img
              src={monkey1}
              className="w-3/4 absolute -bottom-10 right-0 survivor-girl-two animation2"
              alt=""
            />
          </div>
          <div className=" bg-gray-700 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl rounded-br-2xl relative item2 overflow-hidden">
            <div className=" text-8xl font-extrabold  number2 absolute left-10 animation2">
              03
            </div>
            <div className="flex items-center text-2xl font-semibold absolute top-[7rem] left-4 animation2 survivor-title2  ">
              <span className="animation flex items-center font-extrabold animation survivor-arrow2 opacity-0  ">
                &#62;
              </span>
              Survivors
            </div>
            <img
              src={monkey3}
              className="w-1/2 absolute bottom-0 right-0 survivor-girl-two animation2"
              alt=""
            />
          </div>
          <div className=" bg-[#c03540] rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl rounded-br-2xl relative item2 overflow-hidden">
            <div className=" text-8xl font-extrabold  number2 absolute left-10 animation2">
              04
            </div>
            <div className="flex items-center text-2xl font-semibold absolute top-[7rem] left-4 animation2 survivor-title2  ">
              <span className="animation flex items-center font-extrabold animation survivor-arrow2 opacity-0  ">
                &#62;
              </span>
              Survivors
            </div>
            <img
              src={monkey2}
              className=" absolute bottom-0 -right-[15%] survivor-girl-two animation2"
              alt=""
            />
          </div>
        </div>
        <div className=" grid grid-cols-[28%_40%_18%_12%] grid-rows-[400px] gap-2 text-white">
          <div className=" bg-black rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl rounded-br-2xl relative item2 overflow-hidden">
            <div className=" text-8xl font-extrabold  number2 absolute left-10 animation2">
              05
            </div>
            <div className="flex items-center text-2xl font-semibold absolute top-[7rem] left-4 animation2 survivor-title2  ">
              <span className="animation flex items-center font-extrabold animation survivor-arrow2 opacity-0  ">
                &#62;
              </span>
              Survivors
            </div>
            <img
              src={monkey4}
              className="w-3/4 absolute bottom-0 right-0 survivor-girl-two animation2"
              alt=""
            />
          </div>
          <div className=" bg-[#c03540] rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl rounded-br-2xl relative item2 overflow-hidden">
            <div className=" text-8xl font-extrabold  number2 absolute left-10 animation2">
              06
            </div>
            <div className="flex items-center text-2xl font-semibold absolute top-[7rem] left-4 animation2 survivor-title2  ">
              <span className="animation flex items-center font-extrabold animation survivor-arrow2 opacity-0  ">
                &#62;
              </span>
              Survivors
            </div>
            <img
              src={monkey5}
              className="w-3/4 absolute bottom-0 right-[10%] survivor-girl-two animation2"
              alt=""
            />
          </div>
          <div className=" bg-blue-900 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl rounded-br-2xl relative item2 overflow-hidden">
            <div className=" text-8xl font-extrabold  number2 absolute left-10 animation2">
              07
            </div>
            <div className="flex items-center text-2xl font-semibold absolute top-[7rem] left-4 animation2 survivor-title2  ">
              <span className="animation flex items-center font-extrabold animation survivor-arrow2 opacity-0  ">
                &#62;
              </span>
              Survivors
            </div>
            <img
              src={monkey6}
              className="w-3/4 absolute bottom-0 right-0 survivor-girl-two animation2"
              alt=""
            />
          </div>
          <div className=" bg-slate-700 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl rounded-br-2xl relative item2 overflow-hidden">
            <div className=" text-8xl font-extrabold  number2 absolute left-10 animation2">
              08
            </div>
            <div className="flex items-center text-2xl font-semibold absolute top-[7rem] left-4 animation2 survivor-title2  ">
              <span className="animation flex items-center font-extrabold animation survivor-arrow2 opacity-0  ">
                &#62;
              </span>
              Survivors
            </div>
            <img
              src={monkey7}
              className=" w-3/4 absolute bottom-0 right-0 survivor-girl-two animation2"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapTwo;
