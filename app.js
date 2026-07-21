/*
MI LÓGICA DE PENSAMIENTO ANTES DE PROGRAMAR:
1. Esperar la carga: Yo me aseguro de que el computador cargue por completo el sitio antes de registrar clics o gatillar alguna acción en la pantalla.
2. Registrar eventos de interacción: Yo escucho cuando el usuario presiona el botón de redirección de WhatsApp, el botón del Hero, interactúa con cada uno de los tres libros cliqueables de la sección Diseños Inspiradores o abre las condiciones del Flujo de Trabajo.
3. Informar estado: Yo dejo una traza ordenada en la consola indicando exactamente cuál elemento interactivo fue pinchado en la pantalla.
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

    // Yo escucho el clic en el enlace de condiciones del flujo de trabajo
    $('.flujo-trabajo__link').on('click', function(e) {
        if ($(this).attr('href') === '#') {
            e.preventDefault();
        }
        console.log("Yo registré un clic en el enlace de detalles y condiciones de trabajo.");
    });

    console.log("Yo cargué todas las secciones: Hero, Barra de Contacto, Diseños Inspiradores y Flujo de Trabajo.");
});