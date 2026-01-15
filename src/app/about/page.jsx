import React from "react";
import { Target, Users, Award, Zap } from "lucide-react";

const About = () => {
  const brands = [
    "Apple",
    "Samsung",
    "Sony",
    "LG",
    "Dell",
    "HP",
    "Lenovo",
    "Asus",
    "Microsoft",
    "Google",
    "Xiaomi",
    "OnePlus",
    "Huawei",
    "Canon",
    "Nikon",
    "Bose",
    "JBL",
    "Logitech",
    "Razer",
    "Corsair",
    "Apple",
    "Samsung",
    "Sony",
    "LG",
    "Dell",
    "HP",
    "Lenovo",
    "Asus",
    "Microsoft",
    "Google",
    "Xiaomi",
    "OnePlus",
    "Huawei",
    "Canon",
    "Nikon",
    "Bose",
    "JBL",
    "Logitech",
    "Razer",
    "Corsair",
  ];
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-r from-teal-500 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            About GadgetGrove
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Your trusted destination for premium gadgets, accessories, and smart
            technology. We're passionate about bringing innovation to your
            fingertips.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Founded in 2020, GadgetGrove started with a simple mission: to
                make cutting-edge technology accessible to everyone. What began
                as a small online store has grown into a trusted platform
                serving thousands of tech enthusiasts worldwide.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We carefully curate every product in our catalog, ensuring that
                each item meets our high standards for quality, innovation, and
                value. From the latest smartphones to smart home devices, we're
                here to help you discover the perfect tech for your lifestyle.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Today, we're proud to be more than just a store—we're a
                community of tech lovers who believe that great technology
                should enhance every aspect of life.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 h-[400px] flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 text-center">
                [Image Placeholder: Team Photo or Store Image]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These core principles guide everything we do at GadgetGrove
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Quality First
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We only offer products that meet our rigorous quality standards
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Customer Focus
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your satisfaction is our top priority, always
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Trust & Integrity
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Honest pricing, transparent policies, and reliable service
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Staying ahead with the latest tech trends and products
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-teal-600 dark:text-teal-400 mb-2">
                10K+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Happy Customers
              </p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-teal-600 dark:text-teal-400 mb-2">
                500+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Products</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-teal-600 dark:text-teal-400 mb-2">
                50+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Brands</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-teal-600 dark:text-teal-400 mb-2">
                4.8
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Trusted Brands We Carry
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We partner with the world's leading technology brands
            </p>
          </div>

          <div className="relative">
            <div className="flex gap-4 animate-scroll">
              {/* Duplicate brands for seamless loop */}
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="shrink-0 w-45 h-25 bg-white dark:bg-gray-900  flex items-center justify-center hover:shadow-md transition"
                >
                  <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate tech enthusiasts dedicated to bringing you the best
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm">
              <div className="h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">[Photo]</p>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  Alex Johnson
                </h3>
                <p className="text-teal-600 dark:text-teal-400 mb-3">
                  Founder & CEO
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Tech visionary with 15 years of industry experience
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm">
              <div className="h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">[Photo]</p>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  Maria Garcia
                </h3>
                <p className="text-teal-600 dark:text-teal-400 mb-3">
                  Head of Operations
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Ensuring smooth operations and customer satisfaction
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm">
              <div className="h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">[Photo]</p>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  David Chen
                </h3>
                <p className="text-teal-600 dark:text-teal-400 mb-3">
                  Product Specialist
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Curating the best tech products for our customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600 dark:bg-teal-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Join Our Tech Community
          </h2>
          <p className="text-teal-100 text-lg mb-8">
            Stay updated with the latest gadgets, exclusive deals, and tech tips
          </p>
          <button className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition">
            Subscribe to Newsletter
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
