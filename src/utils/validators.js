export const validateEmail = (email) => {
  if (!email) return false;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

export const validateName = (name) => {
  if (!name) return "El nombre es obligatorio.";
  if (name.length < 2) return "El nombre debe tener al menos 2 caracteres.";
  if (!/^[a-zA-Z\s]+$/.test(name))
    return "El nombre solo puede contener letras y espacios.";
  return null;
};
