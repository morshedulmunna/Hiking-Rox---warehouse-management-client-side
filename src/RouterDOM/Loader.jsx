import React from "react";
import loader from "../Images/loading.svg";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-60 w-full">
      <img src={loader} alt="" />
    </div>
  );
};

export default Loader;
