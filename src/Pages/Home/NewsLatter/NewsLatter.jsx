import React from "react";
import newsLatter from "../../../Images/newsLatter.gif";
const NewsLatter = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full lg:flex-row md:flex-col sm:flex-col flex-col px-5">
        <div className="lg:w-[50%] md:w-[80%] sm:w-[80%]">
          <img className="w-[80%]" src={newsLatter} alt="" />
        </div>
        <div className="lg:w-[50%] md:w-[100%] sm:w-[100%]">
          <h1 className="text-5xl font-bold py-2">
            Subscribe to our NewsLetter!
          </h1>
          <p className="text-lg pb-2">
            Subscribe to our newslatter and stay updated.
          </p>
          <div>
            <label
              for="helper-text"
              class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="helper-text"
              aria-describedby="helper-text-explanation"
              class="w-[80%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Email"
            />
            <p
              id="helper-text-explanation"
              class="mt-2 text-sm text-gray-500 dark:text-gray-400 pb-5"
            >
              We'll never share your details.
            </p>
          </div>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Subscribes
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsLatter;
