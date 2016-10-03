
function calendario(clase1,clase2){
    //Control Calendario
    $(clase1).datepicker({
        orientation: "bottom auto",
        autoclose: true,
        language: "es",
        format: "dd/mm/yyyy"
    });

    $(clase1).on("click", function () {
        //$(".fecha_nac-dp").datepicker("hide");
        $('.datepicker').fadeOut();
    });

    $(clase2).on("click", function () {
        $(clase1).datepicker("show");
    });

}

