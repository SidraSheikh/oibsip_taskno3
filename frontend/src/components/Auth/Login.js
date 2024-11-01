// src/components/Auth/Login.js
import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { email, password });
      localStorage.setItem("token", response.data.token); // Storing JWT token
      navigate("/dashboard/"); // Redirect to dashboard
    } catch (error) {
      // Update the error message based on the response
      if (error.response) {
        setErrorMessage(error.response.data.message || "Login failed");
      } else {
        setErrorMessage("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="login">
      {/* Pizza background */}
      <div className="pizza-background"></div>

      {/* Login form */}
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        {/* User/Admin Selection */}
        <div className="role-selection">
          <label>
            <input type="radio" name="role" value="user" defaultChecked /> User
          </label>
          <label>
            <input type="radio" name="role" value="admin" /> Admin
          </label>
        </div>
        {/* Forgot Password Link */}
        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
        {/* Display error message */}
      </form>
    </div>
  );
};

export default Login;
