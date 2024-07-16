import { Link } from "react-router-dom";

export const LandingAppbar = () => {
  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <Link to={"/blogs"}>
          <h1 className="text-2xl font-bold text-gray-800">Bloggy ^_^</h1>
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link to={"/signin"}>
            <button className="text-black hover:bg-gray-900 border-2 border-black hover:text-white font-medium rounded-full text-sm px-5 py-2.5">
              Login
            </button>
          </Link>
        
          <Link to={"/signup"}>
            <button className="text-white bg-gray-800 border-2 border-transparent hover:bg-white hover:text-black hover:border-black font-medium rounded-full text-sm px-5 py-2.5">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
