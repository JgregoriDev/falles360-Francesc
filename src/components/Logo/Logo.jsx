import pathLogo from "@/assets/fallera360128x128.webp";
import "./Logo.css";
export const Logo = () => {
  return (
    <div className="container__icon">
      <a href="/falles360-Francesc" title="Falles 360">
        <img src={pathLogo} alt="Logo Falles 360" className="logo__image" />
      </a>
      <a href="/falles360-Francesc" className="logo__header" title="Falles 360">
        <p className="logo__header">Falles 360</p>
      </a>
    </div>
  );
};
