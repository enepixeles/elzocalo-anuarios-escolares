/*
MI LÓGICA DE PENSAMIENTO:
1. Esperar: Yo reviso que el computador haya cargado todo el sitio antes de activar los botones.
2. Acordeón: Cuando el usuario haga clic en una pregunta, yo cambio el signo de (+) a (-) para que sepa que se abrió.
3. Efecto: Yo me aseguro que al abrir una respuesta, las demás se cierren solas (esto lo hace Bootstrap, pero yo vigilo los iconos).
*/

$(document).ready(function() {
    
    // Yo escucho cuando se abre o cierra el acordeón para cambiar el símbolo
    $('.faq__header').on('click', function() {
        
        // Primero pongo todos los iconos en (+)
        $('.faq__icon').text('+');
        
        // Si el que pinché estaba cerrado (va a abrirse), le pongo (-)
        if ($(this).hasClass('collapsed')) {
            $(this).find('.faq__icon').text('-');
        } else {
            $(this).find('.faq__icon').text('+');
        }
    });

    console.log("Yo cargué todas las secciones: Hero, Contacto, Diseños, Pasos, Precios y FAQ.");
});