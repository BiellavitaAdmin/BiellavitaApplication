"use client";

import { useState } from "react";
import Link from "next/link";
import { Alert } from "antd";
import "../../members/addmembers/addmembers.css";

export default function AddPartners() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    cellPhone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Alphabetic validation for firstname and lastname
    if (name === "firstname" || name === "lastname") {
      if (/[^a-zA-Z\s]/.test(value)) {
        setErrors({
          ...errors,
          [name]: "Only alphabetic characters are allowed",
        });
      } else {
        setErrors({ ...errors, [name]: "" });
      }
    }

    // Numeric validation for cellPhone
    if (name === "cellPhone" && /\D/.test(value)) {
      setErrors({ ...errors, cellPhone: "Only numeric values are allowed" });
    } else {
      setErrors({ ...errors, cellPhone: "" });
    }

    setFormData({ ...formData, [name]: value });
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstname) newErrors.firstname = "Firstname is required";
    if (!formData.lastname) newErrors.lastname = "Lastname is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.cellPhone) newErrors.cellPhone = "Cell Phone is required";
    if (!formData.email) newErrors.email = "Email is required";
    // if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await fetch("/api/partners", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSuccessMessage("Partner added successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          address: "",
          cellPhone: "",
          email: "",
        });
        setErrors({});
        setIsSubmitted(true);
        setErrorMessage(null);

        // Remove success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
      } else {
        setErrorMessage("Failed to add partner.");
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
          {/* Form Fields */}
          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Firstname</label>
            <input
              className={`dash-form-input ${
                errors.firstname ? "input-error" : ""
              }`}
              name="firstname"
              placeholder="Enter partner's firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
          </div>
          {errors.firstname && (
            <p className="error-message">{errors.firstname}</p>
          )}

          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Lastname</label>
            <input
              className={`dash-form-input ${
                errors.lastname ? "input-error" : ""
              }`}
              name="lastname"
              placeholder="Enter partner's lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
          {errors.lastname && (
            <p className="error-message">{errors.lastname}</p>
          )}

          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Address</label>
            <input
              className={`dash-form-input ${
                errors.address ? "input-error" : ""
              }`}
              name="address"
              placeholder="Add partner's address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          {errors.address && <p className="error-message">{errors.address}</p>}

          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Cell Phone</label>
            <input
              className={`dash-form-input ${
                errors.cellPhone ? "input-error" : ""
              }`}
              name="cellPhone"
              placeholder="000 000 0000"
              value={formData.cellPhone}
              onChange={handleChange}
            />
          </div>
          {errors.cellPhone && (
            <p className="error-message">{errors.cellPhone}</p>
          )}

          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Email</label>
            <input
              className={`dash-form-input ${errors.email ? "input-error" : ""}`}
              name="email"
              placeholder="Add partner's email"
              value={formData.email}
              onChange={handleChange}
              type="email"
            />
          </div>
          {errors.email && <p className="error-message">{errors.email}</p>}
          <div className="dash-form-container">
            <button className="dash-form-button" type="submit">
              Add Partner
            </button>
            {isSubmitted && (
              <Link href="/admin/partners">
                <button className="dash-form-button goto">
                  Back to Partners
                </button>
              </Link>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
