"use client";

import { useState } from "react";
import Link from "next/link";
import bcrypt from "bcryptjs"; // Import bcrypt for password hashing
import { Alert, DatePicker, Select } from "antd";
import moment from "moment";
import "./addmembers.css";

export default function AddMembers() {
  const { Option } = Select; // Destructure Option for Select

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
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    country: "",
    city: "",
    nationality: "",
    profession: "",
    dateofbirth: null, // Store date as a moment object
    hobbies: "",
    cellPhone: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Alphabetic validation for firstname, lastname, nationality, profession, city, country
    if (
      [
        "firstname",
        "lastname",
        "nationality",
        "profession",
        "city",
        "country",
      ].includes(name) &&
      /[^a-zA-Z\s]/.test(value)
    ) {
      setErrors({
        ...errors,
        [name]: "Only alphabetic characters are allowed",
      });
    } else {
      setErrors({ ...errors, [name]: "" });
    }

    // Numeric validation for cellPhone
    if (name === "cellPhone" && /\D/.test(value)) {
      setErrors({ ...errors, cellPhone: "Only numeric values are allowed" });
    } else {
      setErrors({ ...errors, cellPhone: "" });
    }

    setFormData({ ...formData, [name]: value });
  };

  // Country change handler for Select dropdown
  const handleCountryChange = (value) => {
    setFormData({ ...formData, country: value });
  };

  // Date of birth change handler
  const handleDateChange = (date) => {
    setFormData({ ...formData, dateofbirth: date });
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstname) newErrors.firstname = "Firstname is required";
    if (!formData.lastname) newErrors.lastname = "Lastname is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.nationality)
      newErrors.nationality = "Nationality is required";
    if (!formData.profession) newErrors.profession = "Profession is required";
    if (!formData.dateofbirth)
      newErrors.dateofbirth = "Date of birth is required";
    if (!formData.hobbies) newErrors.hobbies = "Hobbies/Interests are required";
    if (!formData.cellPhone) newErrors.cellPhone = "Cell Phone is required";
    if (!formData.email) newErrors.email = "Email is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Function to check if email exists in the database
  const checkEmailExists = async (email) => {
    try {
      const res = await fetch(`/api/members/check-email?email=${email}`);
      const data = await res.json();
      return data.exists;
    } catch (err) {
      console.error("Error checking email:", err);
      setErrorMessage("Error checking email. Please try again.");
      return false;
    }
  };

  // Submit handler with email check and password hashing
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields including required checks
    if (!validateForm()) return;

    try {
      // Check if the email already exists
      const emailExists = await checkEmailExists(formData.email);

      if (emailExists) {
        // Set email error if it already exists
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Email already exists!", // Set email error message
        }));
        return; // Stop form submission
      }

      // Use a fixed default password
      const defaultPassword = "defaultPassword123";

      // Hash the default password before sending it to the server
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(defaultPassword, salt);

      // console.log(hashedPassword);

      // Create a new form data object with the hashed default password
      const updatedFormData = {
        ...formData,
        password: hashedPassword, // Use the hashed default password
      };

      const res = await fetch("/api/members", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });

      if (res.ok) {
        setSuccessMessage("Member added successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          address: "",
          city: "",
          country: "",
          nationality: "",
          profession: "",
          dateofbirth: null,
          hobbies: "",
          cellPhone: "",
          email: "",
          password: "",
        });
        setErrors({});
        setIsSubmitted(true);
        setErrorMessage(null);

        // Remove success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
      } else {
        setErrorMessage("Failed to add member.");
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
              placeholder="Enter member's firstname"
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
              placeholder="Enter member's lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
          {errors.lastname && (
            <p className="error-message">{errors.lastname}</p>
          )}

          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Country</label>
            <Select
              showSearch
              placeholder="Select a country"
              optionFilterProp="children"
              onChange={handleCountryChange}
              value={formData.country}
              className={`dash-form-input ${
                errors.country ? "input-error" : ""
              }`}
              filterOption={(input, option) =>
                option.children.toLowerCase().includes(input.toLowerCase())
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

          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">City</label>
            <input
              className={`dash-form-input ${errors.city ? "input-error" : ""}`}
              name="city"
              placeholder="Enter member's city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          {errors.city && <p className="error-message">{errors.city}</p>}

          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Address</label>
            <input
              className={`dash-form-input ${
                errors.address ? "input-error" : ""
              }`}
              name="address"
              placeholder="Enter member's address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          {errors.address && <p className="error-message">{errors.address}</p>}

          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Nationality</label>
            <input
              className={`dash-form-input ${
                errors.nationality ? "input-error" : ""
              }`}
              name="nationality"
              placeholder="Enter member's nationality"
              value={formData.nationality}
              onChange={handleChange}
            />
          </div>
          {errors.nationality && (
            <p className="error-message">{errors.nationality}</p>
          )}

          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Profession</label>
            <input
              className={`dash-form-input ${
                errors.profession ? "input-error" : ""
              }`}
              name="profession"
              placeholder="Enter member's profession"
              value={formData.profession}
              onChange={handleChange}
            />
          </div>
          {errors.profession && (
            <p className="error-message">{errors.profession}</p>
          )}

          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Hobbies/Interests</label>
            <input
              className={`dash-form-input ${
                errors.hobbies ? "input-error" : ""
              }`}
              name="hobbies"
              placeholder="Enter member's hobbies/interests"
              value={formData.hobbies}
              onChange={handleChange}
            />
          </div>
          {errors.hobbies && <p className="error-message">{errors.hobbies}</p>}

          <div className="dash-inputfield-group-column">
            <label className="dash-form-label">Date of Birth</label>
            <DatePicker
              value={formData.dateofbirth}
              format="DD/MM/YYYY"
              onChange={handleDateChange}
              defaultValue={moment("01-12-1990", "DD/MM/YYYY")}
              className={`dash-form-input ${
                errors.dateofbirth ? "input-error" : ""
              }`}
              placeholder="Select date of birth"
            />
          </div>
          {errors.dateofbirth && (
            <p className="error-message">{errors.dateofbirth}</p>
          )}

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
              placeholder="Add member's email"
              value={formData.email}
              onChange={handleChange}
              type="email"
            />
          </div>
          {errors.email && <p className="error-message">{errors.email}</p>}

          <div className="dash-form-container">
            <button className="dash-form-button" type="submit">
              Add Member
            </button>
            {isSubmitted && (
              <Link href="/admin/members">
                <button className="dash-form-button goto">
                  Back to Members
                </button>
              </Link>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
