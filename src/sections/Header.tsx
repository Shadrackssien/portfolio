"use client";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";
import { useState, useEffect } from "react";

export const Header = () => {
  const [activeNavItem, setActiveNavItem] = useState("home");

  useEffect(() => {
    // Initialize scrollSpy
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();

    return () => {
      // Clean up listeners when component unmounts
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveNavItem(to);
  };

  const getNavItemClasses = (section) => {
    let baseClasses =
      "nav-item cursor-pointer px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-500 ease-in-out";

    if (activeNavItem === section) {
      baseClasses += " bg-white/80 text-gray-950";
    } else {
      baseClasses += " text-white hover:bg-white/20 hover:text-gray-900";
    }

    return baseClasses;
  };

  return (
    <div className="flex justify-center items-center fixed left-0 right-0 bottom-2 lg:bottom-4 z-50">
      <nav className="flex gap-1 p-2 border border-white/15 rounded-full bg-white/30 backdrop-blur-sm">
        <ScrollLink
          to="home"
          smooth={true}
          duration={800}
          className={getNavItemClasses("home")}
          spy={true}
          activeClass="active"
          onSetActive={() => handleSetActive("home")}
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={800}
          className={getNavItemClasses("about")}
          spy={true}
          activeClass="active"
          onSetActive={() => handleSetActive("about")}
        >
          About
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={800}
          className={getNavItemClasses("projects")}
          spy={true}
          activeClass="active"
          onSetActive={() => handleSetActive("projects")}
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={800}
          className={getNavItemClasses("contact")}
          spy={true}
          activeClass="active"
          onSetActive={() => handleSetActive("contact")}
        >
          Contact
        </ScrollLink>
      </nav>
    </div>
  );
};
