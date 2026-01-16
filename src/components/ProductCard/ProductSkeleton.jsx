import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-2 border dark:border-gray-700 border-gray-300 rounded flex flex-col animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-50 bg-gray-300 dark:bg-gray-700 rounded"></div>

      <div className="flex-1 p-2">
        {/* Price */}
        <div className="h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded mt-3"></div>

        {/* Content */}
        <div className="py-3 space-y-2">
          <div className="h-5 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-4 w-4/5 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      </div>

      {/* Button */}
      <div className="h-10 w-full bg-gray-300 dark:bg-gray-700 rounded mt-2"></div>
    </div>
  );
};

export default ProductSkeleton;
