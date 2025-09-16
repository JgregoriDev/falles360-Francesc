import "@components/Sponsors/Sponsors.css";
import SponsorsFallas from "@/assets/LogotiposFallas.webp";
export const Sponsors = () => {
  return (
    <section id="patrocinadors" className="section container__sponsors">
        
      <h2 className="container__sponsors-title">Patrocinadores</h2>
      <img className="container__sponsors-image" src={`${SponsorsFallas}`} alt="Sponsors falles" loading="lazy" />
    </section>
  );
};
