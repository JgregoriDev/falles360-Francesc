import React from "react";
import Tooltip from "@components/Tooltip/Tooltip.jsx";

const CommentForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del comentario
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="message">Introduce tu comentario:</label>
      <Tooltip tooltipText={"Introduce tu comentario"} />
      <textarea name="message" id="message" required></textarea>
      <button type="submit" className="button button-primary">
        Enviar datos
      </button>
    </form>
  );
};

export default CommentForm;
