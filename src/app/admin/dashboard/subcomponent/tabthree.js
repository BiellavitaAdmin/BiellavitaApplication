"use client"; // Ensure this is lowercase

import { useEffect, useState } from "react";
import Image from "next/image";

export default function TabThree() {
  const [projectEvent, setEventCount] = useState(0);

  useEffect(() => {
    // Fetch the total number of projects
    const fetchEventsCount = async () => {
      try {
        const response = await fetch("/api/events", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        setEventCount(data.length); // Assuming the API returns an array of projects
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchEventsCount();
  }, []);

  return (
    <div className="members-tab-container">
      <div className="tab-left-section">
        <Image
          src="/events.png"
          alt="Projects Icon"
          width={28}
          height={28}
          className="tab-icons"
        />
        <h3 className="tab-title">Events</h3>
      </div>
      <div className="tab-right-section">
        <h2 className="tab-numeric-value">{projectEvent}</h2>
      </div>
    </div>
  );
}
