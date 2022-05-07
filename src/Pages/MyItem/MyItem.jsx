import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.config";

const MyItem = () => {
  const [myItem, setMyItem] = useState([]);
  const [user] = useAuthState(auth);

  console.log(myItem);

  useEffect(() => {
    const url = `http://localhost:4000/products/myitem`;
    fetch(url, {
      headers: {
        authorization: `${user?.email} ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMyItem(data));
  }, [user?.email]);
  return (
    <div className="lg:container md:container container mx-auto mt-12 ">
      <p>hello {myItem.length} </p>
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

          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default MyItem;
