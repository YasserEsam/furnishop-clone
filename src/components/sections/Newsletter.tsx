import React from "react";

const Newsletter = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/newsletter-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 z-0" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white text-center md:text-start md:ml-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-base sm:text-lg mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            ducimus.
          </p>

          <form className="flex flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto md:mx-0 md:justify-start">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 py-4 px-6 rounded-xl bg-white/90 border border-white focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-600 text-white text-sm sm:text-base"
            />
            <button
              type="submit"
              className="w-auto cursor-pointer px-6 sm:px-8 py-4 rounded-xl bg-[#23262F] text-white font-semibold text-sm sm:text-base hover:bg-gray-200 transition-colors duration-300 flex-shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
