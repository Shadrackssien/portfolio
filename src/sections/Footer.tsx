import ArrowRightUp from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

import LinkedIn from "@/components/svgs/linkedin";
import GitHub from "@/components/svgs/github";
import Twitter from "@/components/svgs/twitter";
import Instagram from "@/components/svgs/instagram";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/shadrack-essien/",
    icon: LinkedIn,
  },
  {
    title: "GitHub",
    href: "https://github.com/Shadrackssien",
    icon: GitHub,
  },
  {
    title: "X",
    href: "https://x.com/shadrackssien",
    icon: Twitter,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/shadrackssien/",
    icon: Instagram,
  },
];

export const Footer = () => {
  return (
    <footer className="py-10 relative overflow-x-clip">
      <div
        className="pointer-event-none absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      <div
        className="pointer-events-none absolute h-[400px] w-[1600px] bottom-0 left-1/2 
      -translate-x-1/2 bg-red-300/20 
      [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"
      ></div>
      <div className="container">
        <div
          className="border-t border-white/15 py-6 text-sm
         flex flex-col md:flex-row md:justify-between items-center gap-8"
        >
          <div className="text-white/40">
            &copy; {new Date().getFullYear()} All rights reserved
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <div key={link.title}>
                <div className="flex md:hidden">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5"
                  >
                    <span className="font-semibold">{link.title}</span>
                    <ArrowRightUp className="size-4" />
                  </a>
                </div>
                <div className="hidden md:flex">
                  <a
                    className="bg-white p-1 rounded-lg transform transition duration-500 hover:scale-110 hover:bg-purple-50 block"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.icon className="w-6 h-6 " />
                  </a>
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
