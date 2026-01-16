import Link from "next/link";
import React from "react";

const getFeaturedCategories = async () => {
  try {
    const res = await fetch("http://localhost:5000/products", {
      cache: "no-store",
    });
    
    if (!res.ok) return [];
    
    const data = await res.json();
    const products = data.products;
    
    // Extract unique categories with their first product image
    const categoryMap = new Map();
    products.forEach(product => {
      if (!categoryMap.has(product.category)) {
        categoryMap.set(product.category, {
          name: product.category,
          image: product.image,
          count: 1
        });
      } else {
        const existing = categoryMap.get(product.category);
        existing.count += 1;
      }
    });
    
    return Array.from(categoryMap.values()).slice(0, 10);
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return [];
  }
};

const FeaturedCategories = async () => {
  const categories = await getFeaturedCategories();

  if (categories.length === 0) {
    return null;
  }

  return (
    <section className="py-24 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Categories
          </span>
          <h2 className="text-5xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Shop by Category
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Browse through our carefully organized product categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/all-products?category=${encodeURIComponent(category.name)}`}
              className="group block"
            >
              <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800 transition-all duration-500 hover:shadow-2xl">
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold capitalize mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {category.name}
                  </h3>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {category.count} Products
                  </p>
                </div>

                {/* Bottom Label (Always Visible) */}
                <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-800 p-4 transform translate-y-0 group-hover:translate-y-full transition-transform duration-500">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white capitalize text-center">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    {category.count} items
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="mb-8">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Can't find what you're looking for?
            </p>
            <Link
              href="/all-products"
              className="inline-flex items-center px-10 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
            >
              View All Products
              <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;