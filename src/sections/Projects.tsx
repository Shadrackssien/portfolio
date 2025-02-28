import yuppie from "@/assets/images/yuppie.png";
import yuppycart from "@/assets/images/yuppy-cart.png";
import getchange from "@/assets/images/getchange.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowRightUp from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import SpotlightButton from "@/components/SpotlightButton";

const portfolioProjects = [
  {
    company: "Yuppie",
    year: "2025",
    title: "Movies Web Application",
    results: [
      { title: "Integration of TMDB API" },
      { title: "Smooth User Experience" },
      { title: "Responsive Design and User focus" },
    ],
    link: "https://yuppie-five.vercel.app/",
    github: "https://github.com/Shadrackssien/yuppie",
    image: yuppie,
  },
  {
    company: "Yuppy Cart",
    year: "2024",
    title: "E-commerce Web Application",
    results: [
      { title: "Smooth User Experience" },
      { title: "Responsive Design and User focus" },
      { title: "Product Catalog Feature" },
    ],
    link: "https://yuppycart.netlify.app/",
    github: "https://github.com/Shadrackssien/YuppyCart",
    image: yuppycart,
  },
  {
    company: "GetChange",
    year: "2025",
    title: "Startup Landing Page and Dashboard",
    results: [
      { title: "State Management with vuex" },
      { title: "Smooth User Experience" },
      { title: "Responsive Design and User focus" },
    ],
    link: "https://getchange-app.vercel.app/",
    github: "https://github.com/Shadrackssien/getchange-app",

    image: getchange,
  },
];

export const ProjectsSection = () => {
  return (
    <div id="projects" className="font-sans pb-16 lg:py-24 relative">
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      <div className="container">
        <SectionHeader
          eyebrow="Real-World Projects"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences"
        ></SectionHeader>
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 pb-0 sticky top-16"
              style={{
                top: `calc(64px + ${projectIndex * 70}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="flex">
                    <div
                      className="bg-gradient-to-r from-red-300 to-sky-400
                      inline-flex gap-2 font-bold tracking-widest uppercase text-sm text-transparent bg-clip-text"
                    >
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col md:flex-row gap-4 items-center md:items-start justify-center md:justify-start">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SpotlightButton
                        variant="primary"
                        className="px-8 h-12 mt-8"
                      >
                        <div className="inline-flex items-center gap-2">
                          <span>Visit Live Site</span>
                          <ArrowRightUp className="size-4" />
                        </div>
                      </SpotlightButton>
                    </a>
                    <a
                      className=""
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="mt-4 md:mt-8 cursor-pointer inline-flex items-center gap-2 border border-white/15 px-[38px] h-[54px] rounded-xl hover:bg-white/60 hover:text-gray-950 transition-all duration-800 ease-in-out">
                        <span className="font-semibold">Github Repo</span>
                        <ArrowRightUp className="size-4" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
