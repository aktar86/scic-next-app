import ProductCard from "@/components/ProductCard/ProductCard";
import Link from "next/link";
import React from "react";

export const dynamic = "force-dynamic";

const AllProducts = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  const products = data.products;

  return (
    <div className="px-4">
      <div className="mb-5">
        <h1 className="text-4xl font-bold">All Products </h1>
        <p>({products.length}) Total Products</p>
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
