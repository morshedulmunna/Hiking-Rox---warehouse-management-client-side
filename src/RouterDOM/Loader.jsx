import React from "react";
import loader from "../Images/loading.svg";

const Loader = () => {
  return (
    <div className="flex justify-center items-center  w-full h-[100vh]">
      <img src={loader} alt="" />
    </div>
  );
};

export default Loader;
