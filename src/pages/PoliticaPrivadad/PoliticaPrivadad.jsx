import { useEffect } from "react";
import setTitle from "@/utils/setTitle";

export const PoliticaPrivadad = () => {
  useEffect(() => {
    setTitle({ title: "Política de Privacidad" });
  }, []);
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
      <h3>12. LimitaciÓn de responsabilidad.</h3>
      <p>
        Se declara que no se asume responsabilidad por:
        <ul>
          <li>Fallos técnicos, interrupciones o errores en la aplicación.</li>
          <li>
            La organización de eventos o la venta de entradas gestionadas por
            las comisiones falleras.
          </li>
          <li>
            Daños directos, indirectos o accidentales derivados del uso de la
            aplicación.
          </li>
        </ul>
      </p>
      <h3>13. Suspensión o cancelación de cuentas.</h3>
      <p>
        Se otorga al Usuario una licencia de uso de la aplicación que es no
        exclusiva, gratuita, destinada a uso personal, limitada al territorio
        nacional y de duración indefinida. Esta licencia también se aplica de la
        misma manera a las actualizaciones y mejoras que se realicen en la
        aplicación. Falles 360 se reserva el derecho de revocar estas licencias
        de uso de forma unilateral en cualquier momento.
      </p>
      <h3>14. Modificaciones de los Términos y condiciones.</h3>
      <p>
        Podemos, sin que esto implique ninguna obligación de su parte, modificar
        estas Condiciones de uso en cualquier momento. Si continúa usando la
        aplicación tras cualquier cambio en estas Condiciones, su uso continuado
        se considerará como aceptación de dichas modificaciones. Si no está de
        acuerdo con estas condiciones ni acepta estar sujeto a ellas, no debe
        utilizar la aplicación ni descargar o utilizar software relacionado. Le
        informaremos sobre los cambios relevantes a través de la App o por
        correo electrónico. El uso de la aplicación es bajo su propia
        responsabilidad.
      </p>
      <h3>15. Obtención de recursos</h3>
      <p>
        Iconos obtenidos de{" "}
        <a
          href="https://fontawesome.com/"
          target="_blanck"
          title="Fonts awesome"
        >
          Fonts awesome
        </a>
      </p>
      <p>
        Imagenes obtenidos de{" "}
        <a
          target="_blank"
          href="https://pixabay.com/"
          title="https://pixabay.com/"
        >
          Pixabay
        </a>{" "}
        <a href="https://gemini.google.com/" target="_blank" title="Gemini">
          Gemini/
        </a>{" "}
        y la de los usuarios
        <a
          target="_blank"
          href="https://thispersonnotexist.org/"
          title="thispersonnotexist"
        >
          {" "}
          thispersonnotexist
        </a>
      </p>
    </div>
  );
};
