"use client";

import { useState } from "react";
import Link from "next/link";
import { Alert } from "antd";
import "../../members/addmembers/addmembers.css";

export default function AddProjects() {
  const [formData, setFormData] = useState({
    projecttitle: "",
    imagelink: "",
    shortdescription: "",
    details: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Alphabetic validation for projecttitle
    if (name === "projecttitle") {
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
    if (!formData.projecttitle)
      newErrors.projecttitle = "Project title is required";
    if (!formData.imagelink) newErrors.imagelink = "Project title is required";
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
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSuccessMessage("Project added successfully!");
        setFormData({
          projecttitle: "",
          imagelink: "",
          shortdescription: "",
          details: "",
        });
        setErrors({});
        setIsSubmitted(true);
        setErrorMessage(null);

        // Remove success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
      } else {
        setErrorMessage("Failed to add project.");
        setSuccessMessage(null);

        // Remove error message after 3 seconds
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("An error occurred.");
      setSuccessMessage(null);

      // Remove error message after 3 seconds
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
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
          {/* Project Title */}
          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Project Title</label>
            <input
              className={`dash-form-input ${
                errors.projecttitle ? "input-error" : ""
              }`}
              name="projecttitle"
              placeholder="Enter project title"
              value={formData.projecttitle}
              onChange={handleChange}
            />
          </div>
          {errors.projecttitle && (
            <p className="error-message">{errors.projecttitle}</p>
          )}

          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Image Link</label>
            <input
              className={`dash-form-input ${
                errors.imagelink ? "input-error" : ""
              }`}
              name="imagelink"
              placeholder="Enter image title"
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
              rows={15}
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
              rows={15}
              value={formData.details}
              onChange={handleChange}
            />
          </div>
          {errors.details && <p className="error-message">{errors.details}</p>}

          <div className="dash-form-container">
            <button className="dash-form-button" type="submit">
              Add Project
            </button>
            {isSubmitted && (
              <Link href="/admin/projects">
                <button className="dash-form-button goto">
                  Back to Projects
                </button>
              </Link>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
