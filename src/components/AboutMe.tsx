import profile from "@/assets/images/shady-profile.jpg";
import Image from "next/image";
import Card from "./Card";
import Experience from "./svgs/experience";
import Products from "./svgs/products";

const AboutMe = () => {
  return (
    <div>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-40">
          <div className="relative w-64 md:w-80 lg:w-96 mx-auto z-0 my-16 lg:my-24">
            <div className="absolute w-full lg:h-[32rem]  rounded-3xl bg-gradient-to-r from-red-300 to-sky-400 inset-0 -z-10"></div>
            <Image
              className=" z-10 rotate-[9deg] w-full h-auto rounded-3xl"
              src={profile}
              alt="profile pic"
            />
          </div>
          <div className="lg:w-1/2 lg:my-24">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <Card className="flex flex-col py-4 items-center justify-center gap-4">
                <div className="text-[#93c5fd]">
                  <Experience className=" w-8 h-8" />
                </div>
                <h2 className="font-semibold ">Experience</h2>
                <p className="text-sm text-white/60">3+ Years</p>
              </Card>
              <Card className="flex flex-col py-4 items-center justify-center gap-4">
                <div className="text-[#93c5fd]">
                  <Products className="w-8 h-8" />
                </div>
                <h2 className="font-semibold ">Products Built</h2>
                <p className="text-sm text-white/60">5+</p>
              </Card>
            </div>
            <div className="mt-8">
              <p className="text-center md:text-left tracking-wide md:text-lg text-white/80">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquid non quibusdam totam voluptate deserunt nulla, minima
                ipsam? Maxime, dicta. Est molestias beatae labore magnam cumque
                perferendis suscipit, placeat quisquam vero? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Eum quia dolore, illo cum
                corrupti blanditiis laudantium fugiat! Deleniti cumque optio quo
                quidem molestias, modi accusantium vel architecto suscipit,
                perspiciatis quas.lorem Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Ad sed totam tempora reprehenderit molestiae
                veritatis sequi officia alias voluptate sapiente, ab ratione
                esse eos tempore optio possimus asperiores incidunt? Facere.
              </p>
            </div>
            <div className="flex items-center justify-center mt-8">
              <button className="bg-white px-6 py-3 rounded-xl font-bold tracking-widest text-gray-900 ">
                Let's talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
