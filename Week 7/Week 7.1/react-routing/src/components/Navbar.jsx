import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed flex flex-wrap justify-center items-center top-6 inset-x-0 px-2">
      <nav className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <NavLink
          to="/"
          className={({ isActive }) =>`${isActive ? "bg-indigo-500 text-white" : ""}
           font-semibold outline-none px-4 py-1 rounded-full text-black`
          }
        >
          Home
        </NavLink>
        
        <NavLink
          to="/about"
          className={({ isActive }) =>`${isActive ? "bg-indigo-500 text-white" : ""}
           font-semibold outline-none px-4 py-1 rounded-full text-black`
          }
        >
          About
        </NavLink>
        
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>`${isActive ? "bg-indigo-500 text-white" : ""}
           font-semibold outline-none px-4 py-1 rounded-full text-black`
          }
        >
          Dashboard
        </NavLink>
        
        <NavLink
          to="/user"
          className={({ isActive }) =>`${isActive ? "bg-indigo-500 text-white" : ""}
           font-semibold outline-none px-4 py-1 rounded-full text-black`
          }
        >
          User
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
