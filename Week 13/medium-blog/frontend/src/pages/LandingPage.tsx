import { Link } from "react-router-dom";
import { LandingAppbar } from "../components/LandingAppbar";

export const LandingPage = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 right-0">
        <LandingAppbar />
      </div>

      <div className="h-full flex justify-center items-center">
        <div className="text-center px-8">
          <h1 className="text-[5rem] font-bold">
            Bloggy: Blog Application :)
          </h1>
          <p className="text-2xl mt-6 font-semibold">
            A place to share knowledge and better understand the world.
          </p>
          <div className="mt-10">
            <Link to="/signup">
              <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
