import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";

export const Blogs = () => {
  return (
    <div>
      <Appbar />

      <div className="flex justify-center">
        <div className="max-w-4xl px-8">
          <BlogCard
            authorName="Tanish Singhal"
            title="How an Ugly Single-Page Website Make $5,000 a Month with Affiliate Marketing"
            content="This is my first blog. It contains interesting insights and experiences that I have gathered over the years. Stay tuned for more updates and feel free to share your thoughts in the comments section. This is my first blog. It contains interesting insights and experiences that I have gathered over the years. Stay tuned for more updates and feel free to share your thoughts in the comments section.This is my first blog. It contains interesting insights and experiences that I have gathered over the years. Stay tuned for more updates and feel free to share your thoughts in the comments section. This is my first blog. It contains interesting insights and experiences that I have gathered over the years. Stay tuned for more updates and feel free to share your thoughts in the comments section."
            publishedDate="13/07/2024"
          />

          <BlogCard
            authorName="Tanish Singhal"
            title="How an Ugly Single-Page Website Make $5,000 a Month with Affiliate Marketing"
            content="This is my first blog. It contains interesting insights and experiences that I have gathered over the years. Stay tuned for more updates and feel free to share your thoughts in the comments section. This is my first blog. It contains interesting insights and experiences that I have gathered over the years. Stay tuned for more updates and feel free to share your thoughts in the comments section.This is my first blog. It contains interesting insights and experiences that I have gathered over the years. Stay tuned for more updates and feel free to share your thoughts in the comments section. This is my first blog. It contains interesting insights and experiences that I have gathered over the years. Stay tuned for more updates and feel free to share your thoughts in the comments section."
            publishedDate="13/07/2024"
          />

          <BlogCard
            authorName="Tanish Singhal"
            title="How an Ugly Single-Page Website Make $5,000 a Month with Affiliate Marketing"
            content="This is my first blog. It contains interesting insights and experiences that I have gathered over the years. Stay tuned for more updates and feel free to share your thoughts in the comments section. This is my first blog. It contains interesting insights and experiences that I have gathered over the years. Stay tuned for more updates and feel free to share your thoughts in the comments section.This is my first blog. It contains interesting insights and experiences that I have gathered over the years. Stay tuned for more updates and feel free to share your thoughts in the comments section. This is my first blog. It contains interesting insights and experiences that I have gathered over the years. Stay tuned for more updates and feel free to share your thoughts in the comments section."
            publishedDate="13/07/2024"
          />
        </div>
      </div>
    </div>
  );
};
