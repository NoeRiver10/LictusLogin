document.addEventListener('DOMContentLoaded', () => {
    // ---------------------------
    // 1. REFERENCIAS AL CARRUSEL
    // ---------------------------
    const carousel = document.querySelector('.carousel');
    if (!carousel) return; // Si no hay .carousel, salimos
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
    // Si tenemos 6 tarjetas y mostramos de a 3, tendremos 2 páginas en total.
    // Ajusta según el # de tarjetas que tengas y cuántas muestras a la vez.
    const pageTitles = [
      "Laboratorios: Página 1",
      "Laboratorios: Página 2"
    ];
    const pageDescriptions = [
      "Texto descriptivo para la primera página del carrusel.",
      "Texto descriptivo para la segunda página del carrusel."
    ];
  
    // ---------------------------
    // 4. VARIABLES PARA DESPLAZAR
    // ---------------------------
    let scrollAmount = 0;
    let currentPage = 0; // El índice de la página actual
  
    // Cuántas tarjetas se avanza por clic
    const itemsToShow = 3;
  
    // Calcula el ancho de una .carousel-item + margen (1rem ~ 16px)
    let cardWidth = container.querySelector('.carousel-item').offsetWidth + 16;
    // Multiplica por las tarjetas que se muestran de golpe
    let slideDistance = cardWidth * itemsToShow;
  
    // Número total de tarjetas
    const totalItems = container.querySelectorAll('.carousel-item').length;
  
    // Número total de páginas = redondeo hacia arriba
    const totalPages = Math.ceil(totalItems / itemsToShow);
  
    // Función para actualizar texto según currentPage
    function updateText() {
      // Verificamos que no se salga del rango
      if (currentPage < 0) currentPage = 0;
      if (currentPage >= totalPages) currentPage = totalPages - 1;
  
      // Si en tu array tienes el mismo # de páginas que totalPages, 
      // puedes indexar directamente:
      tituloPagina.textContent = pageTitles[currentPage];
      descripcionPagina.textContent = pageDescriptions[currentPage];
    }
  
    // Llamamos una primera vez para asegurar que el texto 
    // corresponda a la página 0 (inicial)
    updateText();
  
    // ---------------------------
    // 5. EVENTOS DE BOTONES
    // ---------------------------
    // Botón anterior
    prevBtn.addEventListener('click', () => {
      // Restamos el desplazamiento
      scrollAmount -= slideDistance;
      if (scrollAmount < 0) {
        scrollAmount = 0;
      }
      container.style.transform = `translateX(-${scrollAmount}px)`;
  
      // Disminuimos la "página"
      currentPage--;
      if (currentPage < 0) {
        currentPage = 0;
      }
      updateText();
    });
  
    // Botón siguiente
    nextBtn.addEventListener('click', () => {
      // Cuánto podemos scrollear máximo
      const maxScroll = container.scrollWidth - carousel.offsetWidth;
      // Sumamos el desplazamiento
      scrollAmount += slideDistance;
      if (scrollAmount > maxScroll) {
        scrollAmount = maxScroll;
      }
      container.style.transform = `translateX(-${scrollAmount}px)`;
  
      // Aumentamos la "página"
      currentPage++;
      if (currentPage >= totalPages) {
        currentPage = totalPages - 1;
      }
      updateText();
    });
  });
  