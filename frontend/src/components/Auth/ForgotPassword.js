// src/components/Auth/ForgotPassword.js
import React, { useState } from "react";
import axios from "axios";
import "./ForgotPassword.css"; 
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/forgot-password", { email });
      setMessage(
        response.data.message || "Password reset link sent to your email"
      );
      setErrorMessage(""); // Clear any previous error messages
    } catch (error) {
      if (error.response) {
        setErrorMessage(
          error.response.data.message || "Failed to send password reset link"
        );
      } else {
        setErrorMessage("An unexpected error occurred");
      }
      setMessage(""); // Clear any previous success messages
    }
  };

  return (
    <div className="forgot-password-container">
      {/* Pizza background */}
      <div className="pizza-background"></div>

      {/* Forgot Password form */}
      <form onSubmit={handleForgotPassword}>
        <h2>Forgot Password</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Send Reset Link</button>
        {message && <p className="success-message">{message}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;
