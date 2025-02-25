import ArrowRightUp from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 lg:py-24 relative">
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>

      <div className="container relative">
        <div
          className="relative overflow-hidden z-0 bg-gradient-to-r 
        from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 
        rounded-3xl text-center md:text-left"
        >
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-24">
            <div>
              <h2 className="font-serif font-bold text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let's connect and
                discuss how I can help you achieve your goals
              </p>
            </div>
            <div>
              <button className="text-white border border-l-gray-900 bg-gray-900 w-max inline-flex items-center gap-2 px-6 h-12 rounded-xl mt-8">
                <span className="font-semibold">Contact Me</span>
                <ArrowRightUp className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
