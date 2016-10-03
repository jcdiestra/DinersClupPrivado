$(function () {

    // PASOS MI PERFIL
    function cargaMiPerfil(){
        $("#tab-1").load("mis-datos-paso1.html", function () {
            $(".formValido").validate();
            $('[data-toggle="tooltip"]').tooltip();
            $('select').material_select();

            $(".continuar").click(function () {
                if ($(".formValido").valid()) {
                    // carga Paso 2
                    $("#tab-1").load("mis-datos-paso2.html", function () {

                        $(".btn-azul-modal").click(function () {
                            $(".btn-azul-terminos").hide();
                            $(".btn-celeste").fadeIn("fast");
                        });

                        // carga Paso 3
                        $(".btn-celeste").click(function () {
                            $("#tab-1").load("mis-datos-paso3.html", function () {
                                $("html, body").animate({ scrollTop: 0 }, "slow");
                                return false;
                            });
                        });

                        $("html, body").animate({ scrollTop: 0 }, "slow");
                        return false;
                    });
                }
            });
        });
    }

    cargaMiPerfil();
    $(".misDatos").click(cargaMiPerfil);
    
})