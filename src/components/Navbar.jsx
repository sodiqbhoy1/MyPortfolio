import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);  // Close the menu on click
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 p-5 fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide shadow-md">
          ADAMU BABA SODIQ
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white hover:text-yellow-300 hover:scale-105 transition duration-300">Home</a>
          <a href="#about" className="text-white hover:text-yellow-300 hover:scale-105 transition duration-300">About</a>
          <a href="#skills" className="text-white hover:text-yellow-300 hover:scale-105 transition duration-300">Skills</a>
          <a href="#projects" className="text-white hover:text-yellow-300 hover:scale-105 transition duration-300">Projects</a>
          <a href="#contact" className="text-white hover:text-yellow-300 hover:scale-105 transition duration-300">Contact</a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={handleMenuToggle}
            className="text-white focus:outline-none"
          >
            <svg
              className={`w-7 h-7 ${isMenuOpen ? 'block' : 'hidden'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <svg
              className={`w-7 h-7 ${isMenuOpen ? 'hidden' : 'block'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <a
          href="#home"
          className="block text-white py-3 px-5 hover:bg-gray-800 hover:scale-105 transition duration-300"
          onClick={handleLinkClick}  // Close menu on link click
        >
          Home
        </a>
        <a
          href="#about"
          className="block text-white py-3 px-5 hover:bg-gray-800 hover:scale-105 transition duration-300"
          onClick={handleLinkClick}  // Close menu on link click
        >
          About
        </a>
        <a
          href="#skills"
          className="block text-white py-3 px-5 hover:bg-gray-800 hover:scale-105 transition duration-300"
          onClick={handleLinkClick}  // Close menu on link click
        >
          Skills
        </a>
        <a
          href="#projects"
          className="block text-white py-3 px-5 hover:bg-gray-800 hover:scale-105 transition duration-300"
          onClick={handleLinkClick}  // Close menu on link click
        >
          Projects
        </a>
        <a
          href="#contact"
          className="block text-white py-3 px-5 hover:bg-gray-800 hover:scale-105 transition duration-300"
          onClick={handleLinkClick}  // Close menu on link click
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
