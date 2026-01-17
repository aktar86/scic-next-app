import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-2  border dark:border-gray-700 border-gray-300 rounded flex flex-col hover:-translate-y-2 transform transition-all grope duration-200 ease-in-out ">
      <img
        className="w-full h-50 object-cover"
        src={product.image}
        alt={product.name}
      />

      <div className="flex-1 p-2">
        <p className="pt-3 text-2xl font-bold text-teal-500">
          {product.price} <span className="text-sm">{product.currency}</span>
        </p>

        {/* content  */}
        <div className="py-3  space-y-2">
          <h3 className="text-xl font-bold line-clamp-1">{product.name}</h3>
          <p className="line-clamp-2 text-sm">{product.description}</p>
        </div>
      </div>

      {/* card btn  */}
      <Link
        href={`/all-products/${product._id}`}
        className="px-5 py-2 bg-teal-500 text-white rounded w-full hover:bg-teal-600 transform transition-all duration-200 ease-in-out grope text-center"
      >
        See Details
      </Link>
    </div>
  );
};

export default ProductCard;
