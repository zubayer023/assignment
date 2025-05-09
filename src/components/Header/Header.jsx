import React from "react";

import Button from "./Button";
// Adjust the path as necessary
import Logo from "./Logo";
import NavBar from "./NavBar";
import logoImg from "/src/assets/logo.svg"; // Adjust the path as necessary

export default function Header() {
  return (
    <header className="fixed w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Logo img={logoImg} title="Learn with Sumit" alt="Logo" href="#" />
          <NavBar />
          <div className="flex items-center lg:order-2">
            <Button href="#" lable="Download" target="_blank" />
          </div>
        </div>
      </nav>
    </header>
  );
}
