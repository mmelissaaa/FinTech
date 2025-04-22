import React, { useState } from "react";
import "./UserDetails.css";

const UserDetails = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    contact: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [currentField, setCurrentField] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contact.replace(/\D/g, ""))) {
      newErrors.contact = "Contact number must be 10 digits";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Handle form submission here
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <div className="container">
      {/* Left Panel */}
      <div className="left-panel">
        <div className="welcome-section">
          <h1>Welcome</h1>
          <p>Please provide your details to get started</p>
        </div>
        <div className="info-section">
          <div className="info-item">
            <i className="icon user-icon"></i>
            <span>Personal Information</span>
          </div>
          <div className="info-item">
            <i className="icon email-icon"></i>
            <span>Contact Details</span>
          </div>
          <div className="info-item">
            <i className="icon location-icon"></i>
            <span>Location Information</span>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        <div className="form-container">
          <h2>User Details</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <div className="input-container">
                <i className="icon user-icon"></i>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  onFocus={() => setCurrentField("username")}
                  className={currentField === "username" ? "focused" : ""}
                />
              </div>
              {errors.username && (
                <p className="error-message">{errors.username}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-container">
                <i className="icon email-icon"></i>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setCurrentField("email")}
                  className={currentField === "email" ? "focused" : ""}
                />
              </div>
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="contact">Contact Number</label>
              <div className="input-container">
                <i className="icon phone-icon"></i>
                <input
                  id="contact"
                  name="contact"
                  type="tel"
                  value={formData.contact}
                  onChange={handleChange}
                  onFocus={() => setCurrentField("contact")}
                  className={currentField === "contact" ? "focused" : ""}
                />
              </div>
              {errors.contact && (
                <p className="error-message">{errors.contact}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <div className="input-container">
                <i className="icon location-icon"></i>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  onFocus={() => setCurrentField("address")}
                  className={currentField === "address" ? "focused" : ""}
                ></textarea>
              </div>
              {errors.address && (
                <p className="error-message">{errors.address}</p>
              )}
            </div>

            <button type="submit" className="submit-button">
              <span>Submit</span>
              <i className="icon arrow-icon"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
