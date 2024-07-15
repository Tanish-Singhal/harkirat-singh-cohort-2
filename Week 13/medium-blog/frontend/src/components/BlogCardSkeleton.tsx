const BlogCardSkeleton = () => {
  return (
    <div className="flex justify-center">
      
    <div className="border-b border-slate-200 pt-10 pb-10 animate-pulse">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
        <div className="h-4 bg-gray-300 w-80 rounded"></div>
        <div className="h-4 bg-gray-300 w-10 rounded"></div> 
        <div className="h-4 bg-gray-300 w-20 rounded"></div>
      </div>

      <div className="pt-3">
        <div className="h-6 bg-gray-300 rounded"></div>
      </div>

      <div className="pt-2">
        <div className="h-20 bg-gray-300 rounded"></div>
      </div>

      <div className="text-slate-400 pt-10 pb-10 text-sm">
        <div className="h-4 bg-gray-300 w-16 rounded"></div>
      </div>
    </div>
    </div>

  );
};

export default BlogCardSkeleton;
