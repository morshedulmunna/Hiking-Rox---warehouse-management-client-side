import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import ActiveLink from "../../RouterDOM/ActiveLink/ActiveLink";

const Navbar = () => {
  return (
    <>
      <header className="flex justify-end items-center px-[10%] py-3">
        {/* <img src="" alt="" /> */}
        <h4 className="logo"> Hiking RoX</h4>
        <div className="flex items-center">
          <nav id="nav">
            <ul className="nav__links">
              <li>
                <ActiveLink to="/">
                  <span>Home</span>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink to="/about">
                  <span>About</span>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink to="/blog">
                  <span>Blog</span>
                </ActiveLink>
              </li>
            </ul>
          </nav>
          <Link id="navButton" to="/login">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2  "
            >
              Log in
            </button>
          </Link>
        </div>
        <Outlet />
      </header>
    </>
  );
};

export default Navbar;
