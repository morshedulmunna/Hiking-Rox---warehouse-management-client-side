import React from "react";
import useSingleData from "../../Hooks/useSingleData";

const ItemDetails = () => {
  const [singleProducts, setSingleProducts] = useSingleData({});

  console.log(singleProducts);

  return (
    <div>
      <h1> {singleProducts.title} </h1>
    </div>
  );
};

export default ItemDetails;
