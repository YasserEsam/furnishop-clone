"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// Removed motion and AnimatePresence imports as they were from a previous iteration and not in the provided code.

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || isOpen ? "backdrop-blur-md bg-black/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex-shrink-0"
            data-aos="fade-right"
            data-aos-duration="400"
          >
            <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
              FurniShop
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="/"
                className="text-white hover:text-amber-300 px-3 py-2 text-sm font-medium transition-colors duration-300"
                data-aos="fade-down"
                data-aos-delay="100"
                data-aos-duration="600"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-amber-300 px-3 py-2 text-sm font-medium transition-colors duration-300"
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-duration="600"
              >
                About
              </Link>
              <Link
                href="/features"
                className="text-white hover:text-amber-300 px-3 py-2 text-sm font-medium transition-colors duration-300"
                data-aos="fade-down"
                data-aos-delay="300"
                data-aos-duration="600"
              >
                Features
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-amber-300 px-3 py-2 text-sm font-medium transition-colors duration-300"
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-duration="600"
              >
                Contact
              </Link>
            </div>
          </div>

          <div
            className="md:hidden flex items-center"
            data-aos="fade-left"
            data-aos-duration="400"
          >
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div
          className={`px-4 pt-2 pb-4 space-y-1 transition-all duration-500 ease-in-out transform ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <div className="backdrop-blur-lg bg-black/50 rounded-lg p-4 mx-2">
            <Link
              href="/"
              className="block px-3 py-3 text-lg font-medium text-white hover:text-amber-300 transition-colors duration-300 border-b border-white/10"
              onClick={() => setIsOpen(false)}
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="400"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-3 text-lg font-medium text-white hover:text-amber-300 transition-colors duration-300 border-b border-white/10"
              onClick={() => setIsOpen(false)}
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="400"
            >
              About
            </Link>
            <Link
              href="/features"
              className="block px-3 py-3 text-lg font-medium text-white hover:text-amber-300 transition-colors duration-300 border-b border-white/10"
              onClick={() => setIsOpen(false)}
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="400"
            >
              Features
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-3 text-lg font-medium text-white hover:text-amber-300 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="400"
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
