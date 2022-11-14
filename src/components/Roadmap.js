import React from "react";
import "./Roadmap.css";
import girl from "../images/cartoon-girl.webp";
import parishoots from "../images/parishoots.webp";
import bottle from "../images/bottle.webp";
import lostSurvivors from "../images/lost-survivors.webp";
import speaker from "../images/speaker.webp";
import { IoIosLock } from "react-icons/io";
import backGirl from "../images/back-girl.webp";

function Roadmap() {
  return (
    <>
      <div className="w-[95%] mx-auto pt-[5rem]">
        <div className=" flex flex-col">
          <h1 className="text-[8.75rem] font-extrabold">
            ROAD<span className="text-[#c03540]">MAP*</span>
          </h1>
          <p className="text-[1.3rem] font-semibold ">
            Our vision is to underpromise & overdeliver - after all, this is how
            we succeeded so far.
            <br /> We will be announcing shifts to next phases, when we believe
            it’s the right time to do so.
          </p>
        </div>
        <div className="grid grid-cols-5 mt-12">
          <div className=" bg-gray-200 w-[302px] h-[480px] survivors relative item">
            <svg class="clips">
              <clipPath id="survivors-clip" clipPathUnits="objectBoundingBox">
                <path d="M0,0.042 C0,0.019,0.03,0,0.066,0 H0.934 C0.973,0,1,0.022,1,0.046 L0.839,0.963 C0.836,0.984,0.807,1,0.774,1 H0.066 C0.03,1,0,0.981,0,0.958 V0.042"></path>
              </clipPath>
            </svg>
            <div className=" number animation absolute top-3 left-8">01</div>
            <div className="flex items-center text-2xl font-semibold absolute top-[7rem] left-4 animation survivor-title ">
              <span className="animation flex items-center font-extrabold animation survivor-arrow opacity-0 ">
                &#62;
              </span>
              Survivors
            </div>
            <div className=" absolute bottom-0 right-0 animation survivor-girl">
              <img src={girl} alt="" />
            </div>

            <div className="absolute z-[100] top-0 opacity-0 card-outline ">
              <svg width="302" height="480" viewBox="0 0 302 480" fill="none">
                <path
                  d="M20 1H281.684C292.998 1 301.805 10.827 300.57 22.0739L252.255 462.074C251.197 471.707 243.059 479 233.368 479H20C9.50659 479 1 470.493 1 460V20C1 9.5066 9.50659 1 20 1Z"
                  stroke="#0963F6"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
          </div>
          <div className="relative w-[293px]">
            <div className="bg-[#c03540] item-parishoot w-[314px] h-[283px] item relative">
              <svg class="clips">
                <clipPath id="what-clip" clipPathUnits="objectBoundingBox">
                  <path d="M0.089,0.063 C0.092,0.027,0.12,0,0.153,0 H0.887 C0.921,0,0.949,0.029,0.951,0.066 L1,0.819 C1,0.857,0.979,0.891,0.944,0.895 L0.074,1 C0.032,1,-0.002,0.966,0.002,0.921 L0.089,0.063"></path>
                </clipPath>
              </svg>
              <span className="number absolute left-10 bottom-16 animation">
                02
              </span>
              <div className=" flex items-center text-2xl font-bold tracking-widest absolute bottom-10 left-10 animation atsui-question text-white">
                <span className="animation flex items-center font-[900] animation survivor-arrow opacity-0 ">
                  &#62;
                </span>
                ??????
              </div>
              <div className="absolute -top-10 right-6 parishoots animation">
                <img src={parishoots} className="w-[13rem]" alt="" />
              </div>

              <div className="absolute z-[100] top-0 opacity-0 card-outline ">
                <svg width="314" height="283" viewBox="0 0 311 281" fill="none">
                  <path
                    d="M47.3957 1H274.932C284.879 1 293.142 8.67153 293.88 18.5909L309.569 229.549C310.328 239.766 302.851 248.745 292.666 249.848L22.6833 279.082C10.5976 280.39 0.40876 270.17 1.75466 258.089L28.5125 17.8964C29.5842 8.27652 37.7163 1 47.3957 1Z"
                    stroke="black"
                    stroke-width="2"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="bottle bg-black w-[353px] h-[215px] absolute -left-[1.2rem] -bottom-[3px] item">
              <svg class="clips">
                <clipPath id="atsui-clip" clipPathUnits="objectBoundingBox">
                  <path d="M0.048,0.225 C0.051,0.181,0.072,0.147,0.099,0.142 L0.9,0.001 C0.932,-0.005,0.961,0.034,0.963,0.087 L1,0.899 C1,0.954,0.977,1,0.944,1 H0.058 C0.024,1,-0.002,0.952,0.001,0.896 L0.048,0.225"></path>
                </clipPath>
              </svg>
              <span className="number absolute bottom-12 left-12 animation">
                03
              </span>
              <div className=" flex items-center text-xl font-bold absolute text-white bottom-8 left-8 atsui-house animation">
                <span className="animation flex items-center font-[900] animation survivor-arrow opacity-0 ">
                  &#62;
                </span>
                ATSUI HOUSE
              </div>
              <div className=" absolute bottom-5 w-[10rem] right-4 bottle animation">
                <img src={bottle} alt="" />
              </div>

              <div className="absolute top-0 z-[100] opacity-0 card-outline ">
                <svg width="353" height="215" viewBox="0 0 350 213" fill="none">
                  <path
                    d="M34.5451 31.2072L314.611 1.19091C325.268 0.0487459 334.76 7.94227 335.58 18.6289L348.851 191.546C349.697 202.58 340.973 212 329.906 212H20.392C9.05201 212 0.236911 202.131 1.51256 190.863L17.6904 47.9617C18.6915 39.1188 25.6964 32.1556 34.5451 31.2072Z"
                    stroke="#0963F6"
                    stroke-width="2"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[#c03540] w-[277px] h-[480px] relative fourth-card ml-8 item">
            <svg class="clips">
              <clipPath id="enter-clip" clipPathUnits="objectBoundingBox">
                <path d="M0.002,0.045 C-0.001,0.021,0.033,0,0.075,0 H0.867 C0.906,0,0.939,0.018,0.94,0.04 L1,0.957 C1,0.98,0.97,1,0.929,1 H0.195 C0.157,1,0.125,0.983,0.123,0.961 L0.002,0.045"></path>
              </clipPath>
            </svg>
            <span className="number absolute top-0 left-10 animation">04</span>
            <div className=" flex items-center text-xl font-bold absolute text-white top-[6rem] left-8 atsui-house animation">
              <span className="animation flex items-center font-[900] animation survivor-arrow opacity-0 ">
                &#62;
              </span>
              LOST SURVIVOR
            </div>
            <div className=" absolute w-4/5 right-0 bottom-3 lost-survivor animation">
              <img src={lostSurvivors} alt="" />
            </div>
            <div className="absolute top-0 z-[100] opacity-0 card-outline">
              <svg width="276" height="480" viewBox="0 0 276 480" fill="none">
                <path
                  d="M20.5591 1H239.696C249.927 1 258.322 9.10223 258.684 19.3275L274.267 459.327C274.648 470.078 266.036 479 255.279 479H53.6188C43.6776 479 35.417 471.337 34.6722 461.424L1.61249 21.4236C0.784256 10.4004 9.5048 1 20.5591 1Z"
                  stroke="black"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
          </div>
          <div className=" bg-gray-700 w-[278px]  h-[480px] relative fifth-card ml-6 item">
            <svg class="clips">
              <clipPath id="summit-clip" clipPathUnits="objectBoundingBox">
                <path d="M0.003,0.043 C0.001,0.02,0.035,0,0.077,0 H0.928 C0.972,0,1,0.021,1,0.046 L0.832,0.963 C0.828,0.984,0.796,1,0.758,1 H0.133 C0.093,1,0.06,0.982,0.059,0.96 L0.003,0.043"></path>
              </clipPath>
            </svg>
            <span className="number absolute bottom-10 left-10 animation">
              05
            </span>
            <div className=" flex items-center text-xl font-bold absolute text-white bottom-6 left-8 atsui-house animation">
              <span className="animation flex items-center font-[900] animation survivor-arrow opacity-0 ">
                &#62;
              </span>
              SUMMIT
            </div>
            <div className="absolute w-[97%] left-0 top-4 speaker animation">
              <img src={speaker} alt="" />
            </div>
            <div className="absolute top-0 z-[100] opacity-0 card-outline ">
              <svg width="278" height="480" viewBox="0 0 278 480" fill="none">
                <path
                  d="M20.7202 1H257.741C269.036 1 277.837 10.7951 276.632 22.0258L229.451 462.026C228.416 471.68 220.269 479 210.559 479H36.2901C26.0582 479 17.6638 470.897 17.302 460.672L1.73212 20.6719C1.35172 9.92181 9.9634 1 20.7202 1Z"
                  stroke="#0963F6"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
          </div>
          <div className="bg-gray-500 w-[283px] h-[480px] relative sixth-card -ml-4 item">
            <svg class="clips">
              <clipPath id="partner-clip" clipPathUnits="objectBoundingBox">
                <path d="M0.176,0.037 C0.18,0.016,0.21,0,0.246,0 H0.932 C0.971,0,1,0.019,1,0.042 V0.5 V0.958 C1,0.981,0.971,1,0.932,1 H0.074 C0.032,1,-0.001,0.978,0.003,0.954 L0.176,0.037"></path>
              </clipPath>
            </svg>
            <span className=" absolute top-5 left-[50%] animation text-slate-300">
              <IoIosLock size={48} />
            </span>
            <div className="text-xl font-bold absolute text-white top-16 left-[30%] school-girl animation text-center opacity-0 revealed">
              REVEALED after <br />
              MINT Phase 2
            </div>
            <div className="absolute bottom-8 back-girl animation">
              <img src={backGirl} alt="" />
            </div>
            <div className="absolute top-0 opacity-0  z-[100] card-outline">
              <svg width="283" height="480" viewBox="0 0 283 480" fill="none">
                <path
                  d="M50.528 17.9148C51.5911 8.28685 59.7268 1 69.4132 1H263C273.493 1 282 9.50659 282 20V240V460C282 470.493 273.493 479 263 479H20.8299C9.5109 479 0.7024 469.165 1.94466 457.915L50.528 17.9148Z"
                  stroke="black"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="textslide-w">
        <div className="textslide">
          <span>
            &#62;&#62;&#62;STAGE 01&#62;&#62;&#62;STAGE 01&#62;&#62;&#62;STAGE
            01&#62;&#62;&#62;STAGE 01&#62;&#62;&#62;STAGE 01
          </span>
        </div>
        <div className="textslide textslide2">
          <span>
            &#62;&#62;&#62;STAGE 01&#62;&#62;&#62;STAGE 01&#62;&#62; &#62;STAGE
            01&#62;&#62;&#62;STAGE 01&#62;&#62;&#62;STAGE 01
          </span>
        </div>
      </div>

      <div className="w-[95%] mx-auto">
        <p className="w-2/3 tracking-wider leading-loose text-[#98b4cf]">
          * Shapemap is subject to change, depending on market circumstances.
          This is purely our vision of how a successful web3 brand should be
          developed and our core team is making sure that realistic goals are
          being set to navigate what will shape the future of this space.
        </p>
      </div>
    </>
  );
}

export default Roadmap;
