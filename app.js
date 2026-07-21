/*
MI LÓGICA DE PENSAMIENTO ANTES DE PROGRAMAR:
1. Esperar la carga: Yo me aseguro de que el computador cargue por completo el sitio antes de registrar clics o gatillar alguna acción en la pantalla.
2. Registrar eventos de interacción: Yo escucho cuando el usuario presiona el botón de redirección de WhatsApp, el botón del Hero, interactúa con cada uno de los tres libros cliqueables de la sección Diseños Inspiradores, abre las condiciones del Flujo de Trabajo o cotiza uno de los planes de Precios.
3. Desplazamiento Suave (Scroll): Cuando el usuario pincha el botón del Hero "Ver opciones disponibles", yo calculo la altura donde comienza la sección de Precios en el computador y muevo el scroll de manera fluida y suave hasta allá.
4. Informar estado: Yo dejo una traza ordenada en la consola indicando exactamente cuál elemento interactivo fue pinchado en la pantalla.
*/

$(document).ready(function() {
    
    // Yo escucho el clic en el botón de WhatsApp para dejar un registro rápido
    $('.contact-bar__whatsapp').on('click', function() {
        console.log("Yo registré un clic en el botón de contacto de WhatsApp.");
    });

    // Yo escucho el clic en el botón del Hero para desplazar de forma suave la pantalla hasta la sección de Precios
    $('.hero__button').on('click', function(e) {
        // Yo prevengo cualquier comportamiento por defecto que pueda tener el botón
        e.preventDefault();
        
        // Yo calculo la posición de la sección Precios y animo el scroll de la página de forma fluida
        $('html, body').animate({
            scrollTop: $('#precios').offset().top
        }, 800); // Yo definí una duración de 800 milisegundos para que el viaje sea suave y elegante
        
        console.log("Yo desplacé la pantalla suavemente hasta la sección de Precios.");
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

    // Yo escucho el clic en el enlace de condiciones del flujo de trabajo
    $('.flujo-trabajo__link').on('click', function(e) {
        if ($(this).attr('href') === '#') {
            e.preventDefault();
        }
        console.log("Yo registré un clic en el enlace de detalles y condiciones de trabajo.");
    });

    // Yo escucho el clic en los botones de cotización de la sección Precios
    $('.precios__button').on('click', function(e) {
        if ($(this).attr('href') === '#') {
            e.preventDefault();
        }
        var planCotizado = $(this).siblings('.precios__plan-title').text();
        console.log("Yo registré un clic para cotizar el plan: " + planCotizado);
    });

    // Yo escucho el clic en los enlaces de previsualización de anuario de la sección Precios
    $('.precios__preview-link').on('click', function(e) {
        if ($(this).attr('href') === '#') {
            e.preventDefault();
        }
        var planPrevisualizado = $(this).closest('.precios__column').find('.precios__plan-title').text();
        console.log("Yo registré un clic para previsualizar el formato del plan: " + planPrevisualizado);
    });

    // Yo escucho el clic en el botón de cotización inferior de la sección FAQ
    $('.faq__button').on('click', function(e) {
        if ($(this).attr('href') === '#') {
            e.preventDefault();
        }
        console.log("Yo registré un clic en el botón de contacto de la sección Preguntas Frecuentes.");
    });

    // Yo escucho el evento nativo de apertura de Bootstrap para cambiar el signo a (-) de forma automática
    $('.faq__item').on('show.bs.collapse', function() {
        $(this).find('.faq__icon').text('-');
    });

    // Yo escucho el evento nativo de cierre de Bootstrap para cambiar el signo a (+) de forma automática
    $('.faq__item').on('hide.bs.collapse', function() {
        $(this).find('.faq__icon').text('+');
    });

    console.log("Yo cargué todas las secciones: Hero, Barra de Contacto, Diseños Inspiradores, Flujo de Trabajo, Precios y FAQ.");
});