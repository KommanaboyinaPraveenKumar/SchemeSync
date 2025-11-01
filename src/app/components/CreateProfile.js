'use client';
import React, { useState } from "react";
import languages from "../locales/languages.json";
import "./CreateProfile.css";

export default function CreateProfile({ language = "en" }) {
  const t = languages[language].profile;

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
    alert(language === "en" ? "Profile Saved Successfully!" : "प्रोफ़ाइल सफलतापूर्वक सहेजी गई!");
  };

  return (
    <div className="profile-container">
      <form className="profile-form" onSubmit={handleSubmit}>
        <h2>{t.title}</h2>
        <p>{t.subtitle}</p>

        <div className="form-grid">
          <input
            type="text"
            name="name"
            placeholder={t.namePlaceholder}
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder={t.agePlaceholder}
            value={formData.age}
            onChange={handleChange}
          />

          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">{t.genderLabel}</option>
            <option>{language === "en" ? "Male" : "पुरुष"}</option>
            <option>{language === "en" ? "Female" : "महिला"}</option>
            <option>{language === "en" ? "Other" : "अन्य"}</option>
          </select>

          <select name="state" value={formData.state} onChange={handleChange}>
            <option value="">{t.stateLabel}</option>
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
            placeholder={t.districtPlaceholder}
            value={formData.district}
            onChange={handleChange}
          />

          <select
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
          >
            <option value="">{t.occupationLabel}</option>
            <option>{language === "en" ? "Student" : "छात्र"}</option>
            <option>{language === "en" ? "Employed" : "नियोजित"}</option>
            <option>{language === "en" ? "Self-employed" : "स्व-नियोजित"}</option>
            <option>{language === "en" ? "Unemployed" : "बेरोज़गार"}</option>
            <option>{language === "en" ? "Retired" : "सेवानिवृत्त"}</option>
          </select>

          <input
            type="number"
            name="annualIncome"
            placeholder={t.annualIncome}
            value={formData.annualIncome}
            onChange={handleChange}
          />

          <select
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
          >
            <option value="">{t.educationLabel}</option>
            <option>{language === "en" ? "High School" : "हाई स्कूल"}</option>
            <option>{language === "en" ? "Undergraduate" : "स्नातक"}</option>
            <option>{language === "en" ? "Postgraduate" : "स्नातकोत्तर"}</option>
            <option>{language === "en" ? "Doctorate" : "पीएचडी"}</option>
          </select>

          <select
            name="casteCategory"
            value={formData.casteCategory}
            onChange={handleChange}
          >
            <option value="">{t.casteLabel}</option>
            <option>{language === "en" ? "General" : "सामान्य"}</option>
            <option>{language === "en" ? "OBC" : "ओबीसी"}</option>
            <option>{language === "en" ? "SC" : "एससी"}</option>
            <option>{language === "en" ? "ST" : "एसटी"}</option>
          </select>

          <input
            type="number"
            name="familySize"
            placeholder={t.familySize}
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
            {t.bplCard}
          </label>

          <label>
            <input
              type="checkbox"
              name="hasDisability"
              checked={formData.hasDisability}
              onChange={handleChange}
            />
            {t.disability}
          </label>
        </div>

        <div className="form-buttons">
          <button type="button" className="skip-btn">
            {t.skip}
          </button>
          <button type="submit" className="save-btn">
            {t.save}
          </button>
        </div>
      </form>
    </div>
  );
}
