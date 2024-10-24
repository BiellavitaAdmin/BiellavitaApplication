"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstname) newErrors.firstname = "Firstname is required";
    if (!formData.lastname) newErrors.lastname = "Lastname is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";
    else if (formData.message.split(" ").length > 100)
      newErrors.message = "Message cannot exceed 100 words";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          message: "",
        });

        console.log(formData);
        setErrors({});
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="inputfield-group">
          <div className="left-input">
            <label className="form-labels">Firstname</label>
            <input
              className={`input-fields ${
                errors.firstname ? "input-error" : ""
              }`}
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
            {errors.firstname && (
              <p className="error-message">{errors.firstname}</p>
            )}
          </div>
          <div className="right-input">
            <label className="form-labels">Lastname</label>
            <input
              className={`input-fields ${errors.lastname ? "input-error" : ""}`}
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
            {errors.lastname && (
              <p className="error-message">{errors.lastname}</p>
            )}
          </div>
        </div>

        <div className="address-field-container">
          <label className="form-labels">Email Address</label>
          <input
            className={`input-fields ${errors.email ? "input-error" : ""}`}
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="message-field-container">
          <label className="form-labels">Message</label>
          <textarea
            className={`input-fields ${errors.message ? "input-error" : ""}`}
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="12"
          />
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>

        <div className="button-container">
          <button className="contact-button" type="submit">
            Send
          </button>
        </div>
      </form>
    </>
  );
}
