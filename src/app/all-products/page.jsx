import ProductCard from "@/components/ProductCard/ProductCard";
import Link from "next/link";
import React from "react";

export const dynamic = "force-dynamic";

const AllProducts = async () => {
  let products = [];
  let error = null;

  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
    const res = await fetch(`${apiUrl}/products`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();
    products = data.products || [];
  } catch (err) {
    console.error("Error fetching products:", err);
    error = err.message;
  }

  // Show error state if fetch failed
  if (error) {
    return (
      <div className="px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-8">
            <svg
              className="w-16 h-16 text-red-500 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Unable to Load Products
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We're having trouble connecting to the server.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded mb-6 text-left">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                <strong>API URL:</strong>{" "}
                {process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}
              </p>
              <p className="text-sm text-red-600 dark:text-red-400">
                <strong>Error:</strong> {error}
              </p>
            </div>
            <div className="space-y-2">
              <Link
                href="/api-test"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors mr-2"
              >
                Test API Connection
              </Link>
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show empty state if no products
  if (products.length === 0) {
    return (
      <div className="px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <svg
            className="w-24 h-24 text-gray-400 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            No Products Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            There are no products available at the moment.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          All Products
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          ({products.length}) Total Products
        </p>
      </div>

      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
