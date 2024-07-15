const AppbarSkeleton = () => {
  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="w-36 h-10 bg-gray-300 rounded-full animate-pulse"></div> {/* Placeholder for logo/title */}
        <div className="flex items-center space-x-4">
          <div className="w-36 h-10 bg-gray-300 rounded-full animate-pulse"></div> {/* Placeholder for Publish button */}
          <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div> {/* Placeholder for Avatar */}
        </div>
      </div>
    </div>
  );
};

export default AppbarSkeleton;
