"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "../Logo/Logo";
import NavLink from "./NavLink";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = () => {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("auth-token="));
      setIsAuthenticated(!!token);
    };

    checkAuth();
    // Check auth status when component mounts and when cookies change
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const handleLogout = () => {
    // Remove auth cookie
    document.cookie = "auth-token=; path=/; max-age=0";
    setIsAuthenticated(false);
    router.push("/");
  };

  const links = (
    <>
      <li>
        <NavLink href={"/shop"}>Shop</NavLink>
      </li>
      <li>
        <NavLink href={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink href={"/howitworks"}>How it Works</NavLink>
      </li>
      {isAuthenticated && (
        <li>
          <NavLink href={"/add-product"}>Add Product</NavLink>
        </li>
      )}
    </>
  );

  return (
    <header className="w-full bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-sm ">
      <div className="max-w-7xl mx-auto px-4 ">
        {/* Desktop & Mobile Header */}
        <div className="flex items-center justify-between py-5">
          <Logo />

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6">{links}</ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="text-gray-900 dark:text-white hover:text-teal-500"
              >
                Logout
              </button>
            ) : (
              <Link
                href={"/login"}
                className="text-gray-900 dark:text-white hover:text-teal-500"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col space-y-4">
              {links}
              <li>
                {isAuthenticated ? (
                  <button
                    onClick={handleLogout}
                    className="text-gray-900 dark:text-white hover:text-teal-500"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="text-gray-900 dark:text-white hover:text-teal-500"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
