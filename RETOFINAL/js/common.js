/**
 * Instruciones JQUERY comunes a todas las paginas de la aplicacion
 * @author Grupo de Iker, Ramon y David
 * @version 1.0 06/10/2017
 *
 */


/**
 * Evento - Click de JQUERY para controlar el nav
 * Comprueba si esta visible o no para mostrar o ocultar el nav
 *
 */

$(document).ready(function () {
    $("#btn_menu").click(function () {
        if ($("nav").is(":visible")) {
            $("nav").hide();
        } else {
            $("nav").show();
        }
    });
});