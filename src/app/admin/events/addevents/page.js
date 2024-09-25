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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.eventtitle)
      newErrors.eventtitle = "Project title is required";
    if (!formData.eventdate) newErrors.eventdate = "Event date is required";
    if (!formData.imagelink) newErrors.imagelink = "Image link is required";
    if (!formData.shortdescription)
      newErrors.shortdescription = "Short description is required";
    if (!formData.details) newErrors.details = "Details are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccessMessage("Event added successfully!");
        setFormData({
          eventtitle: "",
          imagelink: "",
          shortdescription: "",
          details: "",
          eventdate: "",
        });
        setIsSubmitted(true);
      } else {
        setErrorMessage("Failed to add event.");
      }
    } catch (err) {
      setErrorMessage("An error occurred.");
    }
  };

  const handleDateChange = (date, dateString) => {
    if (date && date.isValid()) {
      setFormData({ ...formData, eventdate: dateString });
      setErrors({ ...errors, eventdate: "" });
    } else {
      setErrors({ ...errors, eventdate: "Invalid date" });
    }
  };

  return (
    <div className="form-container">
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

          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Event Date</label>
            <DatePicker
              className={`dash-form-input ${
                errors.eventdate ? "input-error" : ""
              }`}
              format="DD-MM-YYYY"
              onChange={handleDateChange}
              value={
                formData.eventdate
                  ? dayjs(formData.eventdate, "DD-MM-YYYY")
                  : null
              }
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
