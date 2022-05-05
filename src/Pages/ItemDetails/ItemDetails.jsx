import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../RouterDOM/Loader";

const ItemDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const [singleProducts, setSingleProducts] = useState({});
  const { image, _id, price, title, supplier, quantity, discription } =
    singleProducts;

  // console.log(singleProducts);

  // Get Data From API
  useEffect(() => {
    const url = `http://localhost:4000/product/${id}`;
    axios
      .get(url)
      .then(function (response) {
        setSingleProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    if (Object.keys(singleProducts).length > 0) {
      setLoading(false);
    }
  }, [id, singleProducts]);

  // On submit
  const handleStock = (e) => {
    e.preventDefault();
    // const inputStock = e.target.stock.value;
    // const newStock = inputStock + quantity;
    const url = `http://localhost:4000/product/${id}`;
    console.log(url);

    const check = {
      check: 2,
    };

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(check),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("User added Succesfully");
        e.target.reset();
      });

    // axios
    //   .put(url, check)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className=" lg:container md:container sm:container sm:flex-col md:flex-row lg:flex-row flex-col mx-auto px-8 flex justify-between  w-full  mt-8 ">
        <div className="lg:w-[60%]  sm:w-[100%] mr-5 mb-8 hr">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 float-right w-auto">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-auto ">
              Delivered
            </span>
          </button>
          <img
            className="lg:w-[50%] sm:w-[100%] md:w-[100%] mx-auto"
            src={image}
            alt=""
          />
          <div className="flex justify-between">
            <p>
              <span className="font-bold">Product ID</span> : {_id}{" "}
            </p>
            <p className="font-bold text-lg"> ${price} </p>
          </div>
          <h1 className="text-2xl font font-bold mb-3"> {title} </h1>
          <p>{discription}</p>
          <div className="flex justify-between items-center mt-5 mb-1">
            <h4 className="font-bold ">Supplier: {supplier}</h4>
            <h4 className="font-bold border-2 border-cyan-600 p-2 rounded-md">
              Stock: {quantity} pis
            </h4>
          </div>
        </div>
        <div className="lg:w-[30%] sm:w-[100%]">
          <h2 className="text-3xl font-bold mb-4">Add Stock Item</h2>
          <form onSubmit={handleStock}>
            <input
              type="search"
              id="search"
              name="stock"
              className="block p-4  w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:text-lg text-lg  "
              placeholder="Input Stock"
              required
            />

            <input
              type="submit"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 mt-4 w-full px-5 py-2.5 cursor-pointer text-lg"
              value="Add New Stock"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
