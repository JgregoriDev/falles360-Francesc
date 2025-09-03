import "./TablaPrecios.css";
export const TablaPrecios = () => {
  return (
    <section id="" className="">
      <h3>Tabla de precios</h3>
      <div className="">
        <section aria-labelledby="comparativa-usuario">
          <h2 id="comparativa-usuario">
            ¿Qué puedes hacer como fallero según tu plan?
          </h2>
          <table>
            <caption>Comparativa de funciones para el usuario final</caption>
            <thead>
              <tr>
                <th scope="col">Funcionalidad</th>
                <th scope="col">Usuario (Plan Gratuito)</th>
                <th scope="col">Usuario (Plan Profesional)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ver eventos oficiales en tiempo real</td>
                <td>✅ </td>
                <td>✅ </td>
              </tr>
              <tr>
                <td>Recibir notificaciones automáticas</td>
                <td>✅ </td>
                <td>✅ </td>
              </tr>
              <tr>
                <td>Ver mapa interactivo de fallas</td>
                <td>✅ </td>
                <td>✅ </td>
              </tr>
              <tr>
                <td>Acceso a eventos exclusivos</td>
                <td>❌</td>
                <td>✅ </td>
              </tr>
              <tr>
                <td>Acceso a contenido exclusivo para falleros</td>
                <td>❌</td>
                <td>✅ </td>
              </tr>
              <tr>
                <td>
                  Acceso a redes sociales para pegarte la fiesta en fallas
                </td>
                <td>✅</td>
                <td>✅ </td>
              </tr>
              <tr>
                <td>Dinámicas gamificadas</td>
                <td>✅</td>
                <td>✅ </td>
              </tr>
              <tr>
                <td>Grupo privado digital de tu falla</td>
                <td>❌</td>
                <td>✅ </td>
              </tr>
              <tr>
                <td>Recibir notificaciones personalizadas (manuales)</td>
                <td>❌</td>
                <td>✅ </td>
              </tr>
              <tr>
                <td>Pago directo desde el móvil</td>
                <td>✅</td>
                <td>✅ </td>
              </tr>
              <tr>
                <td>Evitar colas en la barra (sin tokens)</td>
                <td>❌</td>
                <td>✅ </td>
              </tr>
              <tr>
                <td>Acceso con pulsera o llavero NFC</td>
                <td>❌ (opcional)</td>
                <td>✅ (si la falla lo activa)</td>
              </tr>
              <tr>
                <td>Inscripciones automáticas a eventos</td>
                <td>❌</td>
                <td>✅ </td>
              </tr>
              <tr>
                <td>Participar en sorteos</td>
                <td>❌</td>
                <td>✅ (sujeto a activación)</td>
              </tr>
              <tr>
                <td>Precio</td>
                <td>Gratis</td>
                <td>20 €</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      <div className="container__pricing">
        <div className="container__princing--free">
          <h5>Usuario gratuito</h5>
          <ul className="container__princing-list">
            <li id="li1" className="conteiner__pricing-element">1</li>
            <li id="li2" className="conteiner__pricing-element">2</li>
            <li id="li3" className="conteiner__pricing-element">3</li>
            <li id="li4" className="conteiner__pricing-element">4</li>
            <li>Precio total: gratis</li>
          </ul>
        </div>
        <div className="container__princing--premium">
          <h5>Usuario de pago</h5>
          <ul className="container__princing-list">
            <li id="li5" className="conteiner__pricing-element">1</li>
            <li id="li6" className="conteiner__pricing-element">2</li>
            <li id="li7" className="conteiner__pricing-element">3</li>
            <li id="li8" className="conteiner__pricing-element">4</li>
            <li>Precio total: 20€</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
