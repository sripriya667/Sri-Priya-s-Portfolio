import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    // Close menu after clicking a link (important for mobile)
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

           {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 cursor-pointer"
            
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Code className="text-white text-sm" size={16} />
            </div>
            <span className="text-xl font-bold text-gray-900">Sri Priya</span>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <span className="text-2xl">&times;</span> // X icon
              ) : (
                <span className="text-2xl">&#9776;</span> // ☰ icon
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <a
            href="#home"
            onClick={handleLinkClick}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={handleLinkClick}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={handleLinkClick}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;