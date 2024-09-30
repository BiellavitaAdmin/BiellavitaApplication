"use client"; // Ensure this is lowercase

import { useEffect, useState } from "react";
import Image from "next/image";

export default function TabFour() {
  const [partnerCount, setPartnerCount] = useState(0);

  useEffect(() => {
    // Fetch the total number of events
    const fetchPartnersCount = async () => {
      try {
        const response = await fetch("/api/partners", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch partners");
        }
        const data = await response.json();
        setPartnerCount(data.length); // Assuming the API returns an array of events
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };

    fetchPartnersCount();
  }, []);

  return (
    <div className="members-tab-container">
      <div className="tab-left-section">
        <Image
          src="/partners.png"
          alt="Events Icon"
          width={28}
          height={28}
          className="tab-icons"
        />
        <h3 className="tab-title">Partners</h3>
      </div>
      <div className="tab-right-section">
        <h2 className="tab-numeric-value">{partnerCount}</h2>
      </div>
    </div>
  );
}
