import React, { useState, useEffect } from "react";

// Arrow Up Icon component
const ArrowUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white size-6"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="z-40">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300 ease-in-out"
          aria-label="Scroll to top"
          style={{ opacity: isVisible ? 1 : 0, transition: "opacity 300ms" }}
        >
          <ArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
