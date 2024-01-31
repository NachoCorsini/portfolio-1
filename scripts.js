const imagenCentral = document.getElementById("imagenCentral");
const cuadranteCentral = document.getElementById("cuadranteCentral");

imagenCentral.addEventListener("mouseenter", () => {
    imagenCentral.style.transform = "scale(1.2)";
});

imagenCentral.addEventListener("mouseleave", () => {
    imagenCentral.style.transform = "scale(1)";
});



$(document).ready(function () {
    var cuadranteInferior = $('#cuadrante-inferior');

    cuadranteInferior.scroll(function () {
        if (cuadranteInferior.scrollTop() > 0) {
            cuadranteInferior.addClass('scroll-effect');
        } else {
            cuadranteInferior.removeClass('scroll-effect');
        }
    });
});
