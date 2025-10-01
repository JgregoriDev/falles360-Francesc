import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import "./Contact.css";

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
    resetForm();
  }, []);

  const resetForm = () => {
    setFormData({ name: "", email: "", subject: "", rgpd: false });
    setErrors({});
    setSuccesfull(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // TODO: Petición POST
      setErrors({});
      setSuccesfull(true);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const { name, email, rgpd, subject } = formData;

    if (!name || name.length < 2) {
      newErrors.name = "El nombre es requerido y debe tener al menos 2 caracteres.";
    }
    if (!email || !validateEmail(email)) {
      newErrors.email = "El correo electrónico es requerido y debe tener un formato válido.";
    }
    if (!subject) {
      newErrors.subject = "El asunto es requerido.";
    }
    if (!rgpd) {
      newErrors.rgpd = "Debes aceptar la política de RGPD.";
    }
    return newErrors;
  };

  return (
    <section className="contacto" id="contacto">
      <h2>Contacto</h2>
      <p>Tienes dudas o necesitas más información?</p>
      <ContactForm
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        onSubmit={handleSubmit}
      />
      {succesfull && (
        <small className="form__successfull mt-1 mb-1">
          El mensaje ha sido enviado correctamente
        </small>
      )}
    </section>
  );
};
