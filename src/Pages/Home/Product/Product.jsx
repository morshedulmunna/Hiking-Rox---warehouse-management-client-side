import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { title, image, discription, _id } = product;

  return (
    <>
      <div className="card w-96 mt-12 h-[100%] ">
        <figure>
          <img className="w-60" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {title} </h2>
          <p> {discription} </p>
          <div className="card-actions justify-end">
            <Link className="btn btn-primary w-full" to={`/product/${_id}`}>
              <button className="text-lg">Product Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
