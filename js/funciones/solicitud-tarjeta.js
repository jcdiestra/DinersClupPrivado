$(function(){
	
	// $(".formValido").validate();
	
	$(".continuar").click(function () {
	 	 //if ($(".formValido").valid()) {
	 		// carga Paso 2
	 		$("#tab-1").load("solicitud-tarjeta-adicional-paso2.html", function(){

	 			$(".btn-azul-modal").click(function() {
	 				$(".btn-azul-terminos").hide();	
	 				$(".btn-celeste").fadeIn("fast");	
	 			});

	 			// carga Paso 3
	 			$(".btn-celeste").click(function() {
	 			    $("#tab-1").load("solicitud-tarjeta-adicional-paso3.html", function () {
	 					$("html, body").animate({ scrollTop: 0 }, "slow");
	 			  		return false;
	 				});	
	 			});	
	 			$(".lnk-volver").click(function () {
	 			    $("#tab-1").load("solicitud-tarjeta-adicional.html");
	 			});
	 			$("html, body").animate({ scrollTop: 0 }, "slow");
	 			  return false;
	 		});
		 //}
	});

})



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

