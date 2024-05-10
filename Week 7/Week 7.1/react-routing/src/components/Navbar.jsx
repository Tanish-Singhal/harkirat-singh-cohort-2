import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed flex flex-wrap justify-center items-center top-6 inset-x-0 px-2">
      <nav className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <Link
          to="/"
          className="font-semibold outline-none px-4 py-1 rounded-full text-black"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="font-semibold outline-none px-4 py-1 rounded-full text-black"
        >
          About
        </Link>

        <Link
          to="/dashboard"
          className="font-semibold outline-none px-4 py-1 rounded-full text-black"
        >
          Dashboard
        </Link>

        <Link
          to="/user"
          className="font-semibold outline-none px-4 py-1 rounded-full text-black"
        >
          User
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
