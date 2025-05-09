import React from "react";

export default function Button({ href, lable, target }) {
  return (
    <>
      <a
        href={href}
        target={target}
        className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
      >
        {lable}
      </a>
    </>
  );
}
