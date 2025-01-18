import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/" style={styles.link}>
                All
              </Link>
            </li>
            <li>
              <Link to="/music">Music</Link>
            </li>
            <li>
              <Link to="/comedy">Comedy</Link>
            </li>
            <li>
              <Link to="/comedy">Drawing</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          {" "}
          <img src={Logo} alt="profile" className="w-28" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/music">Music</Link>
          </li>
          <li>
          <Link to="/comedy">Comedy</Link>
          </li>
          <li>
          <Link to="/drawing">Drawing</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-red-500 text-white">Blog</a>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-around",
    padding: "1rem",
    backgroundColor: "#282c34",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "1.2rem",
  },
};

export default Navbar;
