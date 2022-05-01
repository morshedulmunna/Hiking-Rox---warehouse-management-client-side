import React from "react";
import Banner from "./Banner/Banner";
import Product from "./Product/Product";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="lg:container md:container sm:container mx-auto">
        <h1 className="mt-12 ml-4 lg:ml-0 text-4xl font-bold">
          Latest Product
        </h1>
        <div className=" grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  );
};

export default Home;
