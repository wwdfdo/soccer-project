import React from "react";
// import "./BackDrop.css";

function BackDrop(props) {
  const { onCancel } = props;

  return (
    <div
      id="myModal"
      class="modal fixed pt-[200px] left-0 top-0 w-[100%] h-[100%] overflow-auto bg-white bg-opacity-80  "
      onClick={onCancel}
    ></div>
  );
}

export default BackDrop;
