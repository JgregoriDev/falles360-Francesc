import "./Differences.css";
/**
 * Diferencies component.
 * Renders a simple div with the text "Diferencies".
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
export const Differences = () => {
  return (
    <section id="differences" className="differences mt-2 mb-2">
      <h2 className="differences__title">Como es la vida con App Falles360</h2>
      <div className="differences__container">
        <ul className="differences__ul differences__ul--primary--color">
          <li className="differences__item differences__item--title differences__item--without">
            <h3>Sin app falles 360</h3>
          </li>
          <li className="differences__item differences__item--without">
            Te enteras de los eventos con retraso..
          </li>
          <li className="differences__item differences__item--without">
            Buscas información en múltiples fuentes.
          </li>
          <li className="differences__item differences__item--without">
            Te pierdes experiencias inolvidables.
          </li>
          <li className="differences__item differences__item--without">
            Te sientes aislado.
          </li>
          <li className="differences__item differences__item--without">
            Solo observas desde la distancia.
          </li>
          <li className="differences__item differences__item--without">
            Anuncios que pasan desapercibidos.
          </li>
          <li className="differences__item differences__item--without">
            Mensajes de WhatsApp sin fin.
          </li>
          <li className="differences__item differences__item--without">
            Entradas que se extravían.
          </li>
          <li className="differences__item differences__item--without">
            Entradas fraudulentas.{" "}
          </li>
          <li className="differences__item differences__item--without">
            Largas filas en la barra.{" "}
          </li>
          <li className="differences__item differences__item--without">
            Inscripciones fuera de tiempo.{" "}
          </li>
          <li className="differences__item differences__item--without">
            Esperas eternas para realizar pagos en persona.{" "}
          </li>
        </ul>
        <ul className="differences__ul differences__ul--secondary--color">
          <li className="differences__item differences__item--title differences__item--without">
            <h3>Con app falles 360</h3>
          </li>
          <li className="differences__item differences__item--with">
            Todo disponible en un solo sitio.
          </li>
          <li className="differences__item differences__item--with">
            Disfrutas cada momento al máximo.{" "}
          </li>
          <li className="differences__item differences__item--with">
            Eres el protagonista de la historia.{" "}
          </li>
          <li className="differences__item differences__item--with">
            Orgullo de pertenencia a la comunidad fallera.
          </li>
          <li className="differences__item differences__item--with">
            Difusión con un solo clic.{" "}
          </li>
          <li className="differences__item differences__item--with">
            Entradas digitales en tu dispositivo móvil.
          </li>
          <li className="differences__item differences__item--with">
            Barra sin necesidad de tokens.
          </li>
          <li className="differences__item differences__item--with">
            Adiós a las falsificaciones.
          </li>
          <li className="differences__item differences__item--with">
            Inscripciones automáticas y sencillas.
          </li>
          <li className="differences__item differences__item--with">
            Estadísticas en tiempo real.
          </li>
          <li className="differences__item differences__item--with">
            Registro centralizado en un solo lugar.
          </li>
          <li className="differences__item differences__item--with">
            Orgullo de pertenencia a la comunidad fallera.
          </li>
        </ul>
      </div>
    </section>
  );
};
