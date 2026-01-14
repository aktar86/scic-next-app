"use client";

import React, { useState } from "react";
import Logo from "../Logo/Logo";
import NavLink from "./NavLink";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <>
      <li>
        <NavLink href={"/shop"}>Shop</NavLink>
      </li>
      <li>
        <NavLink href={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink href={"/how-it-works"}>How it Works</NavLink>
      </li>
    </>
  );

  return (
    <header className="w-full bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop & Mobile Header */}
        <div className="flex items-center justify-between py-5">
          <Logo />

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6">{links}</ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <button className="text-gray-900 dark:text-white hover:text-teal-500">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col space-y-4">
              {links}
              <li>
                <button className="text-gray-900 dark:text-white hover:text-teal-500">
                  Login
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
