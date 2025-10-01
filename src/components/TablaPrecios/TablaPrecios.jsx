import "./TablaPrecios.css";
// import "./TablaPrecios.css";
export const TablaPrecios = () => {
  return (
    <section id="tablasPrecios" className="">
      <h2 className="container__princing-title">Precios</h2>
    
      <table>
        <thead>
          <tr className="header-table">
            <th className="theader">Características</th>
            <th className="theader">Usuario Gratuito</th>
            <th className="theader">Usuario de Premium gratis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td__principal">Eventos en tiempo real</td>
            <td>✔️</td>
            <td>✔️</td>
          </tr>
          <tr>
            <td className="td__principal">Recibir notificaciones automáticas</td>
            <td>✔️</td>
            <td>✔️</td>
          </tr>
          <tr>
            <td className="td__principal">Ver mapa interactivo de fallas</td>
            <td>✔️</td>
            <td>✔️</td>
          </tr>
          <tr>
            <td className="td__principal">Dinámicas gamificadas</td>
            <td>✔️</td>
            <td>✔️</td>
          </tr>
          <tr>
            <td className="td__principal">Pago directo desde el móvil</td>
            <td>✔️</td>
            <td>✔️</td>
          </tr>
          <tr>
            <td className="td__principal">Acceso a redes sociales para disfrutar de eventos</td>
            <td>✔️</td>
            <td>✔️</td>
          </tr>
          <tr>
            <td className="td__principal">Evitar colas en la barra (sin tokens)</td>
            <td>❌</td>
            <td>✔️</td>
          </tr>
          <tr>
            <td className="td__principal">Acceso con pulsera o llavero NFC</td>
            <td>❌</td>
            <td>✔️</td>
          </tr>
          <tr>
            <td className="td__principal">Inscripciones automáticas a eventos</td>
            <td>❌</td>
            <td>✔️</td>
          </tr>
          <tr>
            <td className="td__principal">Acceso a contenido exclusivo para falleros</td>
            <td>❌</td>
            <td>✔️</td>
          </tr>
          <tr>
            <td className="td__principal">Grupo privado digital de tu falla</td>
            <td>❌</td>
            <td>✔️</td>
          </tr>
          <tr>
            <td className="td__principal">Participar en sorteos</td>
            <td>❌</td>
            <td>✔️</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="3"></th>
          </tr>
          <tr>
            <th colSpan="3">
                <a href="#" className="btn btn-secondary">¡Únete gratis!</a>
            </th>
          </tr>
          <tr>
            <th colSpan="3">  <a href="#" className="button btn btn-primary ">
                ¡Suscríbete ahora gratis!
              </a></th>
          </tr>
          <tr className="col-3 pt-2 pb-2" >
            {/* Todo: Resposive buttons */}
            <th></th>
            <th className="" >
              <a href="#" className="button container__pricing-element--outline text__notunderline">¡Únete gratis!</a>
            </th>
            <th>
              <a href="#" className="button button-primary">
                ¡Suscríbete ahora!
              </a>
            </th>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};
