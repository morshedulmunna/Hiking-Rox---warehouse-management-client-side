import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.config";
import Loader from "../../RouterDOM/Loader";
import MyTableData from "./MyTableData";

const MyItem = () => {
  const [myItem, setMyItem] = useState([]);
  // console.log(myItem);
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://evening-escarpment-14046.herokuapp.com/products/myitem`;
    fetch(url, {
      headers: {
        authorization: `${user?.email} ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMyItem(data));
  }, [user?.email]);

  const handleView = (id) => {
    navigate(`/product/${id}`);
  };

  // Loading Spinner
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (Object.keys(myItem).length > 0) {
      setLoading(false);
    }
  }, [myItem]);

  // Loading ===>
  if (loading) {
    <Loader />;
  }
  return (
    <div className="lg:container md:container container mx-auto mt-12 ">
      <p className="ml-5 font-bold text-3xl text-fuchsia-600">
        Total Item: {myItem.length}
      </p>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 font-bold  text-base">
                Product name
              </th>
              <th scope="col" className="px-6 py-3 font-bold  text-base">
                ID
              </th>
              <th scope="col" className="px-6 py-3 font-bold  text-base">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 font-bold  text-base">
                Sold
              </th>
              <th scope="col" className="px-6 py-3 font-bold  text-base">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>

          <tbody>
            {myItem?.map((item) => (
              <MyTableData key={item._id} item={item} handleView={handleView} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyItem;
