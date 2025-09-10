import "./Coins.css";
import user1 from "@/assets/user1.webp";
import user2 from "@/assets/user2.webp";
import user3 from "@/assets/user3.webp";
import user4 from "@/assets/user4.webp";
import user5 from "@/assets/user5.webp";
export const Coins = () => {
  const LOCALPATh=""
  return (
    <div className="">
      <div className="Coins__list">
        <img
          src={`${LOCALPATh}${user1}`}
          alt="user1"
          className="Coins__image"
          loading="lazy"
        />
        <img
          src={`${LOCALPATh}${user2}`}
          alt="user2"
          className="Coins__image"
          loading="lazy"
        />
        <img
          src={`${LOCALPATh}${user3}`}
          alt="user3"
          className="Coins__image"
          loading="lazy"
        />
        <img
          src={`${LOCALPATh}${user4}`}
          alt="user4"
          className="Coins__image"
          loading="lazy"
        />
        <img
          src={`${user5}`}
          alt="user5"
          className="Coins__image"
          loading="lazy"
        />
        <small className="Coins__small Coins__small--pc">
          Únete a nuestra comunidad de más de 2000 usuarios
        </small>
      </div>
        <small className="Coins__small Coins__small--smartphone">
          Únete a nuestra comunidad de más de 2000 usuarios
        </small>
    </div>
  );
};
