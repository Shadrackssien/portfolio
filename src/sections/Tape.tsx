import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Accesible",
  "User Friendly",
  "scaleble",
  "responsive",
  "SEO Friendly",
  "Performance Optimized",
  "Maintainable",
  "Customizable",
  "Friendly Support",
  "Innovative",
  "Future-Proof",
  "Decoupled",
  "Progressive Web App",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_80%,transparent)]">
          <div className="flex-none space-x-4 py-3">
            {words.map((word) => (
              <div
                key={word}
                className="inline-flex items-center justify-center gap-4"
              >
                <span className="text-gray-900 uppercase font-extrabold text-sm ">
                  {word}
                </span>
                <StarIcon className="-rotate-12 size-6 text-gray-900" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
