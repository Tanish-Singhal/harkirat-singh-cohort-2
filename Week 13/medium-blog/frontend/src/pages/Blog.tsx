import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog"

// selector family/atom family
function Blog() {
  const { id } = useParams();

  const { loading, blog } = useBlog({
    id: id || ""
  });

  if (loading) {
    return (
      <div>
        <h1 className="flex justify-center items-center text-lg font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      {/* @ts-ignore */}
      <FullBlog blog={blog} />
    </div>
  )
}

export default Blog