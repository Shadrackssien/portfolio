"use client";

import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import bookImage from "@/assets/images/book2.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map2.png";
import smileEmoji from "@/assets/images/smiley.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import grainImage from "@/assets/images/grain.jpg";
import { motion } from "framer-motion";
import { useRef } from "react";
import AboutMe from "@/components/AboutMe";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Photography",
    emoji: "📷",
    left: "5%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "50%",
    top: "5%",
  },

  {
    title: "Music",
    emoji: "🎵",
    left: "35%",
    top: "40%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "10%",
    top: "35%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "70%",
    top: "45%",
  },
  {
    title: "Instrument",
    emoji: "🎹",
    left: "5%",
    top: "65%",
  },
  {
    title: "Football",
    emoji: "⚽️",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div id="about" className="py-16 lg:py-24 relative">
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn More about who I am, what I do, and what inspires me"
        />

        <AboutMe />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective"
              />

              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="book cover" />
              </div>
            </Card>

            <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
              <CardHeader
                className=""
                title="My Toolbox"
                description="Explore the tools I use to craft exceptional digital experiences"
              />

              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName=" animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                className="px-6 py-6"
                title="Beyond the Code"
                description="Explore my interest and hobbies beyond the digital realm"
              />

              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="absolute inline-flex items-center 
                  gap-2 px-6 bg-gradient-to-r from-red-300
                to-sky-400 rounded-full py-1.5"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                className="w-full h-full object-cover"
                src={mapImage}
                alt="map image"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 
            -translate-y-1/2 size-20 rounded-full bg-gradient-to-r 
            from-red-300 to-sky-400 after:content-[''] after:absolute
            after:inset-0 after:outline-2 after:outline after:outline-offset-2 
            after:pointer-events-none after:rounded-full 
            after:outline-gray-950/20"
              >
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r 
            from-red-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"
                ></div>
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r 
            from-red-300 to-sky-400 -z-10"
                ></div>
                <Image
                  className="rounded-full"
                  src={smileEmoji}
                  alt="smile emoji"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
