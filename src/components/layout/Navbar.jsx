"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || isOpen ? 'backdrop-blur-md bg-black/30' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
              FurniShop
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-amber-300 px-3 py-2 text-sm font-medium transition-colors duration-300">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-amber-300 px-3 py-2 text-sm font-medium transition-colors duration-300">
                About
              </Link>
              <Link href="/features" className="text-white hover:text-amber-300 px-3 py-2 text-sm font-medium transition-colors duration-300">
                Features
              </Link>
              <Link href="/contact" className="text-white hover:text-amber-300 px-3 py-2 text-sm font-medium transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className={`px-4 pt-2 pb-4 space-y-1 transition-all duration-500 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
          <div className="backdrop-blur-lg bg-black/50 rounded-lg p-4 mx-2">
            <Link 
              href="/" 
              className="block px-3 py-3 text-lg font-medium text-white hover:text-amber-300 transition-colors duration-300 border-b border-white/10"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-3 text-lg font-medium text-white hover:text-amber-300 transition-colors duration-300 border-b border-white/10"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/features" 
              className="block px-3 py-3 text-lg font-medium text-white hover:text-amber-300 transition-colors duration-300 border-b border-white/10"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-3 text-lg font-medium text-white hover:text-amber-300 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;