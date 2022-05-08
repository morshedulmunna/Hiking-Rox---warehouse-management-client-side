import React from "react";
import sqlnosql from "../../Images/sqlvsnosql.png";

const SQLvsNOSQL = () => {
  return (
    <>
      <div className="mt-12">
        <div>
          <h1 className="font-bold text-3xl py-2">
            Difference between javascript and nodejs??
          </h1>
        </div>
        <div>
          <img className=" w-full object-cover" src={sqlnosql} alt="" />
          <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-2">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                  <tr className="">
                    <th scope="col" class="px-6  text-center  w-1/2 text-xl">
                      SQL Database (mySQL)
                    </th>

                    <th scope="col" class="px-6 py-3 text-center w-1/2 text-xl">
                      No SQL Database (MongoDB)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th class="px-6 py-1 text-base">
                      1.RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).
                    </th>
                    <th class="px-6 py-1  text-base">
                      1.Non-relational or distributed database system.
                    </th>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th class="px-6 py-1  text-base">
                      2.These databases have fixed or static or predefined
                      schema.
                    </th>
                    <th class="px-6 py-1  text-base">
                      2.They have dynamic schema.
                    </th>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th class="px-6 py-1  text-base">
                      3.These databases are not suited for hierarchical data
                      storage.
                    </th>
                    <th class="px-6 py-1 text-base ">
                      3.These databases are best suited for hierarchical data
                      storage.
                    </th>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th class="px-6 py-1  text-base">
                      4.These databases are best suited for complex queries.
                    </th>
                    <th class="px-6 py-1  text-base">
                      4.These databases are not so good for complex queries.
                    </th>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th class="px-6 py-1 text-base ">
                      5.Follows ACID property and Vertically Scalable.
                    </th>
                    <th class="px-6 py-1  text-base">
                      5.Follows CAP(consistency, availability, partition
                      tolerance) and Horizontally scalable.
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SQLvsNOSQL;
