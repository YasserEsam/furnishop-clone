import Image from 'next/image';

const ProductCard = ({ product }) => {
  return (
    <div className="relative bg-white  overflow-hidden group rounded-2xl ">
      <div className="relative w-full h-48 sm:h-56 lg:h-64 flex items-center justify-center border-2 border-gray-100 rounded-2xl  p-4">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={200}
          height={200}
          className="object-contain max-h-full max-w-full"
        />
        <button className="absolute cursor-pointer bottom-4 right-4 bg-gray-300 rounded-full p-[6px] shadow-md hover:bg-gray-400 transition-colors duration-200">
          <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M12 5a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H6a1 1 0 110-2h5V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className="py-4 ">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
        <div className="flex items-center text-sm">
          <span className="text-gray-500 line-through mr-2">${product.oldPrice.toFixed(2)}</span>
          <span className="text-gray-900 font-bold">${product.newPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;