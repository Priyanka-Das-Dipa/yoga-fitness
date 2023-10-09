import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { CiDumbbell } from "react-icons/ci";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut().then().catch();
  };
  const navLinks = (
    <>
      <li>
        <NavLink className="underline text-orange-300" to="/">
          Home
        </NavLink>
      </li>
     
      <li>
        <NavLink className="underline text-orange-300" to="/blogs">
          Blogs
        </NavLink>
      </li>
      <li>
      <NavLink className="underline text-orange-300" to="/classes">
          Classes
        </NavLink>
      </li>
    </>
  );
//  this is return
  return (
    <div className="max-w-7xl mx-auto">
      
      <div className="navbar text-white bg-transparent">
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
              className="text-black menu text-xl font-medium menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {navLinks}
            </ul>
          </div>
          <a className="hidden font-bold normal-case text-xl md:text-2xl md:flex gap-2">
            <CiDumbbell className="text-orange-400"></CiDumbbell> Yoga & Fitness
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-xl  font-medium menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="hidden md:flex items-center space-x-2">
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="User Profile"
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <span className="text-sm font-semibold">
                  {user.displayName}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="select-none rounded-lg bg-orange-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold text-white shadow-md shadow-orange-500/40 transition-all hover:shadow-lg hover:shadow-orange-800 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none uppercase ml-5"
              >
                Logout
              </button>
            </> 
          ) : (
            <Link
              className=" select-none rounded-lg bg-orange-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold  text-white shadow-md shadow-orange-500/40 transition-all hover:shadow-lg hover:shadow-orange-800 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none uppercase ml-5"
              to="/register"
            >
              SignUp
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
