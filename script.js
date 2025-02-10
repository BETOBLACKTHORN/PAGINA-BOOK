let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * (images[0].clientWidth + 20); // Calcula el desplazamiento basado en el tamaño de las imágenes y su margen
    document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
}

// Configuración para cambiar de imagen automáticamente cada 3 segundos
setInterval(showNextImage, 3000);

// Puedes agregar botones para controlar el carrusel manualmente si lo deseas
document.querySelector('.next-button').addEventListener('click', showNextImage);
document.querySelector('.prev-button').addEventListener('click', showPreviousImage);
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    const toggleMenu = document.createElement("div");
    const links = nav.querySelectorAll("a");
  
    // Crear un botón para el menú móvil
    toggleMenu.classList.add("menu-toggle");
    toggleMenu.innerHTML = "☰"; // Icono de menú
    header.appendChild(toggleMenu);
  
    // Mostrar/Ocultar el menú al hacer clic en el botón
    toggleMenu.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  
    // Ocultar el menú al hacer clic en un enlace
    links.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
      });
    });
  
    // Ajustar el menú al desplazarse
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  
    // Ajustar el menú al redimensionar la ventana
    window.addEventListener("resize", () => {
      if (window.innerWidth > 995) {
        nav.classList.remove("active");
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    const toggleMenu = document.createElement("div");
    const links = nav.querySelectorAll("a");
  
    // Crear un botón para el menú móvil
    toggleMenu.classList.add("menu-toggle");
    toggleMenu.innerHTML = "☰"; // Icono de menú
    header.appendChild(toggleMenu);
  
    // Mostrar/Ocultar el menú al hacer clic en el botón
    toggleMenu.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  
    // Ocultar el menú al hacer clic en un enlace
    links.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
      });
    });
  
    // Ajustar el menú al desplazarse
    let lastScrollY = 0;
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
        if (window.scrollY > lastScrollY) {
          // Contraer el menú al desplazarse hacia abajo
          header.classList.add("collapsed");
        } else {
          // Expandir el menú al desplazarse hacia arriba
          header.classList.remove("collapsed");
        }
      } else {
        header.classList.remove("scrolled", "collapsed");
      }
      lastScrollY = window.scrollY;
    });
  
    // Ajustar el menú al redimensionar la ventana
    window.addEventListener("resize", () => {
      if (window.innerWidth > 995) {
        nav.classList.remove("active");
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    // Código anterior...
  
    // Crear la flecha de regreso al inicio
    const scrollTopButton = document.createElement("div");
    scrollTopButton.classList.add("scroll-top");
    scrollTopButton.innerHTML = "&#8679;"; // Código Unicode para una flecha hacia arriba
    document.body.appendChild(scrollTopButton);
  
    // Mostrar/Ocultar la flecha según la posición del scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollTopButton.classList.add("visible");
      } else {
        scrollTopButton.classList.remove("visible");
      }
    });
  
    // Manejar el clic en la flecha para regresar al inicio
    scrollTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
      