import React, { useState } from "react";
import { CiMenuBurger, CiCircleRemove } from "react-icons/ci";
import { navLinks } from "../constants";

const NavItems = ({ onClick }) => {
  return (
    <ul className="space-y-4 sm:space-y-0 sm:flex sm:space-x-6">
      {navLinks.map(({ id, name, href }) => (
        <li key={id} onClick={onClick}>
          <a href={href} className="text-white hover:text-gray-300 transition-colors text-xl font-semibold">
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/90 text-white z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-5">
          <a href="/" className="text-neutral-400 text-3xl sm:text-5xl hover:text-white transition-colors font-semibold">
            Arpita Arora
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex">
            <NavItems />
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggle} className="sm:hidden">
            {isOpen ? (
              <CiCircleRemove className="h-10 w-10 text-white transition-transform duration-300" />
            ) : (
              <CiMenuBurger className="h-10 w-10 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-40">
            <NavItems onClick={toggle} />
            <button onClick={toggle} className="mt-6 text-white text-xl">
              Close Menu
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
