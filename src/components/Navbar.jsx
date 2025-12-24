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
    <nav className="p-5 dark:bg-black md:px-20 md:py-10">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-bold text-4xl dark:text-red-500">
          Shakya
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              // className={({ isActive }) =>
              //   isActive
              //     ? "text-red-500 font-semibold"
              //     : "hover:text-red-300 transition"
              // }
              className="text-black dark:text-white hover:text-red-500 hover:font-bold transition"
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile button */}
        <button onClick={() => setOpen(!open)} className="text-3xl md:hidden">
          ☰
        </button>

        {/* <ThemeToggle /> */}
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-6 flex flex-col space-y-5 text-center bg-gray-100 p-5 rounded-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-red-500 font-semibold" : "hover:text-red-600"
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
