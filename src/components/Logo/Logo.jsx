import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="text-3xl font-bold text-gray-900 dark:text-white">
      Gadget<span className="text-teal-500">Grove</span>
    </Link>
  );
};

export default Logo;
