import React, { useEffect, useState } from "react";
import useDataload from "../../Hooks/useDataLoad";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../RouterDOM/Loader";
import axios from "axios";
import TabileData from "./TabileData";
import Swal from "sweetalert2";

const Inventory = () => {
  const [products, setProducts] = useDataload([]);
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/product/${id}`);
  };

  // Loading Spinner
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (Object.keys(products).length > 0) {
      setLoading(false);
    }
  }, [products]);

  // Loading ===>
  if (loading) {
    return <Loader />;
  }

  // Delete Method
  const handleDeleteProduct = (id) => {
    const url = `https://evening-escarpment-14046.herokuapp.com/product/${id}`;

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(url)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remainng = products.filter((pd) => pd._id !== id);
              console.log(remainng);
              setProducts(remainng);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div className="lg:container md:container container mx-auto mt-12 ">
      <div className="flex justify-center align-top">
        <Link to="/add-product">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add New Item
          </button>
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 font-bold underline text-base"
              >
                Product name
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold underline text-base"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold underline text-base"
              >
                Quantity
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold underline text-base"
              >
                Sold
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-bold underline text-base"
              >
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((pd) => (
              <TabileData
                key={pd._id}
                pd={pd}
                handleDeleteProduct={handleDeleteProduct}
                handleView={handleView}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
