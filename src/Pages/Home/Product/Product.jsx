import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { title, image, discription, _id } = product;

  return (
    <>
      <div class="card w-96 bg-base-100 shadow-xl h-[100%] mt-12">
        <figure>
          <img className="object-cover" src={image} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title"> {title} </h2>
          <p> {discription.slice(0, 100)} </p>
          <div class="card-actions justify-end">
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
