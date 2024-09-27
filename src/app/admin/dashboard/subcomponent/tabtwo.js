"use client"; // Ensure this is lowercase

import { useEffect, useState } from "react";
import Image from "next/image";

export default function TabTwo() {
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    // Fetch the total number of projects
    const fetchProjectsCount = async () => {
      try {
        const response = await fetch("/api/projects", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjectCount(data.length); // Assuming the API returns an array of projects
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjectsCount();
  }, []);

  return (
    <div className="members-tab-container">
      <div className="tab-left-section">
        <Image
          src="/projects.png"
          alt="Projects Icon"
          width={28}
          height={28}
          className="tab-icons"
        />
        <h3 className="tab-title">Projects</h3>
      </div>
      <div className="tab-right-section">
        <h2 className="tab-numeric-value">{projectCount}</h2>
      </div>
    </div>
  );
}
