"use client";

import { useState } from "react";
import Link from "next/link";
import { Alert, Select } from "antd";
import "../../members/addmembers/addmembers.css";

const { Option } = Select;

export default function AddProjects() {
  const [formData, setFormData] = useState({
    projecttitle: "",
    imagelink: "",
    shortdescription: "",
    details: "",
    detailsimageone: "", // New field
    detailsimagetwo: "", // New field
    city: "", // New field
    country: "", // New field
    category: "", // New field
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

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

  // Handle Antd Select changes
  const handleSelectChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.projecttitle)
      newErrors.projecttitle = "Project name is required";
    if (!formData.imagelink) newErrors.imagelink = "Image link is required";
    if (!formData.shortdescription)
      newErrors.shortdescription = "Short description is required";
    if (!formData.details) newErrors.details = "Details are required";
    if (!formData.detailsimageone)
      newErrors.detailsimageone = "Details image one link is required";
    if (!formData.detailsimagetwo)
      newErrors.detailsimagetwo = "Details image two link is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.category) newErrors.category = "Project category is required";

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
          detailsimageone: "", // Reset new fields
          detailsimagetwo: "",
          city: "",
          country: "",
          category: "",
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
            <label className="dash-form-label">Project Name</label>
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

          {/* Image Link */}
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

          {/* Details Image One Link */}
          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Details Image One Link</label>
            <input
              className={`dash-form-input ${
                errors.detailsimageone ? "input-error" : ""
              }`}
              name="detailsimageone"
              placeholder="Enter details image one link"
              value={formData.detailsimageone}
              onChange={handleChange}
            />
          </div>
          {errors.detailsimageone && (
            <p className="error-message">{errors.detailsimageone}</p>
          )}

          {/* Details Image Two Link */}
          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Details Image Two Link</label>
            <input
              className={`dash-form-input ${
                errors.detailsimagetwo ? "input-error" : ""
              }`}
              name="detailsimagetwo"
              placeholder="Enter details image two link"
              value={formData.detailsimagetwo}
              onChange={handleChange}
            />
          </div>
          {errors.detailsimagetwo && (
            <p className="error-message">{errors.detailsimagetwo}</p>
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

          {/* Country */}
          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Country</label>
            <Select
              showSearch
              placeholder="Select a country"
              value={formData.country}
              onChange={(value) => handleSelectChange(value, "country")}
              style={{ width: "100%" }}
              filterOption={(input, option) =>
                option?.children.toLowerCase().includes(input.toLowerCase())
              }
            >
              {countries.map((country) => (
                <Option key={country} value={country}>
                  {country}
                </Option>
              ))}
            </Select>
          </div>
          {errors.country && <p className="error-message">{errors.country}</p>}

          {/* Project Category */}
          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Project Category</label>
            <Select
              placeholder="Select a category"
              value={formData.category}
              onChange={(value) => handleSelectChange(value, "category")}
              style={{ width: "100%" }}
            >
              <Option value="art">Art</Option>
              <Option value="charity">Charity</Option>
              <Option value="fashion">Fashion</Option>
              <Option value="sports">Sports</Option>
              <Option value="culinary">Culinary</Option>
              <Option value="culture">Culture</Option>
              <Option value="health">Health</Option>
            </Select>
          </div>
          {errors.category && (
            <p className="error-message">{errors.category}</p>
          )}

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
