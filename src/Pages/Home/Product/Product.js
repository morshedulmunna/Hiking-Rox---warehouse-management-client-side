import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <div className="lg:container mx-auto">
        <div className="max-w-sm bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700  shadow-lg shadow-blue-500/50 mt-5 mb-5">
          <img
            className="p-8 rounded-t-lg"
            src="https://m.media-amazon.com/images/I/51fCWDK7DNL._AC_SX679_.jpg"
            alt=""
          />

          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>

            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                $599
              </span>
              <Link
                to="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
