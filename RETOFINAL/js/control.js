/**
 * Instruciones JQUERY de la pagina control de la aplicacion
 * @author Grupo de Iker, Ramon y David
 * @version 1.0 06/10/2017
 *
 */

/**
 * Eventos - FOCUS y CLICK de JQUERY para animar los select
 * Cuando se hace focus sobre el select se cambia el color de fondo y el de la letra,
 * al pulsar el input vuelven a su estado inicial.
 *
 */

$(document).ready(function () {

    $("#posicion").focus(function () {
        $(this).css("background-color", "#248BC5");

    });

    $("#velocidad").focus(function () {
        $(this).css("background-color", "#248BC5");

    });

    $("input").click(function () {
        $("select").css("background-color", "#989793");

    });

    /**
     * Evento - ON de JQUERY para obtener el valor de los select y asignarselo a
     * las variables.
     *
     * Eventos - CLICK, ANIMATE y ATTR de JQUERY para animar el tren y el ciclo
     * Al pulsar el input despues de haber seleccionado las opciones deseadas,
     * la nimacion del tren se desplazara a una posicion u otra.
     *
     * @param valor- recoge el punto de inerrupcion de la animacion
     * @param velo- recoge la velocidad de la animacion
     *
     * Control de velocidades: Recoge el select de velocidad y con una animación lo visualiza.
     */
    var valor;
    var velo;


    $('select#posicion').on('change', function () {
        valor = $(this).val()
    });

    $('select#velocidad').on('change', function () {
        velo = $(this).val()
    });

    $("#arranca").click(function () {
        $('#on').addClass("tair");
        $('#on2').addClass("tair");
        $('#on').toggle();
        $('#on2').toggle();
        $("#roja").resetKeyframe();

        if (valor == "base") {
            $("#fondo").animate({left: "0px"}, "slow");
            $("#tranvia").animate({left: "-200px"}, "slow");
            $("#nubes").animate({left: "0px"}, "slow");
            $("#ciudad").animate({left: "0px"}, "slow");
            $("#hierba").animate({left: "0px"}, "slow");
            $("#batalla").animate({left: "1000px"}, "slow");
            $("#parada").animate({left: "950px"}, "slow");

            $('#arriaga').attr({'value': 'true'});
            $('#europa').attr({'value': 'false'});
            $('#angulema').attr({'value': 'false'});

        }
        if (valor == "medio") {
            $("#fondo").animate({left: "-270px"}, "slow");
            $("#tranvia").animate({left: "200px"}, "slow");
            $("#nubes").animate({left: "-200px"}, "slow");
            $("#ciudad").animate({left: "-500px"}, "slow");
            $("#hierba").animate({left: "-250px"}, "slow");
            $("#batalla").animate({left: "500px"}, "slow");
            $("#parada").animate({left: "450px"}, "slow");

            $('#arriaga').attr({'value': 'false'});
            $('#europa').attr({'value': 'true'});
            $('#angulema').attr({'value': 'false'});
        }
        if (valor == "fin") {
            $("#fondo").animate({left: "-450px"}, "slow");
            $("#tranvia").animate({left: "1200px"}, "slow");
            $("#nubes").animate({left: "-450px"}, "slow");
            $("#ciudad").animate({left: "-760px"}, "slow");
            $("#hierba").animate({left: "-450px"}, "slow");
            $("#batalla").animate({left: "100px"}, "slow");
            $("#parada").animate({left: "50px"}, "slow");

            $('#arriaga').attr({'value': 'false'});
            $('#europa').attr({'value': 'false'});
            $('#angulema').attr({'value': 'true'});
        }


  if(velo=="lento"){
        $.keyframe.define([{
            name: 'bajo',
            '0%': {'transform': 'translateY(-5px)'},
            '100%': {'transform': 'translateY(-30px)'}
        }]);
        $("#roja").playKeyframe({
            name: 'bajo',
            duration: '1s',
            timingFunction: 'linear',
            delay: '0s',

            direction: 'normal',
            fillMode: 'forwards',

        });

    }
    if(velo=="media"){

        $.keyframe.define([{
            name: 'media',
            '0%': {'transform': 'translateY(10px)'},
            '100%': {'transform': 'translateY(-170px)'}
        }]);
        $("#roja").playKeyframe({
            name: 'media',
            duration: '1s',
            timingFunction: 'linear',
            delay: '0s',

            direction: 'normal',
            fillMode: 'forwards',


        });

    }
    if(velo=="alta"){

        $.keyframe.define([{
            name: 'alta',
            '0%': {'transform': 'translateY(10px)'},
            '100%': {'transform': 'translateY(-300px)'}
        }]);
        $("#roja").playKeyframe({
            name: 'alta',
            duration: '1s',
            timingFunction: 'linear',
            delay: '0s',

            direction: 'normal',
            fillMode: 'forwards',

        });}

    });


    /**
     * Funcion - POST() de JQUERY para editar las varibles en el automata
     *
     */

    $("#frm").on("submit", function (e) {

        e.preventDefault();//para no recargar pagina
        var frm = $(this).serialize(); //almacena todos los datos
        $.ajax({
            type: 'POST',
            url: 'http://10.0.2.100/awp/pruebas/paginas/control.html',
            data: frm
        })
        return false;
    });

});

/**
 * Funcion - GET() de JQUERY para recoger las varibles del automata
 *
 */

$.ajaxSetup({cache: false});
setInterval(function () {

    $.get("server.html", function (result) {

//Muestra en el elemento con id velo la variable actualizada recogida del automata
        document.getElementById("velo").text(result["velocidad_actual"]);
    });
}, 500);      

/**
 * Funcion - objetoajax() de JQUERY para comprobar si el navegador
 * soporta que se esta usando AJAX.
 *
 */

function objetoajax() {

    // The XMLHttpRequest object

    var xmlHttp;
    try {
        xmlHttp = new XMLHttpRequest(); // Firefox, Opera 8.0+, Safari
    }
    catch (e) {
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP"); // Internet Explorer
        }
        catch (e) {
            try {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
                alert("Tu explorador no soporta AJAX.");
                return false;
            }
        }
    }
}

