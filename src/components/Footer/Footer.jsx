import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-14 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">GadgetGrove</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Your trusted destination for premium gadgets, accessories, and smart
            technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Customer Service
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">
              Shipping & Returns
            </li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Stay Connected
          </h3>
          <p className="text-sm mb-4">
            Subscribe to get updates on new arrivals & offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              suppressHydrationWarning
              className="w-full px-3 py-2 text-sm rounded-l-md bg-gray-800 dark:bg-gray-900 text-white focus:outline-none"
            />
            <button suppressHydrationWarning className="bg-primary px-4 py-2 text-sm text-white rounded-r-md hover:opacity-90">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 dark:border-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} GadgetGrove. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
            <Mail className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
