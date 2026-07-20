/*
LÓGICA DE PENSAMIENTO (PSEUDOCÓDIGO):
1. Esperar: Yo espero a que el computador cargue todo el contenido del sitio.
2. Interacción de FAQ: Cuando el usuario le hace clic a una pregunta de la lista.
3. Mostrar/Ocultar: Yo busco la respuesta correspondiente y la despliego, mientras cambio el símbolo de + a - para que sepa que está abierto.
4. Botón de contacto: Si el usuario presiona cualquier botón de "Conversa con un ejecutivo", yo mando un aviso a la consola para registrar el interés.
*/

$(document).ready(function() {

    // Yo manejo el cambio de iconos en el acordeón de preguntas
    $('.faq-item__header').on('click', function() {
        // Busco el span que tiene el signo + o -
        let icon = $(this).find('span');
        
        // Yo cambio el texto dependiendo de si está abierto o cerrado
        if ($(this).hasClass('collapsed')) {
            icon.text('+');
        } else {
            icon.text('-');
        }
    });

    // Yo registro cuando alguien quiere conversar con un ejecutivo
    $('.btn').on('click', function() {
        console.log('Yo detecté que un cliente quiere conversar con un ejecutivo. ¡A darle con todo!');
    });

});