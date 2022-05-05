import React from "react";
import useDataload from "../../Hooks/useDataLoad";

const MyItem = () => {
  const [products, setProducts] = useDataload([]);

  return (
    <div className="lg:container md:container container mx-auto mt-12 ">
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

          {products.map((pd) => {
            const { title, price, quantity, sold, _id } = pd;

            return (
              <>
                <tbody keys={_id}>
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
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm  text-center  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-4 py-1 mr-2"
                      >
                        View Item
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default MyItem;
