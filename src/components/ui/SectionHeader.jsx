
const SectionHeader = ({ title, description }) => {
  return (
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
        {title}
      </h2>
      <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;