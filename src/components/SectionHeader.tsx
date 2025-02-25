const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <div>
      <div>
        <div className="flex font-sans items-center justify-center">
          <p className="uppercase font-semibold tracking-wider bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            {eyebrow}
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          {title}
        </h2>
        <p className="text-center tracking-wide md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
