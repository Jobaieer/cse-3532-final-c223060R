import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="mx-5 lg:mx-16">
      <div className="navbar bg-base-100 border-b-2">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-1"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#FF1F3D] text-white px-4 py-2 rounded"
                      : "px-4 py-2 bg-[#ff1f3d6c] text-gray-800 hover:bg-[#ff1f3d6c] rounded"
                  }
                >
                  All
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/music"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#FF1F3D] text-white px-4 py-2 rounded"
                      : "px-4 py-2 bg-[#ff1f3d6c] text-gray-800 hover:bg-[#ff1f3d6c] rounded"
                  }
                >
                  Music
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/comedy"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#FF1F3D] text-white px-4 py-2 rounded"
                      : "px-4 py-2 bg-[#ff1f3d6c] text-gray-800 hover:bg-[#ff1f3d6c] rounded"
                  }
                >
                  Comedy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/drawing"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#FF1F3D] text-white px-4 py-2 rounded"
                      : "px-4 py-2 bg-[#ff1f3d6c] text-gray-800 hover:bg-[#ff1f3d6c] rounded"
                  }
                >
                  Drawing
                </NavLink>
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
              <Link to="/sort" className="font-semibold bg-[#25252534]">
                Sort by view
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="px-4 py-1 rounded *: bg-[#FF1F3D] text-white ">
            Blog
          </Link>
        </div>
      </div>
      <div className="navbar bg-base-100 hidden lg:flex  ">
        <div className="navbar-start"></div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#FF1F3D] text-white px-4 py-2 rounded"
                    : "px-4 py-2 bg-[#25252534] text-gray-800 hover:bg-[#ff1f3d6c] rounded"
                }
              >
                All
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/music"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#FF1F3D] text-white px-4 py-2 rounded"
                    : "px-4 py-2 bg-[#25252534] text-gray-800 hover:bg-[#ff1f3d6c] rounded"
                }
              >
                Music
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/comedy"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#FF1F3D] text-white px-4 py-2 rounded"
                    : "px-4 py-2 bg-[#25252534] text-gray-800 hover:bg-[#ff1f3d6c] rounded"
                }
              >
                Comedy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/drawing"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#FF1F3D] text-white px-4 py-2 rounded"
                    : "px-4 py-2 bg-[#25252534] text-gray-800 hover:bg-[#ff1f3d6c] rounded"
                }
              >
                Drawing
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
};

export default Navbar;
