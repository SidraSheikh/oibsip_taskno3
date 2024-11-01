import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // For error handling
  const [successMessage, setSuccessMessage] = useState(""); // For success message
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        password
      });

      if (response.status === 201) {
        setSuccessMessage(
          "Registration successful! Redirecting to login page..."
        );
        setErrorMessage(""); // Clear any previous errors

        // Redirect to login page after 2 seconds
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      // Handle error response
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || "Registration failed");
      } else {
        setErrorMessage("An unexpected error occurred");
      }
      setSuccessMessage(""); // Clear any success message
    }
  };

  return (
    <div className="register">
      {/* Pizza background */}
      <div className="pizza-background"></div>

      {/* Registration form */}
      <form onSubmit={handleRegister}>
        <h2>Register</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
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
        <button type="submit">Register</button>

        {/* Success and error messages */}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Register;
