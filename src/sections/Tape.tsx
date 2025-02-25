import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

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
      <div className="bg-gradient-to-r from-red-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_80%,transparent)]">
          <div className="cursor-pointer flex flex-none gap-4  pr-4 py-3 animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
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
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
