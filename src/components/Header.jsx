import React, { useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo / Name */}
          <a href="#" className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">
            Param Gupta
          </a>

          {/* Desktop Navigation Links */}
          {/* Desktop Navigation Links */}
        <div className="flex items-center space-x-6">
        {navLinks.map((link) => (
        <a 
          key={link.name}
          href={link.href} 
          className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium rounded-md px-3 py-2 transition-colors duration-300"
        >
        {link.name}
        </a>
  ))}
      </div>

          {/* Mobile Menu Button */}
          <button
            id="mobileMenuButton"
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobileMenu"
          className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden flex-col space-y-2 mt-4`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 nav-link"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
