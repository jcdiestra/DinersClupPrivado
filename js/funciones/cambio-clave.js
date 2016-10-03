$(function () {

    // carga Paso 2
    $(".continuar-cambio1").click(function () {
        $("#tab-4").load("cambio-clave-paso2.html", function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
    });




    //TECLADO 1
    $(".teclado1").on("click", function () {
        if ($(window).width() <= 1024) {

        } else {
            $(".container-teclado").addClass("contenido-teclado-visible");
            $(".teclado-visible-input").addClass("fondo__clave");
            showKeyboard($('#keyboard'));

            //Ocultar los otros teclados
            $(".container-teclado2").removeClass("contenido-teclado-visible");
            $(".teclado-visible-input2").removeClass("fondo__clave");
            $(".container-teclado3").removeClass("contenido-teclado-visible");
            $(".teclado-visible-input3").removeClass("fondo__clave");
        }
    });

    $(".vista2").on("click", function () {
        $(".teclado1").attr('type', 'text');
        $(".vista2").addClass("on");
        $(".vista1").removeClass("on");

        setTimeout(function () {
            $(".teclado1").attr('type', 'password');
            $(".vista2").removeClass("on");
            $(".vista1").addClass("on");
        }, 3000);
    });


    //TECLADO 2
    $(".teclado2").on("click", function () {
        if ($(window).width() <= 1024) {

        } else {
            $(".container-teclado2").addClass("contenido-teclado-visible");
            $(".teclado-visible-input2").addClass("fondo__clave");
            showKeyboard($('#keyboard2'));

            //Ocultar los otros teclados
            $(".container-teclado").removeClass("contenido-teclado-visible");
            $(".teclado-visible-input").removeClass("fondo__clave");
            $(".container-teclado3").removeClass("contenido-teclado-visible");
            $(".teclado-visible-input3").removeClass("fondo__clave");
        }
    });

    $(".vista4").on("click", function () {
        $(".teclado2").attr('type', 'text');
        $(".vista4").addClass("on");
        $(".vista3").removeClass("on");

        setTimeout(function () {
            $(".teclado2").attr('type', 'password');
            $(".vista4").removeClass("on");
            $(".vista3").addClass("on");
        }, 3000);
    });

    //TECLADO 3
    $(".teclado3").on("click", function () {
        if ($(window).width() <= 1024) {

        } else {
            $(".container-teclado3").addClass("contenido-teclado-visible");
            $(".teclado-visible-input3").addClass("fondo__clave");
            showKeyboard($('#keyboard3'));

            //Ocultar los otros teclados
            $(".container-teclado").removeClass("contenido-teclado-visible");
            $(".teclado-visible-input").removeClass("fondo__clave");
            $(".container-teclado2").removeClass("contenido-teclado-visible");
            $(".teclado-visible-input2").removeClass("fondo__clave");
        }
    });

    $(".vista6").on("click", function () {
        $(".teclado3").attr('type', 'text');
        $(".vista6").addClass("on");
        $(".vista5").removeClass("on");

        setTimeout(function () {
            $(".teclado3").attr('type', 'password');
            $(".vista6").removeClass("on");
            $(".vista5").addClass("on");
        }, 3000);
    });



    $(".teclado3").keyup(function () {
        if ($(".teclado2").val() === $(".teclado3").val() && $(".teclado1").val().length >= 6) {
            $(".container-teclado3").removeClass("contenido-teclado-visible");
            $(".teclado-visible-input3").removeClass("fondo__clave");
            $(".chk-validado").removeClass("on");
            $(".continuar-cambio2").addClass("on");
            $(".continuar-cambio1").removeClass("on");
        }
        else {
            $(".chk-validado").addClass("on");
            $(".continuar-cambio1").addClass("on");
            $(".continuar-cambio2").removeClass("on");

        }
    });


})