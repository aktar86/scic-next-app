import React from "react";
import {
  Search,
  ShoppingCart,
  CreditCard,
  Truck,
  Package,
  CheckCircle,
  HeadphonesIcon,
  Shield,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: Search,
      title: "Browse & Discover",
      description:
        "Explore our extensive catalog of premium gadgets and tech products. Use filters and search to find exactly what you need.",
    },
    {
      id: 2,
      icon: ShoppingCart,
      title: "Add to Cart",
      description:
        "Found something you love? Add it to your cart and continue shopping or proceed to checkout whenever you're ready.",
    },
    {
      id: 3,
      icon: CreditCard,
      title: "Secure Checkout",
      description:
        "Complete your purchase with our secure payment system. We accept all major credit cards and digital payment methods.",
    },
    {
      id: 4,
      icon: Package,
      title: "Order Processing",
      description:
        "Our team carefully prepares your order with quality checks to ensure everything is perfect before shipping.",
    },
    {
      id: 5,
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Track your order in real-time as it makes its way to your doorstep. We partner with reliable shipping carriers.",
    },
    {
      id: 6,
      icon: CheckCircle,
      title: "Enjoy Your Gadget",
      description:
        "Unbox your new tech and start enjoying! If you need any help, our support team is always here for you.",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "Your data is protected with industry-standard encryption",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $50 with fast delivery options",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Our team is always ready to help you anytime",
    },
    {
      icon: Package,
      title: "Easy Returns",
      description: "30-day hassle-free return policy on all products",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            How It Works
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Shopping for tech has never been easier. Follow these simple steps
            to get your favorite gadgets delivered to your door.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Simple Steps to Get Started
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From browsing to delivery, we've made the process seamless
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="relative bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-lg transition"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mb-6 mt-4">
                    <Icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>

                  {/* Connector Line (except last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-teal-300 dark:bg-teal-700"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Why Shop With Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We go the extra mile to ensure your shopping experience is
              exceptional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl text-center hover:shadow-lg transition"
                >
                  <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Got questions? We've got answers
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                How long does shipping take?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Standard shipping typically takes 3-5 business days. Express
                shipping options are available for faster delivery (1-2 business
                days).
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We accept all major credit cards (Visa, MasterCard, American
                Express), PayPal, Apple Pay, and Google Pay.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Can I track my order?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes! Once your order ships, you'll receive a tracking number via
                email. You can use it to track your package in real-time.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                What is your return policy?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We offer a 30-day return policy on all products. Items must be
                in original condition with all packaging and accessories.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Are your products authentic?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Absolutely! We only sell 100% authentic products directly from
                authorized distributors and manufacturers.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Do you offer warranty on products?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, all products come with manufacturer's warranty. Extended
                warranty options are also available at checkout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600 dark:bg-teal-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-teal-100 text-lg mb-8">
            Browse our collection and find your perfect tech companion today
          </p>
          <button className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition">
            Start Shopping
          </button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
