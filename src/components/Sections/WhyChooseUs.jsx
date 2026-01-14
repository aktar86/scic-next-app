import { Truck, ShieldCheck, Headphones, Star } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Why Choose Us
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            We deliver quality, reliability, and value you can trust.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Item 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <Truck />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Fast Delivery
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Get your gadgets delivered quickly with our reliable shipping.
            </p>
          </div>

          {/* Item 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <ShieldCheck />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Secure Payments
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Your transactions are protected with top-level security.
            </p>
          </div>

          {/* Item 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <Headphones />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              24/7 Support
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Our support team is always ready to help you anytime.
            </p>
          </div>

          {/* Item 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <Star />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Trusted Quality
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              We offer only tested, top-quality gadgets from trusted brands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
