"use client";

import { useState } from "react";
import Link from "next/link";
import { Alert } from "antd";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import "../../members/addmembers/addmembers.css";

export default function AddEvents() {
  const [formData, setFormData] = useState({
    eventtitle: "",
    imagelink: "",
    shortdescription: "",
    eventdate: "", // Initialize the eventdate to an empty string
    details: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Alphabetic validation for eventtitle
    if (name === "eventtitle") {
      if (/[^a-zA-Z\s]/.test(value)) {
        setErrors({
          ...errors,
          [name]: "Only alphabetic characters are allowed",
        });
      } else {
        setErrors({ ...errors, [name]: "" });
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.eventtitle)
      newErrors.eventtitle = "Project title is required";
    if (!formData.eventdate) newErrors.eventdate = "Event date is required";
    if (!formData.imagelink) newErrors.imagelink = "Image link is required"; // Updated the message for clarity
    if (!formData.shortdescription)
      newErrors.shortdescription = "Short description is required";
    if (!formData.details) newErrors.details = "Details are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Submit with eventdate included
      });

      if (res.ok) {
        setSuccessMessage("Event added successfully!");
        setFormData({
          eventtitle: "",
          imagelink: "",
          shortdescription: "",
          details: "",
          eventdate: "", // Reset date on successful submission
        });
        setIsSubmitted(true); // Set submission state
      } else {
        setErrorMessage("Failed to add event.");
      }
    } catch (err) {
      setErrorMessage("An error occurred.");
    }
  };

  // Function to handle date change
  const handleDateChange = (date, dateString) => {
    setFormData({ ...formData, eventdate: dateString });
    setErrors({ ...errors, eventdate: "" }); // Clear error when date is selected
  };

  return (
    <div className="form-container">
      {/* Display Antd Alert for errors */}
      {errorMessage && (
        <Alert
          message={errorMessage}
          type="error"
          showIcon
          style={{
            width: "20%",
            marginBottom: "16px",
            textAlign: "right",
          }}
        />
      )}

      {/* Display Antd Alert for success */}
      {successMessage && (
        <div className="alert-container">
          <Alert
            message={successMessage}
            type="success"
            showIcon
            style={{
              width: "20%",
              marginBottom: "16px",
            }}
          />
        </div>
      )}

      <div className="form-section">
        <form className="dash-form" onSubmit={handleSubmit}>
          {/* Event Title */}
          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Event Title</label>
            <input
              className={`dash-form-input ${
                errors.eventtitle ? "input-error" : ""
              }`}
              name="eventtitle"
              placeholder="Enter project title"
              value={formData.eventtitle}
              onChange={handleChange}
            />
          </div>
          {errors.eventtitle && (
            <p className="error-message">{errors.eventtitle}</p>
          )}

          {/* Event Date (Ant Design DatePicker) */}
          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Event Date</label>
            <DatePicker
              className={`dash-form-input ${
                errors.eventdate ? "input-error" : ""
              }`}
              format="DD-MM-YYYY" // Date format for the input
              onChange={handleDateChange} // Update state on date change
              value={formData.eventdate ? dayjs(formData.eventdate) : null} // Set the date picker value
            />
          </div>
          {errors.eventdate && (
            <p className="error-message">{errors.eventdate}</p>
          )}

          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Image Link</label>
            <input
              className={`dash-form-input ${
                errors.imagelink ? "input-error" : ""
              }`}
              name="imagelink"
              placeholder="Enter image link"
              value={formData.imagelink}
              onChange={handleChange}
            />
          </div>
          {errors.imagelink && (
            <p className="error-message">{errors.imagelink}</p>
          )}

          {/* Short Description */}
          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Short Description</label>
            <textarea
              className={`dash-form-input-message ${
                errors.shortdescription ? "input-error" : ""
              }`}
              name="shortdescription"
              placeholder="Enter a short description of the project"
              rows={5}
              value={formData.shortdescription}
              onChange={handleChange}
            />
          </div>
          {errors.shortdescription && (
            <p className="error-message">{errors.shortdescription}</p>
          )}

          {/* Details */}
          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Details</label>
            <textarea
              className={`dash-form-input-message-larger ${
                errors.details ? "input-error" : ""
              }`}
              name="details"
              placeholder="Enter project details"
              rows={5}
              value={formData.details}
              onChange={handleChange}
            />
          </div>
          {errors.details && <p className="error-message">{errors.details}</p>}

          <div className="dash-form-container">
            <button className="dash-form-button" type="submit">
              Add Event
            </button>
            {isSubmitted && (
              <Link href="/admin/events">
                <button className="dash-form-button goto">
                  Back to Events
                </button>
              </Link>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
