import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="navHeader">
        {/* <img src="" alt="" /> */}
        <h4 className="logo"> Hiking RoX</h4>
        <nav id="nav">
          <ul className="nav__links">
            <li>
              <span>Home</span>
            </li>
            <li>
              <span>About</span>
            </li>
            <li>
              <span>blog</span>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          id="navButton"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2  "
        >
          Log in
        </button>
      </header>
    </>
  );
};

export default Navbar;
