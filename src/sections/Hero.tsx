"use client";

import shady from "@/assets/images/shady.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import ComputerModel from "../components/ComputerModel";
import granImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import SpotlightButton from "@/components/SpotlightButton";
import { Link as ScrollLink } from "react-scroll";

import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div id="home" className=" relative">
      <div className="[mask-image:linear-gradient(to_bottom,black,black_90%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${granImage.src})`,
          }}
        ></div>
        <div className="relative flex items-center justify-center flex-col lg:flex-row">
          {/* profile */}
          <div className=" relative w-full lg:w-3/5 overflow-x-clip">
            <div className="pointer-events-none size-[600px] hero-ring"></div>
            <div className="pointer-events-none size-[700px] hero-ring"></div>
            <div className="pointer-events-none size-[800px] hero-ring"></div>
            <div className="pointer-events-none size-[900px] hero-ring"></div>

            <HeroOrbit size={600} rotation={-90}>
              <StarIcon className="size-16 text-gray-300/10" />
            </HeroOrbit>
            <HeroOrbit size={510} rotation={45}>
              <StarIcon className="size-16 text-gray-300/10" />
            </HeroOrbit>
            <HeroOrbit size={600} rotation={-30}>
              <StarIcon className="size-8 text-gray-300/10" />
            </HeroOrbit>
            <HeroOrbit size={510} rotation={-180}>
              <StarIcon className="size-4 text-gray-300/10" />
            </HeroOrbit>
            <HeroOrbit size={600} rotation={-150}>
              <SparkleIcon className="size-16 text-gray-300/10" />
            </HeroOrbit>
            <HeroOrbit size={440} rotation={0}>
              <SparkleIcon className="size-8 text-gray-300/10" />
            </HeroOrbit>
            <HeroOrbit size={440} rotation={-190}>
              <SparkleIcon className="size-12 text-gray-300/10" />
            </HeroOrbit>
            <HeroOrbit size={510} rotation={100}>
              <SparkleIcon className="size-16 text-gray-300/10" />
            </HeroOrbit>
            <HeroOrbit size={440} rotation={-120}>
              <SparkleIcon className="size-6 text-gray-300/10" />
            </HeroOrbit>
            <HeroOrbit size={480} rotation={9}>
              <div className="size-3 rounded-full bg-gray-300/10"></div>
            </HeroOrbit>
            <HeroOrbit size={510} rotation={-138}>
              <div className="size-3 rounded-full bg-gray-300/10"></div>
            </HeroOrbit>
            <HeroOrbit size={480} rotation={120}>
              <div className="size-4 rounded-full bg-gray-300/10"></div>
            </HeroOrbit>
            <HeroOrbit size={480} rotation={-60}>
              <div className="size-4 rounded-full bg-gray-300/10"></div>
            </HeroOrbit>

            <div className="flex flex-col items-center">
              <Image
                src={shady}
                className="w-[100px] h-[120px]"
                alt="shady picture"
              />
              <div className="bg-gray-950 border border-gray-800 px-3 py-1 inline-flex items-center gap-3 rounded-lg">
                <div
                  className="bg-green-500 size-2.5 rounded-full
                 relative"
                >
                  <div className="absolute bg-green-500 size-2.5 rounded-full animate-ping-large"></div>
                </div>
                <div className="text-sm font-medium text-white/60">
                  Available for new projects
                </div>
              </div>
            </div>
            <div className="max-w-[30rem] mx-auto">
              <h1 className="flex flex-col gap-2 text-3xl md:text-5xl font-serif text-center mt-6 tracking-wide">
                <span className="block w-full text-center">
                  <span className="text-sm text-white/40 pr-1 ">
                    Hi, I&apos;m
                  </span>
                  <span>Shadrack Essien</span>
                </span>
                <span className="bg-gradient-to-r from-red-300 to-sky-400 text-transparent bg-clip-text block w-full text-center">
                  Front End Developer
                </span>
              </h1>
              <p className="mt-4 px-8 md:px-0 text-center text-white/60 md:text-lg">
                I deliver exceptional user experiences and turn designs into
                powerful web applications that drive results. Let&apos;s discuss
                your next project.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center mt-6 gap-4 ">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={800}
                className="cursor-pointer inline-flex items-center gap-2 border border-white/15 px-6 h-[52px] rounded-xl hover:bg-white/60 hover:text-gray-950 transition-all duration-800 ease-in-out"
              >
                <span className="font-semibold">Explore my work</span>
                <ArrowDown className="size-4" />
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={800}>
                <SpotlightButton variant="primary" className="px-8 h-12">
                  <div className="inline-flex items-center gap-2">
                    <span className="">Let&apos;s Connect</span>
                  </div>
                </SpotlightButton>
              </ScrollLink>
            </div>
          </div>

          {/* 3d image */}
          <div className=" w-full h-[600px] md:w-2/5 flex justify-center items-center">
            <ComputerModel />
          </div>
        </div>
      </div>
    </div>
  );
};
