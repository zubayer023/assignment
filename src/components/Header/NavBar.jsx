import React from "react";

const navItems = [
  { label: "Home", href: "#", isActive: true },
  { label: "Company", href: "#" },
  { label: "Marketplace", href: "#" },
  { label: "Features", href: "#" },
  { label: "Team", href: "#" },
  { label: "Contact", href: "#" },
];

export default function NavBar() {
  return (
    <div
      className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
      id="mobile-menu-2"
    >
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        {navItems.map((Item, id) => (
          <li key={id}>
            <a
              href={Item.href}
              aria-current={Item.isActive ? "page" : null}
              className={`block py-2 pl-3 pr-4 rounded lg:p-0 ${
                Item.isActive
                  ? "text-white bg-purple-700 lg:bg-transparent lg:text-purple-700 dark:text-white"
                  : "text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              }`}
            >
              {Item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
