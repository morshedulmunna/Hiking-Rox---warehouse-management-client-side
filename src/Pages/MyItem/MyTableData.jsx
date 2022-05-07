import React from "react";
import { AiFillDelete } from "react-icons/ai";

const MyTableData = ({ item, handleView, handleDeleteProduct }) => {
  const { title, price, quantity, sold, _id } = item;
  //   console.log(item);
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
      >
        {title}
      </th>
      <td className="px-6 py-4">{_id}</td>
      <td className="px-6 py-4">{quantity}</td>
      <td className="px-6 py-4"> {sold} </td>
      <td className="px-6 py-4"> ${price}</td>
      <td className="px-6 py-4 text-right">
        <button
          onClick={() => handleDeleteProduct(_id)}
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg  px-1 py-1 text-2xl mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          <AiFillDelete />
        </button>
      </td>

      <td className="px-6 py-4 text-right">
        <button
          onClick={() => handleView(_id)}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm  text-center  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-4 py-1 mr-2"
        >
          View Item
        </button>
      </td>
    </tr>
  );
};

export default MyTableData;
