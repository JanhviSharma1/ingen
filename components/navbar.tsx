// Navbar.tsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white-300 backdrop-blur-sm shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-3 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-10 font-bold aboreto tracking-wide text-[#495226]">
          <li>
            <a href="#home" className="hover:text-[#F4E432] transition">
              HOME
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#F4E432] transition">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-[#F4E432] transition">
              SERVICES
            </a>
          </li>
          <li>
            <a href="#discover" className="hover:text-[#F4E432] transition">
              DISCOVER
            </a>
          </li>
          <li>
            <a href="#research" className="hover:text-[#F4E432] transition">
              RESEARCH
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
