import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { title, image, discription, _id } = product;

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl h-[90%] mt-12">
        <figure>
          <img className="object-cover" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {title.slice(0, 30)} </h2>
          <p> {discription.slice(0, 100)} </p>
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
