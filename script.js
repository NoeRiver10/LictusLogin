document.addEventListener('DOMContentLoaded', () => {
  // ---------------------------
  // 1. REFERENCIAS AL CARRUSEL
  // ---------------------------
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;
  const container = carousel.querySelector('.carousel-container');
  const prevBtn = carousel.querySelector('.prev-btn');
  const nextBtn = carousel.querySelector('.next-btn');

  // ---------------------------
  // 2. REFERENCIAS A TEXTOS
  // ---------------------------
  const tituloPagina = document.getElementById('titulo-pagina');
  const descripcionPagina = document.getElementById('descripcion-pagina');

  // ---------------------------
  // 3. TEXTOS SEGÚN "PÁGINA"
  // ---------------------------
  const pageTitles = [
    "Laboratorios",
    "Capacitaciones",
    "Unidades de Inspección",
    "Certificaciones",
    "Protección Civil"
  ];

  const pageDescriptions = [
    "Completo servicio de laboratorio de ambiente laboral se distingue por su estricta certificación por parte de la EMA y su respaldo de la STPS, asegurando el cumplimiento de las regulaciones laborales en vigor.",
    "Lictus ofrece gran variedad de entrenamientos y capacitaciones de personal sobre Normativa STPS.",
    "En Lictus ofrecemos un enfoque de inspección integral y altamente eficiente que asegura la seguridad y el cumplimiento normativo en su lugar de trabajo.",
    "En LICTUS, ofrecemos servicios especializados en Organismos de Certificación en México para respaldar a su empresa en la obtención y mantenimiento de certificaciones en diversas normas internacionales.",
    "Priorizamos la gestión de emergencias en el ámbito empresarial, con programas para atender las exigencias de seguridad, medio ambiente y protección civil de nuestros clientes."
  ];

  // ---------------------------
  // 4. VARIABLES PARA DESPLAZAR
  // ---------------------------
  let currentPage = 0;
  const itemsToShow = 3;

  function getCardWidth() {
    return container.querySelector('.carousel-item').offsetWidth;
  }

  function getTotalItems() {
    return container.querySelectorAll('.carousel-item').length;
  }

  function getMaxPages() {
    return Math.ceil(getTotalItems() / itemsToShow);
  }

  function updateCarousel() {
    let cardWidth = getCardWidth();
    let slideDistance = cardWidth * itemsToShow;
    let maxPages = getMaxPages();

    if (currentPage < 0) currentPage = 0;
    if (currentPage >= maxPages) currentPage = maxPages - 1;

    let moveAmount = currentPage * slideDistance;

    // 🛠 Asegurar que no se ocultan las imágenes
    container.style.transform = `translateX(-${moveAmount}px)`;
    container.style.transition = "transform 0.5s ease-in-out"; 

    // Actualizar textos
    tituloPagina.textContent = pageTitles[currentPage] || "Sección";
    descripcionPagina.textContent = pageDescriptions[currentPage] || "";
  }

  // ---------------------------
  // 5. EVENTOS DE BOTONES
  // ---------------------------
  prevBtn.addEventListener('click', () => {
    currentPage--;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentPage++;
    updateCarousel();
  });

  // ---------------------------
  // 6. AJUSTE DINÁMICO AL REDIMENSIONAR
  // ---------------------------
  window.addEventListener("resize", updateCarousel);

  // ---------------------------
  // 7. CORRECCIÓN DE VISIBILIDAD
  // ---------------------------
  function fixVisibility() {
    container.style.display = "flex";  // 🛠 Asegura que las tarjetas sean visibles
    container.style.overflow = "visible";
  }

  fixVisibility();
  updateCarousel();
});
