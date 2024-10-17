"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Alert, DatePicker, Select } from "antd";
import dayjs from "dayjs";
import "../../members/addmembers/addmembers.css";

export default function AddEvents() {
  const [formData, setFormData] = useState({
    eventtitle: "",
    imagelink: "",
    shortdescription: "",
    eventdate: "",
    details: "",
    country: "", // New field for country
    city: "", // New field for city
    attendees: [], // New field for attendees
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);

  // List of countries
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  // Fetch members for the attendee field
  useEffect(() => {
    const fetchMembers = async () => {
      const response = await fetch("/api/members");
      const data = await response.json();
      setMembers(data);
      setFilteredMembers(data); // Set filtered members initially
    };
    fetchMembers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "eventtitle" && /[^a-zA-Z\s]/.test(value)) {
      setErrors({
        ...errors,
        [name]: "Only alphabetic characters are allowed",
      });
    } else {
      setErrors({ ...errors, [name]: "" });
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.eventtitle) newErrors.eventtitle = "Event title is required";
    if (!formData.eventdate) newErrors.eventdate = "Event date is required";
    if (!formData.imagelink) newErrors.imagelink = "Image link is required";
    if (!formData.shortdescription)
      newErrors.shortdescription = "Short description is required";
    if (!formData.details) newErrors.details = "Details are required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.attendees.length)
      newErrors.attendees = "Attendees are required";
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
          country: "",
          city: "",
          attendees: [],
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

  const handleAttendeeChange = (value) => {
    setFormData({ ...formData, attendees: value });
    setErrors({ ...errors, attendees: "" });
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
          {/* Event Title */}
          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Event Name</label>
            <input
              className={`dash-form-input ${
                errors.eventtitle ? "input-error" : ""
              }`}
              name="eventtitle"
              placeholder="Enter event title"
              value={formData.eventtitle}
              onChange={handleChange}
            />
          </div>
          {errors.eventtitle && (
            <p className="error-message">{errors.eventtitle}</p>
          )}

          {/* Event Date */}
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

          {/* Country */}
          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Country</label>
            <Select
              className={`dash-form-input ${
                errors.country ? "input-error" : ""
              }`}
              showSearch
              placeholder="Select a country"
              value={formData.country}
              onChange={(value) => setFormData({ ...formData, country: value })}
              options={countries.map((country) => ({
                value: country,
                label: country,
              }))}
            />
          </div>
          {errors.country && <p className="error-message">{errors.country}</p>}

          {/* City */}
          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">City</label>
            <input
              className={`dash-form-input ${errors.city ? "input-error" : ""}`}
              name="city"
              placeholder="Enter city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          {errors.city && <p className="error-message">{errors.city}</p>}

          {/* Image Link */}
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
              placeholder="Enter a short description"
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
              placeholder="Enter event details"
              rows={5}
              value={formData.details}
              onChange={handleChange}
            />
          </div>
          {errors.details && <p className="error-message">{errors.details}</p>}

          {/* Attendees */}
          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Attendees</label>
            <Select
              mode="tags"
              className={`dash-form-input ${
                errors.attendees ? "input-error" : ""
              }`}
              placeholder="Select attendees"
              value={formData.attendees}
              onChange={handleAttendeeChange}
              options={filteredMembers.map((member) => ({
                value: member.lastname,
                label: member.lastname,
              }))}
            />
          </div>
          {errors.attendees && (
            <p className="error-message">{errors.attendees}</p>
          )}

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
