document.addEventListener("DOMContentLoaded", function () {
  function initializeHeroCarousel() {
    const heroImage = document.getElementById("heroImage");
    const heroTitle = document.getElementById("heroTitle");
    const heroDescription = document.getElementById("heroDescription");

    if (!heroImage || !heroTitle || !heroDescription) {
      console.warn("No se encontraron los elementos del hero. Reintentando...");
      setTimeout(initializeHeroCarousel, 100); // Reintentar en 100ms
      return;
    }

    const images = [
      {
        src: "/images/imagenhero2.webp",
        title: "Artículos impresión digital",
        description:
          "Producción de prendas y todo tipo de accesorios con el logo de marca.",
      },
      {
        src: "/images/imagenhero3.webp",
        title: "Impresión de alta calidad",
        description: "Soluciones avanzadas en impresión digital y offset.",
      },
      {
        src: "/images/imagenhero4.webp",
        title: "Innovación en diseño gráfico",
        description: "Diseño personalizado para publicidad y branding.",
      },
      {
        src: "/images/imagenhero5.webp",
        title: "Merchandising Empresarial",
        description: "Diseño de articulos publicitarios para empresas.",
      },
    ];

    let index = 0;

    function changeImage() {
      heroImage.style.opacity = 0; // Oculta la imagen
      setTimeout(() => {
        index = (index + 1) % images.length; // Cicla entre imágenes
        heroImage.src = images[index].src;
        heroTitle.innerText = images[index].title;
        heroDescription.innerText = images[index].description;
        heroImage.style.opacity = 1; // Muestra la nueva imagen
      }, 1000);
    }

    setInterval(changeImage, 4000); // Cambia cada 4 segundos
  }

  setTimeout(initializeHeroCarousel, 100);
});
