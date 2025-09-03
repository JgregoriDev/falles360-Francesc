import FAQs from "@store/FAQsList.json";
import "./FAQList.css";
export const FAQList = () => {
  if (FAQs === undefined || FAQs.length === 0) {
    return "No hay";
  }
  return (
    <section className="section faqs">
      <h2>Preguntas y respuestas sobre nuestros servicios</h2>
      <div className="accordion">
        {FAQs.map((item, index) => (
          <div className="accordion__item" key={index}>
            <input type="radio" name="accordion" id={`radio${index}`} />
            <label htmlFor={`radio${index}`} className="accordion__question">
              <h3 className="acordion__title">
                {item.question}
                <svg
                  className="accordion__arrow"
                  width={35}
                  height={35}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M169.4 297.4C156.9 309.9 156.9 330.2 169.4 342.7L361.4 534.7C373.9 547.2 394.2 547.2 406.7 534.7C419.2 522.2 419.2 501.9 406.7 489.4L237.3 320L406.6 150.6C419.1 138.1 419.1 117.8 406.6 105.3C394.1 92.8 373.8 92.8 361.3 105.3L169.3 297.3z" />
                </svg>
              </h3>
            </label>
            <p className="accordion__answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
