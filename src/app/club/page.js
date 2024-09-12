"use client";

import "./club.css";
import Content from "../components/pagecomponents/clubpagecomponenets/content";
import { useHeroAnimation } from "../hooks/useHeroAnimation";
export default function Club() {
  useHeroAnimation("hero-section", "clubpage-hero-heading");
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
