import Avatar from "./Avatar";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  const contentPreview = content.length > 220 ? content.slice(0, 220) + "..." : content;

  return (
    <div className="border-b border-slate-200 pt-10">
      <div className="flex items-center gap-4">
        <Avatar name={authorName} /> 
        <div className="font-semibold text-sm">{authorName}</div>
        <div>.</div>
        <div className="text-slate-400 font-semibold text-sm">{publishedDate}</div>
      </div>

      <div className="pt-3">
        <h1 className="font-extrabold text-xl">{title}</h1>
      </div>
      
      <div className="pt-2">
        <p>{contentPreview}</p>
      </div>
      
      <div className="text-slate-400 pt-10 pb-10 text-sm">
        {`${Math.ceil(content.length / 300)} min read`}
      </div>
    </div>
  );
};
