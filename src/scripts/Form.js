document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const calle = document.getElementById("calle").value;
    const ciudad = document.getElementById("ciudad").value;
    const codigoPostal = document.getElementById("codigoPostal").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const idea = document.getElementById("idea").value;

    const mensaje = `Hola, me gustaría solicitar una cotización. Aquí están mis detalles:
        - Nombre de contacto: ${nombre}
        - Calle: ${calle}
        - Ciudad: ${ciudad}
        - Código postal: ${codigoPostal}
        - Teléfono de contacto: ${telefono}
        - Correo electrónico: ${correo}
        - Idea: ${idea}`;

    const whatsappUrl = `https://wa.me/973644878?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(whatsappUrl, "_blank");
  });
});
