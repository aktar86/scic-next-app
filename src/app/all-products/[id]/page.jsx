import React from "react";

const getSingleProduct = async (id) => {
  const res = await fetch(`http://localhost:5000/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  return res.json();
};

const ProductDetails = async ({ params }) => {
  const { id } = await params;

  const product = await getSingleProduct(id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Product Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const dateAdded = new Date(product.createdAt).toLocaleDateString();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Product Card */}
        <div className=" dark:bg-gray-800 ">
          {/* Image Section - Top */}
          <div className="bg-white py-3  dark:bg-gray-900">
            <div className="relative h-96 md:h-[500px] overflow-hidden m-5 mb-10 bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-800 dark:text-white px-3 py-1 text-sm font-medium">
                  {product.category}
                </span>
              </div>
              {product.stock <= 5 && product.stock > 0 && (
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-500 text-white px-3 py-1 text-sm font-medium">
                    Only {product.stock} left!
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Content Section - Bottom */}
          <div className="p-8 bg-white dark:bg-gray-900">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-medium text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                  {product.brand}
                </span>
                <span className="text-gray-300 dark:text-gray-600">•</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Added {dateAdded}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>

              {/* Rating and Stock */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-current"
                            : "fill-gray-300 dark:fill-gray-600"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400 ml-1">
                    {product.rating}/5.0
                  </span>
                </div>

                <div className="h-4 w-px bg-gray-300 dark:bg-gray-600"></div>

                <span
                  className={`px-3 py-1 text-sm font-medium ${
                    product.stock > 0
                      ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                      : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                  }`}
                >
                  {product.stock > 0
                    ? `${product.stock} in stock`
                    : "Out of stock"}
                </span>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  {product.price} {product.currency}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Description
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                disabled={product.stock === 0}
                className={`flex-1 py-4 px-6 font-semibold text-lg transition-all duration-200 ${
                  product.stock > 0
                    ? "bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    : "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                }`}
              >
                {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
              </button>

              <button className="px-6 py-4 border-2 border-teal-600 text-teal-600 dark:text-teal-400 dark:border-teal-400 font-semibold hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors duration-200">
                <svg
                  className="w-6 h-6 inline mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Wishlist
              </button>
            </div>

            {/* Product Info */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500 dark:text-gray-400">
                    Product ID:
                  </span>
                  <p className="font-mono text-gray-900 dark:text-white">
                    {product._id}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">
                    Category:
                  </span>
                  <p className="text-gray-900 dark:text-white capitalize">
                    {product.category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
