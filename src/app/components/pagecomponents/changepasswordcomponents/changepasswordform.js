"use client";

import { useState } from "react";

export default function ChangePasswordForm() {
  const [formData, setFormData] = useState({
    username: "",
    defaultPassword: "",
    newPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.defaultPassword)
      newErrors.defaultPassword = "Default password is required";
    if (!formData.newPassword)
      newErrors.newPassword = "New password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Clear errors before validation

    if (!validateForm()) return;

    try {
      const res = await fetch("/api/changepassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        // Handle non-success response
        const errorData = await res.json();
        setErrors({ form: errorData.message || "An error occurred." });
        return;
      }

      // On successful response
      setSuccessMessage(
        "Password changed successfully! An email has been sent."
      );
      setFormData({
        username: "",
        defaultPassword: "",
        newPassword: "",
      });
      setErrors({});
    } catch (err) {
      console.error(err);
      setErrors({ form: "An error occurred while changing the password." });
    }
  };

  return (
    <>
      <form className="change-pass-form" onSubmit={handleSubmit}>
        <div className="inputfield-group">
          <div className="left-input">
            <label className="form-labels">Username</label>
            <input
              className={`input-fields ${errors.username ? "input-error" : ""}`}
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p className="error-message">{errors.username}</p>
            )}
          </div>
        </div>

        <div className="address-field-container">
          <label className="form-labels">Default Password</label>
          <input
            className={`input-fields ${
              errors.defaultPassword ? "input-error" : ""
            }`}
            name="defaultPassword"
            type="password"
            value={formData.defaultPassword}
            onChange={handleChange}
          />
          {errors.defaultPassword && (
            <p className="error-message">{errors.defaultPassword}</p>
          )}
        </div>

        <div className="message-field-container">
          <label className="form-labels">New Password</label>
          <input
            className={`input-fields ${
              errors.newPassword ? "input-error" : ""
            }`}
            name="newPassword"
            type="password"
            value={formData.newPassword}
            onChange={handleChange}
          />
          {errors.newPassword && (
            <p className="error-message">{errors.newPassword}</p>
          )}
        </div>

        {errors.form && <p className="error-message">{errors.form}</p>}

        <div className="button-container">
          <button className="contact-button" type="submit">
            Submit
          </button>
        </div>

        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </>
  );
}
