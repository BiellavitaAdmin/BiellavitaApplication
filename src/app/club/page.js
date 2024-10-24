"use client";
import { useEffect, useState } from "react";
import "./club.css";
import Content from "../components/pagecomponents/clubpagecomponenets/content";
import { useHeroAnimation } from "../hooks/useHeroAnimation";

export default function Club() {
  useHeroAnimation("hero-section", "clubpage-hero-heading");

  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && isFixed) {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);

  return (
    <>
      <div className={`hero-section ${isFixed ? "fixed" : "relative"}`}>
        <h2 className="clubpage-hero-heading">The Club</h2>
      </div>
      <div className="content-continer">
        <Content />
      </div>
    </>
  );
}
