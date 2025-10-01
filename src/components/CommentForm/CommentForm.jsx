import React from "react";
import Tooltip from "@components/Tooltip/Tooltip.jsx";
import "./CommentForm.css";
import avatar from "@/assets/avatar.png";
const CommentForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del comentario
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="mb-1" htmlFor="message">
        Introduce tu comentario:{" "}
        <Tooltip tooltipText={"Introduce tu comentario"} />
      </label>
      <div className="form__container">
        <img
          loading="lazy"
          src={avatar}
          title="avatar User 1"
          alt=""
          className="form__user--avatar"
        />
        <textarea
          className="form__textArea"
          name="message"
          id="message"
          required
        ></textarea>
      </div>

      <button type="submit" className=" mb-2 mt-2 button button-primary">
        Enviar datos
      </button>
    </form>
  );
};

export default CommentForm;
