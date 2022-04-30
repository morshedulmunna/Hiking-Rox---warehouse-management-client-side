/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import ActiveLink from "../../RouterDOM/ActiveLink/ActiveLink";
import auth from "../../firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <header className="flex justify-end items-center px-[10%] py-3">
        {/* <img src="" alt="" /> */}
        <Link className="logo" to="/">
          <h4> Hiking RoX</h4>
        </Link>
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

          {user ? (
            <div div id="navButton" className="flex items-center">
              <img
                className="h-12 rounded-full cursor-pointer mx-4"
                src={user.photoURL}
                alt="user photo"
              />
              <Link to="/login">
                <button
                  onClick={() => signOut(auth)}
                  type="button"
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2  "
                >
                  Log out
                </button>
              </Link>
            </div>
          ) : (
            <Link id="navButton" to="/login">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2  "
              >
                Log in
              </button>
            </Link>
          )}
        </div>
        <Outlet />
      </header>
    </>
  );
};

export default Navbar;
