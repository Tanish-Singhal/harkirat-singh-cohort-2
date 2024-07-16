import { Link } from "react-router-dom";
import Avatar from "./Avatar";

export const Appbar = () => {
  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link to={"/blogs"}>
          <h1 className="text-2xl font-bold text-gray-800">Bloggy ^_^</h1>
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link to={"/publish"}>
            <button className="text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 font-medium rounded-full text-sm px-5 py-2.5">
              Publish Blog
            </button>
          </Link>
          <Avatar name="Tanish Singhal" size={10} fontsize="md" />
        </div>
      </div>
    </div>
  );
};
