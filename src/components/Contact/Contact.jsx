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
    const { name, type, checked, value } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };
  const validate = () => {
    const newErrors = {};
    const { name, email, rgpd, subject } = formData;
    if (!name) {
      newErrors.name = "El nombre es requerido.";
    }
    if (name.length < 3) {
      newErrors.name = "El nombre requiere como mínimo 3 caracteres.";
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
      <h3>Contacto</h3>
      <p>Tienes dudas o necesitas más información?</p>
      <form className="contact__form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          className="form__field"
          form__textareaype="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <small className="form__errors">{errors.name}</small>}

        <label htmlFor="email">Correo electrónico:</label>
        <input
          className="form__field"
          form__textarea
          type="text"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <small className="form__errors">{errors.email}</small>}

        <label htmlFor="subject">Asunto:</label>
        <textarea
          className="form__field form__textarea"
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
            checked={formData.rgpd}
            onChange={handleChange}
          />
          He leído{" "}
          <a target="_blank" href="/falles360-Francesc/politica-privacidad">
            la política de privacidad
          </a>
        </p>
        {errors.rgpd && <small className="form__errors">{errors.rgpd}</small>}

        <button className="button--outline" type="submit">
          Envíanos tu consulta
        </button>
       {succesfull? <small className="form__successfull">El mensaje ha sido enviado correctamente</small>:""}
      </form>
    </section>
  );
};
