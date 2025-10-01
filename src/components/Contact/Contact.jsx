import { useState } from "react";
import "./Contact.css";
import { useEffect } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    rgpd: false,
  });
  const [errors, setErrors] = useState({});
  const [succesfull, setSuccesfull] = useState(false);

  useEffect(() => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      rgpd: false,
    });
    setErrors({});
    setSuccesfull(false);
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "rgpd") {
      setFormData({ ...formData, [name]: e.target.checked });
      if (e.target.checked) {
        const { rgpd: _, ...rest } = errors; // Eliminar el error de rgpd si se marca
        setErrors(rest);
      } else {
        setErrors({ ...errors, rgpd: "Debes aceptar la política de RGPD." });
      }
      return;
    }
    if (name === "email") {
      setFormData({ ...formData, [name]: value });
      const isValid = validateEmail(value);
      if (!isValid) {
        setErrors({
          ...errors,
          email: "El correo electrónico no cumple el formato requerido.",
        });
      } else {
        const { email: _, ...rest } = errors; // Eliminar el error del email si es válido
        setErrors(rest);
      }
      return;
    }
    setFormData({ ...formData, [name]: value });

    const error = validateEmail(value);
    if (error) {
      setErrors({ ...errors, email: error });
    } else {
      const { name: _, ...rest } = errors; // Eliminar el error del nombre si no hay
      setErrors(rest);
    }
    if (name === "name") {
      const error = validateName(value);
      if (error) {
        setErrors({ ...errors, name: error });
      } else {
        const { name: _, ...rest } = errors; // Eliminar el error del nombre si no hay
        setErrors(rest);
      }
    }
  };
  const validateEmail = (email) => {
    if (!email) return false;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };
  const validateName = (name) => {
    if (name.length < 2) {
      return "El nombre debe tener al menos 2 caracteres.";
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      return "El nombre solo puede contener letras y espacios.";
    }
    if (!name) {
      return "El nombre es obligatorio.";
    }
    return null;
  };

  const validate = () => {
    const newErrors = {};
    const { name, email, rgpd, subject } = formData;

    if (name.length < 2) {
      newErrors.name = "El nombre requiere como mínimo 3 caracteres.";
    }
    if (!name) {
      newErrors.name = "El nombre es requerido.";
    }
    if (!email) {
      newErrors.email = "El correo electrónico es requerido.";
    }
    if (!validateEmail(email)) {
      newErrors.email = "El correo electrónico no cumple el formato requerido.";
    }
    if (!email) {
      newErrors.email = "El correo electrónico es requerido.";
    }
    if (!subject) {
      newErrors.subject = "El asunto es requerido.";
    }
    if (!rgpd) {
      newErrors.rgpd = "Debes aceptar la política de RGPD.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccesfull(false);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // TODO: Peticion post

      setErrors({});
      setSuccesfull(!succesfull);
    }
  };
  return (
    <section className="contacto" id="contacto">
      <h2>Contacto</h2>
      <p>Tienes dudas o necesitas más información?</p>
      <form className="contact__form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          className={`form__field ${errors?.name ? "form__field--error" : ""}`}
          placeholder="Tu nombre"
          form__textareaype="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors?.name && <small className="form__errors">{errors?.name}</small>}

        <label htmlFor="email">Correo electrónico:</label>
        <input
          className={`form__field ${errors?.email ? "form__field--error" : ""}`}
          placeholder="Tu correo electrónico"
          type="text"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors?.email && (
          <small className="form__errors">{errors?.email}</small>
        )}

        <label htmlFor="subject">Asunto:</label>
        <textarea
          className={`form__field form__textarea ${
            errors?.subject ? "form__field--error" : ""
          }`}
          placeholder="Tu consulta"
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        {errors?.subject && (
          <small className="form__errors">{errors?.subject}</small>
        )}

        <p>
          <input
            type="checkbox"
            name="rgpd"
            id="rgpd"
            className={`form__checkbox ${
              errors?.rgpd ? "form__checkbox--error" : ""
            }`}
            checked={formData.rgpd}
            onChange={handleChange}
          />
          <label htmlFor="rgpd">
            He leído{" "}
            <a target="_blank" href="/falles360-Francesc/politica-privacidad">
              la política de privacidad
            </a>
          </label>
        </p>
        {errors?.rgpd && <small className="form__errors">{errors?.rgpd}</small>}

        <button className="button button--outline" type="submit">
          Envíanos tu consulta
        </button>
        {succesfull && (
          <small className="form__successfull mt-1 mb-1">
            El mensaje ha sido enviado correctamente
          </small>
        )}
      </form>
    </section>
  );
};
