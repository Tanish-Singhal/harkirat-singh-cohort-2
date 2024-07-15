import axios from "axios";
import { Appbar } from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <Appbar />

      <div className="px-10">
        <h1 className="text-4xl text-center font-semibold mb-10 mt-10">
          Write the Title and the Content of Your Blog in the Respective Boxes
        </h1>

        <div className="mt-10 max-w-screen-xl mx-auto">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Write the title of the Blog...
            </label>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Title"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Write the content of your Blog...
            </label>
            <textarea
              onChange={(e) => {
                setContent(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-40"
              placeholder="Content"
            />
          </div>

          <button
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog/new`,
                {
                  title: title,
                  content: content,
                  published: true,
                },
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                }
              );
              navigate(`/blog/${response.data.id}`);
            }}
            className="w-full py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700"
          >
            Publish Blog
          </button>
        </div>
      </div>
    </div>
  );
};
