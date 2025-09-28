import "./Grid.css";
import pathPhotoGMaps from "@/assets/CustomGMAPS.webp";
const Grid = () => {
  return (
    <section>
      <div className="grid-section">
        <div className="grid-section__item grid-section__item--image">
          <img
            className="grid-section__image"
            src={pathPhotoGMaps}
            alt="Imagen de ejemplo"
          />
        </div>
        <div className="grid-section__content">
          <h3 className="grid-section__title">Por qué deberias usar Falles 360?</h3>
          <div className="grid-section__item grid-section__item--text">
            <div className="grid-section__grid">
              <div>
                {" "}
                <svg
                  height={50}
                  width={50}
                  className="benefits__icon mt-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M448 128C554 128 640 214 640 320C640 426 554 512 448 512L192 512C86 512 0 426 0 320C0 214 86 128 192 128L448 128zM192 240C178.7 240 168 250.7 168 264L168 296L136 296C122.7 296 112 306.7 112 320C112 333.3 122.7 344 136 344L168 344L168 376C168 389.3 178.7 400 192 400C205.3 400 216 389.3 216 376L216 344L248 344C261.3 344 272 333.3 272 320C272 306.7 261.3 296 248 296L216 296L216 264C216 250.7 205.3 240 192 240zM432 336C414.3 336 400 350.3 400 368C400 385.7 414.3 400 432 400C449.7 400 464 385.7 464 368C464 350.3 449.7 336 432 336zM496 240C478.3 240 464 254.3 464 272C464 289.7 478.3 304 496 304C513.7 304 528 289.7 528 272C528 254.3 513.7 240 496 240z" />
                </svg>
              </div>
              <div className="">
                <h4>Gamificacion</h4>
                <p>
                  La gamificación en nuestra app de fallas transforma la
                  experiencia del usuario en un emocionante juego interactivo. A
                  través de dinámicas lúdicas, los usuarios pueden participar en
                  desafíos y actividades que no solo aumentan su disfrute, sino
                  que también fomentan la participación activa en los eventos
                </p>
              </div>
              <div>
            <svg xmlns="http://www.w3.org/2000/svg"
                 height={50}
            width={50}
            className="benefits__icon mt-2" viewBox="0 0 640 640">
              <path d="M576 112C576 100.9 570.3 90.6 560.8 84.8C551.3 79 539.6 78.4 529.7 83.4L413.5 141.5L234.1 81.6C226 78.9 217.3 79.5 209.7 83.3L81.7 147.3C70.8 152.8 64 163.9 64 176L64 528C64 539.1 69.7 549.4 79.2 555.2C88.7 561 100.4 561.6 110.3 556.6L226.4 498.5L405.8 558.3C413.9 561 422.6 560.4 430.2 556.6L558.2 492.6C569 487.2 575.9 476.1 575.9 464L575.9 112zM256 440.9L256 156.4L384 199.1L384 483.6L256 440.9z"/></svg>
              </div>
              <div className="">
                <h4>Mapa Interactivo</h4>
                <p>
                  El mapa interactivo de nuestra app de fallas es una
                  herramienta esencial que mejora la experiencia del usuario al
                  ofrecer una navegación intuitiva y en tiempo real. Este
                  recurso permite a los usuarios explorar todos los eventos,
                  actividades y puntos de interés de manera fácil y accesible.
                </p>
              </div>
              <div>
          
             <svg
            xmlns="http://www.w3.org/2000/svg"
            height={50}
            width={50}
            className="benefits__icon mt-2"
            viewBox="0 0 640 640"
          >
            <path d="M224 64C206.3 64 192 78.3 192 96L192 128L160 128C124.7 128 96 156.7 96 192L96 240L544 240L544 192C544 156.7 515.3 128 480 128L448 128L448 96C448 78.3 433.7 64 416 64C398.3 64 384 78.3 384 96L384 128L256 128L256 96C256 78.3 241.7 64 224 64zM96 288L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 288L96 288z" />
          </svg>
              </div>
              <div className="">
                <h4>Notificiciones y calendario de avisos</h4>
                <p>
              Las notificaciones y el calendario de avisos son componentes clave de nuestra app de fallas, diseñados para mantener a los usuarios informados y organizados durante toda la celebración. Estas herramientas aseguran que nadie se pierda de los eventos más importantes y de las actividades programadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Grid };
