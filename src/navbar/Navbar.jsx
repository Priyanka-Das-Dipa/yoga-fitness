import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/details'>Details</Link>
      </li>
      <li>
        <Link to='/blogs'>Blogs</Link>
      </li>
      
    </>
  );
  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar text-white">
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
              className="menu text-xl font-medium menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="font-bold normal-case text-2xl">Yoga & Fitness</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-xl font-medium menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
            <Link className="btn font-bold" to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
