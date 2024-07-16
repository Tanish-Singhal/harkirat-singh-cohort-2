import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog"
import FullBlogSkeleton from "../components/FullBlogSkeleton";
import { Appbar } from "../components/Appbar";

// selector family/atom family
function Blog() {
  const { id } = useParams();

  const { loading, blog } = useBlog({
    id: id || ""
  });

  if (loading) {
    return (
      <div>
        <Appbar />
        <FullBlogSkeleton />
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