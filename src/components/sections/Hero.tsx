export default function Hero() {
  return (
    <div className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'url("/living-room.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom', 
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 -z-10"></div>

      {/* Smooth bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#ffffff] to-transparent pointer-events-none z-0" />

      {/* Hero Content */}
      <div className="relative max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-center z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-4xl md:mx-auto lg:col-span-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-medium text-white">
              <span className="block">Creative Hero Simplify Your</span>
              <span className="block mt-2">Furniture</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
              Do I have consent to record this meeting gain location,
              root-and-branch, review, nor game plan who the go-to
            </p>
            <div className="mt-10 sm:max-w-lg sm:mx-auto">
              <button className="px-10 cursor-pointer py-3 md:px-16 md:py-4 text-lg font-medium rounded-xl backdrop-blur-md bg-white/30 text-white shadow-lg hover:bg-white/40 transition-all duration-300 hover:scale-105">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}