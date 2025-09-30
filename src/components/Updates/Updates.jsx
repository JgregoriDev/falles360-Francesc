import fallas from '@/assets/fallas.jpg';
import './Updates.css';
const Updates = () => {
  return (
    <section className='updates' id="novedades">
      {/* <h2>Novedades</h2> */}
      <img src={fallas} alt="" className='update__image' />
      <p className='updates__p'>
        Creías que lo imposible era solo un sueño? ¡Nosotros también! Pero hoy,
        estamos emocionados de presentarte una herramienta que hará que
        gestionar tu falla sea un placer. Con App Falles 360, tendrás acceso a
        todas las funcionalidades de forma totalmente gratuita. ¡Es hora de dar
        el siguiente paso hacia el futuro!
      </p>
    </section>
  );
};

export {Updates};
