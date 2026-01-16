import ProductCard from "@/components/ProductCard/ProductCard";
import Link from "next/link";
import React from "react";

const getLatestProducts = async () => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    const res = await fetch(`${apiUrl}/products`, {
      cache: "no-store",
    });
    
    if (!res.ok) return [];
    
    const data = await res.json();
    const products = data.products || [];
    
    // Sort by createdAt date (newest first) and take first 6
    const sortedProducts = products
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 6);
    
    return sortedProducts;
  } catch (error) {
    console.error("Failed to fetch latest products:", error);
    return [];
  }
};

const LatestProducts = async () => {
  const latestProducts = await getLatestProducts();

  if (latestProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Arrivals
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Check out our newest products just added to the store
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <Link
              href="/all-products"
              className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-semibold transition-colors duration-200"
            >
              View All
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestProducts.map((product) => (
            <div key={product._id} className="relative">
              {/* New Badge */}
              <div className="absolute top-2 left-2 z-10">
                <span className="bg-green-500 text-white px-2 py-1 text-xs font-semibold">
                  NEW
                </span>
              </div>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm">New products added weekly</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;