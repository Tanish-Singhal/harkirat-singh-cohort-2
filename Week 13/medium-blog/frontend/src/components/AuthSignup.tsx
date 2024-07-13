import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SignupInput } from "@tanish-singhal/medium-blog-common";
import { AuthHeader } from "./AuthHeader";
import { Inputbox } from "./Inputbox";
import { BACKEND_URL } from "../config";

export const AuthSignup = () => {
  const navigate = useNavigate();

  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        postInputs
      );
      const { jwt } = response.data;
      if (jwt) {
        localStorage.setItem("token", jwt);
        navigate("/blogs");
      }
      else {
        alert("Error: Token not found in response");
      }

    } catch (e) {
      console.error(e);
      alert("Error while signing up");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <AuthHeader type="signup" />

      <div className="w-80 mt-6">
        <Inputbox
          label="Name"
          placeholder="Tanish Singhal"
          onChange={(e) => {
            setPostInputs({
              ...postInputs,
              name: e.target.value,
            });
          }}
        />
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
          type="password"
          placeholder="********"
          onChange={(e) => {
            setPostInputs({
              ...postInputs,
              password: e.target.value,
            });
          }}
        />
      </div>

      <button
        onClick={sendRequest}
        type="button"
        className="mt-6 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        Sign up
      </button>
    </div>
  );
};
