$(function () {

    // carga Paso 2
    $(".continuar-bloqueo1").click(function () {
        $("#tab-5").load("bloqueo-tarjeta-paso2.html", function () {

            // carga Paso 3
            $(".continuar-bloqueo2").click(function () {
                $("#tab-5").load("bloqueo-tarjeta-paso3.html", function () {
                    $("html, body").animate({ scrollTop: 0 }, "slow");
                    return false;
                });
            });

            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
    });



})