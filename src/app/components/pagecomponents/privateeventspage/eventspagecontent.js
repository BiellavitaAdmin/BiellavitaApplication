import "./eventspagecontent.css";
import Image from "next/image";
import { useState } from "react";
import { Modal, Button } from "antd";
import NewUpcomingEventsSection from "./newsubcomponents/newupcomingeventssection";

export default function EventsPageContent() {
  return (
    <>
      <div className="new-events-content-container">
        <NewUpcomingEventsSection />
      </div>
    </>
  );
}
