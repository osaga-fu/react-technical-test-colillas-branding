import SvgArrow from "../../SvgComponents/SvgArrow";
import "./Form.css";
import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    checkboxTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((data) => ({
      ...data,
      [name]: newValue,
    }));
  };

  const handleClick = () => {
    setFormData((data) => ({
      ...data,
      checkboxTerms: !data.checkboxTerms,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (formData.name.length === 0) {
      errors.name = "Introduzca su nombre.";
    }
    if (formData.company.length === 0) {
      errors.company = "Introduzca el nombre de la empresa.";
    }
    if (!isValidEmail(formData.email)) {
      errors.email = "Introduzca un email válido.";
    }
    if (!isValidPhoneNumber(formData.phone)) {
      errors.phone = "Introduzca un número de teléfono válido.";
    }
    if (formData.message.length === 0) {
      errors.message = "Introduzca un mensaje.";
    }
    if (!formData.checkboxTerms) {
      errors.checkboxTerms = "Debe aceptar los términos y condiciones.";
    }
    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulario válido, se puede enviar:", formData);
    } else {
      console.log("Formulario inválido, por favor corrija los errores.");
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^\d{9,}$/;
    return phoneRegex.test(phone);
  };

  return (
    <section className="form-section">
      <div className="form-container">
        <span className="form-info">
          <h4 className="form-info-title">
            Figma ipsum component variant main layer.
          </h4>
          <h3 className="form-info-subtitle">
            Figma ipsum component variant main layer. Asset connection.
          </h3>
        </span>
        <form id="form" onSubmit={handleSubmit}>
          <div className="form-line">
            <div className="input-container">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
            <div className="input-container">
              <label htmlFor="company">Empresa</label>
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
              />
              {errors.company && (
                <p className="error-message">{errors.company}</p>
              )}
            </div>
          </div>
          <div className="form-line">
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="input-container">
              <label htmlFor="phone">Teléfono de contacto</label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error-message">{errors.phone}</p>}
            </div>
          </div>
          <div className="message-input">
            <label htmlFor="message">Mensaje</label>
            <input
              type="text"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="error-message">{errors.message}</p>
            )}
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              name="checkbox-terms"
              id="checkbox-terms"
              checked={formData.checkboxTerms}
              onChange={handleClick}
            />
            <label className="checkbox-terms-label" htmlFor="checkbox-terms">
              I accept the &nbsp;
              <a href="https://colillas.com/en/contact/" target="_blank">
                Terms
              </a>{" "}
              {errors.checkboxTerms && (
                <p className="error-message">{errors.checkboxTerms}</p>
              )}
            </label>
          </div>
          <div className="submit-button-container">
            <input type="submit" value="Enviar" id="submit" />
            <div className="submit-arrow">
              <SvgArrow />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
