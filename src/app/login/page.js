"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // use for redirection after login
import axios from "axios"; // For sending login request
import Cookies from "js-cookie"; // For managing cookies
import "./login.css";
import SuccessAlert from "../components/pagecomponents/headercomponents/successalert";
import ErrorAlert from "../components/pagecomponents/headercomponents/erroralert";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { email, password });

      // If login is successful, store the JWT token in cookies and localStorage
      const token = response.data.token;
      console.log("token", token);

      // Store in localStorage
      localStorage.setItem("token", token);

      // Store in cookies for 7 days
      Cookies.set("token", token, { expires: 7 });

      // Show success alert
      setShowSuccess(true);
      setShowError(false); // Hide error alert

      // Hide success alert after 30 seconds
      setTimeout(() => {
        setShowSuccess(false);
        router.push("/projects"); // Redirect after hiding alert
      }, 8000); // 30000 ms = 30 seconds
    } catch (error) {
      setError("Invalid credentials. Please try again.");
      setShowError(true);
      setShowSuccess(false); // Hide success alert

      // Hide error alert after 30 seconds
      setTimeout(() => {
        setShowError(false);
      }, 30000); // 30000 ms = 30 seconds

      console.log(error);
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-heading-container">
          <h2 className="login-main-heading">Welcome Back</h2>
        </div>
        <div className="notification-container">
          {showSuccess && <SuccessAlert />}
          {showError && <ErrorAlert />}
        </div>
        <div className="login-form-container">
          <div className="login-form">
            <h3 className="form-title">Enter Your Credentials</h3>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleLogin}>
              <div className="address-field-container">
                <label className="form-labels">Email Address</label>
                <input
                  type="email"
                  className="input-fields"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="message-field-container">
                <label className="form-labels">Password</label>
                <input
                  type="password"
                  className="input-fields"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="button-container">
                <button className="contact-button" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
