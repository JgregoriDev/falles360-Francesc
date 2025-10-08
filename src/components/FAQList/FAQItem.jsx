// src/components/FAQList/FAQItem.js
import React from "react";
import "./FAQItem.css";
const FAQItem = ({ question, answer, index }) => (
  <div className="accordion__item">
    <input type="radio" name="accordion" id={`radio${index}`} />
    <label htmlFor={`radio${index}`} className="accordion__question">
      <h3 className="accordion__title">{question}</h3>
      <svg
        className="accordion__arrow"
        width={40}
        height={40}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
      >
        <path d="M169.4 297.4C156.9 309.9 156.9 330.2 169.4 342.7L361.4 534.7C373.9 547.2 394.2 547.2 406.7 534.7C419.2 522.2 419.2 501.9 406.7 489.4L237.3 320L406.6 150.6C419.1 138.1 419.1 117.8 406.6 105.3C394.1 92.8 373.8 92.8 361.3 105.3L169.3 297.3z" />
      </svg>
    </label>
    <p className="accordion__answer pb-2 pt-2">{answer}</p>
  </div>
);

export default FAQItem;
