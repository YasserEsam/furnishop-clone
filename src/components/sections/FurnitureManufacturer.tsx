import Image from "next/image";

const FurnitureManufacturer = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
          <div
            className="w-full md:w-1/2 md:text-left px-2"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6 sm:mb-8">
              The Best Furniture <br className="hidden sm:inline" />{" "}
              Manufacturer Of Your Choice
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-8 md:mb-10 max-w-xl md:max-w-full leading-relaxed">
              Furnitre power is a software as services for multipurpose business
              management system, especially for those who are running two or
              more businesses. Explore the future of Furnitre power as a
              software as service.
            </p>
          </div>

          <div
            className="w-full md:w-1/2 flex justify-center"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[450px] max-w-md md:max-w-none rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/modern-kitchen.png"
                alt="Modern kitchen with island and pendant lights"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FurnitureManufacturer;
