"use client";
import { useEffect, useState } from "react";
import "./club.css";
import Content from "../components/pagecomponents/clubpagecomponenets/content";
import { useHeroAnimation } from "../hooks/useHeroAnimation";
import Head from "next/head";

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
      <Head>
        <title>The Club | BiellaVita</title>
        <meta
          name="description"
          content="Join BiellaVita, a club for individuals who value excellence, nature, and well-being."
        />
        <meta property="og:title" content="The Club | BiellaVita" />
        <meta
          property="og:description"
          content="Experience the BiellaVita lifestyle through exclusive membership."
        />
        <meta property="og:image" content="https://i.imgur.com/5sQQ2bY.png" />
        <meta property="og:url" content="https://www.biellavita.com/club" />
      </Head>
      <div className={`hero-section ${isFixed ? "fixed" : "relative"}`}>
        <h2 className="clubpage-hero-heading">The Club</h2>
      </div>
      <div className="content-continer">
        <Content />
      </div>
    </>
  );
}
