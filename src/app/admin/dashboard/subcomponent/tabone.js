"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function TabOne() {
  const [memberCount, setMemberCount] = useState(0);

  useEffect(() => {
    // Fetch the total number of members
    const fetchMembersCount = async () => {
      try {
        const response = await fetch("/api/members", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch members");
        }
        const data = await response.json();
        setMemberCount(data.length); // Assuming you're returning the full array of members
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchMembersCount();
  }, []);

  return (
    <>
      <div className="members-tab-container">
        <div className="tab-left-section">
          <Image
            src="/members.png"
            alt="Members Icon"
            width={28}
            height={28}
            className="tab-icons"
          />
          <h3 className="tab-title">Members</h3>
        </div>
        <div className="tab-right-section">
          <h2 className="tab-numeric-value">{memberCount}</h2>
        </div>
      </div>
    </>
  );
}
