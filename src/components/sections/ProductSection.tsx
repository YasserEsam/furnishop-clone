"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/ui/ProductCard";
import Pagination from "@/components/ui/Pagination";

const productsData = [
  // Page 1 Products
  { id: 1, name: "Modern Floor Lamp", imageUrl: "/product-1.svg", oldPrice: 75.0, newPrice: 62.0 },
  { id: 2, name: "Ergonomic Office Chair", imageUrl: "/product-2.svg", oldPrice: 50.0, newPrice: 70.0 },
  { id: 3, name: "Stylish Wardrobe", imageUrl: "/product-3.svg", oldPrice: 105.0, newPrice: 120.0 },
  { id: 4, name: "Luxury King Bed", imageUrl: "/product-4.svg", oldPrice: 82.0, newPrice: 100.0 },
  { id: 5, name: "Sleek Media Console", imageUrl: "/product-5.svg", oldPrice: 200.0, newPrice: 210.0 },
  { id: 6, name: "Designer Coffee Table", imageUrl: "/product-6.svg", oldPrice: 45.0, newPrice: 50.0 },
  { id: 7, name: "Gaming Desk Pro", imageUrl: "/product-7.svg", oldPrice: 320.0, newPrice: 325.0 },
  { id: 8, name: "Baby Crib Convertible", imageUrl: "/product-8.svg", oldPrice: 225.0, newPrice: 240.0 },

  // Page 2 Products (reusing images with new names)
  { id: 9, name: "Industrial Pendant Light", imageUrl: "/product-2.svg", oldPrice: 80.0, newPrice: 65.0 },
  { id: 10, name: "Velvet Accent Chair", imageUrl: "/product-1.svg", oldPrice: 90.0, newPrice: 85.0 },
  { id: 11, name: "Spacious Bookcase", imageUrl: "/product-4.svg", oldPrice: 150.0, newPrice: 135.0 },
  { id: 12, name: "Comfort Ottoman", imageUrl: "/product-3.svg", oldPrice: 60.0, newPrice: 55.0 },
  { id: 13, name: "Minimalist Dining Table", imageUrl: "/product-8.svg", oldPrice: 250.0, newPrice: 230.0 },
  { id: 14, name: "Compact Side Table", imageUrl: "/product-7.svg", oldPrice: 30.0, newPrice: 28.0 },
  { id: 15, name: "L-Shaped Sectional", imageUrl: "/product-6.svg", oldPrice: 450.0, newPrice: 400.0 },
  { id: 16, name: "Kids Bunk Bed", imageUrl: "/product-5.svg", oldPrice: 300.0, newPrice: 275.0 },

  // Page 3 Products (new names, further reuse of images)
  { id: 17, name: "Adjustable Standing Desk", imageUrl: "/product-5.svg", oldPrice: 400.0, newPrice: 380.0 },
  { id: 18, name: "Corner Bookcase", imageUrl: "/product-7.svg", oldPrice: 120.0, newPrice: 110.0 },
  { id: 19, name: "Soft Bean Bag Chair", imageUrl: "/product-1.svg", oldPrice: 70.0, newPrice: 60.0 },
  { id: 20, name: "Outdoor Patio Set", imageUrl: "/product-3.svg", oldPrice: 500.0, newPrice: 480.0 },
  { id: 21, name: "Accent Table Lamp", imageUrl: "/product-6.svg", oldPrice: 40.0, newPrice: 35.0 },
  { id: 22, name: "Recliner Armchair", imageUrl: "/product-8.svg", oldPrice: 350.0, newPrice: 320.0 },
  { id: 23, name: "Bedroom Dresser", imageUrl: "/product-2.svg", oldPrice: 180.0, newPrice: 170.0 },
  { id: 24, name: "Wooden Rocking Horse", imageUrl: "/product-4.svg", oldPrice: 110.0, newPrice: 95.0 },
];

const ITEMS_PER_PAGE = 8;

const ProductSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(productsData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = productsData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="All Product"
          description="The products we provide only for you as our service are selected from the best products with number 1 quality in the world"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </section>
  );
};

export default ProductSection;