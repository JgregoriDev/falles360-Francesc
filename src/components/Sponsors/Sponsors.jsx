import "@components/Sponsors/Sponsors.css";
import SponsorsFallas from "@/assets/LogotiposFallas.webp";
export const Sponsors = () => {
  return (
    <section className="section container__sponsors">
        
      <h3 className="container__sponsors-title">Sponsors</h3>
      <img className="container__sponsors-image" src={`${SponsorsFallas}`} alt="Sponsors falles" loading="lazy" />
    </section>
  );
};
