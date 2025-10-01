import React from "react";
import Tooltip from "@components/Tooltip/Tooltip";
import { validateEmail, validateName } from "./validators";

const ContactForm = ({ formData, setFormData, errors, onSubmit }) => {
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    const newValue = name === "rgpd" ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: newValue }));

    // Validación de RGPD
    if (name === "rgpd") {
      if (!checked) {
        setErrors((prev) => ({
          ...prev,
          rgpd: "Debes aceptar la política de RGPD.",
        }));
      } else {
        setErrors((prev) => {
          const { rgpd, ...rest } = prev;
          return rest;
        });
      }
    }

    // Validación de email
    if (name === "email") {
      if (!validateEmail(value)) {
        setErrors((prev) => ({
          ...prev,
          email: "El correo electrónico no cumple el formato requerido.",
        }));
      } else {
        setErrors((prev) => {
          const { email, ...rest } = prev;
          return rest;
        });
      }
    }

    // Validación de nombre
    if (name === "name") {
      const nameError = validateName(value);
      if (nameError) {
        setErrors((prev) => ({ ...prev, name: nameError }));
      } else {
        setErrors((prev) => {
          const { name, ...rest } = prev;
          return rest;
        });
      }
    }
  };

  return (
    <form className="contact__form" onSubmit={onSubmit}>
      <label htmlFor="name">
        Nombre:{" "}
        <Tooltip tooltipText={`Introduce un nombre por ejemplo: John Doe`} />
      </label>
      <input
        className={`form__field ${errors.name ? "form__field--error" : ""}`}
        placeholder="Tu nombre"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <small className="form__errors">{errors.name}</small>}

      <label htmlFor="email">
        Correo electrónico:{" "}
        <Tooltip
          tooltipText={`Introduce un e-mail por ejemplo: john.doe@ejemplo.org`}
        />
      </label>
      <input
        className={`form__field ${errors.email ? "form__field--error" : ""}`}
        placeholder="Tu correo electrónico"
        type="text"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <small className="form__errors">{errors.email}</small>}

      <label htmlFor="subject">Asunto:</label>
      <textarea
        className={`form__field form__textarea ${
          errors.subject ? "form__field--error" : ""
        }`}
        placeholder="Tu consulta"
        name="subject"
        id="subject"
        value={formData.subject}
        onChange={handleChange}
      />
      {errors.subject && (
        <small className="form__errors">{errors.subject}</small>
      )}

      <p>
        <input
          type="checkbox"
          name="rgpd"
          id="rgpd"
          className={`form__checkbox ${
            errors.rgpd ? "form__checkbox--error" : ""
          }`}
          checked={formData.rgpd}
          onChange={handleChange}
        />
        <label htmlFor="rgpd">
          He leído{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/falles360-Francesc/politica-privacidad"
          >
            la política de privacidad
          </a>
        </label>
      </p>
      {errors.rgpd && <small className="form__errors">{errors.rgpd}</small>}

      <button className="button button--outline w-resposive-form" type="submit">
        <svg
          className="icon__button--red"
          height={50}
          width={50}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <path
            d="M576 304C576 436.5 461.4 544 320 544C282.9 544 247.7 536.6 215.9
          523.3L97.5 574.1C88.1 578.1 77.3 575.8 70.4 568.3C63.5 560.8 62 549.8 66.8 540.8L115.6 448.6C83.2 408.3 64 358.3 64 304C64 171.5 178.6 64 320 64C461.4 64 576 171.5 576 304z"
          />
        </svg>
        Envíanos tu consulta
      </button>
    </form>
  );
};
