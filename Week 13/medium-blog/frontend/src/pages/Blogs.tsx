import { Appbar } from "../components/Appbar";
import AppbarSkeleton from "../components/AppbarSkeleton";
import { BlogCard } from "../components/BlogCard";
import BlogCardSkeleton from "../components/BlogCardSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <AppbarSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
      </div>
    );
  }

  return (
    <div>
      <Appbar />

      <div className="flex justify-center">
        <div className="max-w-4xl px-8">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate="13/07/2024"
            />
          ))}
        </div>
      </div>
    </div>
  );
};