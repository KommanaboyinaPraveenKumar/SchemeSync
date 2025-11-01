
import React, { useState } from "react";
import "./CreateProfile.css";

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    state: "",
    district: "",
    occupation: "",
    annualIncome: "",
    educationLevel: "",
    casteCategory: "",
    familySize: "",
    hasBPLCard: false,
    hasDisability: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Data:", formData);
    alert("Profile Saved Successfully!");
  };

  return (
    <div className="profile-container">
      <form className="profile-form" onSubmit={handleSubmit}>
        <h2>Create Your Profile</h2>
        <p>Get personalized scheme recommendations</p>

        <div className="form-grid">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Your age"
            value={formData.age}
            onChange={handleChange}
          />

          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <select name="state" value={formData.state} onChange={handleChange}>
            <option value="">Select State</option>
            <option>Tamil Nadu</option>
            <option>Karnataka</option>
            <option>Andhra Pradesh</option>
            <option>Telangana</option>
            <option>Kerala</option>
            <option>Maharashtra</option>
          </select>

          <input
            type="text"
            name="district"
            placeholder="Your district"
            value={formData.district}
            onChange={handleChange}
          />

          <select
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
          >
            <option value="">Select Occupation</option>
            <option>Student</option>
            <option>Employed</option>
            <option>Self-employed</option>
            <option>Unemployed</option>
            <option>Retired</option>
          </select>

          <input
            type="number"
            name="annualIncome"
            placeholder="Annual income"
            value={formData.annualIncome}
            onChange={handleChange}
          />

          <select
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
          >
            <option value="">Select Education Level</option>
            <option>High School</option>
            <option>Undergraduate</option>
            <option>Postgraduate</option>
            <option>Doctorate</option>
          </select>

          <select
            name="casteCategory"
            value={formData.casteCategory}
            onChange={handleChange}
          >
            <option value="">Select Caste Category</option>
            <option>General</option>
            <option>OBC</option>
            <option>SC</option>
            <option>ST</option>
          </select>

          <input
            type="number"
            name="familySize"
            placeholder="Number of members"
            value={formData.familySize}
            onChange={handleChange}
          />
        </div>

        <div className="checkboxes">
          <label>
            <input
              type="checkbox"
              name="hasBPLCard"
              checked={formData.hasBPLCard}
              onChange={handleChange}
            />
            Have BPL Card
          </label>

          <label>
            <input
              type="checkbox"
              name="hasDisability"
              checked={formData.hasDisability}
              onChange={handleChange}
            />
            Have Disability
          </label>
        </div>

        <div className="form-buttons">
          <button type="button" className="skip-btn">
            Skip for now
          </button>
          <button type="submit" className="save-btn">
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProfile;