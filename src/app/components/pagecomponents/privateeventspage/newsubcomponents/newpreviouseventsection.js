import Image from "next/image";
import { useState } from "react";
import { Modal, Button } from "antd";
export default function NewPreviousEventSection() {
  return (
    <div className="new-previous-event-section">
      <div className="new-previous-events-container">
        <div className="new-previous-events-label">
          <h3 className="new-previous-events-label-text">Previous Events</h3>
        </div>
        <div className="new-previous-events-card-container">
          <div className="new-previous-events-card">
            <div className="new-previous-events-banner-container">
              <Image
                src="eventtwo.webp"
                alt="previous events image"
                width={20}
                height={20}
                className="new-previous-large-image"
              />
            </div>
            <div className="new-previous-events-card-title">
              Where does it come from?
            </div>
            <div className="new-previous-events-card-shortdescription">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in
            </div>
            <button className="new-upcoming-event-details-button">
              Discover More
            </button>
          </div>

          <div className="new-previous-events-card">
            <div className="new-previous-events-banner-container">
              <Image
                src="eventtwo.webp"
                alt="previous events image"
                width={20}
                height={20}
                className="new-previous-large-image"
              />
            </div>
            <div className="new-previous-events-card-title">
              Where does it come from?
            </div>
            <div className="new-previous-events-card-shortdescription">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in
            </div>
            <button className="new-upcoming-event-details-button">
              Discover More
            </button>
          </div>

          <div className="new-previous-events-card">
            <div className="new-previous-events-banner-container">
              <Image
                src="eventtwo.webp"
                alt="previous events image"
                width={20}
                height={20}
                className="new-previous-large-image"
              />
            </div>
            <div className="new-previous-events-card-title">
              Where does it come from?
            </div>
            <div className="new-previous-events-card-shortdescription">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in
            </div>
            <button className="new-upcoming-event-details-button">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
