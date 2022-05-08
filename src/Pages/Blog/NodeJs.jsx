import React from "react";
import Nodeomg from "../../Images/nodejs.jpg";

const NodeJs = () => {
  return (
    <>
      <div>
        <div>
          <img className="h-[400px] w-full object-cover" src={Nodeomg} alt="" />
        </div>
        <div>
          <h1 className="font-bold text-3xl py-2">
            Difference between javascript and nodejs??
          </h1>

          <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-2">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                  <tr className="">
                    <th scope="col" class="px-6  text-center  w-1/2 text-xl">
                      JavaScript
                    </th>

                    <th scope="col" class="px-6 py-3 text-center w-1/2 text-xl">
                      Node Js
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th class="px-6 py-1 ">
                      1. Javascript is a programming language that is used for
                      writing scripts on the website.{" "}
                    </th>
                    <th class="px-6 py-1 ">
                      1.NodeJS is a Javascript runtime environment.
                    </th>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th class="px-6 py-1 ">
                      2. Javascript can only be run in the browsers.{" "}
                    </th>
                    <th class="px-6 py-1 ">
                      2.We can run Javascript outside the browser with the help
                      of NodeJS.
                    </th>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th class="px-6 py-1 ">3. Cleint Side </th>
                    <th class="px-6 py-1 ">3.Server Side</th>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th class="px-6 py-1 ">
                      4.Javascript is used in frontend development.
                    </th>
                    <th class="px-6 py-1 ">
                      4.Nodejs is used in server-side development.
                    </th>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th class="px-6 py-1 ">
                      5. It is the upgraded version of ECMA script that uses
                      Chrome’s V8 engine written in C++.
                    </th>
                    <th class="px-6 py-1 ">
                      5.Nodejs is written in C, C++ and Javascript.
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

export default NodeJs;
