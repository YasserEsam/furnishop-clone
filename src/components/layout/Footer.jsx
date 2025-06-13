import React from "react";
import Link from "next/link";

// Yasser Esam Alariqi
// Yasser Esam Alariqi

const Footer = () => {
  return (
    <footer className="bg-[#23262F] text-gray-400 pt-12 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section: Logo and Social Icons */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center pb-2">
          <div className="mb-6 md:mb-0">
            <span className="text-white text-2xl font-bold">FurniShop</span>
          </div>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.11 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.4h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.75 2.6 4.75 5.9V24h-4v-8.4c0-2-.04-4.6-2.8-4.6-2.8 0-3.23 2.2-3.23 4.45V24h-4V8z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600 transition-colors duration-200"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.88c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600 transition-colors duration-200"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M24 4.56c-.89.39-1.84.65-2.83.77a4.92 4.92 0 002.15-2.71 9.86 9.86 0 01-3.12 1.2 4.92 4.92 0 00-8.38 4.48A13.95 13.95 0 013 3.15a4.92 4.92 0 001.52 6.56 4.9 4.9 0 01-2.23-.61v.06a4.92 4.92 0 003.95 4.82 4.94 4.94 0 01-2.22.08 4.93 4.93 0 004.6 3.42A9.87 9.87 0 012 19.54a13.93 13.93 0 007.55 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63A10.1 10.1 0 0024 4.56z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600 transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.28 3.44 9.77 8.21 11.36.6.11.82-.26.82-.58 0-.29-.01-1.06-.02-2.09-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.76.08-.75.08-.75 1.22.08 1.87 1.26 1.87 1.26 1.08 1.85 2.84 1.31 3.53 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.85 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.82 1.1.82 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.21.7.83.58C20.57 22.26 24 17.77 24 12.5 24 5.87 18.63.5 12 .5z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600 transition-colors duration-200"
              aria-label="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />
        {/* Navigation Links: Two columns on mobile, then 3, then 5 on larger screens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-y-12">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Our Products
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  The Support Suite
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  The Sales Suite
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  Guide
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Top Features
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  Ticketing System
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  Community Forums
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  Help Desk Software
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  Product Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  Request Demo
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  Library
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  Peoplepower Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  Investors
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Favourite Things
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  For Enterprise
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  For Startups
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  For Benchmark
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-200 text-sm"
                >
                  For Small Business
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright Yasser Esam Alariqi */}
        <div className="text-center text-gray-500 text-xs sm:text-sm mt-12">
          © NanoBrand 2022 - All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
