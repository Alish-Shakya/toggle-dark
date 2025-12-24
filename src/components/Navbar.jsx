import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Project", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="p-5 md:px-20 md:py-10 bg-primary dark:bg-secondary">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-bold text-4xl dark:text-red-500">
          Shakya
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-bold"
                  : "text-black dark:text-white hover:text-red-500 transition"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />

          {/* Mobile button */}
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl md:hidden dark:text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-6 flex flex-col space-y-5 text-center p-5 rounded-lg bg-gray-100 dark:bg-gray-900">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-semibold"
                  : "text-black dark:text-white hover:text-red-500"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
