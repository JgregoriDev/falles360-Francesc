import { useEffect } from "react";

export const PoliticaPrivadad = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <h3>Política de Privacidad</h3>
      <h4>1.Identidad y datos de contacto</h4>
      <p>
        El responsable del tratamiento de los datos es: Nombre de la
        empresa/Responsable: [Nombre de tu empresa o responsable] Domicilio
        social: [Dirección] Correo electrónico de contacto: [Correo electrónico]
        Teléfono: [Número de teléfono]
      </p>
      <h4>2. Qué datos personales recopilamos </h4>
      <p>
        {" "}
        Recopilamos los siguientes datos personales del usuario: Nombre y
        apellidos Dirección de correo electrónico Número de teléfono Dirección
        IP Datos de ubicación [Otros datos que correspondan, como datos de pago,
        preferencias, etc.]
      </p>
      <h4>
        3. Métodos de recogida Recopilamos datos personales de las siguientes
        maneras:
      </h4>{" "}
      <p>
        {" "}
        Formulario de registro Formularios de contacto Cookies y tecnologías
        similares Procesos de compra [Otros métodos relevantes]
      </p>
      <h4> 4. Finalidad del tratamiento Utilizamos sus datos para: </h4>
      <p>
        {" "}
        Gestionar el registro y acceso a la plataforma Atender solicitudes,
        dudas o consultas Procesar pagos y pedidos Enviar información comercial,
        si se ha solicitado Mejorar nuestros servicios y experiencia de usuario
        Cumplir con obligaciones legales
      </p>
      <h4>5. Base legal Tratamos sus datos en base a:</h4>
      <p>
        {" "}
        Consentimiento del usuario Ejecución de un contrato Interés legítimo
        Obligación legal
      </p>
      <h4>6. Cesión a terceros Podemos compartir datos con:</h4>
      <p>
        {" "}
        Proveedores de servicios tecnológicos y de alojamiento Plataformas de
        pago Servicios de análisis y marketing [Otros, si aplica] Garantizamos
        que estos terceros cumplen con la normativa de protección de datos
        aplicable .
      </p>
      <h4>7. Derechos de los usuarios</h4>
      <p>
        {" "}
        El usuario puede ejercer los siguientes derechos: Acceder a sus datos
        Solicitar la rectificación o supresión Limitar u oponerse al tratamiento
        Portabilidad de los datos Para ejercer estos derechos, contacte a
        [correo de contacto].
      </p>
      <h4>8. Conservación de los datos </h4>
      <p>
        {" "}
        Conservaremos los datos personales mientras sean necesarios para las
        finalidades descritas o hasta que el usuario solicite su supresión,
        salvo obligación legal de conservación.
      </p>
      <h4>9. Seguridad de los datos</h4>
      <p>
        {" "}
        Adoptamos medidas técnicas y organizativas adecuadas para proteger sus
        datos personales contra el acceso no autorizado, pérdida o modificación
        .
      </p>
      <h4>10. Cambios en la política</h4>
      <p>
        {" "}
        Nos reservamos el derecho de modificar esta política de privacidad.
        Notificaremos cualquier cambio mediante la publicación en esta página.
      </p>
      <h4>11. Información de contacto </h4>
      <p>
        {" "}
        Para cualquier consulta relacionada con la privacidad y protección de
        datos, puede contactar con: [Nombre y correo de contacto de DPO, si
        aplica] Esta política está pensada para cumplir con los requisitos
        básicos de transparencia, informando de manera clara y accesible sobre
        la gestión de los datos personales recogidos a través de tu web o app .
      </p>
      <p>Iconos obtenidos de <a href="https://fontawesome.com/" target="_blanck" title="Fonts awesome">Fonts awesome</a></p>
    </div>
  );
};
