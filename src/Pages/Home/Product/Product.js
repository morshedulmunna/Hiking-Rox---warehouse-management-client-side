import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { title, image, discription, _id } = product;
  return (
    <>
      <div class="card w-96 mt-12 ">
        <figure>
          <img className="w-60" src={image} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title"> {title} </h2>
          <p> {discription} </p>
          <div class="card-actions justify-end">
            <Link class="btn btn-primary w-full" to="/inventory:_id">
              <button>Product Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
