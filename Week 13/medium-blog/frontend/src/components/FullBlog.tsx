import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import Avatar from "./Avatar";

export const FullBlog = ({ blog } : {blog: Blog}) => {
  return (
    <div>
      <Appbar />

      <div className="w-full px-32 grid grid-cols-12 pt-10 pb-5">
        <div className="grid col-span-9 p-6">
          <h1 className="text-5xl font-bold leading-tight">{blog.title}</h1>
          <p className="text-slate-400 mt-6">Post on 2nd December 2023</p>
          <p className="text-slate-500 mt-10 text-lg">{blog.content}</p>
        </div>
        
        <div className="grid col-span-3 p-7 pt-7">
          <div>
            <h4 className="font-semibold">Author</h4>
            <div className="flex justify-center items-center gap-2">
              <div>
                <Avatar name={blog.author.name || "Anonymous"} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mt-4">{blog.author.name || "Anonymous"}</h2>
                <p className="text-slate-400 text-sm mt-2">Random catch phrase about the author's ability to grab the user's attention</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
