import Link from "next/link";
import React from "react";

const NavLink = ({ href, children }) => {
  return <Link href={href} className="text-gray-900 dark:text-white hover:text-teal-500 dark:hover:text-teal-400">{children}</Link>;
};

export default NavLink;
