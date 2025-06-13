import Image from "next/image";

const AboutUs = () => {
  return (
    <section id="About" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-0">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
          <div
            className="w-full md:w-1/2 flex justify-center"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[450px] max-w-md md:max-w-none rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about.png"
                alt="Modern living room with sofa and coffee table"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                priority
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 md:text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-4 sm:mb-5"
              data-aos="fade-left"
              data-aos-duration="500"
            >
              We Create Your Home <br className="hidden sm:inline" /> More
              Aesthetic
            </h2>
            <p
              className="text-sm sm:text-base text-gray-700 mb-6 max-w-xl md:max-w-full"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="500"
            >
              Furnitre power is a software as services for multipurpose business
              management system,
            </p>

            <div className="space-y-6 sm:space-y-7">
              <div
                className="flex items-start space-x-3 sm:space-x-4"
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="500"
              >
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 sm:h-7 sm:w-7 text-black p-1 rounded-full bg-gray-100"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl mb-2 font-semibold text-gray-900">
                    Valuation Services
                  </h3>
                  <p className="mt-0.5 text-sm sm:text-base text-gray-600 max-w-xl md:max-w-full">
                    Sometimes features require a short description. This can be
                    detailed description
                  </p>
                </div>
              </div>

              <div
                className="flex items-start space-x-3 sm:space-x-4"
                data-aos="fade-left"
                data-aos-delay="600"
                data-aos-duration="500"
              >
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 sm:h-7 sm:w-7 text-black p-1 rounded-full bg-gray-100"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl mb-2 font-semibold text-gray-900">
                    Development of Furniture Models
                  </h3>
                  <p className="mt-0.5 text-sm sm:text-base text-gray-600 max-w-xl md:max-w-full">
                    Sometimes features require a short description. This can be
                    detailed description
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
