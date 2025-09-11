import "./TablaPrecios.css";
export const TablaPrecios = () => {
  return (
    <section id="tablasPrecios" className="">
      <h2 className="container__princing-title">Tabla de precios</h2>
      <div className="container__pricing">
        <div className="container__princing--free">
          <h3 className="container__princing-subtitle">Usuario gratuito</h3>
          <ul className="container__princing-list">
            <li id="li1" className="conteiner__pricing-element">Eventos en tiempo real</li>
            <li id="li2" className="conteiner__pricing-element">Recibir notificaciones automáticas</li>
            <li id="li3" className="conteiner__pricing-element">Ver mapa interactivo de fallas</li>
            <li id="li4" className="conteiner__pricing-element">Dinámicas gamificadas</li>
            <li id="li4" className="conteiner__pricing-element">Pago directo desde el móvil</li>
            <li id="li4" className="conteiner__pricing-element">Acceso a redes sociales para disfrutar de los eventos en fallas</li>
            <li  className="conteiner__pricing-element">❌</li>
            <li  className="conteiner__pricing-element">❌</li>
            <li  className="conteiner__pricing-element">❌</li>
            <li  className="conteiner__pricing-element">❌</li>
            <li  className="conteiner__pricing-element">❌</li>
            <li  className="conteiner__pricing-element">❌</li>
            <li  className="conteiner__pricing-element">❌</li>
            <li className="conteiner__pricing-element--outline">Precio total: gratis</li>
          </ul>
        </div>
        <div className="container__princing--premium">
          <h3 className="container__princing-subtitle">Usuario de pago</h3>
          <ul className="container__princing-list">
            <li id="li5" className="conteiner__pricing-element">Eventos en tiempo real</li>
            <li id="li6" className="conteiner__pricing-element">Recibir notificaciones automáticas</li>
            <li id="li7" className="conteiner__pricing-element">Ver mapa interactivo de fallas</li>
            <li id="li8" className="conteiner__pricing-element">Dinámicas gamificadas</li>
            <li id="li8" className="conteiner__pricing-element">Pago directo desde el móvil</li>
            <li id="li4" className="conteiner__pricing-element">Acceso a redes sociales para disfrutar de los eventos en fallas</li>
            <li id="li8" className="conteiner__pricing-element">Evitar colas en la barra (sin tokens)</li>
            <li id="li8" className="conteiner__pricing-element">Acceso con pulsera o llavero NFC</li>
            <li id="li8" className="conteiner__pricing-element">Inscripciones automáticas a eventos</li>
            <li id="li8" className="conteiner__pricing-element">Acceso a contenido exclusivo para falleros</li>
            <li id="li8" className="conteiner__pricing-element">Grupo privado digital de tu falla</li>
            <li id="li8" className="conteiner__pricing-element">Inscripciones automáticas a eventos</li>
            <li id="li8" className="conteiner__pricing-element">Participar en sorteos</li>
            <li className="conteiner__pricing-element--inline">Precio total: 20€</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
