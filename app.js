/*
MI LÓGICA DE PENSAMIENTO ANTES DE PROGRAMAR:
1. Esperar la carga: Yo me quedo atento a que el computador cargue por completo el sitio antes de activar cualquier interacción.
2. Registrar el clic: Yo escucho cuando el usuario presiona el encabezado de alguna pregunta frecuente (clase .faq__header).
3. Resetear los iconos: Yo me aseguro de que, al hacer clic, todos los signos de las preguntas vuelvan a estar en (+) para evitar que queden iconos cruzados.
4. Evaluar el estado: Yo reviso si el botón que el usuario acaba de pinchar tenía la clase 'collapsed'. Si la tenía, significa que el bloque estaba cerrado y se va a abrir, por lo que yo le cambio el icono a (-).
5. Prevenir comportamientos: Si el bloque ya estaba abierto y el usuario lo vuelve a pinchar para cerrarlo, yo me aseguro de que el icono regrese a (+).
*/

$(document).ready(function() {
    
    // Yo escucho el clic en la cabecera de las preguntas para cambiar los signos
    $('.faq__header').on('click', function() {
        
        // Primero pongo todos los iconos de las preguntas en (+)
        $('.faq__icon').text('+');
        
        // Yo evalúo si el botón seleccionado estaba cerrado (es decir, tiene la clase 'collapsed')
        if ($(this).hasClass('collapsed')) {
            // Como se va a abrir, yo le cambio el texto de su icono a (-)
            $(this).find('.faq__icon').text('-');
        } else {
            // Si ya estaba abierto y lo cierran, yo lo dejo de nuevo en (+)
            $(this).find('.faq__icon').text('+');
        }
    });

    console.log("Yo cargué todas las secciones: Hero, Contacto, Diseños, Pasos, Precios y FAQ.");
});