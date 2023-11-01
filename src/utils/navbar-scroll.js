

export const navbarScroll = window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    const textElements = document.querySelectorAll('.a_navbar'); // Selecciona todos los elementos con la clase "a_navbar"
    const buttonNav = document.querySelector(".button_navbar")
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        //Nav estilos
        navbar.style.top = '0';
        navbar.style.backgroundColor = "#FFFAFB"; 
        
        // Cambia el color de todos los elementos de texto
        textElements.forEach(function(textElement) {
            textElement.style.color = "black";
        });
        //Cambiamos estilo de botones
      /*   buttonNav.style.backgroundColor = "white" */
       /*  buttonNav.style.color = "black" */
       
    } else {
        //Nav estilos
        navbar.style.top = '-5px';
         navbar.style.backgroundColor =""; 

        // Cambia el color de todos los elementos de texto
        /* textElements.forEach(function(textElement) {
            textElement.style.color = "white";
        }); */
        
        //Cambiamos estilo de botones
       /*  buttonNav.style.backgroundColor = "white" */
        /* buttonNav.style.color = "black" */
    }
};

  