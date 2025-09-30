import screenShotApp from "@/assets/app_view.webp";
import "./Hero.css";
import { useEffect } from "react";
import { useState } from "react";
export const Hero = () => {
  const [num, setNum] = useState({
    360: 360,
    user: 7500,
    fallas: 70,
    eventos: 35,
    tickets: 10550,
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setNum(...num, { 360: 360 });
    }, 0); // Cambia el valor después de que el componente se haya montado

    return () => clearTimeout(timer); // Limpia el timer si el componente se desmonta
  }, []);
  return (
    <section className="section__hero">
      <div className="Hero__container">
        <div className="Hero__container--titles">
          <h1 className="Hero__text">
            <span className="Hero__text--gradient">
              Falles{" "}
              <span style={{ "--num": num[360] }} className="span ger"></span>{" "}
            </span>
            Un soplo de aire fresco en la Gestión de Fallas y Eventos.
          </h1>
          <h2>
            Coordinación perfecta, compra de tickets
            simplificada,actualizaciones y comunicación en tiempo real en una
            sola app. Vive las Fallas sin perderte nada
          </h2>
        </div>
        <div className="Hero__container--image">
          <img
            className="Hero__image"
            src={`${screenShotApp}`}
            height={`475px`}
            alt="App de falla 360 Agregando un evento"
            loading="lazy"
          />
        </div>
      </div>
      <div className="Hero__container--buttons mt-2 mb-">
        <a
          className="container__pricing-element--outline text__notunderline test" href=""
        >
          <svg height={50} width={50} className="icon__button--red test " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
          <path d="M416 160L480 160C497.7 160 512 174.3 512 192L512 448C512 465.7 497.7 480 480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L480 544C533 544 576 501 576 448L576 192C576 139 533 96 480 96L416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160zM406.6 342.6C419.1 330.1 419.1 309.8 406.6 297.3L278.6 169.3C266.1 156.8 245.8 156.8 233.3 169.3C220.8 181.8 220.8 202.1 233.3 214.6L306.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L306.7 352L233.3 425.4C220.8 437.9 220.8 458.2 233.3 470.7C245.8 483.2 266.1 483.2 278.6 470.7L406.6 342.7z"/></svg>
          Unete
        </a>
      </div>
      <div className="Hero__container--buttons mt-2 mb-2">
        <a
          className="container__pricing-element--inline text__notunderline "
          target="_blank"
          href="#"
        >
          <svg
            className="icon__button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M452.5 317.9C465.8 317.9 476.5 328.6 476.5 341.9C476.5 355.2 465.8 365.9 452.5 365.9C439.2 365.9 428.5 355.2 428.5 341.9C428.5 328.6 439.2 317.9 452.5 317.9zM187.4 317.9C200.7 317.9 211.4 328.6 211.4 341.9C211.4 355.2 200.7 365.9 187.4 365.9C174.1 365.9 163.4 355.2 163.4 341.9C163.4 328.6 174.1 317.9 187.4 317.9zM461.1 221.4L509 138.4C509.8 137.3 510.3 136 510.5 134.6C510.7 133.2 510.7 131.9 510.4 130.5C510.1 129.1 509.5 127.9 508.7 126.8C507.9 125.7 506.9 124.8 505.7 124.1C504.5 123.4 503.2 123 501.8 122.8C500.4 122.6 499.1 122.8 497.8 123.2C496.5 123.6 495.3 124.3 494.2 125.1C493.1 125.9 492.3 127.1 491.7 128.3L443.2 212.4C404.4 195 362.4 186 319.9 186C277.4 186 235.4 195 196.6 212.4L148.2 128.4C147.6 127.2 146.7 126.1 145.7 125.2C144.7 124.3 143.4 123.7 142.1 123.3C140.8 122.9 139.4 122.8 138.1 122.9C136.8 123 135.4 123.5 134.2 124.2C133 124.9 132 125.8 131.2 126.9C130.4 128 129.8 129.3 129.5 130.6C129.2 131.9 129.2 133.3 129.4 134.7C129.6 136.1 130.2 137.3 130.9 138.5L178.8 221.5C96.5 266.2 40.2 349.5 32 448L608 448C599.8 349.5 543.5 266.2 461.1 221.4z" />
          </svg>
          Descargar App en android
        </a>
        <a
          className="container__pricing-element--inline text__notunderline "
          target="_blank"
          href="#"
        >
          <svg
            className="icon__button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            <path d="M447.1 332.7C446.9 296 463.5 268.3 497.1 247.9C478.3 221 449.9 206.2 412.4 203.3C376.9 200.5 338.1 224 323.9 224C308.9 224 274.5 204.3 247.5 204.3C191.7 205.2 132.4 248.8 132.4 337.5C132.4 363.7 137.2 390.8 146.8 418.7C159.6 455.4 205.8 545.4 254 543.9C279.2 543.3 297 526 329.8 526C361.6 526 378.1 543.9 406.2 543.9C454.8 543.2 496.6 461.4 508.8 424.6C443.6 393.9 447.1 334.6 447.1 332.7zM390.5 168.5C417.8 136.1 415.3 106.6 414.5 96C390.4 97.4 362.5 112.4 346.6 130.9C329.1 150.7 318.8 175.2 321 202.8C347.1 204.8 370.9 191.4 390.5 168.5z" />
          </svg>
          Descargar App en IOS
        </a>
      </div>
      <div className="hero__container--stats pb-3">
        <p>
          Número de fallas:{" "}
          <span
            style={{ "--num": num.fallas }}
            className="text--bolder span"
          ></span>
        </p>
        <p>
          Número de eventos:{" "}
          <span
            style={{ "--num": num.eventos }}
            className="text--bolder span"
          ></span>
        </p>
        <p>
          Usuarios registrados:{" "}
          <span
            style={{ "--num": num.user }}
            className="text--bolder span"
          ></span>
        </p>
        <p>
          Tiquets comprados:{" "}
          <span
            style={{ "--num": num.tickets }}
            className="text--bolder span"
          ></span>
        </p>
      </div>
    </section>
  );
};
