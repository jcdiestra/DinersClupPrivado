$(function () {

    // PASOS AMPLIACION
    function cargaAmpliacion(){
        $("#tab-1").load("solicitud-ampliacion-credito.html", function () {
            $(".formValido").validate();
            $('[data-toggle="tooltip"]').tooltip();
            $('select').material_select();

            $(".continuar").click(function () {
                if ($(".formValido").valid()) {
                    // carga Paso 2
                    $("#tab-1").load("solicitud-ampliacion-credito-paso2.html", function () {

                        $(".btn-azul-modal").click(function () {
                            $(".btn-azul-terminos").hide();
                            $(".btn-celeste").fadeIn("fast");
                        });

                        // carga Paso 3
                        $(".btn-celeste").click(function () {
                            $("#tab-1").load("solicitud-ampliacion-credito-paso3.html", function () {
                                $("html, body").animate({ scrollTop: 0 }, "slow");
                                return false;
                            });
                        });
                        $(".lnk-volver").click(function () {
                            $("#tab-1").load("solicitud-ampliacion-credito.html");
                        });
                        $("html, body").animate({ scrollTop: 0 }, "slow");
                        return false;
                    });
                }
            });
        });
    }

    cargaAmpliacion();
    $(".ampliacion").click(cargaAmpliacion);

    // PASOS AMPLIACION
    function cargaCargo(){
        $("#tab-2").load("solicitud-cargo-automatico.html", function () {
            $(".formValido").validate();
            $('[data-toggle="tooltip"]').tooltip();
            $('select').material_select();

            $(".continuar").click(function () {
                if ($(".formValido").valid()) {
                    // carga Paso 2
                    $("#tab-2").load("solicitud-cargo-automatico-paso2.html", function () {

                        $(".btn-azul-modal").click(function () {
                            $(".btn-azul-terminos").hide();
                            $(".btn-celeste").fadeIn("fast");
                        });

                        // carga Paso 3
                        $(".btn-celeste").click(function () {
                            $("#tab-2").load("solicitud-cargo-automatico-paso3.html", function () {
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

    cargaCargo();
    $(".cargoautomatico").click(cargaCargo);    

    // PASOS AMPLIACION
    function cargaDebito(){
        $("#tab-3").load("solicitud-debito-automatico.html", function () {
            $(".formValido").validate();
            $('[data-toggle="tooltip"]').tooltip();
            $('select').material_select();

            $(".continuar").click(function () {
                if ($(".formValido").valid()) {
                    // carga Paso 2
                    $("#tab-3").load("solicitud-debito-automatico-paso2.html", function () {

                        $(".btn-azul-modal").click(function () {
                            $(".btn-azul-terminos").hide();
                            $(".btn-celeste").fadeIn("fast");
                        });

                        // carga Paso 3
                        $(".btn-celeste").click(function () {
                            $("#tab-3").load("solicitud-debito-automatico-paso3.html", function () {
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

    cargaDebito();
    $(".debitoautomatico").click(cargaDebito);


    // PASOS AMPLIACION
    function cargaTarjeta(){
        $("#tab-4").load("solicitud-tarjeta-adicional.html", function () {
            $(".formValido").validate();
            $('[data-toggle="tooltip"]').tooltip();
            $('select').material_select();

            $(".continuar").click(function () {
                if ($(".formValido").valid()) {
                    // carga Paso 2
                    $("#tab-4").load("solicitud-tarjeta-adicional-paso2.html", function () {

                        $(".btn-azul-modal").click(function () {
                            $(".btn-azul-terminos").hide();
                            $(".btn-celeste").fadeIn("fast");
                        });

                        // carga Paso 3
                        $(".btn-celeste").click(function () {
                            $("#tab-4").load("solicitud-tarjeta-adicional-paso3.html", function () {
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

    cargaTarjeta();
    $(".tarjetasadicionales").click(cargaTarjeta);


})