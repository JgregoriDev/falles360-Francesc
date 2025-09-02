import pathLogo from "@/assets/logo128x128.jpg";
import "./Logo.css";
export const Logo = () => {
  return (
    <div className="container__icon">
      <a href="/" title="Falles 360">
        <img src={pathLogo} alt="Logo Falles 360" className="logo__image" />
      </a>
      <a href="/" className="logo__header" title="Falles 360">
        <h3 className="logo__header">Falles 360</h3>
      </a>
    </div>
  );
};
