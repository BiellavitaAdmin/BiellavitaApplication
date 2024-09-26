"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // use for redirection after login
import axios from "axios"; // For sending login request
import jwt_decode from "jwt-decode"; // For decoding JWT token
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { email, password });

      // If login is successful, store the JWT token in localStorage or cookies
      localStorage.setItem("token", response.data.token);

      // Redirect to a restricted page, e.g. /members
      router.push("/projects");
    } catch (error) {
      setError("Invalid credentials. Please try again.");
      console.log(error);
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-heading-container">
          <h2 className="login-main-heading">Welcome Back</h2>
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
