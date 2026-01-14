import React from "react";
import NewsLetterForm from "../UI/NewsLetterForm";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Get the latest updates on new arrivals, exclusive deals, and tech
          tips.
        </p>

        {/* Form */}
        <NewsLetterForm />
      </div>
    </section>
  );
};

export default Newsletter;
