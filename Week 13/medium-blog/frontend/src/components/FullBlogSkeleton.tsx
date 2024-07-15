const FullBlogSkeleton = () => {
  return (
    <div className="w-full px-32 grid grid-cols-12 pt-10 pb-5 animate-pulse">
      <div className="grid col-span-9 p-6">
        <div className="h-16 bg-gray-300 rounded"></div>
        <div className="h-4 mt-6 bg-gray-300 w-40 rounded"></div>
        <div className="h-50 mt-10 bg-gray-300 rounded"></div>
        <div className="h-40 mt-5 bg-gray-300 rounded"></div>
        <div className="h-80 mt-5 bg-gray-300 rounded"></div>
      </div>

      <div className="grid col-span-3 p-7 pt-7">
        <div>
          <div className="flex justify-center items-center gap-2">
            <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
            <div>
              <div className="h-6 bg-gray-300 rounded"></div>
              <div className="h-12 mt-2 bg-gray-300 w-40 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlogSkeleton;
