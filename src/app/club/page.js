"use client";

// import { useEffect } from "react";
import "./club.css";
import Content from "../components/pagecomponents/clubpagecomponenets/content";
import { useHeroAnimation } from "../hooks/useHeroAnimation";

export default function Club() {
  useHeroAnimation("hero-section", "clubpage-hero-heading");

  // Scroll the content-continer to top on component mount
  // useEffect(() => {
  //   console.log("useEffect fired, scrolling content-continer to top");
  //   const contentContainer = document.querySelector(".content-continer");
  //   if (contentContainer) {
  //     contentContainer.scrollTo(0, 0); // Scroll the content container to the top
  //   }
  // }, []); // Empty dependency array ensures this runs only on component mount

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const heroSection = document.querySelector(".hero-section");
  //     if (heroSection) {
  //       heroSection.scrollIntoView({ behavior: "auto", block: "start" });
  //     }
  //   }
  // }, [pathname]);

  return (
    <>
      <div className="hero-section">
        <h2 className="clubpage-hero-heading">The Club</h2>
      </div>
      <div className="content-continer">
        <Content />
      </div>
    </>
  );
}
