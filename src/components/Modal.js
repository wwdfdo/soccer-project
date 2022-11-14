import React from "react";
// import "./Modal.css";

import { BiFace } from "react-icons/bi";

import { AiFillEye } from "react-icons/ai";

function Modal(props) {
  const { bgcolor, modalImg, modalSrialNo, modalobj } = props;

  return (
    <div className="flex justify-center items-center relative">
      <div
        className={` w-[76%] ${bgcolor} flex justify-between fixed top-[12%] bottom-[12%] z-50 rounded-2xl `}
      >
        <img src={modalImg} className="max-w-full rounded-2xl" alt="" />
        <div className="w-2/3 flex flex-col justify-between px-10 py-8">
          <div className="w-full  flex items-center bg-black bg-opacity-10 py-2 px-4 gap-3 rounded-lg text-white font-semibold">
            <span className=" text-4xl opacity-30">#</span>
            <div className=" flex flex-col">
              <span className="text-sm opacity-30">AZUKI</span>
              <span className="text-xl font-bold">
                {modalSrialNo} <span className=" opacity-30">//</span>
              </span>
            </div>
          </div>
          <div className=" grid grid-cols-2 grid-rows-4 gap-4 text-[0.725rem] font-bold text-black">
            {modalobj.map((item) => (
              <div className=" bg-white bg-opacity-10 rounded-lg py-2 px-4 flex items-center gap-2">
                <div>{item.icon}</div>
                <div className="flex flex-col">
                  <span className="opacity-30">{item.category}</span>
                  <span>{item.type}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full  flex justify-between items-center bg-black bg-opacity-10 px-4 py-3 gap-5 rounded-lg text-white ">
            <div>view on :</div>
            <div className="flex gap-2">
              <div>
                <AiFillEye size={24} />
              </div>
              <div>
                <BiFace size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
