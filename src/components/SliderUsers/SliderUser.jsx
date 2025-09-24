import "./SliderUser.css";
import User1 from "@/assets/user1.webp";
import User2 from "@/assets/user2.webp";
import User3 from "@/assets/user3.webp";
import User4 from "@/assets/user4.webp";
import User5 from "@/assets/user5.webp";

export const SliderUser = () => {
  return (
    <section className="slider-users__section mt-3">
      <h2>Lo que dicen nuestros usuarios</h2>
      <div className="slider-users__container">
        <div className="slider-users">
          <div className="slider-users__item">
            <img className="slider-users__image" src={User1} alt="User 1" />
            <p className="slider-users__name">John Doe</p>
            <p>
              Como usuario gratuito, me encanta poder seguir los eventos en
              tiempo real y recibir notificaciones automáticas. El mapa
              interactivo de fallas es muy útil para no perderme nada. Aunque no
              tengo acceso a algunas funciones premium, la experiencia sigue
              siendo increíble y, lo mejor de todo, ¡es gratis!".
            </p>
          </div>
          <div className="slider-users__item">
            <img className="slider-users__image" src={User2} alt="User 2" />
            <p className="slider-users__name">Tailer Smith</p>
            <p>
              Decidí optar por la suscripción de pago y no me arrepiento. Por
              solo 20€, tengo acceso a eventos en tiempo real, un mapa
              interactivo y la posibilidad de evitar colas en la barra. Además,
              las dinámicas gamificadas hacen que cada evento sea aún más
              emocionante. ¡Definitivamente vale la pena!
            </p>
          </div>
          <div className="slider-users__item">
            <img className="slider-users__image" src={User3} alt="User 3" />
            <p className="slider-users__name">Jane Doe</p>
            <p>
              Me gusta ser parte de la comunidad de fallas, y la opción gratuita
              me permite disfrutar de eventos en tiempo real y recibir
              notificaciones. Sin embargo, me gustaria tener acceso a más
              contenido exclusivo y participar en sorteos. Aun así, es genial
              que haya una opción sin costo
            </p>
          </div>
          <div className="slider-users__item">
            <img className="slider-users__image" src={User4} alt="User 4" />
            <p className="slider-users__name">Emilio Johnson</p>
            <p>
              Como miembro de pago, he disfrutado de una esperiencia mucho más
              completa. La inscripción automática a eventos y el acceso a un
              grupo privado digital de mi falla han hecho que me sienta más
              conectado. Además, el pago directo desde el movil es muy
              conveniente. ¡Recomiendo la suscripción a todos los falleros!
            </p>
          </div>
          <div className="slider-users__item">
            <img className="slider-users__image" src={User5} alt="User 5" />
            <p className="slider-users__name">Mary Smith</p>

            <p>
              El acceso gratuito me ha permitido disfrutar de los eventos y ver
              el mapa interactivo de fallas. Aunque no tengo todas las ventajas
              de los usuarios de pago, la experiencia sigue siendo divertida. Me
              encantaría que hubiera más opciones para los que no pueden pagar,
              pero aprecio lo que ofrecen sin costo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
