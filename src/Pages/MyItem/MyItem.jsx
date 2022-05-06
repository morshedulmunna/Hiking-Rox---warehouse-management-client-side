import React from "react";

const MyItem = () => {
  return (
    <div className="lg:container md:container container mx-auto mt-12 ">
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
