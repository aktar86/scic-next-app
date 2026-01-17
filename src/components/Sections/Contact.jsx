import React from "react";
import ContactSupportForm from "../UI/ContactSupportForm";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Have questions or need help? Reach out to our support team anytime.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left: Contact Info */}
          <div className="space-y-6 px-10 flex flex-col justify-center ">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                Email
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                support@gadgetgrove.com
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                Phone
              </h3>
              <p className="text-gray-600 dark:text-gray-400">+1 234 567 890</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                Address
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                123 Tilagor, Sylhet, Bangladesh.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <ContactSupportForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
