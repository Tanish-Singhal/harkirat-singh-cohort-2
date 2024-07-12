import { Link } from "react-router-dom";

export const AuthHeader = ({ type }: { type: "signup" | "signin" }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold">
        {type === "signup" ? "Create an account" : "Login to your account"}
      </h1>

      <h3 className="text-lg mt-3 text-slate-500">
        {type === "signin"
          ? "Don't have an account?"
          : "Already have an account?"}
        <Link
          className="underline pl-1"
          to={type === "signin" ? "/signup" : "/signin"}
        >
          {type === "signin" ? "Sign up" : "Sign in"}
        </Link>
      </h3>
    </div>
  );
};
