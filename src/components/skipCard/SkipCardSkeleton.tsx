const SkipsSkeletons = new Array(6).fill(0);
export const SkipCardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {SkipsSkeletons.map((_val, index) => (
        <div className="bg-white border h-[450px] w-full max-w-sm border-gray-200">
          <div className="py-3 px-4 border-b bg-gray-800 h-12"></div>

          <div className="h-64 w-full bg-gray-200 skeleton-pulse"></div>

          <div className="p-5 border-t border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="h-4 w-32 bg-gray-200 rounded skeleton-pulse"></div>
              </div>
              <div className="text-right">
                <div className="h-8 w-20 bg-gray-200 rounded mb-1 ml-auto skeleton-pulse"></div>

                <div className="h-3 w-16 bg-gray-200 rounded ml-auto skeleton-pulse"></div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="w-full h-12 bg-gray-200 rounded skeleton-pulse"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
