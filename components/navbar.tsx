"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white/50 backdrop-blur-sm shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-10 font-bold aboreto tracking-wide text-[#495226]">
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
            <a href="#team" className="hover:text-[#F4E432] transition">
              TEAM
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-7 w-7 text-[#495226]" />
          ) : (
            <Menu className="h-7 w-7 text-[#495226]" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/85 shadow-md backdrop-blur-md">
          <ul className="flex flex-col space-y-4 py-6 px-6 font-bold aboreto tracking-wide text-[#495226]">
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
                TEAM
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
