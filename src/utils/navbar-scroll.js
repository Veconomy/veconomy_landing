

export const navbarScroll = window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    const textElements = document.querySelectorAll('.a_navbar'); // Selecciona todos los elementos con la clase "a_navbar"

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.top = '0';
        navbar.style.backgroundColor = "white";
        navbar.style.borderRadius =  "0 0 70px 70px";
        // Cambia el color de todos los elementos de texto
        textElements.forEach(function(textElement) {
            textElement.style.color = "black";
        });
       
    } else {
        navbar.style.top = '-5px';
        navbar.style.backgroundColor = "";
        navbar.style.borderRadius = "0";

        // Cambia el color de todos los elementos de texto
        textElements.forEach(function(textElement) {
            textElement.style.color = "white";
        });
    }
};

  