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
        /*
MI LÓGICA DE PENSAMIENTO ANTES DE PROGRAMAR:
1. Esperar la carga: Yo me aseguro de que el computador cargue por completo el sitio antes de registrar clics o gatillar alguna acción en la pantalla.
2. Registrar eventos de interacción: Yo escucho cuando el usuario presiona el botón de redirección de WhatsApp, el botón del Hero o interactúa con cada uno de los tres libros cliqueables de la sección Diseños Inspiradores.
3. Informar estado: Yo dejo una traza ordenada en la consola indicando exactamente cuál libro fue pinchado en la pantalla.
*/

$(document).ready(function() {
    
    // Yo escucho el clic en el botón de WhatsApp para dejar un registro rápido
    $('.contact-bar__whatsapp').on('click', function() {
        console.log("Yo registré un clic en el botón de contacto de WhatsApp.");
    });

    // Yo escucho el clic en el botón del Hero para comprobar la interacción
    $('.hero__button').on('click', function() {
        console.log("Yo registré un clic en el botón principal del Hero.");
    });

    // Yo escucho el clic en cada enlace de libro para detectar cuál de los tres fue pinchado
    $('.designs-inspiradores__book-link').on('click', function(e) {
        // Yo prevengo el salto de página si el enlace apunta únicamente a "#"
        if ($(this).attr('href') === '#') {
            e.preventDefault();
        }
        
        // Yo extraigo la ruta de la imagen interna para saber exactamente qué libro se pinchó
        var libroPinchado = $(this).find('img').attr('src');
        console.log("Yo detecté un clic en el libro interactivo con la ruta: " + libroPinchado);
    });

    console.log("Yo cargué todas las secciones: Hero, Barra de Contacto y Diseños Inspiradores con tres libros enlazados.");
});
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