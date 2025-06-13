"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const newInItems = [
  { id: 1, label: "Chair", imageUrl: "/store-1.svg" },
  { id: 2, label: "Bed", imageUrl: "/store-2.svg" },
  { id: 3, label: "Cupboard", imageUrl: "/store-3.svg" },
  { id: 4, label: "Lighting", imageUrl: "/store-4.svg" },
  { id: 5, label: "Sofa", imageUrl: "/store-1.svg" },
  { id: 6, label: "Desk", imageUrl: "/store-2.svg" },
  { id: 7, label: "Wardrobe", imageUrl: "/store-4.svg" },
];

const NewInStoreSection = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start">
          <div
            className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              New In <br className="hidden sm:inline" /> Store Now
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              Get the latest items immediately with promo prices
            </p>
            <Link
              href="#"
              className="lg:flex items-center text-gray-900 hidden font-semibold hover:text-gray-700 transition-colors duration-200"
            >
              Check All
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <div
            className="w-full md:w-2/3 lg:w-3/4 overflow-x-scroll scrollbar-hide pb-4"
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
          >
            <div className="flex items-center space-x-6 pr-4">
              {newInItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-62 h-80 rounded-lg shadow-md overflow-hidden relative bg-white"
                  data-aos="fade-up"
                  data-aos-delay={item.id * 100}
                  data-aos-duration="400"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.label}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-4 left-4 text-white font-semibold text-xl z-10">
                    {item.label}
                  </div>
                  <div className="absolute inset-0 bg-black/20 z-0"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewInStoreSection;
