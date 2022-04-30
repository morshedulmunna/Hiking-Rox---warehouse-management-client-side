/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-900">
        <div class="md:container md:mx-auto ">
          <footer class="p-4  rounded-lg shadow md:px-6 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
              <span
                class="self-center text-2xl font-semibold whitespace-nowrap 
             text-white"
              >
                Flowbite
              </span>

              <ul class="flex flex-wrap items-center mb-6 text-sm sm:mb-0 text-gray-400">
                <li>
                  <a href="#" class="mr-4 hover:underline md:mr-6 ">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" class="mr-4 hover:underline md:mr-6">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="mr-4 hover:underline md:mr-6 ">
                    Licensing
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span class="block text-sm sm:text-center text-gray-400">
              © 2022{" "}
              <a href="#" class="hover:underline">
                Flowbite™
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
