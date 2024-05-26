import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import HambargarMenu from "../../utils/HambargarMenu";
import HambargarCross from "../../utils/HambargarCross";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handlemenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <nav className="mx-auto p-4 bg-amber-400">
        <div className="container mx-auto flex items-center justify-between">
          <a
            href="/"
            aria-label="go to homepage "
            className="focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-9 z-50 hover:opacity-75 transition-opacity"
          >
            <img
              src={logo}
              alt="HomeLogo"
              width={200}
              className="w-48 md:w-64 lg:w-72"
            />
          </a>
          <button
            onClick={handlemenu}
            id="menu"
            className="lg:hidden focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            {menu ? <HambargarMenu /> : <HambargarCross />}
          </button>
          <div
            role="menubar"
            className={`${
              menu ? "hidden" : ""
            } flex flex-col gap-4 absolute z-40 left-0 right-0 top-16 bg-amber-400 shadow-xl items-center text-center text-lg p-6  lg:flex lg:flex-row lg:static lg:shadow-none lg:justify-between lg:w-full`}
          >
            <a
              role="menuitem"
              href="/"
              className="py-1 px-6 dark:text-neutral-900"
            >
              home
            </a>
            <a
              role="menuitem"
              href="/"
              className="py-1 px-6 dark:text-neutral-900 lg:mr-auto"
            >
              contact
            </a>
            <a
              role="menuitem"
              href="/"
              className="py-1 px-6 dark:text-neutral-900"
            >
              login
            </a>
            <a
              role="menuitem"
              href="/"
              className="py-2 px-6 bg-teal-900 text-white rounded-md shadow-xl hover:shadow-none transition-shadow"
            >
              signup
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
