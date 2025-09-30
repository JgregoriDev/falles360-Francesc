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
            Acceso inmediato a la información de eventos.
          </li>
          <li className="differences__item differences__item--without">
            Participación activa en la celebración.
          </li>
          <li className="differences__item differences__item--without">
            Experiencias únicas y memorables.
          </li>
          <li className="differences__item differences__item--without">
            Conexión con otros falleros.
          </li>
          <li className="differences__item differences__item--without">
            Gestión sencilla de tickets digitales.
          </li>
          <li className="differences__item differences__item--without">
            Notificaciones personalizadas sobre eventos.
          </li>
        </ul>
        <ul className="differences__ul differences__ul--secondary--color">
          <li className="differences__item differences__item--title differences__item--without">
            <h3>Con app falles 360</h3>
          </li>
          <li className="differences__item differences__item--with">
            Eliminación de colas y esperas innecesarias.
          </li>
          <li className="differences__item differences__item--with">
            Inscripciones automáticas y rápidas.
          </li>
          <li className="differences__item differences__item--with">
            Contenido exclusivo para miembros de Falles.
          </li>
          <li className="differences__item differences__item--with">
            Estadísticas en tiempo real sobre la participación.
          </li>
          <li className="differences__item differences__item--with">
            Facilidad para compartir eventos con amigos.
          </li>
          <li className="differences__item differences__item--with">
            Orgullo de pertenencia a la comunidad fallera.
          </li>
        </ul>
      </div>
    </section>
  );
};
