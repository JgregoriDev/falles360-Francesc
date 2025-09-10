import "./Rail.css";
import Foto1 from "@/assets/fireworks.webp";
import Foto2 from "@/assets/falla.webp";
import Foto3 from "@/assets/lucesfallasValencia.webp";
export const Rail = () => {
  return (
    <div className="container__rail">
      <div className="">
        <h3> 1. Palmeras de fuegos artificiales</h3>
        <div className="container__overlay">
          <img
            className="foto"
            src={Foto1}
            loading="lazy"
            alt="Palmeras de fuegos artificiales"
          />
          <p className="parraf">
            Déjate llevar por la nostalgia y revive esos instantes mágicos. Con
            nuestra Falles 360, cada evento se convierte en una experiencia
            inolvidable, donde la tradición se encuentra con la modernidad.
            ¡Vive las Fallas como nunca antes!
          </p>
        </div>
      </div>
      <div className="">
        <h3>2. Todo arde. Menos tu tiempo</h3>
        <div className="container__overlay">
          <img className="foto" loading="lazy" src={Foto2} alt="Falla circo" />

          <p className="parraf">
            Este año, deja que el fuego de la tradición ilumine tu camino,
            mientras tú te sumerges en la esencia de lo que realmente importa:
            los momentos que compartes y el tiempo que atesoras.
          </p>
        </div>
      </div>
      <div className="">
        <h3>3. Luces de noche típicas de Fallas</h3>
        <div className="container__overlay">
          <img className="foto" src={Foto3} loading="lazy" alt="" />
          <p className="parraf">
            Este año, deja que el fuego de la tradición ilumine tu camino,
            mientras tú te sumerges en la esencia de lo que realmente importa:
            los momentos que compartes y el tiempo que atesoras.
          </p>
        </div>
      </div>
    </div>
  );
};
