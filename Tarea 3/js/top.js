function topFunction() {
    document.body.scrollTop = 0; // Para navegadores compatibles con Safari
    document.documentElement.scrollTop = 0; // Para navegadores compatibles con Chrome, Firefox, IE y Opera
  }

  // Mostrar u ocultar el botón de scroll top según la posición de desplazamiento
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("flechabtn").style.display = "block";
    } else {
      document.getElementById("flechabtn").style.display = "none";
    }
  };