// import screenShotApp from "../../assets/app.png";
import screenShotApp from "../../assets/app.png";
import "./Hero.css";
export const Hero = () => {
  return (
    <div className="">
      <div className="Hero__container">
        <div className="Hero__container--titles">
          <h1 className="Hero__text">
            <span className="Hero__text--gradient">Fallas 360:</span> La
            experiencia fallera completa en tu mano
          </h1>
          <h4>
            Eventos, tickets, pagos y comunidad en una sola app. Vive las Fallas
            sin perderte nada
          </h4>
        </div>
        <div className="Hero__container--image">
          <img className="Hero__image" src={`${screenShotApp}`} height={`475px`} />
        </div>
      </div>
      
    </div>
  );
};
