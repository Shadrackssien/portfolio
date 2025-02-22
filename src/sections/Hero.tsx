"use client";

import shady from "@/assets/images/shady.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import ComputerModel from "../components/ComputerModel";
import { use } from "react";

export const HeroSection = () => {
  return (
    <div className="container flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <div className="flex flex-col items-center">
          <Image
            src={shady}
            className="w-[100px] h-[120px]"
            alt="shady picture"
          />
          <div className="bg-gray-950 border border-gray-800 px-3 py-1 inline-flex items-center gap-3 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium text-white/60">
              Available for new projects
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-serif text-center mt-6 tracking-wide">
          Building Exceptional user Experience
        </h1>
        <p className="mt-4 text-center text-white/60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          ratione quaerat unde laborum nemo, odit enim dolorem, ex possimus
        </p>
        <div className="flex flex-col items-center mt-6 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white/15 bg-white text-gray-900 px-8 h-12 rounded-xl">
            <span>👋</span>
            <span>Let's Connect</span>
          </button>
        </div>
      </div>

      {/* 3d image */}
      <div className="w-full h-96 md:h-[420px]  md:w-1/2 flex justify-center items-center my-10 md:my-0">
        <ComputerModel />
      </div>
    </div>
  );
};
