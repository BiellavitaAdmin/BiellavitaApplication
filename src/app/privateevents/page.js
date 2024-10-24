"use client";
import { useEffect, useState } from "react";
import "./privateevents.css";
import PreviousEvents from "../components/pagecomponents/privateeventspage/previousevents";
import EventsPageContent from "../components/pagecomponents/privateeventspage/eventspagecontent";
import { useHeroAnimation } from "../hooks/useHeroAnimation";

export default function PrivateEvents() {
  useHeroAnimation("privateevents-hero-section", "privateevents-hero-heading");

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
      <div
        className={`privateevents-hero-section ${
          isFixed ? "fixed" : "relative"
        }`}
      >
        <h2 className="privateevents-hero-heading">PrivateEvents</h2>
      </div>
      <div className="privateevents-content-continer">
        <div className="privateevents-content">
          {/* <UpcomingEvent /> */}
          {/* <PreviousEvents /> */}
          <EventsPageContent />
        </div>
      </div>
    </>
  );
}
