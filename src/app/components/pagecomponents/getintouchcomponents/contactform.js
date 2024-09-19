"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
              className="input-fields"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
          </div>
          <div className="right-input">
            <label className="form-labels">Lastname</label>
            <input
              className="input-fields"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="address-field-container">
          <label className="form-labels">Email Address</label>
          <input
            className="input-fields"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="message-field-container">
          <label className="form-labels">Message</label>
          <input
            className="input-fields"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="button-container">
          <button className="contact-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
