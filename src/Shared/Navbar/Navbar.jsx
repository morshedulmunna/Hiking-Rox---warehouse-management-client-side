/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import logo from "../../Images/logo.png";
import userPhoto from "../../Images/user.jpg";
import { Link, Outlet } from "react-router-dom";
import ActiveLink from "../../RouterDOM/ActiveLink/ActiveLink";
import auth from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="bg-gray-50 sticky top-0 z-10 shadow-lg shadow-cyan-500/20">
      <header>
        <div className="relative z-20 border-b bg-white">
          <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-2">
            <div className="flex items-center justify-between">
              <div className="relative z-20">
                <Link to="/">
                  <div className="flex justify-center items-center">
                    <img className="h-12 mr-2" src={logo} alt="logo" />
                    <h2 className="text-2xl font-bold">Hiking RoX</h2>
                  </div>
                </Link>
              </div>

              <div className="flex items-center justify-end border-l lg:border-l-0">
                <input
                  type="checkbox"
                  name="hamburger"
                  id="hamburger"
                  className="peer hidden"
                />
                <label
                  htmlFor="hamburger"
                  className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                  ></div>
                </label>

                <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-white border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                  <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                    <ul className="px-6 pt-32 text-gray-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                      <li>
                        <ActiveLink
                          to="/"
                          className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 "
                        >
                          <span className="relative text-cyan-800 text-base font-medium">
                            Home
                          </span>
                        </ActiveLink>
                      </li>
                      {user && (
                        <>
                          <li>
                            <ActiveLink
                              to="/inventory"
                              className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 "
                            >
                              <span className="relative text-cyan-800 text-base font-medium">
                                Inventory
                              </span>
                            </ActiveLink>
                          </li>
                          <li>
                            <ActiveLink
                              to="/item"
                              className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 "
                            >
                              <span className="relative text-cyan-800 text-base font-medium">
                                My Item
                              </span>
                            </ActiveLink>
                          </li>
                          <li>
                            <ActiveLink
                              to="/add-product"
                              className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 "
                            >
                              <span className="relative text-cyan-800 text-base font-medium">
                                Add Product
                              </span>
                            </ActiveLink>
                          </li>
                        </>
                      )}
                      <li>
                        <ActiveLink
                          to="/about"
                          className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 "
                        >
                          <span className="relative text-cyan-800 text-base font-medium">
                            About
                          </span>
                        </ActiveLink>
                      </li>
                      <li>
                        <ActiveLink
                          to="/blog"
                          className="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 "
                        >
                          <span className="relative text-cyan-800 text-base font-medium">
                            Blog
                          </span>
                        </ActiveLink>
                      </li>
                    </ul>

                    <div className="border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:border-l lg:py-0 lg:pr-0 lg:pl-6">
                      {user ? (
                        <div className="flex justify-center items-center">
                          <img
                            className="h-12 rounded-full cursor-pointer mx-4"
                            src={
                              user.photoURL === null
                                ? userPhoto
                                : user?.photoURL
                            }
                            alt="user photo"
                          />
                          <Link
                            onClick={() => {
                              signOut(auth);
                              toast.warning("Log Out Successfull!");
                            }}
                            to="/login"
                            className="block px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-center text-white"
                          >
                            <button> Log out</button>
                          </Link>
                        </div>
                      ) : (
                        <Link
                          to="/login"
                          className="block px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-center text-white"
                        >
                          <button> Log in</button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Navbar;
