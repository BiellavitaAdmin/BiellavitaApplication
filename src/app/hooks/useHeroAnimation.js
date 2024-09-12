import { useEffect } from "react";

export const useHeroAnimation = (sectionClass, headingClass) => {
  useEffect(() => {
    const heroSection = document.querySelector(`.${sectionClass}`);
    const heroHeading = document.querySelector(`.${headingClass}`);

    // Function to handle animations
    const handleAnimation = () => {
      if (heroSection && heroHeading) {
        heroSection.classList.add("show");
        heroHeading.classList.add("show");
      }
    };

    // Trigger animations on load
    handleAnimation();

    // Optionally add scroll event to trigger animation when scrolled into view
    window.addEventListener("scroll", handleAnimation);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleAnimation);
    };
  }, [sectionClass, headingClass]); // Dependencies include class names
};
