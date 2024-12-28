"use client";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <>
      <div
        className={
          navbar
            ? "bg-blueDark navbar py-6 2xl:px-[20rem] px-8 sticky top-0 z-10"
            : "navbar py-6 2xl:px-[20rem] px-8 sticky top-0 z-10"
        }
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-blueDark rounded-box w-52 gap-5 font-primary"
            >
              <li>
                <a>HOME</a>
              </li>
              <li>
                <a>FEATURES</a>
              </li>
              <li>
                <a>PORTFOLIO</a>
              </li>
              <li>
                <a>RESUME</a>
              </li>
              <li>
                <a>BLOG</a>
              </li>
              <li>
                <a>CONTACT</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-primary">Mahedi H Sharif</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-primary">
            <li>
              <a className="text-grayWhite">HOME</a>
            </li>
            <li>
              <a>FEATURES</a>
            </li>
            <li>
              <a>PORTFOLIO</a>
            </li>
            <li>
              <a>RESUME</a>
            </li>
            <li>
              <a>BLOG</a>
            </li>
            <li>
              <a>CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
