import React, { useState, useEffect } from "react";
import { HiCollection } from "react-icons/hi";
import { HiUserGroup } from "react-icons/hi";
import { TiArrowRepeat } from "react-icons/ti";
import { BsArrowRightShort } from "react-icons/bs";
import Gvideo from "../images/tbagus.mp4";
import { nfts } from "../../src/arrays/products";
import { GoSearch } from "react-icons/go";
import QsectionAccordion from "./QsectionAccordion";
import Modal from "./Modal";
import BackDrop from "./BackDrop";
import { QuestionArray } from "../arrays/questionsArray";

function Gallery() {
  const [openModal, setOpenModal] = useState(false);
  const [modalColor, setModalColor] = useState();
  const [modalImg, setModalImg] = useState();
  const [modalSrialNo, setModalSrialNo] = useState();
  const [modalobj, setModalObj] = useState();
  const [selectedCatogory, setSelectedCatogory] = useState();
  const [produts, setProducts] = useState([]);
  const [productCatogories, setProductCatogories] = useState([]);
  const [filteredCatogryName, setFilteredCatogoryName] = useState();

  const modalHandler = (bgcolor, modalImg, modalSrialNo, modalobj) => {
    setOpenModal(true);
    setModalColor(bgcolor);
    setModalImg(modalImg);
    setModalSrialNo(modalSrialNo);
    setModalObj(modalobj);
  };

  const cancelHandler = () => {
    setOpenModal(false);
  };

  const handleFilter = (choosedProduct) => {
    setSelectedCatogory(choosedProduct);
    setFilteredCatogoryName(choosedProduct.batch);
  };

  useEffect(() => {
    const allCatogories = [
      { id: "", qtitle: "All Players", icon: <HiUserGroup size={22} /> },
      ...QuestionArray,
    ];
    setProducts(nfts);
    setProductCatogories(allCatogories);
  }, []);

  const filtered =
    selectedCatogory && selectedCatogory.batch
      ? produts.filter((m) => m.batch === selectedCatogory.batch)
      : produts;

  return (
    <div className=" bg-[#40085b] pb-10">
      <div className="flex w-[95%] mx-auto justify-between pt-[5rem]">
        <section className="lg:flex flex-col gap-2 mt-4 w-[22%] hidden ">
          <h2 className="text-2xl font-bold pb-9 border-b-[.0825rem] border-black border-opacity-10 text-white">
            FILTER
          </h2>
          <div className="text-white font-bold text-md border-b-[.0825rem] border-black border-opacity-10 pb-2 pt-5 ">
            GOLDEN MODE
          </div>

          <form className="flex items-center border-b-[.0825rem] border-black border-opacity-10 py-3">
            <button>
              <GoSearch size={24} className="text-white" />
            </button>
            <input
              className=" pl-2 outline-none rounded-lg text-lg ml-5"
              type="search"
              id="site-search"
              name="q"
              placeholder="Search by serial..."
            />
          </form>
          <div>
            <QsectionAccordion
              onFilter={handleFilter}
              productCatogories={productCatogories}
              filteredCatogryName={filteredCatogryName}
            />
          </div>
        </section>
        <section className="flex  flex-col lg:w-[75%] w-full">
          <div className="flex justify-between items-center border-b-[.0825rem] border-black border-opacity-10 pb-8">
            <div className="flex bg-gray-300 p-2 gap-2 rounded-lg text-lg font-bold">
              <button className=" bg-gray-400 w-20 p-1 rounded-lg focus:bg-slate-200">
                AZUKI
              </button>
              <button className=" bg-gray-400 w-20 p-1 rounded-lg focus:bg-slate-200">
                BEANZ
              </button>
            </div>
            <div className="flex gap-5 items-center">
              <p className="text-4xl text-gray-400 flex items-center">1000</p>
              <div className="flex gap-4 items-center">
                <button className="bg-gray-400 lg:flex items-center p-2 rounded-lg text-sm gap-2 font-semibold hidden">
                  {" "}
                  <span>
                    <HiCollection />
                  </span>{" "}
                  MY COLLECTION
                </button>
                <button className="bg-gray-400 flex items-center p-2 rounded-lg">
                  <TiArrowRepeat size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="lg:flex bg-[#282733] w-full rounded-lg mt-10 hidden">
            <video
              loop
              autoplay="autoPlay"
              muted
              className="w-[180px]  rounded-bl-md rounded-tl-md object-cover"
            >
              <source src={Gvideo} type="video/mp4" />
            </video>

            <div className=" py-2  px-12 flex flex-col justify-center gap-2 ">
              <h2 className="text-4xl font-extrabold text-white">
                FIND YOUR SIDEKICK
              </h2>
              <p className="text-white font-semibold">
                You can now pair your BEANZ to your Azukis. Head over to your
                Collection, click on any Azuki, and then Pair BEANZ. Note:
                pairing does not update your metadata or change either NFT.
              </p>
              <button className="flex items-center bg-white rounded-md p-1 text-xs font-bold mt-4 w-24">
                PAIR NOW{" "}
                <span>
                  <BsArrowRightShort size={24} />
                </span>
              </button>
            </div>
          </div>
          <div className="grid lg:grid-cols-5 grid-cols-2 gap-4 mt-5">
            {filtered.map((nft) => (
              <div
                key={nft.id}
                onClick={() =>
                  modalHandler(nft.bgcolor, nft.name, nft.serialno, nft.obj)
                }
              >
                <img className=" rounded-md" src={nft.name} alt="" />
                <div className="flex flex-col items-center mt-2 text-white">
                  <p className="text-sm font-bold">{nft.title}</p>
                  <p className="text-sm font-bold">{nft.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      {openModal && (
        <Modal
          bgcolor={modalColor}
          modalImg={modalImg}
          modalSrialNo={modalSrialNo}
          modalobj={modalobj}
        />
      )}
      {openModal && <BackDrop onCancel={cancelHandler} />}
    </div>
  );
}

export default Gallery;
