"use client";
import React, { useState } from "react";

const NewsLetterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Here you can call your API to subscribe
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };
  return (
    <form
      onSubmit={handleSubscribe}
      className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full sm:w-auto px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition"
      >
        Subscribe
      </button>
    </form>
  );
};

export default NewsLetterForm;
