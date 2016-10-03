$(function () {


    // PASOS BLOQUEO TARJETA
    function cargaBloqueoTarjeta(){
        $("#tab-1").load("bloqueo-tarjeta-paso1.html", function () {
            $('select').material_select();

            // carga Paso 2
            $(".continuar-bloqueo1").click(function () {
                $("#tab-1").load("bloqueo-tarjeta-paso2.html", function () {

                    // carga Paso 3
                    $(".continuar-bloqueo2").click(function () {
                        $("#tab-1").load("bloqueo-tarjeta-paso3.html", function () {
                            $("html, body").animate({ scrollTop: 0 }, "slow");
                            return false;
                        });
                    });

                    $("html, body").animate({ scrollTop: 0 }, "slow");
                    return false;
                });
            });
        });
    }

    cargaBloqueoTarjeta();
    $(".bloqueoTarjeta").click(cargaBloqueoTarjeta);

    // PASOS ALERTAS Y NOTIFICACIONES
    function cargaAlertas(){
        $("#tab-2").load("alertas-notificaciones-paso1.html", function () {
            $('select').material_select();
            $('.tooltipped').tooltip({delay: 50});

            //Control Calendario
            $('.fecha_nac-dp1, .fecha_nac-dp2').datepicker({
                orientation: "bottom auto",
                autoclose: true,
                language: "es",
                format: "dd/mm/yyyy"
            });


            $(".dp-fecha1").on("click", function () {
                $(".fecha_nac-dp1").datepicker("show");
            });

            $(".dp-fecha2").on("click", function () {
                $(".fecha_nac-dp2").datepicker("show");
            });

            function agregarEmail(){
                // Agregar email
                $(".alertas__agregar-email").click(function(){
                    $(".alertas__agregar-email-modal, .overlay-diners").fadeIn("fast")
                })

                // Editar email ingresado
                $(".alertas-table__edit").click(function(){
                    $(".alertas__agregar-email-title").html("Modificar email")
                    $(".alertas__agregar-email-modal, .overlay-diners").fadeIn("fast")
                })   

                // Click en overlay background
                $(".overlay-diners").click(function(){
                    $(this).fadeOut("fast");
                    $(".alertas__agregar-email-modal").fadeOut("fast")
                })

                // Clonar email ingresado en input a TD
                $(".alertas__agregar-email-input").keyup(function(){
                    var emailIngresado = $(this).val();
                    $(".alertas-table__adicional-email").html(emailIngresado);
                })

                // Click en Guardar email ingresado
                $(".alertas__agregar-email-btn").click(function(){
                    $(".alertas__agregar-email").hide();
                    $(".alertas__agregar-email, .overlay-diners, .alertas__agregar-email-modal").fadeOut("fast");
                    $(".alertas-table__adicional").removeClass("bloque");
                })

                // Click en Anular email ingresado
                $(".alertas__agregar-email-anular").click(function(){
                    $(".overlay-diners, .alertas__agregar-email-modal").fadeOut("fast");
                    $(".alertas-table__adicional").addClass("bloque");
                    $(".alertas__agregar-email").fadeIn("fast");
                    $(".alertas__agregar-email-input").val("");
                    $(".alertas__agregar-email-title").html("Agregar email")
                })

            }

            agregarEmail();




            function agregarTelefono(){
                // Agregar telefono
                $(".alertas__agregar-telefono").click(function(){
                    $(".alertas__agregar-telefono-modal, .overlay-diners").fadeIn("fast")
                })

                // Editar telefono ingresado
                $(".alertas-table__edit-telefono").click(function(){
                    $(".alertas__agregar-telefono-title").html("Modificar contacto")
                    $(".alertas__agregar-telefono-modal, .overlay-diners").fadeIn("fast")
                })   

                // Click en overlay background
                $(".overlay-diners").click(function(){
                    $(this).fadeOut("fast");
                    $(".alertas__agregar-telefono-modal").fadeOut("fast")
                })

                // Clonar telefono ingresado en input a TD
                $(".alertas__agregar-telefono-input").keyup(function(){
                    var telefonoIngresado = $(this).val();
                    $(".alertas-table__adicional-telefono").html(telefonoIngresado);
                })

                // Click en Guardar telefono ingresado
                $(".alertas__agregar-telefono-btn").click(function(){
                    $(".alertas__agregar-telefono").hide();
                    $(".alertas__agregar-telefono, .overlay-diners, .alertas__agregar-telefono-modal").fadeOut("fast");
                    $(".alertas-table__adicionalTelefono").removeClass("bloque");
                })

                // Click en Anular telefono ingresado
                $(".alertas__agregar-telefono-anular").click(function(){
                    $(".overlay-diners, .alertas__agregar-telefono-modal").fadeOut("fast");
                    $(".alertas-table__adicionalTelefono").addClass("bloque");
                    $(".alertas__agregar-telefono").fadeIn("fast");
                    $(".alertas__agregar-telefono-input").val("");
                    $(".alertas__agregar-telefono-title").html("Agregar contacto")
                })

            }

            agregarTelefono();


            // carga Paso 2
            $(".continuar").click(function () {
                $("#tab-2").load("alertas-notificaciones-paso2.html", function () {

                    $(".btn-azul-modal").click(function () {
                        $(".btn-azul-terminos").hide();
                        $(".btn-celeste").fadeIn("fast");
                    });

                    // carga Paso 3
                    $(".btn-celeste").click(function () {
                        $("#tab-2").load("alertas-notificaciones-paso3.html", function () {
                            $("html, body").animate({ scrollTop: 0 }, "slow");
                            return false;
                        });
                    });

                    $("html, body").animate({ scrollTop: 0 }, "slow");
                    return false;
                });
            });
        });
    }

    cargaAlertas();
    $(".alertasNotificaiones").click(cargaAlertas);  

   // PASOS CAMBIO CALVE DIGITAL
    function cargaCambioClave(){
        $("#tab-3").load("cambio-clave-paso1.html", function () {
            

            // carga Paso 2
            $(".continuar-cambio1").click(function () {
                $("#tab-3").load("cambio-clave-paso2.html", function () {
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
        


            var $write = $('.write'),
                shift = false,
                capslock = false;

            showKeyboardNumber = function ($keyboard) {
                $keyboard.empty();
                var classes = {
                    1: 'border-left', 2: '', 3: 'border-right', 4: 'border-left',
                    5: 'border-left', 6: '', 7: 'border-right', 8: 'border-left',
                    9: 'border-right', 0: ''
                };

                var num = parseInt(Math.floor((Math.random() * 9) + 0));
                keys = "";
                for (var i = 0; i <= 9; i++) {
                    var borderClass = classes[i];
                    $keyboard.append('<li class="symbol"><span class="off ' + borderClass + '">' + num + '</span></li>');
                    num = (num >= 9) ? 0 : (num + 1);
                }
                $keyboard.append('<li class="delete lastitem border-borrar"><i class="icon-borrar"></i><p>BORRAR</p></li>');
            };

            showKeyboard = function ($keyboard) {
                $keyboard.find('[data-number]').remove();
                var classes = {
                    1: 'border-left', 2: '', 3: 'border-right', 4: 'border-left',
                    5: 'border-left', 6: '', 7: 'border-right', 8: 'border-left',
                    9: 'border-right', 0: ''
                };

                var num = parseInt(Math.floor((Math.random() * 9) + 0));

                keys = "";
                for (var i = 0; i <= 9; i++) {
                    var borderClass = classes[i];
                    $keyboard.prepend('<li class="symbol" data-number><span class="off ' + borderClass + '">' + num + '</span></li>');
                    num = (num >= 9) ? 0 : (num + 1);
                }
                $('.letter').toggleClass('uppercase');
            };


            $('body').on('click', '#keyboard li', function () {
                var $this = $(this),
                    character = $this.html(); // If it's a lowercase letter, nothing happens to this variable

                // Shift keys
                if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
                    $('.letter').toggleClass('uppercase');
                    $('.symbol span').toggle();

                    shift = (shift === true) ? false : true;
                    capslock = false;
                    return false;
                }

                // Caps lock
                if ($this.hasClass('capslock')) {
                    $('.letter').toggleClass('uppercase');
                    capslock = true;
                    return false;
                }

                // Delete
                if ($this.hasClass('delete')) {
                    var html = $write.val();

                    $write.val(html.substr(0, html.length - 1));
                    value = html.substr(0, html.length - 1);

                    return false;
                }

                // Special characters
                if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
                if ($this.hasClass('space')) character = ' ';
                if ($this.hasClass('tab')) character = "\t";
                if ($this.hasClass('return')) character = "\n";

                // Uppercase letter        
                if ($this.hasClass('uppercase')) character = character.toUpperCase();

                // Remove shift once a key is clicked.
                if (shift === true) {
                    $('.symbol span').toggle();
                    if (capslock === false) $('.letter').toggleClass('uppercase');

                    shift = false;
                }

                if ($write.val().length < $write.attr('maxlength')) {
                    $write.val($write.val() + character);
                    if ($write.val().length == $write.attr('maxlength')) {
                        $write.trigger('keyup');
                    }
                }
            });

            function getCode(character) {
                codes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
                return codes[character];
            };



            //Teclado2
            
            var $write2 = $('.write2'),
                shift = false,
                capslock = false;

            showKeyboardNumber = function ($keyboard) {
                $keyboard.empty();
                var classes = {
                    1: 'border-left', 2: '', 3: 'border-right', 4: 'border-left',
                    5: 'border-left', 6: '', 7: 'border-right', 8: 'border-left',
                    9: 'border-right', 0: ''
                };

                var num = parseInt(Math.floor((Math.random() * 9) + 0));
                keys = "";
                for (var i = 0; i <= 9; i++) {
                    var borderClass = classes[i];
                    $keyboard.append('<li class="symbol"><span class="off ' + borderClass + '">' + num + '</span></li>');
                    num = (num >= 9) ? 0 : (num + 1);
                }
                $keyboard.append('<li class="delete lastitem border-borrar"><i class="icon-borrar"></i><p>BORRAR</p></li>');
            };

            showKeyboard = function ($keyboard) {
                $keyboard.find('[data-number]').remove();
                var classes = {
                    1: 'border-left', 2: '', 3: 'border-right', 4: 'border-left',
                    5: 'border-left', 6: '', 7: 'border-right', 8: 'border-left',
                    9: 'border-right', 0: ''
                };

                var num = parseInt(Math.floor((Math.random() * 9) + 0));

                keys = "";
                for (var i = 0; i <= 9; i++) {
                    var borderClass = classes[i];
                    $keyboard.prepend('<li class="symbol" data-number><span class="off ' + borderClass + '">' + num + '</span></li>');
                    num = (num >= 9) ? 0 : (num + 1);
                }
                $('.letter').toggleClass('uppercase');
            };

            $('body').on('click', '#keyboard2 li', function () {
                var $this = $(this),
                    character = $this.html(); // If it's a lowercase letter, nothing happens to this variable

                // Shift keys
                if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
                    $('.letter').toggleClass('uppercase');
                    $('.symbol span').toggle();

                    shift = (shift === true) ? false : true;
                    capslock = false;
                    return false;
                }

                // Caps lock
                if ($this.hasClass('capslock')) {
                    $('.letter').toggleClass('uppercase');
                    capslock = true;
                    return false;
                }

                // Delete
                if ($this.hasClass('delete')) {
                    var html = $write.val();

                    $write2.val(html.substr(0, html.length - 1));
                    value = html.substr(0, html.length - 1);

                    /*if (value.length == 0) {
                        $(".exito-pass").hide();
                        $(".disabled-btn-continuar").show();
                    }*/

                    return false;
                }

                // Special characters
                if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
                if ($this.hasClass('space')) character = ' ';
                if ($this.hasClass('tab')) character = "\t";
                if ($this.hasClass('return')) character = "\n";

                // Uppercase letter        
                if ($this.hasClass('uppercase')) character = character.toUpperCase();

                // Remove shift once a key is clicked.
                if (shift === true) {
                    $('.symbol span').toggle();
                    if (capslock === false) $('.letter').toggleClass('uppercase');

                    shift = false;
                }

                if ($write2.val().length < $write2.attr('maxlength')) {
                    $write2.val($write2.val() + character);
                    if ($write2.val().length == $write2.attr('maxlength')) {
                        $write2.trigger('keyup');
                    }
                }
            });

            function getCode(character) {
                codes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
                return codes[character];
            };


            //Teclado3
            var $write3 = $('.write3'),
                shift = false,
                capslock = false;

            showKeyboardNumber = function ($keyboard) {
                $keyboard.empty();
                var classes = {
                    1: 'border-left', 2: '', 3: 'border-right', 4: 'border-left',
                    5: 'border-left', 6: '', 7: 'border-right', 8: 'border-left',
                    9: 'border-right', 0: ''
                };

                var num = parseInt(Math.floor((Math.random() * 9) + 0));
                keys = "";
                for (var i = 0; i <= 9; i++) {
                    var borderClass = classes[i];
                    $keyboard.append('<li class="symbol"><span class="off ' + borderClass + '">' + num + '</span></li>');
                    num = (num >= 9) ? 0 : (num + 1);
                }
                $keyboard.append('<li class="delete lastitem border-borrar"><i class="icon-borrar"></i><p>BORRAR</p></li>');
            };

            showKeyboard = function ($keyboard) {
                $keyboard.find('[data-number]').remove();
                var classes = {
                    1: 'border-left', 2: '', 3: 'border-right', 4: 'border-left',
                    5: 'border-left', 6: '', 7: 'border-right', 8: 'border-left',
                    9: 'border-right', 0: ''
                };

                var num = parseInt(Math.floor((Math.random() * 9) + 0));

                keys = "";
                for (var i = 0; i <= 9; i++) {
                    var borderClass = classes[i];
                    $keyboard.prepend('<li class="symbol" data-number><span class="off ' + borderClass + '">' + num + '</span></li>');
                    num = (num >= 9) ? 0 : (num + 1);
                }
                $('.letter').toggleClass('uppercase');
            };

            $('body').on('click', '#keyboard3 li', function () {
                var $this = $(this),
                    character = $this.html(); // If it's a lowercase letter, nothing happens to this variable

                // Shift keys
                if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
                    $('.letter').toggleClass('uppercase');
                    $('.symbol span').toggle();

                    shift = (shift === true) ? false : true;
                    capslock = false;
                    return false;
                }

                // Caps lock
                if ($this.hasClass('capslock')) {
                    $('.letter').toggleClass('uppercase');
                    capslock = true;
                    return false;
                }

                // Delete
                if ($this.hasClass('delete')) {
                    var html = $write3.val();

                    $write3.val(html.substr(0, html.length - 1));
                    value = html.substr(0, html.length - 1);

                    /*if (value.length == 0) {
                        $(".exito-pass").hide();
                        $(".disabled-btn-continuar").show();
                    }*/

                    return false;
                }

                // Special characters
                if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
                if ($this.hasClass('space')) character = ' ';
                if ($this.hasClass('tab')) character = "\t";
                if ($this.hasClass('return')) character = "\n";

                // Uppercase letter        
                if ($this.hasClass('uppercase')) character = character.toUpperCase();

                // Remove shift once a key is clicked.
                if (shift === true) {
                    $('.symbol span').toggle();
                    if (capslock === false) $('.letter').toggleClass('uppercase');

                    shift = false;
                }

                if ($write3.val().length < $write3.attr('maxlength')) {
                    $write3.val($write3.val() + character);
                    if ($write3.val().length == $write3.attr('maxlength')) {
                        $write3.trigger('keyup');
                    }
                }


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

            function getCode(character) {
                codes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
                return codes[character];
            };

        });

           
    }

    cargaCambioClave();
    $(".cambioclave").click(cargaCambioClave);



    // PASOS AMPLIACION
    function cargaReclamos(){
        $("#tab-4").load("reclamos.html", function () {
            $(".formValido").validate();
            $('[data-toggle="tooltip"]').tooltip();
            $('select').material_select();

            $(".continuar").click(function () {
                if ($(".formValido").valid()) {
                    // carga Paso 2
                    $("#tab-4").load("reclamos-paso2.html", function () {

                        $(".btn-azul-modal").click(function () {
                            $(".btn-azul-terminos").hide();
                            $(".btn-celeste").fadeIn("fast");
                        });

                        // carga Paso 3
                        $(".btn-celeste").click(function () {
                            $("#tab-4").load("reclamos-paso3.html", function () {
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

    cargaReclamos();
    $(".reclamos").click(cargaReclamos);


})