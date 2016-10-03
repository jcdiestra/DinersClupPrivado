

//Carga cabecera pagina

$(".header__include").load("header_plantilla.html", function () {

    //Funcion menu activo
    $("ul.menu__Open").find("li").click(function () {

        $("ul.menu__Open").find("li").removeClass('active__classMenu');
        $(this).addClass('active__classMenu');

    });

    $(".header__mobileHamburgerMenuContenedor").click(function () {
        $(".container__menu-mobile").toggleClass("menu-mobile--apear");
        $(".container_overlight").fadeIn();
        $("body").toggleClass("no-scroll");
    });

    $(".cerrar-menumobile").on("click", function () {
        $(".container__menu-mobile").toggleClass("menu-mobile--apear");
        $(".container_overlight").fadeOut();
        $("body").removeClass("no-scroll");
    });


    //Animación icono masMenos en menú mobile
    $(".menu-mobile__cat").click(function () {
        $(this)
            .find(".mas-menos")
            .toggleClass("sinAfter");

        $(this)
            .parent()
            .siblings()
            .find(".mas-menos")
            .removeClass("sinAfter");
    });

});

