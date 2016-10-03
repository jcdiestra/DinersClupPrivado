$(document).ready(function () {

    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('indicator');
        $('.tab-content').removeClass('current');

        $(this).addClass('indicator');
        $("#" + tab_id).addClass('current');
    })



    $(".buscar_movimientos").on("click", function () {
        $(".container_filtros_tabs_tabs").slideToggle();
        $(".tabs_enviar").hide();
    });

    //Popover
    $(".container_container_select").on("click", function () {
        $(".container_listado_dropdown").slideToggle();
    });

})

