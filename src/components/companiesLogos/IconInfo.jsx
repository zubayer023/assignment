import React from "react";

export default function IconInfo({ href, children, Icon }) {
  return (
    <>
      <a href={href} className="flex items-center lg:justify-center">
        {Icon && <Icon className="hover:text-gray-900 dark:hover:text-white" />}
        {children}
      </a>
    </>
  );
}
