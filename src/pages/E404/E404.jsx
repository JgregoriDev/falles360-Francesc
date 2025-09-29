import "./E404.css";
import image from "@/assets/E404.webp";
const E404 = () => {
  return (
    <div className="E404">
        <h1>Error 404: Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe o ha sido movida.</p>
      <img className="E404__image mb-3" src={image} alt="Error 404" />
    </div>
  );
};

export default E404;
