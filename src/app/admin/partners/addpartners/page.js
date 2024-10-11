"use client";

import { useState } from "react";
import Link from "next/link";
import { Alert, Select } from "antd";
import "../../members/addmembers/addmembers.css";

export default function AddPartners() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    companyName: "",
    address: "",
    city: "",
    country: "",
    industry: "",
    partnershipScope: "",
    cellPhone: "",
    email: "",
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

  const industries = [
    "Agriculture",
    "Automotive",
    "Banking",
    "Construction",
    "Education",
    "Energy",
    "Entertainment",
    "Healthcare",
    "Hospitality",
    "Information Technology",
    "Manufacturing",
    "Real Estate",
    "Retail",
    "Telecommunications",
    "Transportation",
    // Add more industries as needed
  ];

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
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
    if (name === "cellPhone" && /\D/.test(value)) {
      setErrors({ ...errors, cellPhone: "Only numeric values are allowed" });
    } else {
      setErrors({ ...errors, cellPhone: "" });
    }
    setFormData({ ...formData, [name]: value });
  };

  // Handle select change for country and industry
  const handleSelectChange = (value, fieldName) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstname) newErrors.firstname = "Firstname is required";
    if (!formData.lastname) newErrors.lastname = "Lastname is required";
    if (!formData.companyName)
      newErrors.companyName = "Company name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.industry) newErrors.industry = "Industry field is required";
    if (!formData.partnershipScope)
      newErrors.partnershipScope = "Partnership scope is required";
    if (!formData.cellPhone) newErrors.cellPhone = "Cell Phone is required";
    if (!formData.email) newErrors.email = "Email is required";
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSuccessMessage("Partner added successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          companyName: "",
          address: "",
          city: "",
          country: "",
          industry: "",
          partnershipScope: "",
          cellPhone: "",
          email: "",
        });
        setErrors({});
        setIsSubmitted(true);
        setErrorMessage(null);
        setTimeout(() => setSuccessMessage(null), 3000);
      } else {
        setErrorMessage("Failed to add partner.");
        setTimeout(() => setErrorMessage(null), 3000);
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("An error occurred.");
      setTimeout(() => setErrorMessage(null), 3000);
    }
  };

  return (
    <div className="form-container">
      {errorMessage && (
        <Alert
          message={errorMessage}
          type="error"
          showIcon
          style={{ width: "20%", marginBottom: "16px", textAlign: "right" }}
        />
      )}
      {successMessage && (
        <div className="alert-container">
          <Alert
            message={successMessage}
            type="success"
            showIcon
            style={{ width: "20%", marginBottom: "16px" }}
          />
        </div>
      )}

      <div className="form-section">
        <form className="dash-form" onSubmit={handleSubmit}>
          {/* Form Fields */}
          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">
              Firstname
              <br />
              (Company Contact)
            </label>
            <input
              className={`dash-form-input ${
                errors.firstname ? "input-error" : ""
              }`}
              name="firstname"
              placeholder="Enter company contact's firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
          </div>
          {errors.firstname && (
            <p className="error-message">{errors.firstname}</p>
          )}

          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">
              Lastname <br />
              (Company Contact)
            </label>
            <input
              className={`dash-form-input ${
                errors.lastname ? "input-error" : ""
              }`}
              name="lastname"
              placeholder="Enter company contact's lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
          {errors.lastname && (
            <p className="error-message">{errors.lastname}</p>
          )}

          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Company Name</label>
            <input
              className={`dash-form-input ${
                errors.companyName ? "input-error" : ""
              }`}
              name="companyName"
              placeholder="Enter company name here"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          {errors.companyName && (
            <p className="error-message">{errors.companyName}</p>
          )}

          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Company Address</label>
            <input
              className={`dash-form-input ${
                errors.address ? "input-error" : ""
              }`}
              name="address"
              placeholder="Add company address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          {errors.address && <p className="error-message">{errors.address}</p>}
          {/* City field */}
          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">City</label>
            <input
              className={`dash-form-input ${errors.city ? "input-error" : ""}`}
              name="city"
              placeholder="Enter city where company is located in"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          {errors.city && <p className="error-message">{errors.city}</p>}

          {/* Country field with Ant Design Select */}
          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Country</label>
            <Select
              showSearch
              placeholder="Select a country"
              className="dash-form-input"
              value={formData.country}
              onChange={(value) => handleSelectChange(value, "country")}
              options={countries.map((country) => ({
                label: country,
                value: country,
              }))}
              filterOption={(input, option) =>
                option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            />
          </div>
          {errors.country && <p className="error-message">{errors.country}</p>}

          {/* Industry field with Ant Design Select */}
          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Industry</label>
            <Select
              showSearch
              placeholder="Select an industry"
              className="dash-form-input"
              value={formData.industry}
              onChange={(value) => handleSelectChange(value, "industry")}
              options={industries.map((industry) => ({
                label: industry,
                value: industry,
              }))}
              filterOption={(input, option) =>
                option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            />
          </div>
          {errors.industry && (
            <p className="error-message">{errors.industry}</p>
          )}

          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Cell Phone</label>
            <input
              className={`dash-form-input ${
                errors.cellPhone ? "input-error" : ""
              }`}
              name="cellPhone"
              placeholder="compnay contact cell phone number"
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
              placeholder="Add Compnay contact email"
              value={formData.email}
              onChange={handleChange}
              type="email"
            />
          </div>
          {errors.email && <p className="error-message">{errors.email}</p>}

          {/* Partnership scope */}
          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Partnership Scope</label>
            <textarea
              className={`dash-form-input-message ${
                errors.partnershipScope ? "input-error" : ""
              }`}
              name="partnershipScope"
              placeholder="Describe the scope of the partnership"
              value={formData.partnershipScope}
              onChange={handleChange}
              rows={5}
            />
          </div>
          {errors.partnershipScope && (
            <p className="error-message">{errors.partnershipScope}</p>
          )}
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
