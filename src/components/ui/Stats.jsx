// components/ui/Stats.jsx
const StatItem = ({ value, label, showDivider = true, index }) => {
  const showMobileDivider = index === 0 || index === 2;

  return (
    <div className="flex flex-col items-center gap-y-2 relative">
      <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
        {value}
      </p>
      <p className="lg:text-xl sm:text-base leading-6 text-white/90 text-center">
        {label}
      </p>

      {showDivider && (
        <div
          className={`absolute top-1/2 h-12 sm:h-16 w-px -translate-y-1/2 bg-white/30 
          ${showMobileDivider ? "block" : "hidden"} sm:block right-0`}
        />
      )}
    </div>
  );
};

const Stats = () => {
  const stats = [
    { value: "7", label: "Year Experience" },
    { value: "2", label: "Opened in the country" },
    { value: "10k+", label: "Furniture sold" },
    { value: "260+", label: "Variant Furniture", showDivider: false },
  ];

  return (
    <div className="relative z-30 px-4 sm:px-6 -mt-24 sm:-mt-32 mb-10">
      <div className="py-8 sm:py-12 mx-auto max-w-6xl rounded-3xl bg-[#286F6C]">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-6 px-4 sm:px-6">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              showDivider={stat.showDivider !== false}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
