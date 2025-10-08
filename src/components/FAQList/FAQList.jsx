// src/components/FAQList/FAQList.js
import React from "react";
import FAQs from "@store/FAQsList.json";
import FAQItem from "./FAQItem";
import "./FAQList.css";

export const FAQList = () => {
  if (!FAQs || FAQs.length === 0) {
    return <p>No hay preguntas disponibles.</p>;
  }

  return (
    <section id="preguntas" className="section faqs">
      <h2>Preguntas y respuestas sobre nuestros servicios</h2>
      <div className="accordion">
        {FAQs.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
