"use client";

import axios from "axios";
import { useForm } from "react-hook-form";

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    axios.post("http://localhost:5000/products");
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-zinc-950 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-zinc-800">
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Product Name
            </label>
            <input
              {...register("name", { required: "Product name is required" })}
              placeholder="Gaming Mouse"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-teal-500 outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Brand */}
          <div>
            <label className="block text-sm font-medium mb-1">Brand</label>
            <input
              {...register("brand", { required: "Brand is required" })}
              placeholder="GadgetGrove"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-teal-500 outline-none"
            />
          </div>

          {/* Price & Currency */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Price</label>
              <input
                type="number"
                step="0.01"
                {...register("price", { required: "Price is required" })}
                placeholder="29.99"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-teal-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Currency</label>
              <select
                {...register("currency")}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-teal-500 outline-none"
              >
                <option>USD</option>
                <option>BDT</option>
              </select>
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <input
              {...register("category", { required: true })}
              placeholder="Accessories"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-teal-500 outline-none"
            />
          </div>

          {/* Stock & Rating */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              {...register("stock")}
              placeholder="Stock"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700"
            />
            <input
              type="number"
              step="0.1"
              {...register("rating")}
              placeholder="Rating"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700"
            />
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              {...register("image")}
              placeholder="/images/mouse.jpg"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              rows={4}
              {...register("description", { required: true })}
              placeholder="Product description..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-600 disabled:opacity-50 transition"
          >
            {isSubmitting ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </section>
  );
}
