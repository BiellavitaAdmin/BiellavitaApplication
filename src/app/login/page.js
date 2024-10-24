"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
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
      const token = response.data.token;
      console.log("token", token);
      localStorage.setItem("token", token);
      Cookies.set("token", token, { expires: 1 });
      setShowSuccess(true);
      setShowError(false);

      setTimeout(() => {
        setShowSuccess(false);
        window.location.href = "/projects";
        // router.reload();
        // router.push("/projects");
      }, 2000);
    } catch (error) {
      setError("Invalid credentials. Please try again.");
      setShowError(true);
      setShowSuccess(false);
      setTimeout(() => {
        setShowError(false);
      }, 30000);
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
                  autoComplete="off"
                  required
                />
              </div>
              <div className="button-container">
                <button className="contact-button" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
