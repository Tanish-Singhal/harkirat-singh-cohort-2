import { useState } from "react";
import { SigninInput } from "@tanish-singhal/medium-blog-common";
import { AuthHeader } from "./AuthHeader";
import { Inputbox } from "./Inputbox";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const AuthSignin = () => {
  const navigate = useNavigate();

  const [postInputs, setPostInputs] = useState<SigninInput>({
    email: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        postInputs
      );
      const { jwt } = response.data; // Extract token from response.data.jwt
      if (jwt) {
        localStorage.setItem("token", jwt);
        navigate("/blogs");
      }
      else {
        alert("Error: Token not found in response");
      }
      
    } catch (e) {
      alert("Error while sign in");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <AuthHeader type="signin" />

      <div className="w-80 mt-6">
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
        Sign in
      </button>
    </div>
  );
};
