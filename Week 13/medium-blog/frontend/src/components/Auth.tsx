import { SignupInput } from "@tanish-singhal/medium-blog-common";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Inputbox } from "./Inputbox";

export const Auth = ({ type }: {type: "signup" | "signin"}) => {
  // This is how we can check, which things are needed by the zod in commom package
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-4xl font-bold">Create an account</h1>

      <h3 className="text-lg mt-3 text-slate-500">
        {type === "signin" ? "Don't have an account?" : "Already have an account?"}
        <Link className="underline pl-1" to={type === "signin" ? "/signup" : "/signin"}>
          {type === "signin" ? "Sign up" : "Sign in"}
        </Link>
      </h3>

      <div className="w-80 mt-6">
        {/* here i add a conditional statement, bed on which i have show or hide the name input box */}
        {type === "signup" ? <Inputbox
          label="Name"
          placeholder="Tanish Singhal"
          onChange={(e) => {
            setPostInputs({
              ...postInputs,
              name: e.target.value,
            });
          }}
        /> : null}

        <Inputbox
          label="Email"
          placeholder="example@gmail.com"
          onChange={(e) => {
            setPostInputs({
              ...postInputs,
              email: e.target.value,
            });
          }}
        />

        <Inputbox
          label="Password"
          type={"password"}
          placeholder="********"
          onChange={(e) => {
            setPostInputs({
              ...postInputs,
              password: e.target.value,
            });
          }}
        />
      </div>

      <button type="button" className="mt-6 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
        {type === "signup" ? "Sign up" : "Sign in"}
      </button>
    </div>
  );
};
