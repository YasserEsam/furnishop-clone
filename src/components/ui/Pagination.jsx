import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center mt-12 sm:mt-16 space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-full transition-colors duration-200 cursor-pointer bg-white shadow-md
          ${currentPage === 1
            ? 'text-gray-300 cursor-not-allowed'
            : 'text-gray-500 hover:bg-gray-100'
          }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Page Dots */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-3 h-3 rounded-full transition-colors duration-200 cursor-pointer
            ${currentPage === page
              ? 'bg-gray-800'
              : 'bg-gray-300 hover:bg-gray-400' 
            }`}
        />
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-full transition-colors duration-200 cursor-pointer bg-white shadow-md
          ${currentPage === totalPages
            ? 'text-gray-300 cursor-not-allowed'
            : 'text-gray-500 hover:bg-gray-100'
          }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;