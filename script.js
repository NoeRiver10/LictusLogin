document.addEventListener("DOMContentLoaded", () => {
  // ---------------------------
  // 1. REFERENCIAS AL CARRUSEL
  // ---------------------------
  const carrusel = document.querySelector(".carrusel");
  if (!carrusel) return;
  const container = carrusel.querySelector(".carrusel-container");
  const prevBtn = carrusel.querySelector(".prev-btn");
  const nextBtn = carrusel.querySelector(".next-btn");

  // ---------------------------
  // 2. REFERENCIAS A TEXTOS
  // ---------------------------
  const tituloPagina = document.getElementById("titulo-pagina");
  const descripcionPagina = document.getElementById("descripcion-pagina");

  // ---------------------------
  // 3. TEXTOS SEGÚN "PÁGINA"
  // ---------------------------
  const pageTitles = [
    "Laboratorios",
    "Capacitaciones",
    "Unidades de Inspección",
    "Certificaciones",
    "Protección Civil",
  ];

  const pageDescriptions = [
    "Completo servicio de laboratorio de ambiente laboral se distingue por su estricta certificación por parte de la EMA y su respaldo de la STPS, asegurando el cumplimiento de las regulaciones laborales en vigor.",
    "Lictus ofrece gran variedad de entrenamientos y capacitaciones de personal sobre Normativa STPS.",
    "En Lictus ofrecemos un enfoque de inspección integral y altamente eficiente que asegura la seguridad y el cumplimiento normativo en su lugar de trabajo.",
    "En LICTUS, ofrecemos servicios especializados en Organismos de Certificación en México para respaldar a su empresa en la obtención y mantenimiento de certificaciones en diversas normas internacionales.",
    "Priorizamos la gestión de emergencias en el ámbito empresarial, con programas para atender las exigencias de seguridad, medio ambiente y protección civil de nuestros clientes.",
  ];

  // ---------------------------
  // 4. VARIABLES PARA DESPLAZAR
  // ---------------------------
  let currentPage = 0;
  const itemsToShow = 3;

  function getCardWidth() {
    return container.querySelector(".item-carrusel").offsetWidth;
  }

  function getTotalItems() {
    return container.querySelectorAll(".item-carrusel").length;
  }

  function getMaxPages() {
    return Math.ceil(getTotalItems() / itemsToShow);
  }

  function updateCarousel() {
    let cardWidth = getCardWidth();
    let gapWidth = 16; // 1rem = 16px
    let slideDistance = (cardWidth + gapWidth) * itemsToShow;
    let maxPages = getMaxPages();

    if (currentPage < 0) currentPage = 0;
    if (currentPage >= maxPages) currentPage = maxPages - 1;

    let moveAmount = currentPage * slideDistance;
    container.style.transform = `translateX(-${moveAmount}px)`;
    container.style.transition = "transform 0.5s ease-in-out";

    // Actualizar textos
    tituloPagina.textContent = pageTitles[currentPage] || "Sección";
    descripcionPagina.textContent = pageDescriptions[currentPage] || "";
  }

  // ---------------------------
  // 5. EVENTOS DE BOTONES
  // ---------------------------
  prevBtn.addEventListener("click", () => {
    currentPage--;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentPage++;
    updateCarousel();
  });
  function regresarAlCarrusel() {
    const container = document.querySelector(".container");
    const carrusel = document.querySelector(".carrusel");

    container.style.display = container.dataset.originalDisplay || "grid";
    carrusel.style.display = carrusel.dataset.originalDisplay || "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("form-solicitar-acceso").style.display = "none";
  }

  document.getElementById("btn-regresar").addEventListener("click", regresarAlCarrusel);
  document.getElementById("cerrar-formulario").addEventListener("click", regresarAlCarrusel);
  document.getElementById("logo-link").addEventListener("click", regresarAlCarrusel);

  // FUNCIÓN PARA MOSTRAR Y OCULTAR EL FORMULARIO "SOLICITAR ACCESO"
  document.getElementById("btn-solicitar").addEventListener("click", function () {
    document.getElementById("login").style.display = "none";
    document.getElementById("form-solicitar-acceso").style.display = "block";
  });

  document.getElementById("cerrar-formulario").addEventListener("click", regresarAlCarrusel);

  // FUNCIÓN PARA MOSTRAR EL LOGIN
  document
    .getElementById("btn-iniciar-sesion")
    .addEventListener("click", function () {
      const container = document.querySelector(".container");
      const carrusel = document.querySelector(".carrusel");

      // Store original display values
      container.dataset.originalDisplay =
        window.getComputedStyle(container).display;
      carrusel.dataset.originalDisplay =
        window.getComputedStyle(carrusel).display;

      container.style.display = "none";
      carrusel.style.display = "none";
      document.getElementById("login").style.display = "block";
    });

  //FUNCIÓN PARA EL BOTÓN DE REGRESAR
  document
    .getElementById("btn-regresar")
    .addEventListener("click", function () {
      const container = document.querySelector(".container");
      const carrusel = document.querySelector(".carrusel");

      // Restore original display values
      container.style.display = container.dataset.originalDisplay || "grid";
      carrusel.style.display = carrusel.dataset.originalDisplay || "block";
      document.getElementById("login").style.display = "none";
    });

  // ---------------------------
  // 6. AJUSTE DINÁMICO AL REDIMENSIONAR
  // ---------------------------
  window.addEventListener("resize", updateCarousel);

  // ---------------------------
  // 7. CORRECCIÓN DE VISIBILIDAD
  // ---------------------------
  function fixVisibility() {
    container.style.display = "flex"; // Asegura que las tarjetas sean visibles
    container.style.overflow = "visible";
  }

  fixVisibility();
  updateCarousel();

  // Agregar evento de click al logo
  document.getElementById("logo-link").addEventListener("click", function (e) {
    e.preventDefault(); // Evitar comportamiento por defecto del enlace
    const container = document.querySelector(".container");
    const carrusel = document.querySelector(".carrusel");
    const loginSection = document.getElementById("login");

    // Si el login está visible, regresar a la vista principal
    if (loginSection.style.display === "block") {
      // Restaurar valores originales de display
      container.style.display = container.dataset.originalDisplay || "grid";
      carrusel.style.display = carrusel.dataset.originalDisplay || "block";
      loginSection.style.display = "none";
    }
  });
    // FUNCIÓN PARA MOSTRAR Y OCULTAR EL FORMULARIO "SOLICITAR ACCESO"
    document.getElementById("btn-solicitar").addEventListener("click", function () {
      document.getElementById("login").style.display = "none";
      document.getElementById("form-solicitar-acceso").style.display = "block";
    });
  
    document.getElementById("cerrar-formulario").addEventListener("click", function () {
      document.getElementById("form-solicitar-acceso").style.display = "none";
    });
    
  
    // FUNCIÓN DE ENVÍO DEL FORMULARIO MEJORADA
  document.getElementById("enviar-solicitud").addEventListener("click", function () {
    const razonSocial = document.getElementById("razon-social").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const email = document.getElementById("email-solicitud").value.trim();

    if (!razonSocial || !nombre || !email) {
      alert("Por favor, completa todos los campos antes de enviar.");
      return;
    }

    alert("Solicitud enviada correctamente. Nos pondremos en contacto contigo.");
    
     // **Nuevo: Reiniciar el formulario**
     document.querySelectorAll("#form-solicitar-acceso input").forEach(input => input.value = "");
     
    // **Nuevo: Esperar la confirmación del usuario y regresar al carrusel**
    setTimeout(() => {
      regresarAlCarrusel();
    }, 200); // Se da un pequeño tiempo para que el alert se cierre antes de ejecutar
  });
  
    window.addEventListener("resize", updateCarousel);
    fixVisibility();
    updateCarousel();
  });