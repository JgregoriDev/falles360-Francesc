import { useEffect } from "react";

export const PoliticaPrivadad = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  // TODO: Corregir scroll por el cambio de pagina
  return (
    <div>
      <h2>Política de Privacidad</h2>
      <h3>1.Identidad y datos de contacto</h3>
      <p>
        El responsable del tratamiento de los datos es: Nombre de la
        empresa/Responsable: [Nombre de tu empresa o responsable] Domicilio
        social: [Dirección] Correo electrónico de contacto: [Correo electrónico]
        Teléfono: [Número de teléfono]
      </p>
      <h3>2. Qué datos personales recopilamos </h3>
      <p>
        {" "}
        Recopilamos los siguientes datos personales del usuario: Nombre y
        apellidos Dirección de correo electrónico Número de teléfono Dirección
        IP Datos de ubicación [Otros datos que correspondan, como datos de pago,
        preferencias, etc.]
      </p>
      <h3>
        3. Métodos de recogida Recopilamos datos personales de las siguientes
        maneras:
      </h3>{" "}
      <p>
        {" "}
        Formulario de registro Formularios de contacto Cookies y tecnologías
        similares Procesos de compra [Otros métodos relevantes]
      </p>
      <h3> 4. Finalidad del tratamiento Utilizamos sus datos para: </h3>
      <p>
        {" "}
        Gestionar el registro y acceso a la plataforma Atender solicitudes,
        dudas o consultas Procesar pagos y pedidos Enviar información comercial,
        si se ha solicitado Mejorar nuestros servicios y experiencia de usuario
        Cumplir con obligaciones legales
      </p>
      <h3>5. Base legal Tratamos sus datos en base a:</h3>
      <p>
        {" "}
        Consentimiento del usuario Ejecución de un contrato Interés legítimo
        Obligación legal
      </p>
      <h3>6. Cesión a terceros Podemos compartir datos con:</h3>
      <p>
        {" "}
        Proveedores de servicios tecnológicos y de alojamiento Plataformas de
        pago Servicios de análisis y marketing [Otros, si aplica] Garantizamos
        que estos terceros cumplen con la normativa de protección de datos
        aplicable .
      </p>
      <h3>7. Derechos de los usuarios</h3>
      <p>
        {" "}
        El usuario puede ejercer los siguientes derechos: Acceder a sus datos
        Solicitar la rectificación o supresión Limitar u oponerse al tratamiento
        Portabilidad de los datos Para ejercer estos derechos, contacte a
        [correo de contacto].
      </p>
      <h3>8. Conservación de los datos </h3>
      <p>
        {" "}
        Conservaremos los datos personales mientras sean necesarios para las
        finalidades descritas o hasta que el usuario solicite su supresión,
        salvo obligación legal de conservación.
      </p>
      <h3>9. Seguridad de los datos</h3>
      <p>
        {" "}
        Adoptamos medidas técnicas y organizativas adecuadas para proteger sus
        datos personales contra el acceso no autorizado, pérdida o modificación
        .
      </p>
      <h3>10. Cambios en la política</h3>
      <p>
        {" "}
        Nos reservamos el derecho de modificar esta política de privacidad.
        Notificaremos cualquier cambio mediante la publicación en esta página.
      </p>
      <h3>11. Información de contacto </h3>
      <p>
        {" "}
        Para cualquier consulta relacionada con la privacidad y protección de
        datos, puede contactar con: [Nombre y correo de contacto de DPO, si
        aplica] Esta política está pensada para cumplir con los requisitos
        básicos de transparencia, informando de manera clara y accesible sobre
        la gestión de los datos personales recogidos a través de tu web o app .
      </p>
      <p>Iconos obtenidos de <a href="https://fontawesome.com/" target="_blanck" title="Fonts awesome">Fonts awesome</a></p>
      <p>Imagenes obtenidos de <a target="_blank" href="https://pixabay.com/" title="https://pixabay.com/">Pixabay</a> 
      <a href="https://gemini.google.com/" target="_blank" title="Gemini">Gemini/</a> y la de los usuarios 
      <a target="_blank" href="https://thispersonnotexist.org/" title="thispersonnotexist"> thispersonnotexist</a></p>
    </div>
  );
};
