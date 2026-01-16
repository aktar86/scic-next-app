import ProductCard from "@/components/ProductCard/ProductCard";
import Link from "next/link";
import React from "react";

const getTopProducts = async () => {
  try {
    const res = await fetch("http://localhost:5000/products", {
      cache: "no-store",
    });
    
    if (!res.ok) return [];
    
    const data = await res.json();
    const products = data.products || [];
    
    // Get top 8 products (you can modify this logic based on your needs)
    // For now, we'll take the first 8 products, but you could sort by rating, popularity, etc.
    return products.slice(0, 8);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};

const TopProducts = async () => {
  const topProducts = await getTopProducts();

  if (topProducts.length === 0) {
    return (
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Top Products
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Unable to load products at the moment.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Top Products
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our most popular and highly-rated products that customers love
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {topProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/all-products"
            className="inline-flex items-center px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View All Products
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopProducts;