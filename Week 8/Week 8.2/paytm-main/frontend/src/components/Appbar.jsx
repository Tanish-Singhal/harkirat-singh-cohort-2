import React from "react";
import { useNavigate } from "react-router-dom";

export const Appbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // use to remove the token generated from the local storage
    localStorage.removeItem("token");

    navigate("/signin");
  };

  return (
    <>
      <div className="shadow h-14 flex justify-between">
        <h1 className="flex flex-col justify-center h-full ml-4 font-bold">
          PayTM App
        </h1>

        <div className="flex">
          <button
            onClick={handleLogout}
            className="flex flex-col justify-center h-full mr-4"
          >
            logout
          </button>

          <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-full text-xl">U</div>
          </div>
        </div>
      </div>
    </>
  );
};
