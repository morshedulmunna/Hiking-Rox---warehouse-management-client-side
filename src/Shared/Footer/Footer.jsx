/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-900">
        <div className="md:container md:mx-auto ">
          <footer className="p-4  rounded-lg shadow md:px-6 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <span
                className="self-center text-2xl font-semibold whitespace-nowrap 
             text-white"
              >
                Hiking RoX
              </span>

              <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0 text-gray-400">
                <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6 ">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6 ">
                    Licensing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span className="block text-sm sm:text-center text-gray-400">
              © 2022{" "}
              <a href="#" className="hover:underline">
                Hiking RoX™
              </a>
              . All Rights Reserved.
            </span>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
